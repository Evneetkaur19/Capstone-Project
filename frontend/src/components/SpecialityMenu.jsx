import React from 'react'
import { servicesData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-600' id='services'>
        <h1 className='text-4xl text-center font-medium'>Explore All the Services</h1>
        <p className='italic font-semibold text-pink-500 sm:w-1/3 text-center text-base'>Simply browse through our extensive list of services, and schedule your appointment hassle-free.</p>
      <div className='flex sm:min justify-center gap-4 pt-5 w-full'>
        { servicesData.map((item,index)=> (
            <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-300' key={index} to={`/Services`}> 
            <img className='rounded-full w-20' src={item.image} alt="" />
            <p className='w-20 text-center text-lg font-semibold text-pink-500'>{item.services}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
