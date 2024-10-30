import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopServices = () => {

    const navigate = useNavigate()
    const {service} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-pink-700 md:mx-10'>
      <h1 className='text-3xl font-medium'>Our Top Services</h1>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'> {service.slice(0,10).map ((item,index)=> (
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border-2 border-pink-700 bg-pink-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
            <img className='bg-pink-100' src={item.image} alt="" />
            <div className='p-4'>
                    <p className='text-pink-700 text-lg font-medium'>{item.name}</p>
                    <p className='text-blue-500 text-sm'>${item.prices} </p>
                </div>
            </div>
        ))}
      </div>
      <button onClick={()=>{ navigate('/services'); scrollTo(0,0) }} className=' transition-all duration-300 border rounded-lg border-pink-700 px-6 py-3 text-lg hover:bg-pink-500 hover:text-white '>more...</button>
    </div>
  )
}

export default TopServices
