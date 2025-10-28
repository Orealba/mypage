import React from 'react';
import GreenCornerPhoto1 from '../../assets/images/photos/GreenCornerPhoto1.png';
import GreenCornerPhoto2 from '../../assets/images/photos/GreenCornerPhoto2.png';

const GreenCorner = () => {
  return (
    <div
      id="works-section"
      className="bg-myBgGrey shadow-myShadow">
      <div className="container mx-auto">
        <h4 className="text-center pt-10 font-semibold sm:text-5xl text-myGrey">
          My works
        </h4>
        <h4 className="pl-8 pb-5 sm:text-2xl font-semibold text-myGrey">
          CARTOS APP
        </h4>

        {/* Fila 1: texto izquierda, imagen derecha */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 text-md">
              <p className="text-justify pb-5">
                I developed a web application to help users manage expenses and
                income in a simple, visual way—allowing them to record
                transactions, schedule payments, and view all their data on an
                interactive calendar. I also designed automatic summaries with
                charts to show where most spending has occurred over a selected
                period. I came up with the idea and built the interface using{' '}
                <strong>React </strong>
                and <strong>TypeScript</strong>, with{' '}
                <strong>Tailwind CSS </strong>
                and <strong>Flowbite</strong> to achieve a modern, functional
                design.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                alt="greencorner"
                src={GreenCornerPhoto1}
                className="w-full max-w-2xl rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Fila 2: imagen izquierda, texto derecha */}
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 order-last md:order-first">
              <img
                alt="greenthecorner"
                src={GreenCornerPhoto2}
                className="w-full max-w-2xl rounded-3xl"
              />
            </div>
            <div className="md:w-1/2 text-md">
              <p className="text-justify">
                On the backend, I collaborated to connect the app with a custom
                <strong>API </strong>
                and <strong>Supabase</strong>, handling
                <strong> authentication</strong>, <strong> security</strong>,
                and protected user
                <strong> sessions</strong>. The project includes advanced form
                management,
                <strong> secure routes</strong>, and an optimized
                <strong> user experience</strong>, with access currently
                restricted while we finish integrating categories and advanced
                features. Development is still ongoing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GreenCorner;
