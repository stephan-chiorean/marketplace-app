import React from 'react';
import Header from '@/components/Header';
import { getSession, useSession } from 'next-auth/react';
import db from '../../firebase';
import { getFirestore, collection, doc, query, orderBy, getDocs } from '@firebase/firestore';
import moment from "moment";
//prefetch orders with server side rendering for no lag
//befoer they hit a page, they make a request it hits the server first and we can get a bunch of information beforehand and render the page, by the time the user sees the page it is fully rendered with the information
function Orders({ orders }) {
    console.log("DOES THIS PRINT", orders)
  const { data: session } = useSession();
  return (
    <div>
      <Header />
      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-marketplace'>
          Your Orders
        </h1>
        {session ? (
          <h2>x Orders</h2>
        ) : (
          <h2>Please sign in to see your orders.</h2>
        )}
        <div className='mt-5 space-y-4'></div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  //get users logged in credentials

  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }
  //firebase db
  // Get a reference to the orders collection
const ordersCollectionRef = collection(db, 'users', session.user.email, 'orders');

// Create a query that orders the documents by timestamp in descending order
const ordersQuery = query(ordersCollectionRef, orderBy('timestamp', 'desc'));

// Execute the query and get the results
const stripeOrders = await getDocs(ordersQuery);
//   const stripeOrders = await db
//     .collection('users')
//     .doc(session.user.email)
//     .collection('orders')
//     .orderBy('timestamp', 'desc')
//     .get();

  //
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: excludeDefaultMomentLocales(
        order.data().timestamp.toDate()
      ).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  return {
    props: {
        orders,
    }
  }
}
