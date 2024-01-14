import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Reservations from './components/Reserve/Reservations';
import Footer from './components/Home/Footer';

function App() {

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            
          </>
        } />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </Router>
    
  )
}

export default App
