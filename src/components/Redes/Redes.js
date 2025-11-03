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
          Redes Sociales
        </h4>

        {/* Fila: texto izquierda, imagen derecha */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 text-md">
              <p className="text-justify pb-5">
                {/* Reemplaza este texto por el de tu proyecto Redes Sociales */}
                Aquí va la descripción de tu proyecto de Redes Sociales. Puedes
                detallar objetivos, tecnologías y resultados.
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
                Redes Sociales
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redes;
