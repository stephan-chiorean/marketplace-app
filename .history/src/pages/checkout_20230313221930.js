import React from 'react'
import Header from '@/components/Header';
import Image from "next/image";
import { useSelector } from 'react-redux';
import { selectItems } from '@/slices/basketSlice';
import CheckoutProduct from '@/components/CheckoutProduct';

function Checkout() {
  const items = useSelector(selectItems);
  return (
    <div className="bg-marketplace-light">
        <Header/>
        <main className="lg:flex max-w-screen-2xl mx-auto">
            {/* left */}
            <div className="flex-grow m-5 shadow-sm">
                <Image
                src="http://links.papareact.com/ikj"
                width={1020}
                height={250}
                objectFit={"contain"}
                />
                <div className="flex flex-col p-5 space-y-10">
                    <h1 className="text-3xl border-b border-marketplace pb-4">
                      {items.length===0 ? "Your Market Basket is empty" : "Your Shopping Basket"}
                    </h1>
                    {items.map((item, index) => (
                      <CheckoutProduct 
                        key={index}
                        id={item.id}
                        title={title.id}
                        rating={rating.id}
                        price={item.price}
                        description={item.description}
                        cateogry={item.category}
                        image={item.image}
                      />
                    ))}
                </div>
            </div>
            {/* right */}
            <div>

            </div>

        </main>
    </div>
  )
}

export default Checkout