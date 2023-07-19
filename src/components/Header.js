import React from 'react'
import '../components/Header.css'
import headerBackground from '../images/headerBackground.jpg'
import Navbar from './Navbar.js'

const Header = () => {
  return (
    <div>
      <div
        className="flex sm:bg-contain  md:bg-contain  lg:bg-contain xl:bg-contain 2xl:bg-auto bg-no-repeat header__background"
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <div className=" header__navbar">
          <Navbar />
        </div>
        <div>
          <h1 className="sm:text-2xl sm:text-start  md:text-6xl md:pl-20  lg:text-8xl lg:pt-60 lg:pl-20 lg:text-start xl:text-6xl xl:pt-60 xl:pl-20 xl:text-start header__tittle">
            OREALBA SORIANO
          </h1>
        </div>
        <div>
          <h2 className="sm:text-3xl sm:text-start md:text-3xl pl-52 lg:text-4xl xl:text-4xl xl:text-left header__description">
            FULL-STACK DEVELOPER
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header
