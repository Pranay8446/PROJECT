import React from 'react'
import Nav from '../components/Nav'
import Item from '../components/Item'
import Footer from '../components/Footer'
import NavigateHome from '../components/NavigateHome'

const IronWindow = () => {
  return (
    <div>
        <Nav />
        <NavigateHome name={"Iron Window"} />
        <Item category={"iron-window"} />
        <Footer />
    </div>
  )
}

export default IronWindow