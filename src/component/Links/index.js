import React from 'react'
import Link from './Link'
import './links.css'
import { links } from './data'

function Links() {
  return (
    <div className='links'>
      {links.map((link, i)=>(
         <Link key={i} link={link.link} name={link.name} id={link.id}/>
      ))}
    </div>
  )
}

export default Links