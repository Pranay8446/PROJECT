import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const ProductDataContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  const uploadProduct = async (formData) => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/products/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchProducts();
    } catch (error) {
      console.error("Failed to upload product", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductDataContext.Provider value={{ products, uploadProduct }}>
      {children}
    </ProductDataContext.Provider>
  );
};

export const useProduct = () => useContext(ProductDataContext);
