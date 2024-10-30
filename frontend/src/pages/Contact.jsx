import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
const Contact = () => {

  const navigate = useNavigate()   

  return (
    <div>
      <div className='text-center text-3xl pt-10 text-pink-500 font-semibold'><p>CONTACT ME</p></div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-lg'>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-blue-600'>My Location</p>
          <p className='text-pink-500'>3 Larmere Court <br /> Ontario, Canada - M1K 1V8</p>
          <p className='font-semibold text-lg text-blue-600'>My Contact</p>
          <p className='text-pink-500'>Call: +1(416)-834-5247 <br /> Email: evneetkaur19@gmail.com</p>
          
          <button onClick={()=>{navigate('/services'); scrollTo(0,0)}} className=' transition-all duration-300 border border-pink-700 px-8 py-4 text-sm hover:bg-pink-500 hover:text-white '>Explore Services</button>
        </div>
        <img className='border-2 border-rose-400 w-full max-w-[360px] rounded-xl' src={assets.contact_image} alt="A nail salon picture." />
      </div>
    </div>
  )
}

export default Contact
