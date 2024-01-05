import React from 'react'
import Inside from '../assets/Inside.png'

export default function Hero() {
  return (
    <div className='w-full h-screen'>
       <img src={Inside} alt="inside view" className='top-0 left-0 w-full h-screen object-cover'/>
       <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
    </div>
  )
}
