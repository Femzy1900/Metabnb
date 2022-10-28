import React from 'react'
import link from '../../assets/share_icon.png'
import link_mobile from '../../assets/share_icon_mobile.png'
import './header.css'

function Header() {
  return (
    <header className='header'>
       <a className='share__link' href="#header">
        <img src={link} alt="" srcset="" />
       </a>
       <a className='mob_share' href="#header">
        <img src={link_mobile} alt="" srcset="" />
       </a>
    </header>
  )
}

export default Header