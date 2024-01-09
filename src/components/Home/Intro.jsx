import React from "react";

export default function Intro() {
    return (
      <div className="h-screen">
      <div className='max-w-[1400px] md:h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] sm:pb-1 px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Who are  we?</h3>
        <p className="pt-4">
            At the heart of our city, we are a vibrant and beloved restaurant known for our delectable cuisine and warm, welcoming atmosphere. 
            From the sizzle of freshly prepared dishes to the comfortable embrace of our cozy dining space, we strive to create memorable experiences for every guest. 
            Our culinary team, led by renowned chefs, blends traditional flavors with modern flair, 
            crafting dishes that tell a story of both innovation and tradition.
            </p>
      </div>

      <div className='lg:h-[80vh] sm:h-[50vh] h-[50vh] grid grid-cols-2 grid-rows-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1572715376701-98568319fd0b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1577219492769-b63a779fac28?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
      </div>
    </div>
    </div>

    )
};