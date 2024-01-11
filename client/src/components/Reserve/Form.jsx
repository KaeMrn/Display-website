import React, { useState } from "react";
import {Link} from 'react-router-dom';

export default function Form(){
    

    return (
      <div className="bg-gray-300 h-screen">
        <div className="grid gird-cols-2 bg-red-500">
          <div className="col-span-1 hidden lg:flex w-1/2 items-center justify-center h-full">
            <img src="https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             alt="reservation pic"/> 
         </div>
         <div className="col-span-2 bg-white w-full flex items-center justify-center lg:w-1/2 h-full">
          <form>
            <h2>Book A Table</h2>
            <div className="p-3">
              <label className="text-md font-medium"
              htmlFor="">Name</label>
             <input 
             className='border-2 mt-2 py-1 px-2 border-gray-300 rounded block min-h-[auto] w-full'
             type="text"
             id="name"
             name="name"
             />
            </div>
            <div className="p-3">
              <label className="text-md font-medium"
              htmlFor="">Number of people</label>
             <input 
             className='border-2 mt-2 py-1 px-2 border-gray-300 rounded block min-h-[auto] w-full'
             type="number"
             id="people"
             name="people"
             />
            </div>
          </form>
         </div>
          

        </div>
        </div>
  )
}



