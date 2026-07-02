import React from 'react'
import './MenuChild.css'

const MenuChild = ({artikulli,pershkrimi}) => {
  return (
    <div>
    <p className='artikulliStyle'>{artikulli}</p>
    <p className='pershkrimiStyle'>{pershkrimi}</p>
    </div>
  )
}

export default MenuChild