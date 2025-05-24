import { useState } from 'react'

import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './Pages/Hero'
import About from './Pages/About'
import Layout from './Components/Layout'
import Portfolio from './Pages/Portfolio'
import Design from './Pages/Designs'
import Contact from './Pages/Contact';
import Footer from './Components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/designs" element={<Design />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        
      </Layout>
    </Router>
    
  )
}

export default App
