import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  
 

  return (
    <div className="fixed top-0 left-0 z-50 flex justify-between items-center h-18 shadow-2xl w-full bg-black px-4 text-white">
      <h1 className="w-full text-3xl ml-2 font-bold gradient-text bg-black">Restaurant.</h1>
      <ul className='hidden md:flex'>
        <li className="p-4">Home</li>
        <li className="p-4">Menu</li>
        <li className="p-4">Reservations</li>
        <li className="p-4">Contacts</li>        
        
        
        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <div className='flex justify-between'>
      <h1 className="w-full text-3xl font-bold gradient-text bg-black m-4 mt-8">Restaurant.</h1>
      <div 
        onClick={handleNav} 
        className='block md:hidden m-4 mt-8'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      </div>
        <ul className='uppercase p-4'>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Menu</li>
        <li className="p-4 border-b border-gray-600">Reservations</li>  
        <li className="p-4 border-b border-gray-600">Contact</li>        
      
        
        
        </ul>
        </ul>
    </div>
  )
};

export default Navbar;