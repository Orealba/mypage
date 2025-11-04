import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar = () => {
  const { t } = useTranslation();
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCvDropdownOpen(false);
      }
    };

    if (cvDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cvDropdownOpen]);

  return (
    <div>
      <nav className="pl-12 navbar__large">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="flex items-center gap-4">
            <div
              className="hidden w-full md:block md:w-auto text-lg"
              id="navbar-solid-bg">
              <ul className="flex flex-col font-medium pl-2 mt-4 rounded-lg bg-gray-300 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                <li>
                  <a
                    href="#home-section"
                    className="block navbar__home"
                    aria-current="page">
                    {t('nav.home')}
                  </a>
                </li>
                <li>
                  <a
                    href="#WhoamI-section"
                    className="block">
                    {t('nav.who')}
                  </a>
                </li>
                <li>
                  <a
                    href="#works-section"
                    className="block">
                    {t('nav.works')}
                  </a>
                </li>
                <li
                  className="relative"
                  ref={dropdownRef}>
                  <button
                    onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
                    className="w-full text-left md:w-auto flex items-center">
                    {t('nav.cv')}
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform ${
                        cvDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {cvDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700">
                      <a
                        href="/documents/OrealbaSorianoDev.pdf"
                        download
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg"
                        onClick={() => setCvDropdownOpen(false)}>
                        {t('nav.cvDeveloper')}
                      </a>
                      <a
                        href="/documents/OrealbaSorianoJournalist.pdf"
                        download
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 last:rounded-b-lg"
                        onClick={() => setCvDropdownOpen(false)}>
                        {t('nav.cvJournalist')}
                      </a>
                    </div>
                  )}
                </li>
                <li>
                  <a
                    href="#contact-section"
                    className="block ">
                    {t('nav.contact')}
                  </a>
                </li>
              </ul>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
