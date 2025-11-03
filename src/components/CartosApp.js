import React from 'react';

import cartos from '../assets/images/photos/cartos.png';
import cartosapp from '../assets/images/photos/cartosApp.png';

const CartosApp = () => {
  return (
    <div
      id="works-section"
      className="bg-mybG shadow-myShadow">
      <div className="container mx-auto">
        <h1 className="text-center pt-10 font-semibold sm:text-5xl text-myGrey">
          My works
        </h1>
        <h3 className="pl-8 pb-5 sm:text-3xl font-semibold text-myGrey">
          PROGRAMMING PROJECTS
        </h3>
        <h4 className="pl-8 pb-5 sm:text-2xl font-semibold text-myGrey">
          <a
            href="https://cartos-app.com/"
            target="_blank"
            rel="noopener noreferrer">
            CARTOS APP
          </a>
        </h4>

        {/* Fila 1: texto izquierda, imagen derecha */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 text-md">
              <p className="text-justify pb-5">
                <strong>Cartos</strong> is a <strong>web application</strong> I
                developed to make managing expenses and income intuitive and
                visually engaging. I designed the entire interface myself using{' '}
                <strong>Figma</strong>, organizing the project with agile
                methodologies to ensure efficient progress and quality. It
                allows users to quickly record transactions, schedule future
                payments to avoid missing financial obligations, and view all
                movements in an <strong>interactive calendar</strong> for better
                planning and control. I also created a feature that generates
                automatic summaries with charts that clearly demonstrate which
                categories have incurred the most spending over specified
                periods. I conceived the idea and built the interface using
                <strong> React</strong> and <strong>TypeScript</strong>,
                leveraging
                <strong> Tailwind CSS</strong> and <strong>Flowbite</strong> to
                create a modern, functional, and attractive design, complete
                with <strong>neumorphic effects</strong> that significantly
                enhance the visual experience and overall usability of the
                system.
              </p>
            </div>
            <div className="md:w-1/2">
              <a
                href="https://cartos-app.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  alt="cartosApp"
                  src={cartos}
                  className="w-full max-w-2xl rounded-3xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Fila 2: imagen izquierda, texto derecha */}
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 order-last md:order-first">
              <a
                href="https://cartos-app.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  alt="greenthecorner"
                  src={cartosapp}
                  className="w-full max-w-2xl rounded-3xl"
                />
              </a>
            </div>
            <div className="md:w-1/2 text-md">
              <p className="text-justify">
                On the backend, I collaborated to integrate the app with a
                custom <strong>API</strong> and <strong>Supabase</strong>, where
                I managed <strong>authentication</strong>,{' '}
                <strong>security</strong>, and
                <strong> protected session handling</strong> to safeguard user
                data privacy. I also handled version control and collaboration
                through <strong>Git</strong>, enabling smooth and continuous
                development. The project includes advanced form handling
                techniques, secure routes for different access levels, and an
                optimized user experience designed to simplify daily financial
                management. The basic version of the app is already available,
                and I continue to expand its features and make improvements over
                time.
              </p>
            </div>
          </div>
          <div className="text-center mt-25">
            <a
              href="https://cartos-app.com/"
              target="_blank"
              rel="noopener noreferrer">
              <button
                type="button"
                className="my-10 text-myGrey border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Go to Cartos App
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartosApp;
