import React from 'react';

// Cambia esta imagen por la tuya
import redes from '../../assets/images/photos/redes.png';

const Redes = () => {
  return (
    <div
      id="works-section"
      className="bg-mybG shadow-myShadow">
      <div className="container mx-auto ">
        <h4 className="pl-8 pb-5 mt-8 sm:text-2xl font-semibold text-myGrey">
          MY SOCIAL MEDIA
        </h4>

        {/* Fila: texto izquierda, imagen derecha */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 text-md">
              <p className="text-justify pb-5">
                {/* Reemplaza este texto por el de tu proyecto Redes Sociales */}
                A few months ago, I started{' '}
                <strong>Ore's Tennis Journal </strong>, my personal Instagram
                project where I combine <strong> my passion for tennis</strong>{' '}
                with my
                <strong> creative side</strong>. Here, I am not only the boss
                but also the
                <strong>
                  {' '}
                  director, producer, and editor: I record, edit, and create all
                  the content myself
                </strong>
                . Little by little, I am building a community of tennis fans
                like me, sharing news, analysis, and curiosities about the sport
                I love. Every post is a small step of learning and growth, where
                I apply both technical skills and sports passion{' '}
                <strong>to keep the audience connected and entertained</strong>.
                It's an experiment full of drive and eagerness to keep
                improving!
              </p>
            </div>
            <div className="md:w-1/2">
              <a
                href="https://www.instagram.com/ores.tennisjournal/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  alt="redes"
                  src={redes}
                  className="w-full max-w-2xl rounded-3xl border border-gray-200"
                />
              </a>
            </div>
          </div>
          <div className="text-center mt-25">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer">
              <button
                type="button"
                className="my-10 text-myGrey border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
               Ore's Tennis Journal
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redes;
