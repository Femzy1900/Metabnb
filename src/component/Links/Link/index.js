import React from 'react'
import './link.css'

function Link({link, id, name}) {
  return (
    <div className='link' id={id}>
      <a className='link__href' target="_blank" rel="noreferrer" href={link}>{name}</a>
    </div>
  )
}

export default Link