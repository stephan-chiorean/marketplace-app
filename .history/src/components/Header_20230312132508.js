import React from 'react';
import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header>
      <div className='flex items-center bg-marketplace p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='/images/logo.png'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer mx-5'
          />
        </div>
        {/* search */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-[#EEDAC2] hover:bg-[#e4c7a4] mx-5'>
          <input
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
            type='text'
          />
          <SearchIcon className='h-12 p-4' />
        </div>
        {/* Right */}
        <div className="text-[#EEDAC2] flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div className="link">
                <p>Hello Stephan Chiorean</p>
                <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>
            <div className="link">
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">&Orders</p>
            </div>
            <div className="relative link flex items-center">
                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                <ShoppingCartIcon className="h-10"/>
                <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
            </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex items-center bg-marketplace-darky">
        <p>
            <MenuIcon className="h-6 mr-1"/>
            All</p>
      </div>
    </header>
  );
}

export default Header;