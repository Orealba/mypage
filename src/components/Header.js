import React from 'react'
import '../components/Header.css'
import headerBackground from '../images/headerBackground.jpg'
import Navbar from './Navbar.js'

const Header = () => {
  return (
    <div>
      <div
        className="flex bg-contain  sm:bg-contain md:bg-contain  lg:bg-contain xl:bg-contain 2xl:bg-auto bg-no-repeat header__background"
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <div className=" header__navbar">
          <Navbar />
        </div>
        <div>
          <h1 className="text-3xl pl-14  text-start  md:text-5xl md:text-start md:pl-20 md:pt-20 lg:text-7xl lg:pt-60 lg:pl-16 lg:text-start xl:text-8xl  xl:text-start header__tittle">
            OREALBA SORIANO
          </h1>
        </div>
        <div>
          <h2 className="text-md text-start pl-16 md:text-2xl md:text-start  md:pl-20 lg:text-4xl lg:text-start xl:text-5xl xl:text-start  header__description">
            FULL-STACK DEVELOPER
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header
