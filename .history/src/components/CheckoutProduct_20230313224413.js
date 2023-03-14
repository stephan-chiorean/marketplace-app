import React, { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
}) {
    const [active,setActive] = useState(false);
  return (
    <div className='grid grid-cols-5 bg-white p-2 rounded-md'>
      <Image src={image} height={200} width={200} objectFit='contain' />

      {/* middle */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} />
      </div>
      {/* save and remove buttons */}
      <div className='flex flex-col space-y-4 md:space-y-5 my-auto'>
        <button className='button'>Buy Now</button>
        <button onClick={()=> setActive(true)}className={`${active ? `clicked` : `button`}`}>{active ? "Saved" : "Save for later"}</button>
        <button className='button hover:bg-red-500'>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
