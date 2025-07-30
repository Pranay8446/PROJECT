import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import axios from "axios"
import {UserDataContext} from '../context/UserContext'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({})
  
  const navigate = useNavigate()

  const {user , setUser } = React.useContext(UserDataContext)

  const sumbmitHandler = async (e) =>{
    e.preventDefault()
      

    const response = await axios.post(
  `${import.meta.env.VITE_BASE_URL}/users/login`,
  { email, password },
  { withCredentials: true } // 🔥 Required to send cookies
);


    if (response.status === 200) {
  const data = response.data;
  setUser(data.user);
  localStorage.setItem("token", data.token);
  navigate("/upload-product"); 
}


    setEmail("");
    setPassword("");

  }

  
  
  return (
    <div>
      <div className="h-screen w-full  bg-zinc-900 text-white">
        <h1 className='p-5'>Logo</h1>
        <div className=" p-10 w-full ">

          <form 
          onSubmit={(e)=>{
            sumbmitHandler(e)
          }}
          >
            <h2 className='text-lg font-medium mb-2'>Email</h2>

            <input 
            value={email}
            className='bg-transparent w-full rounded-lg px-4 py-3 text-lg mt-1 mb-4  outline-none border-2 border-zinc-800 placeholder:text-sm'  
            onChange={(e)=>{
              setEmail(e.target.value);
            }}

            placeholder='email@example.com'
            />

            <h2 className='text-lg font-medium mb-2'>Password</h2>

            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            className='bg-transparent w-full rounded-lg px-4 py-3 text-lg mt-1  outline-none border-2 border-zinc-800 placeholder:text-sm'  
            type="password" 
            placeholder='password'
            />

            <input 
            className='block px-5 w-full text-xl text-white font-semibold mt-6 py-2 text-center bg-blue-500 rounded-lg ' 
            type="Submit" 
            value={"Login"}
            />

          </form>
          <h1 className='mt-4 tex3 text-sm text-center'>New here ? <Link className='text-blue-400' to={"/register"}>Create new Account</Link></h1>
        </div>
        <h1>footer</h1>
      </div>
    </div>
  )
}

export default Login