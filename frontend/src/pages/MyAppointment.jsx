import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {


  const { service } = useContext(AppContext)
  return (
    <div className="container mx-auto p-4 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 ">Your Appointments</h2>
      <div>
       {service.slice(0,5).map((item,index)=> (
        <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-gray-400' key={index}>
        <div>
          <img className="w-32 h-32 md:w-32 md:h-32 rounded-full border-2 border-gray-200" src={item.image} alt=""/>
        </div>
        <div className="flex-1 text:sm text-pink-500">
          <h3  className="text-lg font-semibold text-pink-700">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.service}</p>
          <p className="font-medium text-green-700 mt-2">About:</p>
          <p className=" text-sm">{item.about}</p>
          <p className="text-blue-700 mt-2">Total Charges: ${item.prices}</p>
          <p className="mt-2 text-gray-700">
            <span className="font-medium text-pink-800"> 
              Date & Time:</span> 19, November, 2024 | (9:30 AM)</p>
        </div>
        <div></div>
        <div className='flex flex-col gap-3 justify-end-center'>
          <button className='text-sm text-pink-600 text-center sm:min py-2 border-2 border-pink-700 rounded hover:bg-green-700 hover:text-white transition-all-duration-300'> Pay Online </button>
      
          <button className='text-sm text-pink-600 text-center sm:min-w-32 py-2 border-2 border-pink-700 rounded hover:bg-red-700 hover:text-white transition-all-duration-300'>Cancel Booking</button>
        </div>
        </div>
       ))}
      </div>
    </div>
  )
}

export default MyAppointment
