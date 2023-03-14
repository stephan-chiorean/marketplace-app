import React from 'react'
import Header from '@/components/Header';
import Image from "next/image";

function Checkout() {
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
                    <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
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