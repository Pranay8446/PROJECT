import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { UserDataContext } from './context/UserContext'
import IronDoor from './pages/IronDoor'
import IronStair from './pages/IronStair'
import IronWindow from './pages/IronWindow'
import IronShade from './pages/IronShade'
import EnquiryPage from './pages/EnquiryPage'
import ProductUpload from './components/ProductUpload'
import Container from './pages/Container'

const App = () => {  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/iron-doors' element={<IronDoor />} />
        <Route path='/iron-stairs' element={<IronStair />} />
        <Route path='/iron-windows' element={<IronWindow />} />
        <Route path='/iron-shades' element={<IronShade />} />
        <Route path='/service-enquiry' element={<EnquiryPage />} />
        <Route path='/upload-product' element={<ProductUpload />} />
        <Route path='/upload-container' element={<Container />} />
      </Routes>
    </div>
  )
}

export default App