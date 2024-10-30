import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopNails from '../components/TopServices'
import Banner from '../components/Banner'
import Waxing from '../components/Waxing'


const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopNails/>
      <Waxing/>
      <Banner/>

    </div>
  )
}

export default Home
