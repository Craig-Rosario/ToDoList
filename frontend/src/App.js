import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import Footer from './components/footer/Footer.jsx'
import About from './components/about/About.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
