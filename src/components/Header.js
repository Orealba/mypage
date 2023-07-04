import React from 'react'
import '../components/Header.css'
import headerBackground from '../images/headerBackground.jpg'
import Navbar from './Navbar.js'

const Header = () => {
  return (
    <div>
      <section
        className="lg:bg-contain sm:bg-contain  header__background"
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <div className=" header__navbar">
          <Navbar />
        </div>
        <div className="sm:text-4xl sm:text-start md:text-6xl lg:text-8xl xl:text-8xl  header__tittle">
          OREALBA SORIANO
        </div>
        <div className="sm:text-xl sm:text-start md:text-3xl  lg:text-6xl xl:text-6xl xl:text-left header__description">
          FULL-STACK DEVELOPER
        </div>
      </section>
    </div>
  )
}

export default Header
