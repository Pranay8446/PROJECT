import React from 'react'
import Nav from './Nav'


const Header = () => {
  return (
    <div>
        <Nav />
        <div className="h-[15rem] w-full bg-gray-400 md:h-[35rem]">
            <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1750779940886-edfa73b5c5c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Header