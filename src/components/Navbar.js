import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="pl-12 navbar__large">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto text-lg"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium pl-2 mt-4 rounded-lg bg-gray-300 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a
                  href="#home-section"
                  className="block navbar__home"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#WhoamI-section" className="block">
                  Who am I?
                </a>
              </li>
              <li>
                <a href="#works-section" className="block">
                  My works
                </a>
              </li>
              <li>
                <a href="#contact-section" className="block ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
