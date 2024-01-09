import React, { useState } from "react";
import {Link} from 'react-router-dom';

export default function Form(){
    

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="border rounded-lg shadow-sm bg-white dark:bg-gray-800">
            <div className="flex flex-row items-center justify-between pb-2 space-y-0 px-4 pt-4">
              <h2 className="text-sm font-medium">Make a Reservation</h2>
            </div>
            <div className="p-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="date">
                    Date
                  </label>
                  <input
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    id="date"
                    required
                    type="date"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="time">
                    Time
                  </label>
                  <input
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    id="time"
                    required
                    type="time"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="guests">
                    Number of Guests
                  </label>
                  <input
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    id="guests"
                    min="1"
                    required
                    type="number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="requirements">
                    Special Requirements
                  </label>
                  <input
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    id="requirements"
                    type="text"
                  />
                </div>
                <button
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  Book Reservation
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
  )
}



