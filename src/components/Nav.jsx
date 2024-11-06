import React from 'react'
import foodlogo from '../assets/roast-chicken_8382647.png'
import '../App.css'

export default function Nav() {
  return (
    <div className='navdiv'>
    <img src={foodlogo} alt="" className='foodlogo'/>
      <h1>Meme Food</h1>
    </div>
  )
}
