import React from 'react'

function Button({name,onClick}) {
  return (
    <button className='btnApp' onClick={onClick}>{name}</button>
  )
}

export default Button