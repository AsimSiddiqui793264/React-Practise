import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./Components/About.jsx"
import Contact from "./Components/Contact.jsx"
import Product from "./Components/Product.jsx"

import { BrowserRouter, Routes, Route } from "react-router";
import AppStore from './Components/store.jsx'
import ProductView from './ProductView.jsx'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AppStore>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Home" element={<App />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Product/:id" element={<ProductView />} />
        </Routes>
      </BrowserRouter>

    </AppStore>
  // {/* </StrictMode> */}



)
