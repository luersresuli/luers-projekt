import React from 'react'
import './AboutCateringChildren.css'

const AboutCateringChildren = ({titull, tradition, pershkrimi, extra}) => {
  return (
    <div>
        <h1 className='titulliCatering'>{titull}</h1>
        <h4 className='traditionCatering'>{tradition}</h4>
        <p>{pershkrimi}</p>
        <p className='fw-lighter'>{extra}</p>
    </div>
  )
}

export default AboutCateringChildren