import React from 'react'
import Nav from '../components/Nav'
import Item from '../components/Item'
import Footer from '../components/Footer'
import NavigateHome from '../components/NavigateHome'

const IronShade = () => {
  return (
    <div>
        <Nav />
        <NavigateHome name={"Iron Shade"} />
        <Item category={"iron-shade"} />
        <Footer />
    </div>
  )
}

export default IronShade