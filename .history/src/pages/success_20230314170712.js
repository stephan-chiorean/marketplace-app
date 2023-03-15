import React from 'react';
import Header from '@/components/Header';
import { CheckCircleIcon } from '@heroicons/react/solid';

function Success() {
  return (
    <div className='bg-marketplace-light h-screen'>
      <Header />
      <main className='max-w-screen-lg mx-auto'>
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className='text-green-500 h-10' />
            <h1 className='text-3xl'>
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with Market. We'll send a confirmation that your item has been shipped. If you would like to check the status of your order(s) please press the link below.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Success;
