import React from 'react'
import '../components/Header.css'
import headerBackground from '../images/headerBackground.jpg'

const Header = () => {
  return (
    <div className="container-fluid">
      <div
        className="header__background"
        style={{ backgroundImage: `url(${headerBackground})` }}
      ></div>
    </div>
  )
}

export default Header
