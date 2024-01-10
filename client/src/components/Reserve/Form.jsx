import React from "react";

export default function Form() {
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1482275548304-a58859dc31b7?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center blur-sm"></div>
      
      <div className="border-none h-[80vh] w-full mt-16 flex flex-row mx-20 border relative">
        <div className="flex-col lg:flex lg:w-[1/3] h-full hidden">
          <img src="https://images.unsplash.com/photo-1482275548304-a58859dc31b7?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="" 
          className="object-cover w-full h-full"/>
        </div>

        <div className="bg-white p-5 lg:flex flex-col lg:w-2/3 h-full w-full flex justify-center items-center">
          <form className="bg-white w-full h-full p-4">
          <h2 className='text-3xl pb-6 text-center'>Make A Reservation</h2>
        <div className="fields flex flex-row gap-2">
        <div className='w-1/2 flex-col bg-blue-50 '>
          <label className='text-md font-medium'
          htmlFor="username">Full Name</label>
          <input 
            className='border-2 mt-2 py-1 px-2 border-gray-300 rounded block min-h-[auto] w-full'
            type="text"
         
          />
        </div>
        <div className="bg-green-50 w-1/2 flex-col">
        <label className='text-md font-medium'
          htmlFor="username">Number of People</label>
          <input 
            className='border-2 mt-2 py-1 px-2 border-gray-300 rounded block min-h-[auto] w-full'
            type="number"
           
          />

        </div>  
        
        </div>  
          </form>
        </div>
      </div>
    </div>
  );
}
