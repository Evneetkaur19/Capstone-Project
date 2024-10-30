import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-pink-600 font-semibold'>
        <p>ABOUT <span>ME</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-20 items-center'>
        <img className='border-2 border-rose-900 w-full md:max-w-[360px] rounded-full' src={assets.about_image} alt="My own Image"/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-normal text-pink-500'>
        <p>Welcome to Nailcessity by Evneet, where passion meets precision. My journey as a nail artist began with a love for creativity and the joy of turning simple nails into stunning canvases. From the first brushstroke, I was captivated by the endless possibilities of nail art. Over time, I honed my skills, experimenting with various techniques and designs to bring out the best in each client's unique style. Today, I am proud to offer a space where every visit is a chance to express yourself through artful and personalized nail care.</p>

       <p>My path as a nail artist has been shaped by both challenges and triumphs, guiding me towards perfecting my craft. I started with a small clientele, and through dedication and word of mouth, my passion grew into Nailcessity. Each client I've had the privilege to serve has inspired me to elevate my artistry. From delicate hand-painted designs to bold and trendy styles, I believe that nails are more than just an accessory - they're an extension of your personality. My goal is to ensure that every client leaves feeling confident and pampered.</p>

       <b className='text-gray-800'>My Vision</b>
       <p>At Nailcessity, I am committed to providing a welcoming and relaxing environment where clients can unwind and enjoy a customized nail experience. I focus on using high-quality products and techniques to deliver results that last. Whether you're looking for a classic manicure or a one-of-a-kind design, I am here to make your vision a reality. I invite you to book an appointment and join me on this beautiful journey of self-expression, one nail at a time.</p>
        </div>
      </div>
      <div className='text-xl my-4 items-center'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE ME</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-r from-pink-400 to-pink-300 hover:text-black text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-r from-pink-400 to-pink-300 hover:text-black text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>I also provide home services that you can enjoy from the comfort of your own home.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-r from-pink-400 to-pink-300 hover:text-black text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Personalised Nail Arts provided according to your mood and occassion.</p>
        </div>
      </div>
    </div>

  )
}

export default About
