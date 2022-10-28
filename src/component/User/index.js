import React from 'react'
import './User.css';
import user_profile from '../../assets/profile__img.png'

function User() {
  return (
    <div className='user'>
      <div className='user__container'>
        <div className="user__profile">
          <img id='profile__img' src={user_profile} alt="" className="profile_pic" />
        </div>
        <p className='user__name'>Adedokun Femi</p>
      </div>
    </div>
  )
}

export default User