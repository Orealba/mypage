import React from 'react'

import GreenCornerPhoto1 from '../images/GreenCornerPhoto1.png'
import GreenCornerPhoto2 from '../images/GreenCornerPhoto2.png'

const GreenCorner = () => {
  return (
    <div className="bg-myBgGrey shadow-myShadow">
      <div className='container mx-auto'>
        <h4 className="text-center pt-10 font-semibold  sm:text-5xl text-myGrey">
          My works
        </h4>
        <h4 className="pl-8 pb-5 sm:text-2xl font-semibold text-myGrey">
          GREEN CORNER
        </h4>
      
      <div>
        <center>
          <img src={GreenCornerPhoto1} className="pl-8 pr-5  lg:max-w-4xl rounded-3xl" />
        </center>
      </div>

      <div className="grid-col-12 p-12 text-md lg:text-lg">
        <p className="text-justify">
          This project was a collaborative effort to create a web application
          from scratch. Its purpose was to allow users to create, save, and edit
          their own plant collections, providing personalized watering reminders
          based on a reference <strong>database</strong>.
        </p>
        <p className="text-justify">
          I primarily focused on front-end development, utilizing
          <strong> JavaScript </strong>
          with <strong>React</strong> as the main technologies. Additionally, I
          implemented the back-end using <strong>Python</strong>. We created a
          plant
          <strong> API</strong> that provided necessary information to users and
          connected it with a custom-built calendar. This integration enabled
          the creation of reminders based on the data provided by our
          <strong> API</strong>.
        </p>
      </div>
      <div>
        <center>
          <img src={GreenCornerPhoto2} className="pl-5 pr-5 pb-5 lg:max-w-4xl rounded-3xl" />
        </center>
      </div>
      </div>
    </div>
  )
}
export default GreenCorner
