import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import { ContainerProvider } from './context/ContainerContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContainerProvider>
      <ProductProvider>
        <UserContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserContext>
      </ProductProvider>
    </ContainerProvider>
  </StrictMode>,
);

