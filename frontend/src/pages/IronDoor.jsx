import React from 'react'
import Item from '../components/Item'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Navigate from '../components/NavigateHome'
import Footer from '../components/Footer'
import NavigateHome from '../components/NavigateHome'

const IronDoor = () => {
  return (
    <div>
        <Nav />
        <NavigateHome name={"Iron Door"} />
        <Item category={"iron-door"} />
        <Footer />
    </div>
  )
}

export default IronDoor