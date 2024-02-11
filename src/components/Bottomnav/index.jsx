import React from 'react'
import "./pokemon-bottomnav.css"

const BottomNav = () => {
  return (
    <div className='botnavdiv'>
      <div className='nav-button-container grey-container'>Home</div>
      <div className='nav-button-container red-container'>Pokedex</div>
      <div className='nav-button-container orange-container'>Video Games & Apps</div>
      <div className='nav-button-container yellow-container'>Trading Card Game</div>
      <div className='nav-button-container green-container'>Animation</div>
      <div className='nav-button-container aqua-container'>Play! Pokemon Events</div>
      <div className='nav-button-container blue-container'>News</div>
    </div>
  )
}

export default BottomNav