import React from 'react'
import '../components/Header.css'
import headerBackground from '../images/headerBackground.jpg'
import Navbar from './Navbar.js'

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="header__navbar"></div>
      <Navbar />

      <div
        className="header__background"
        style={{ backgroundImage: `url(${headerBackground})` }}
      ></div>
      <div className="header__tittle">OREALBA SORIANO</div>
    </div>
  )
}

export default Header