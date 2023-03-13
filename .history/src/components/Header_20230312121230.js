import React from 'react'
import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
        <div className="flex items-center bg-marketplace p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image 
                src="/images/logo.png"
                width={150}
                height={40}
                objectFit="contain"
                className="cursor-pointer"
                />
            </div>
            {/* search */}
            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-[#EEDAC2] hover:bg-[#e4c7a4]">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md" type="text" />
                <SearchIcon className="h-12 p-4"/>

            </div>
        </div>
        <div>

        </div>
    </header>
  )
}

export default Header