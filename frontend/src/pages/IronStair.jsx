import React from 'react'
import Nav from '../components/Nav'
import Item from '../components/Item'
import Footer from '../components/Footer'
import NavigateHome from '../components/NavigateHome'

const IronStair = () => {
  return (
    <div>
        <Nav />
        <NavigateHome name={"Iron Stair"} />
        <Item category={"iron-stair"} />
        <Footer />
    </div>
  )
}

export default IronStair