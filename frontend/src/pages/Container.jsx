import React, { useState } from "react"

const Container = () => {
  const [containers, setContainers] = useState();
  const [name, setName] = useState("")
  const [imageFile, setImageFile] = useState(null);
  
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !imageFile) {
      return alert("Please fill all fields");
    }

    const formData = new FormData();
    formData.append('name', name);  
    formData.append('image', imageFile);

  }

  return (
    <div>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <input 
            type="text"
            placeholder="Container Name" 
            className="mb-2 block w-full px-2 py-3 outline-none border-gray-300 rounded"
            onChange={(e) => setName(e.target.value)}
          />

          <input 
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="mb-2 block"
          />

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