import React, { useState } from 'react'

const EnquiryForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")  
    const [city, setCity] = useState("")
    const [comment, setComment] = useState("")

    const sumbmitHandler =  (e) => {
        e.preventDefault()
        // Here you can handle the form submission, e.g., send data to an API
        console.log({
            name,
            email,
            phone,
            city,
            comment
        })

        // Reset form fields
        setName("")
        setEmail("")
        setPhone("") 
        setCity("")
        setComment("")
    }


  return (
    <div>
        <div className="p-6">
            <form action="" 
            onSubmit={(e)=>{
            sumbmitHandler(e)
            }}>
                <h2 className="">Name</h2>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="border border-gray-300 p-2 outline-none rounded w-full mb-4"
                    placeholder="Enter your name"
                    required
                />

                <h2 className="">Email</h2>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    className="border border-gray-300 p-2 outline-none rounded w-full mb-4"
                    placeholder="Enter your email"
                    required
                />

                <h2>Phone</h2>
                <input  
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel" 
                    className="border border-gray-300 p-2 outline-none rounded w-full mb-4"
                    placeholder="Enter your phone number"
                    required
                />

                <h2>City</h2>
                <input 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    className="border border-gray-300 p-2 outline-none rounded w-full mb-4"
                    placeholder="Enter your city"
                    required
                />

                <h2>Comment</h2>
                <textarea 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="border border-gray-300 p-2 outline-none resize-none rounded w-full mb-4"
                    placeholder="Enter your comment or enquiry"
                    rows="3"
                    required
                ></textarea>

                <input  
                    type="submit" 
                    className="bg-gray-300 text-black p-2 rounded cursor-pointer"
                    value="Submit"
                />
            </form>
        </div>
    </div>
  )
}

export default EnquiryForm