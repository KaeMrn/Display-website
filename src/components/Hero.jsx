import React from 'react'
import Inside from '../assets/Inside.png'

export default function Hero() {
  return (
    <div className='w-full h-screen'>
       <img src={Inside} alt="inside view" className='top-0 left-0 w-full h-screen object-cover'/>
       <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
       <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
        <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>The best restaurant in town</p>
        <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>High quality food for the high developped pallets</h1>
        <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Make sure to make a reservation to get the experience of a lifetime </p>
        <button className='bg-white text-black'>Reserve Now</button>
       </div>
       </div>
    </div>
  )
}
