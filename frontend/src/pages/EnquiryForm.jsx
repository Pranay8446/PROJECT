import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const EnquiryForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")  
    const [city, setCity] = useState("")
    const [comment, setComment] = useState("")

    const sumbmitHandler =  (e) => {
       e.preventDefault();

  emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  e.target,
  import.meta.env.VITE_EMAILJS_USER_ID
).then((result) => {
  console.log(result.text);
  alert("Email sent successfully!");
}).catch((error) => {
  console.log(error.text);
  alert("Failed to send email.");
});


  e.target.reset();

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
                <h2 className="text-lg font-medium mb-1">Name</h2>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name='name'
                    className="border border-gray-300 p-2 outline-none rounded w-full mb-4"
                    placeholder="Enter your name"
                    required
                />

                <h2 className="text-lg font-medium mb-1">Email</h2>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    name='email'
                    className="border border-gray-300 p-2 outline-none rounded w-full mb-4"
                    placeholder="Enter your email"
                    required
                />

                <h2 className='text-lg font-medium'>Phone</h2>
                <input  
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel" 
                    name='phone'
                    className="border border-gray-300 p-2 outline-none rounded w-full mb-4"
                    placeholder="Enter your phone number"
                    required
                />

                <h2 className='text-lg font-medium'>City</h2>
                <input 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    name='city'
                    className="border border-gray-300 p-2 outline-none rounded w-full mb-4"
                    placeholder="Enter your city"
                    required
                />

                <h2 className='text-lg font-medium'>Comment</h2>
                <textarea 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="border border-gray-300 p-2 outline-none resize-none rounded w-full mb-4"
                    placeholder="Enter your comment or enquiry"
                    name='comment'
                    rows="3"
                    required
                ></textarea>

                <input  
                    type="submit" 
                    className="bg-gray-300 text-black px-4 font-medium py-2 mb-3 rounded-md cursor-pointer"
                    value="Submit"
                />
            </form>
        </div>
    </div>
  )
}

export default EnquiryForm