import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import axios from "axios"
import {UserDataContext} from '../context/UserContext'

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userData, setUserData] = useState({})  


    const navigate = useNavigate()

    const {user , setUser } = React.useContext(UserDataContext)

    const sumbmitHandler = async (e) =>{
      e.preventDefault()
      const newUser = ({ 
        fullname: {
          firstname:firstName,
          lastname:lastName
        },
        email,
        password
      })    

      const responce = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

      console.log(responce.data);
      
      if(responce.status === 201 ){
        const data = responce.data

        setUser(data.user)

        navigate("/")
      }

      setEmail("")
      setFirstName("")
      setLastName("")
      setPassword("")
    }

  return (
    <div>
      <div className="h-screen p-8 w-full flex flex-col justify-between  bg-zinc-900 text-white">
        <h1 className=''>Logo</h1>

          <form action="" 
          onSubmit={(e)=>{
            sumbmitHandler(e)
          }}
          >
              <h2 className='text-lg font-medium mb-2'>Full Name</h2>
            <div className="flex gap-2">

              <input 
              value={firstName}
              onChange={(e)=>{
                setFirstName(e.target.value)
              }}
              className='bg-transparent w-1/2 rounded-lg px-4 py-3 text-lg mt-1 mb-6 outline-none border-2 border-zinc-800 placeholder:text-sm'  
              type="text" 
              placeholder='First Name'
              />

              <input 
              value={lastName}
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
              className='bg-transparent w-1/2 rounded-lg px-4 py-3 text-lg mt-1 mb-6 outline-none border-2 border-zinc-800 placeholder:text-sm'  
              type="text" 
              placeholder='Last Name'
              />
            </div>
            <h2 className='text-lg font-medium mb-2'>Email</h2>

            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className='bg-transparent w-full rounded-lg px-4 py-3 text-lg mt-1 mb-6 outline-none border-2 border-zinc-800 placeholder:text-sm'  
            type="email" 
            placeholder='email@example.com'
            />

            <h2 className='text-lg font-medium mb-2'>Password</h2>

            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className='bg-transparent w-full rounded-lg px-4 py-3 text-lg mt-1  outline-none border-2 border-zinc-800 placeholder:text-sm'  
            type="password" 
            placeholder='password'
            />

            <input 
            className='block px-5 w-full text-lg text-white font-semibold mt-6 py-2 text-center bg-blue-500 rounded-lg ' 
            type="Submit" 
            value={"Create Account"}
            />
          <h1 className='mt-4 tex3 text-sm text-center'>Allready have account ? <Link className='text-blue-400' to={"/login"}>Login  </Link></h1>

          </form>
        <h1>footer</h1>
      </div>
    </div>
  )
}

export default Register