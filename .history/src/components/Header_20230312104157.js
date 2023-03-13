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
                />
            </div>
        </div>
        <div>

        </div>
        <h1>I am a header</h1>
    </header>
  )
}

export default Header