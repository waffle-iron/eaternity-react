import React from 'react'
import '../css/Header.css'
import logo from '../images/eaternity-logo.png'

// a stateless, functional component
const Header = () => {
  return (
    <div className='Header'>
      <span>
        <img src={logo} alt='Logo' />
      </span>
    </div>
  )
}

export default Header
