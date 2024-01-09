import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Offers from './components/Offers'
import './App.css'
import Plan from './components/Plan'
import Intro from './components/Intro'
import Reservations from './components/Reservations';

function App() {

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Intro />
            <Offers />
            <Plan />
          </>
        } />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </Router>
    
  )
}

export default App
