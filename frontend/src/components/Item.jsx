import React from 'react'
import { useProduct } from '../context/ProductContext';

const Item = ({category}) => {
    const { products } = useProduct();
  return (
    <div>
      <h2 className='text-xl text-center font-medium mt-3'>Recent Work</h2>
      <div className="grid grid-cols-2 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, i) => {
          if (product.category === category) {
            return (
              <div key={i} className="border p-4 rounded shadow">
                <img src={product.image} alt={product.name} className="w-30 h-40 mb-2" />
              </div>
            );
          }
          return null;
        })}
          
      </div>
        
    </div>
  )
}

export default Item