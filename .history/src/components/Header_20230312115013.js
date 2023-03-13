import React from 'react'
import Image from "next/image";

function Header() {
  return (
    <header>
        <div>
            <div>
                <Image 
                src="/images/logo.png"
                width={150}
                height={40}
                objectFit="contain"
                className="cursor-pointer"
                />
            </div>
        </div>
        <div>

        </div>
    </header>
  )
}

export default Header