import React from 'react'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <div className="row">
      <div className="col-md-6"></div>
      <div className="col-md-6">
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inlin-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className=" " id="navbar-default">
              <ul className="flex md:flex-row md:space-x-8 navbar__large">
                <li>
                  <a href="#" className="navbar__home" aria-current="page">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Who am I?</a>
                </li>
                <li>
                  <a href="#" className=" ">
                    My works
                  </a>
                </li>

                <li>
                  <a href="#" className=" ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default Navbar
