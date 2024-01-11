import React from "react";
import Button from "../Button";

export default function Form() {
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1482275548304-a58859dc31b7?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center blur-sm"></div>
      <div className='bg-black-gradient absolute top-0 left-0 w-full h-screen'/>

      <div className="border-none h-[80vh] w-full mt-16 flex flex-row mx-20 border relative">
        <div className="flex-col lg:flex lg:w-[1/3] h-full hidden">
          <img
            src="https://images.unsplash.com/photo-1482275548304-a58859dc31b7?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-white p-5 lg:flex flex-col lg:w-2/3 h-full w-full flex justify-center items-center">
          <form className="bg-white w-full h-full p-4">
            <h2 className="text-3xl pb-6 text-center">Make A Reservation</h2>
            <div className="fields flex flex-row gap-2 p-3">
              <div className="w-1/2 flex-col">
                <label className="text-md font-medium" htmlFor="username">
                  Full Name
                </label>
                <input
                  className="border-2 mt-2 py-1 px-2 border-gray-300 rounded block min-h-[auto] w-full"
                  type="text"
                />
              </div>
              <div className="w-1/2 flex-col">
                <label className="text-md font-medium" htmlFor="username">
                  Guests
                </label>
                <input
                  className="border-2 mt-2 py-1 px-2 border-gray-300 rounded block min-h-[auto] w-full"
                  type="number"
                />
              </div>
            </div>
            <div className="fields flex flex-row gap-2 p-3">
              <div className="w-1/2 flex-col">
                <label className="text-md font-medium" htmlFor="Date">
                  Date
                </label>
                <input
                  className="border-2 mt-2 py-1 px-2 border-gray-300 rounded block min-h-[auto] w-full"
                  type="date"
                />
              </div>
              <div className="w-1/2 flex-col">
                <label className="text-md font-medium" htmlFor="username">
                  Time
                </label>
                <input
                  className="border-2 mt-2 py-1 px-2 border-gray-300 rounded block min-h-[auto] w-full"
                  type="time"
                />
              </div>
            </div>
            <div className="fields gap-2 p-3">
              <label className="text-md font-medium" htmlFor="username">
                Email
              </label>
              <input
                className="border-2 mt-2 py-1 px-2 border-gray-300 rounded block min-h-[auto] w-full"
                type="email"
              />
            </div>
            <div className="fields gap-2 p-3">
              <label className="text-md font-medium" htmlFor="text">
                Special Instructions
              </label>
              <textarea
                className="border-2 mt-2 py-1 px-2 border-gray-300 rounded block min-h-[auto] w-full"
                type="text-area"
              />
            </div>

            <div className="flex justify-center items-center mt-5">
              <Button title="Book Table" className={"border-gray-400"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
