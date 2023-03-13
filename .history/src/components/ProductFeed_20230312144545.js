import React from 'react'
import Product from './Product';

function ProductFeed({products}) {
  return (
    <div>
        <h1>Products...</h1>
        {products.map(({id,title, price, description, category, image}) => (
            <Product/>
        ))}
    </div>
  )
}

export default ProductFeed