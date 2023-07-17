import React from 'react'
import '../components/Header.css'
import headerBackground from '../images/headerBackground.jpg'
import Navbar from './Navbar.js'

const Header = () => {
  return (
    <div>
      <section
        className=" sm:bg-contain  md:bg-contain  lg:bg-auto  bg-no-repeat header__background"
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <div className=" header__navbar">
          <Navbar />
        </div>
        <div className="   sm:text-6xl  sm:text-start  md:text-6xl md:pl-20  lg:text-6xl lg:pt-60 lg:pl-20 lg:text-start xl:text-8xl xl:pt-60 xl:pl-20 xl:text-start header__tittle">
          OREALBA SORIANO
        </div>
        <div className="sm:text-3xl sm:text-start md:text-3xl pl-52 lg:text-4xl xl:text-6xl xl:text-left header__description">
          FULL-STACK DEVELOPER
        </div>
      </section>
    </div>
  )
}

export default Header
