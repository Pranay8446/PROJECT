import React, { useState } from 'react';
import { useProduct } from '../context/ProductContext';

const ProductUpload = () => {
  const { uploadProduct } = useProduct();
  const [name, setName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !imageFile || !category) {
      return alert("Please fill all fields");
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('image', imageFile);

    await uploadProduct(formData);

    // Reset
    setName('');
    setCategory('');
    setImageFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 text-white h-screen p-6 pt-10 ">
      <h2 className="text-xl font-semibold mb-2">Upload Product</h2>

      <input 
        type="text" 
        placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        className="mb-4 p-2 block w-full border-2 border-zinc-800 rounded-lg outline-none" 
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-4 p-2 block w-full border-2 border-zinc-800 rounded-lg outline-none text-white bg-zinc-900"
      >
        <option value="">Select Category</option>
        <option value="iron-door">Iron Door</option>
        <option value="iron-window">Iron Window</option>
        <option value="iron-stair">Iron Stair</option>
        <option value="iron-shade">Iron Shade</option>
      </select>

      <input 
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        className="mb-4 block"
      />

      <button 
        type="submit" 
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </form>
  );
};

export default ProductUpload;
