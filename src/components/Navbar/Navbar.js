import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar = () => {
  const { t } = useTranslation();
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // No cerrar si el click es en un botón de descarga de PDF
      if (event.target.closest('button[data-pdf-download]')) {
        return;
      }

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCvDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(
          'button[data-collapse-toggle="navbar-solid-bg"]',
        ) &&
        !mobileDropdownRef.current?.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (cvDropdownOpen || mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cvDropdownOpen, mobileMenuOpen]);

  return (
    <div>
      <nav className="pl-4 sm:pl-12 navbar__large relative">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="relative md:hidden">
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-solid-bg"
              aria-expanded={mobileMenuOpen}>
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
            {mobileMenuOpen && (
              <div
                ref={mobileMenuRef}
                className="absolute left-12 top-0 mt-0 w-56 bg-gray-300 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700">
                <ul className="flex flex-col font-medium p-2 text-lg">
                  <li>
                    <a
                      href="#home-section"
                      className="block px-4 py-2 rounded hover:bg-gray-400 navbar__home"
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current="page">
                      {t('nav.home')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#WhoamI-section"
                      className="block px-4 py-2 rounded hover:bg-gray-400"
                      onClick={() => setMobileMenuOpen(false)}>
                      {t('nav.who')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#works-section"
                      className="block px-4 py-2 rounded hover:bg-gray-400"
                      onClick={() => setMobileMenuOpen(false)}>
                      {t('nav.works')}
                    </a>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
                      className="w-full text-left px-4 py-2 rounded hover:bg-gray-400 flex items-center justify-between">
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
                      <div
                        ref={mobileDropdownRef}
                        className="mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                        <button
                          type="button"
                          data-pdf-download
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg cursor-pointer"
                          onClick={async (e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            const pdfUrl = '/documents/OrealbaSorianoDev.pdf';
                            const fileName = 'OrealbaSorianoDev.pdf';

                            try {
                              // Intentar descargar usando fetch
                              const response = await fetch(pdfUrl);
                              if (!response.ok)
                                throw new Error('Failed to fetch');

                              const blob = await response.blob();
                              const url = window.URL.createObjectURL(blob);

                              // Crear link temporal
                              const link = document.createElement('a');
                              link.href = url;
                              link.download = fileName;
                              link.style.display = 'none';

                              // Agregar al DOM y hacer click
                              document.body.appendChild(link);

                              // Usar requestAnimationFrame para asegurar que el click funcione
                              requestAnimationFrame(() => {
                                link.click();

                                // Limpiar después de un delay
                                setTimeout(() => {
                                  document.body.removeChild(link);
                                  window.URL.revokeObjectURL(url);
                                }, 200);
                              });
                            } catch (error) {
                              console.error('Error downloading PDF:', error);
                              // Fallback: abrir en nueva pestaña
                              window.open(pdfUrl, '_blank');
                            }

                            // Cerrar el menú después de un delay
                            setTimeout(() => {
                              setCvDropdownOpen(false);
                              setMobileMenuOpen(false);
                            }, 500);
                          }}>
                          {t('nav.cvDeveloper')}
                        </button>
                        <button
                          type="button"
                          data-pdf-download
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 last:rounded-b-lg cursor-pointer"
                          onClick={async (e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            const pdfUrl =
                              '/documents/OrealbaSorianoJournalist.pdf';
                            const fileName = 'OrealbaSorianoJournalist.pdf';

                            try {
                              // Intentar descargar usando fetch
                              const response = await fetch(pdfUrl);
                              if (!response.ok)
                                throw new Error('Failed to fetch');

                              const blob = await response.blob();
                              const url = window.URL.createObjectURL(blob);

                              // Crear link temporal
                              const link = document.createElement('a');
                              link.href = url;
                              link.download = fileName;
                              link.style.display = 'none';

                              // Agregar al DOM y hacer click
                              document.body.appendChild(link);

                              // Usar requestAnimationFrame para asegurar que el click funcione
                              requestAnimationFrame(() => {
                                link.click();

                                // Limpiar después de un delay
                                setTimeout(() => {
                                  document.body.removeChild(link);
                                  window.URL.revokeObjectURL(url);
                                }, 200);
                              });
                            } catch (error) {
                              console.error('Error downloading PDF:', error);
                              // Fallback: abrir en nueva pestaña
                              window.open(pdfUrl, '_blank');
                            }

                            // Cerrar el menú después de un delay
                            setTimeout(() => {
                              setCvDropdownOpen(false);
                              setMobileMenuOpen(false);
                            }, 500);
                          }}>
                          {t('nav.cvJournalist')}
                        </button>
                      </div>
                    )}
                  </li>
                  <li>
                    <a
                      href="#contact-section"
                      className="block px-4 py-2 rounded hover:bg-gray-400"
                      onClick={() => setMobileMenuOpen(false)}>
                      {t('nav.contact')}
                    </a>
                  </li>
                  <li className="px-4 py-2">
                    <LanguageSelector />
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div
              className="navbar-desktop-menu md:w-auto text-lg"
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
