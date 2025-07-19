import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import FrontContainer from '../components/FrontContainer'
import Footer from '../components/Footer'
import Register from './Register'
import Login from './Login'

const Home = () => {
  return (
    <div>
        <Header/>
        <FrontContainer />
        <Footer/> 
        {/* <Login/>
        <Register /> */}
    </div>
  )
}

export default Home