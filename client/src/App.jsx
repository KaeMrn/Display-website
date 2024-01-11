import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Home/Hero'
import Offers from './components/Home/Offers'
import './App.css'
import Plan from './components/Home/Plan'
import Intro from './components/Home/Intro'
import Reservations from './components/Reserve/Reservations';
import Footer from './components/Home/Footer';

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
            <Footer />
          </>
        } />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </Router>
    
  )
}

export default App
