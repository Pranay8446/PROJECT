import React from 'react'
import Nav from './Nav'
import bg from '../assets/bg.jpg'

const Header = () => {
  return (
    <div>
        <Nav />
        <div className="h-[15rem] w-full bg-gray-400 md:h-[35rem]">
            <img className='object-cover h-full w-full' src={bg} alt="" />
        </div>
    </div>
  )
}

export default Header