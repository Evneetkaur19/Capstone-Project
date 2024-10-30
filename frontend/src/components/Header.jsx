import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-pink-300 rounded-lg px-6 md:px-10 lg:px-20'>
      {/* LEFT SIDE */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-pink-700 font-semibold leading-tight md:leading-tight lg:leading-tight'> Book Appointment <br/> With Trusted Nail Technician</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-primary text-sm'>
            <p>Simply browse through our extensive list of services, <br className='hidden sm:block'/> and schedule your appointment hassle-free.</p>
        </div>
        <a className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-grey-400 text-normal m-auto md:m-0 hover:scale-105 transition-all duration-300' href="#services">
            Book Appointment <img src={assets.arrow_icon} alt=""/>
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} />

      </div>
    </div>
  )
}

export default Header
