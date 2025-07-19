import React from 'react'
import { Link } from "react-router-dom";
import { Menu } from 'lucide-react';

const Nav = () => {
  return (
    <div>
        <div className="h-20 flex justify-between p-5 pt-10 items-center w-full bg-zinc-900">
            <img className='h-15 w-15' src="https://imgs.search.brave.com/BAq5xttdV3CggAlkrBA3NWQAiz2Sd9x1XanMNqHhcWY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9Qcm9m/aWxlLVBORy1GaWxl/LnBuZw" alt="" />
            <nav className='flex items-center justify-between  bg-gray-300 '>
                <ul className='hidden md:flex gap-3 '>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                </ul>
            </nav>
            <div className="block md:hidden">
                <Menu className="text-white" />
            </div>
        </div>
    </div>
  )
}

export default Nav