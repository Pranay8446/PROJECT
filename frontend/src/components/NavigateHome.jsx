import React from 'react'
import { Link } from 'react-router-dom'

const NavigateHome = ({name}) => {
  return (
    <div className='p-6 mt-16 flex items-center gap-3 '>
        <Link className='text-yellow-500 text-medium font-medium' to="/">
        <span>Home</span></Link>
        <span>{'>>'}</span>
        <span className='text-medium '>{name}</span>
    </div>
  )
}

export default NavigateHome