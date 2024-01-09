import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Offers from './components/Offers'
import './App.css'
import Plan from './components/Plan'
import Intro from './components/Intro'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <Offers />
      <Plan />
      </div>
    
  )
}

export default App
