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

    console.log("Submitting container:", { name, link });
    
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
        }}
        className=" p-6 pt-10 mb-6 bg-zinc-900 h-screen text-white"
        >
        <h2 className="text-xl font-semibold mb-6">Upload Container</h2>
          <input 
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder="Container Name" 
            className="mb-4 block w-full px-2 py-3 outline-none border-2 border-zinc-800 rounded-lg placeholder:text-white"
          />

          <input 
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="mb-4 block"
          />

          <select
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="mb-4 p-2 block w-full border rounded bg-zinc-900"
      >
        <option className="text-white" value="">Select Link</option>
        <option className="text-white" value="/iron-doors">Iron Door</option>
        <option className="text-white" value="/iron-windows">Iron Window</option>
        <option className="text-white" value="/iron-stairs">Iron Stair</option>
        <option className="text-white" value="/iron-shades">Iron Shade</option>
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