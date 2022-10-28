import React from 'react'
import './footer.css'
import red from '../../assets/red.png'
import ingressive from '../../assets/ingressive.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className='zuri_logo'>Zuri<img src={red} alt=".." />Internship</div>
      <p className='footer__text'>HNG Internship 9 Frontend Task</p>
      <img src={ingressive} className='ingressive__logo' alt="" srcset="" />
    </footer>
  )
}

export default Footer