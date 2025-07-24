import React from 'react'
import NavigateHome from '../components/NavigateHome'
import Nav from '../components/Nav'
import EnquiryForm from './EnquiryForm'
import Footer from '../components/Footer'

const EnquiryPage = () => {
  return (
    <div>
        <Nav />
        <NavigateHome name={"Service Enquiry"} />
        <EnquiryForm />
        <Footer />
    </div>
  )
}

export default EnquiryPage