
import React from 'react'
import './social.css'
import github from '../../assets/github.png'
import slack from '../../assets/slack.png'

function Social() {
  return (
    <div className='social'>
      <div className="social__wrapper">
        <img className='social__icon' src={slack} alt="" />
        {/* <BsSlack/> */}
        <img  src={github} alt="" />
      </div>
    </div>
  )
}

export default Social