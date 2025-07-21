import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import FrontContainer from '../components/FrontContainer'
import Footer from '../components/Footer'
import Register from './Register'
import Login from './Login'
import ProductUpload from '../components/ProductUpload'
import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <div>
        <Header/>
        <FrontContainer />
        <Footer/> 
        {/* <Login/>
        <Register /> */}
        <ProductUpload/>
        <ProductList />
    </div>
  )
}

export default Home