import React from 'react';
import { useProduct } from '../context/ProductContext';

const ProductList = () => {
  const { products } = useProduct();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(p => (
        <div key={p._id} className="p-4 border rounded shadow">
          <img src={p.image} alt={p.name} className="h-40 w-full object-cover mb-2" />
          <h2 className="font-semibold">{p.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
