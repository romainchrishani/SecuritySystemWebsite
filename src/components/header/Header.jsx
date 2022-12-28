import React from 'react'
import './header.css';
import CTA from './CTA'
// import ME from '../../assets/logo.png'
// import SHAPE from '../../assets/shape.png'
import Logo from '../../assets/Logo.png'
import Camera from '../../assets/cam.png'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
        <img src={Logo} alt='logo-image'className='logo'/>
        <div className='topics'>
        {/* <img src={Camera} alt='cam-image'className='cam'/> */}
        <h1>WELCOME TO</h1>
        <h1>ST.MICHAEL'S SECURITY CONTROLS</h1>
        <h2 className="text-light">Your Security Solutions Company</h2>
        </div>
        <CTA/>
        {/* <a href='#contact' className='scroll_down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header