import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const FrontContainer = createContext();

export const ContainerProvider = ({ children }) => {

  const [container, setContainer] = useState([]);

  const fetchContainer = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/containers`);
      setContainer(res.data);
    } catch (error) {
      console.error("Failed to fetch Container", error);
    }
  };

  const uploadContainer = async (formData) => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/containers/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchContainer(); // Corrected this from fetchProducts()
    } catch (error) {
      console.error("Failed to upload product", error);
    }
  };

  useEffect(() => {
    fetchContainer();
  }, []);

  return (
    <FrontContainer.Provider value={{ container, uploadContainer }}>
      {children}
    </FrontContainer.Provider>
  );
};

export const useContainer = () => useContext(FrontContainer);
