import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import FrontContainer from '../components/FrontContainer'
import Footer from '../components/Footer'
import Register from './Register'
import Login from './Login'
import ProductUpload from '../components/ProductUpload'
import ProductList from '../components/ProductList'
import Container from './Container'



const Home = () => {
  return (
    <div>
        <Nav/>
        <Header/>
        <FrontContainer />
        <Footer/> 
    </div>
  )
}

export default Home