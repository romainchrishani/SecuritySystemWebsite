import React from 'react'
import './header.css';
import CTA from './CTA'
// import ME from '../../assets/logo.png'
// import SHAPE from '../../assets/shape.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className='topics'>
        <h1>Welcome To</h1>
        <h1>St.Michael's Security Controls</h1>
        <h4 className="text-light">Your Security Solutions Company</h4>
        </div>
        <CTA/>
        <HeaderSocials/>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header