import React, { useState } from "react"
import { useContainer } from "../context/ContainerContext";



const Container = () => {
  const {uploadContainer} = useContainer();
  const [name, setName] = useState("")
  const [imageFile, setImageFile] = useState(null);
  const [link, setLink] = useState("");
  

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !imageFile || !link) {
      return alert("Please fill all fields");
    }
    
    const formData = new FormData();
    formData.append('name', name);  
    formData.append('image', imageFile);
    formData.append('link', link);

    await uploadContainer(formData);

    setName("")
    setImageFile(null)
    setLink("")
  }

  return (
    <div>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <input 
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder="Container Name" 
            className="mb-2 block w-full px-2 py-3 outline-none border-gray-300 rounded"
          />

          <input 
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="mb-2 block"
          />

          <select
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="mb-2 p-2 block w-full border rounded"
      >
        <option value="">Select Link</option>
        <option value="/iron-doors">Iron Door</option>
        <option value="/iron-windows">Iron Window</option>
        <option value="/iron-stairs">Iron Stair</option>
        <option value="/iron-shades">Iron Shade</option>
      </select>

          <button 
            type="submit" 
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Upload
          </button>

        </form>
    </div>
  )
}

export default Container