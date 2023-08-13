import React from 'react'
import '../components/Header.css'
import headerBackground from '../images/headerBackground.webp'
import Navbar from './Navbar.js'

const Header = () => {
  return (
    <div>
      <div
        className="flex bg-no-repeat  bg-cover h-48 md:h-[26rem] lg:h-[60rem] shadow-myShadow header__background"
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <div className="mt-8">
          <Navbar />
        </div>
        <div>
          <h1 className="text-3xl text-myWine  pl-14 font-alata text-start  md:text-5xl  md:pl-20 md:pt-20 lg:text-7xl lg:pt-60 lg:pl-16 xl:text-8xl   xl:mt-28">
            OREALBA SORIANO
          </h1>
        </div>
        <div>
          <h2 className="text-md text-start font-alata text-myGrey pl-16 md:text-2xl  md:pl-20 lg:text-4xl  xl:text-5xl ">
            FULL-STACK DEVELOPER
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header
