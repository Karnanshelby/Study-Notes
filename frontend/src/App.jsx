import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import Welcome from './pages/Welcome/Welcome'

const App = () => {

  

  return (
  <BrowserRouter>
    <Navbar />  
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App