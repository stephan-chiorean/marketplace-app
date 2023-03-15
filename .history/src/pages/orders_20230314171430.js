import React from 'react';
import Header from '@/components/Header';
import { useSession } from 'next-auth/react';
//prefetch orders with server side rendering for no lag
function Orders({orders}) {
    const {data:session} = useSession();
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-marketplace">Your Orders</h1>
        {session ? (
            <h2>x Orders</h2>
        ) : (
            <h2>Please sign in to see your orders.</h2>
        )}
        <div className="mt-5 space-y-4"></div>
      </main>
    </div>
  );
}

export default Orders;
