import React from 'react'
import Header from '@/components/Header';
import Image from "next/image";
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '@/slices/basketSlice';
import CheckoutProduct from '@/components/CheckoutProduct';
import Currency from "react-currency-formatter";
import { useSession } from 'next-auth/react';

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession()
  return (
    <div className="bg-marketplace-light">
        <Header/>
        <main className="lg:flex max-w-screen-2xl mx-auto">
            {/* left */}
            <div className="flex-grow m-5 shadow-sm">
                <Image
                src="https://links.papareact.com/dyz"
                width={1020}
                height={250}
                objectFit={"contain"}
                />
                <div className="flex flex-col p-5 space-y-10 bg-white mt-3">
                    <h1 className="text-3xl border-b border-marketplace pb-4 text-center">
                      {items.length===0 ? "Your Market Basket is empty" : "Your Shopping Basket"}
                    </h1>
                    {items.map((item, index) => (
                      <CheckoutProduct 
                        key={index}
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        description={item.description}
                        cateogry={item.category}
                        image={item.image}
                      />
                    ))}
                </div>
            </div>
            {/* right */}
            <div className="flex flex-col bg-white p-10 shadow-md lg:mr-5 lg:my-5">
                {items.length > 0 && (
                  <>
                    <h2 className="whitespace-nowrap">Subtotal ({items.length} items):{' '}
                    <span className="font-bold">
                      <Currency quantity={total}/>
                    </span>

                    </h2>
                    <button role="link" disabled={!session} className={`mt-2 ${!session ? `blocked` : `clicked`}`}>
                      {!session ? "Sign in to checkout": "Proceed to checkout"}
                    </button>
                  </>
                )}
            </div>

        </main>
    </div>
  )
}

export default Checkout