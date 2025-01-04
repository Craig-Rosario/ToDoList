import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import Footer from './components/footer/Footer.jsx'
import About from './components/about/About.jsx'
import Signup from './components/signup/Signup.jsx'
import Signin from './components/signup/Signin.jsx'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/todo' element={<About/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/signin' element={<Signin/>}/>

        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
