import React from 'react'
import './about.css'
import TAB from '../../assets/tab.jpg'
import{TiTick} from 'react-icons/ti'


const Abount = () => {
  return (
    <section id='about'>
      <div className='about_container'>
        <div className='about_us'>
           <h2>About Us</h2>
           <img src={TAB} alt='tab-image'className='tab'/>
             <p>
              Defcon Security Systems is one of the fastest growing security Solution providers in Canada. We have been in the market with 10+ years of comprehensive experience. We specialize in analog & Digital CCTV Cameras, HD Security Cameras, IP Cameras, Wi-Fi Cameras, Burglary Alarm Systems, Access Control Systems, Fingerprint Time Attendance Systems, Electric Door Locks, Intercoms and Repairs & Services to homeowners, Business owners, Government Agencies, and any other type of organization of any size or stature.</p>
              <h3><TiTick className='tick'/>Best Quality</h3>
              <h3><TiTick className='tick'/>24 hour service</h3>
              <h3><TiTick className='tick'/>100% Trustworthy</h3>
          </div>
        </div>
    </section>
  )
}

export default Abount 