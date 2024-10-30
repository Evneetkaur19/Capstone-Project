import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>

        {/* CopyRight */}
        <div className='pt-20 justify-center'>
        <hr />
        <div>
        <img onClick={()=>navigate('/')} className='justify-center mb-4 w-40 cursor-pointer' src={assets.logo} alt="brand-logo" />
        </div>
         <p className='pb-6 text-center'>&copy; Copyright 2024 - Nailcessity All Right Reserved.</p>
         </div>
      </div>
    </div>
  )
}

export default Footer
