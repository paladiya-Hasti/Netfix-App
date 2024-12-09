import React from 'react'
import './Home.css'

import hero_banner from  '../../assets/hero_banner.jpg'
import hero_title from  '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titelcard from '../../component/TitelCard/TitelCard'
import Footer from '../../component/Footer/Footer'
import { Navbar } from '../../component/Navbar/Navbar'

const Home = () => {


  return (
    <div className='home'>
      
    <Navbar/>
     
    <div className="hero">
      <img src={hero_banner} className='banner-img'/>
      <div className="hero-caption">
        <img src={hero_title} alt="" />
        <p>Discovering his ties to a secret ancient oeder, a young man living in modern Istanbul ambarks on a quest to save the sity from an immortal enemy</p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
        </div>
      </div>
    </div>
   <div className="more-cards">
   <Titelcard title={"Blockbuster Movies"}/>
   <Titelcard  title={"Only  on Netflix"}/>  
   <Titelcard title={"Upcoming"}/>  
   <Titelcard title={"Top pics for you"}/>
   </div>
   <Footer/>
    </div>
  )
}

export default Home