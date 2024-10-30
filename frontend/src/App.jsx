import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Footer from './components/Footer'
import SpecialityMenu from './components/SpecialityMenu'
import TopServices from './components/TopServices'




const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/services' element= {<Services />}/>
        <Route path='/speciality-menu' element= {<SpecialityMenu />}/>
        <Route path='/top-services' element= {<TopServices />}/>
        <Route path='/login' element= {<Login />}/>
        <Route path='/about' element= {<About />}/>
        <Route path='/contact' element= {<Contact />}/>
        <Route path='/my-profile' element= {<MyProfile />}/>
        <Route path='/my-appointment' element= {<MyAppointment />}/>
        <Route path='/appointment/:docId' element= {<Appointment />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
