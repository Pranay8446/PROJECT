import React from 'react'
import { useProduct } from '../context/ProductContext';

const Item = ({category}) => {
    const { products } = useProduct();
  return (
    <div>
      {/* {products.map((product)=>{
        return <div className=""> 
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <img src={product.image} alt={product.name} className="w-full h-auto mb-2" />
        </div>
      })} */}

      <h2 className='text-xl text-center font-medium mt-3'>Recent Work</h2>
      <div className="grid grid-cols-2 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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