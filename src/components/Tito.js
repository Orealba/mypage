import React from 'react'
import tito from '../images/tito.png'


const Tito = () => {
  return (
    <div className="bg-myBgGrey container">
      <div>
        <h4 className="pl-8 pb-5 sm:text-2xl font-semibold pt-8 text-myGrey">
          TITO FREE
        </h4>
      </div>

      <div className="grid-col-12 p-12 text-md lg:text-lg">
        <p className="text-justify">
          As a <strong>React frontend developer</strong>, I am collaborating
          with a company to create and enhance their website. My role is to
          build and maintain the user interface, ensuring an optimal user
          experience. I work closely with other members of the development team,
          including designers, backend developers, and other frontend
          developers. Develop the website's user interface using{' '}
          <strong>React, JavaScript, HTML, and CSS</strong>.
        </p>
      </div>
      <div>
        <center>
          <img src={tito} className="pl-5 pr-5 pb-5 max-w-4xl" />
        </center>
      </div>
      <div className="text-center">
        <a href="https://github.com/Orealba?tab=repositories">
          <button
            type="button"
            className="my-10 text-myGrey  border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-2.5   dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            More
          </button>
        </a>
      </div>
    </div>
  )
}
export default Tito
