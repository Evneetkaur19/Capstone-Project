import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'

const Appointment = () => {

  const {docId} = useParams()
  const {service} = useContext(AppContext)

  const [docInfo,setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = service.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  const getAvailableSlots = async ()=> {
   setDocSlots([])
   // getting current date 
  }

  useEffect(()=>{
    fetchDocInfo()
  },[service,docId])


  useEffect(()=>{
  getAvailableSlots()
  },[docInfo]
)


  return docInfo && (
    <div>
      {/* Service Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <img className='pb-6 w-full sm:max-w-56 rounded-lg ' src={docInfo.image} alt="" />
      </div>
      <div className='flex-2 border-2 border-pink-400 rounded-lg p-6 py-5 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
        {/*  Service Info */}
        <p className='flex items-center gap-2 text-2xl font-medium text-pink-700'>{docInfo.name}</p>
        <p className='flex items-center gap-1 text-sm font-medium text-black mt-3'> About <img src={assets.info_icon} alt="" /></p>
        <p className='text-base text-pink-500 max-w-[800px] mt-1'>{docInfo.about}
        </p>
        <p className='text-sm font-semibold text-blue-500 max-w-[800px] mt-1'>
          Price: ${docInfo.prices}
          </p>
      </div>
    </div>
  )
}

export default Appointment



