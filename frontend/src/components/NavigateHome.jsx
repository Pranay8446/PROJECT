import React from 'react'
import { Link } from 'react-router-dom'

const NavigateHome = ({name}) => {
  return (
    <div className='p-6 flex items-center gap-3 '>
        <Link className='text-yellow-800 text-lg font-medium' to="/">
        <span>Home</span></Link>
        <span>{'>>'}</span>
        <span className='text-lg font-lg'>{name}</span>
    </div>
  )
}

export default NavigateHome