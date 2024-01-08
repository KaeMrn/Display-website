import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Offers from './components/Offers'
import './App.css'
import Plan from './components/Plan'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      </div>
    
  )
}

export default App
