import React, { useState } from 'react';
import axios from 'axios';
import Button from "../Button";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    guests: '',
    date: '',
    time: '',
    specialInstructions: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/Reservations/submit', formData);
      console.log(response.data);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };



  return (
    <div className="h-screen flex justify-center items-center overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1482275548304-a58859dc31b7?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center blur-sm"></div>
      <div className='bg-black-gradient absolute top-0 left-0 w-full h-screen'/>

      <div className="border-none w-full mx-20 mt-10 lg:h-[80vh] border relative flex flex-row">
        <div className="flex-col lg:flex lg:w-1/3 h-full hidden">
          <img
            src="https://images.unsplash.com/photo-1482275548304-a58859dc31b7?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-white lg:flex flex-col lg:w-2/3 h-full w-full">
          <form 
          onSubmit={handleSubmit}
          className="bg-white w-full h-full p-6 flex flex-col justify-center">
            <h2 className="text-3xl pb-6 text-center">Make A Reservation</h2>
            <div className="fields flex flex-row gap-2 p-1">
              <div className="w-1/2 flex-col">
                <label className="text-md font-medium" htmlFor="username">
                  Full Name
                </label>
                <input
                  className="border-2 mt-2 px-2 border-gray-300 rounded block min-h-[auto] w-full"
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 ">
                <label className="text-md font-medium" htmlFor="username">
                  Guests
                </label>
                <input
                  className="border-2 mt-2  px-2 border-gray-300 rounded block min-h-[auto] w-full"
                  type="number"
                  name="guests"
                  min="1" 
                  max="10"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="fields flex flex-row gap-2 p-1">
              <div className="w-1/2 flex-col">
                <label className="text-md font-medium" htmlFor="Date">
                  Date
                </label>
                <input
                  className="border-2 mt-2 px-2 border-gray-300 rounded block min-h-[auto] w-full"
                  type="date"
                  min={new Date().toISOString().split("T")[0]} // today's date as the minimum
                  max="2024-02-20" 
                  name="date"
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 flex-col">
                <label className="text-md font-medium" htmlFor="username">
                  Time
                </label>
                <select
                  className="border-2 mt-2 px-2 border-gray-300 rounded block min-h-[auto] w-full"
                  type="time"
                  name="time"
                  onChange={handleChange}>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  </select>

              </div>
            </div>
            <div className="fields gap-2 p-1">
              <label className="text-md font-medium" htmlFor="username">
                Email
              </label>
              <input
                className="border-2 mt-2 px-2 border-gray-300 rounded block min-h-[auto] w-full"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="fields gap-2 p-1">
              <label className="text-md font-medium" htmlFor="text">
                Special Instructions
              </label>
              <textarea
                className="border-2 mt-2 px-2 border-gray-300 rounded block min-h-[auto] w-full"
                type="text-area"
                name="specialInstructions"
                maxLength="200"
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center items-center mt-4">
              <Button title="Book Table" className={"border-gray-400"} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
