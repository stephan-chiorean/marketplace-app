import React from 'react'
import Product from './Product';
const MAX_RATING = 5;
const MIN_RATING = 1;
function ProductFeed({products}) {
    const rating = Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING;
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-29">
        {products.map(({id,title, price, description, category, image}) => (
            <Product 
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
            />
        ))}
    </div>
  )
}

export default ProductFeed