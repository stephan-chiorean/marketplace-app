import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [active, setActive] = useState(false);
  const addItemToBasket = () => {
    setActive(true);
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addToBasket(product))
  };

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
  }, []);
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 border-1 border-marketplace rounded-md'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit='contain' />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='h-5 text-yellow-500' />
          ))}
      </div>
      <p className='text-xs mt-2 my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>
        <Currency quantity={price} />
      </div>
      <button onClick={addItemToBasket} className={`mt-auto ${!active ? `button`: `clicked`}`}>
        {active ? `Added` : `Add to Basket`}
      </button>
    </div>
  );
}

export default Product;