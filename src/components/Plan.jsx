import React from 'react'
import Button from './Button'

export default function Plan(){
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 '>
      {/* left side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh] '>
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="soup" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="salad" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bread" />
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bowl" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Salmon" />

      </div>
      {/* right side */}
      <div className='flex flex-col h-full justify-center mx-2'>
        <h3 className='text-5xl md:text-6xl font-bold'>Try our dishes</h3>
        <p className='text-2xl py-6'>Indulge in a culinary adventure with our diverse menu, featuring the freshest ingredients and bold flavors. From classic favorites to innovative creations, each dish is crafted to perfection,
           offering a delightful experience for your taste buds. Join us for a meal and let your senses be captivated by our chef's exquisite specialties.</p>
        <p>Take a look at our diverse menu now!</p>   
        <div><Button title="Menu" className={'bg-red-500'}/></div>
      </div>
    
    </div>
  )
}

