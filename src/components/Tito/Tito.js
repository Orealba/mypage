import React from 'react';
import tito from '../../assets/images/photos/tito.png';

const Tito = () => {
  return (
    <div className="bg-mybG shadow-myShadow">
      <div className="container mx-auto">
        <h4 className="pl-8 pb-5 sm:text-2xl font-semibold pt-8 text-myGrey">
          TITO FREE
        </h4>

        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 text-md md:pr-6">
              <p className="text-justify">
                As a <strong>React frontend developer</strong>, I collaborated
                for a period with this company to create and improve their
                website. My main role was to{' '}
                <strong>build and maintain the user interface</strong>, ensuring
                an optimal experience that was both visually appealing and
                highly functional. My responsibilities included developing the
                website's interface using{' '}
                <strong>React, JavaScript, HTML, CSS</strong>
                (Tailwind), Vite, and Next.js. I worked with designers to
                translate high-fidelity <strong>Figma</strong> designs into
                reusable React components, ensuring the site met accessibility
                and usability standards. I{' '}
                <strong>integrated backend APIs</strong> to fetch and send data,
                optimized site performance for fast load times, and resolved
                technical issues that arose during development.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                alt="titophoto"
                src={tito}
                className="w-full max-w-2xl rounded-3xl border border-gray-200"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://github.com/Orealba?tab=repositories"
            target="_blank"
            rel="noopener noreferrer">
            <button
              type="button"
              className="my-10 text-myGrey border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              More in GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Tito;
