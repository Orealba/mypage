import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import cartos from '../assets/images/photos/cartos.png';
import cartosapp from '../assets/images/photos/cartosApp.png';

const CartosApp = () => {
  const { t } = useTranslation();

  return (
    <div
      id="works-section"
      className="bg-mybG shadow-myShadow">
      <div className="container mx-auto">
        <h1 className="text-center pt-10 font-semibold sm:text-5xl text-myGrey">
          {t('works.title')}
        </h1>
        <h3 className="pl-8 pb-5 sm:text-3xl font-semibold text-myGrey">
          {t('works.programming')}
        </h3>
        <h4 className="pl-8 pb-5 sm:text-2xl font-semibold text-myGrey">
          <a
            href="https://cartos-app.com/"
            target="_blank"
            rel="noopener noreferrer">
            {t('cartos.title')}
          </a>
        </h4>

        {/* Fila 1: texto izquierda, imagen derecha */}
        <div className="p-5">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 text-md md:pr-4">
              <p className="text-justify pb-1">
                <Trans
                  i18nKey="cartos.text1"
                  components={{ strong: <strong /> }}
                />
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
                  className="w-full max-w-xl rounded-3xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Fila 2: imagen izquierda, texto derecha */}
        <div className="px-8 ">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 order-last md:order-first">
              <a
                href="https://cartos-app.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  alt="greenthecorner"
                  src={cartosapp}
                  className="w-full max-w-xl rounded-3xl"
                />
              </a>
            </div>
            <div className="md:w-1/2 text-md">
              <p className="text-justify">
                <Trans
                  i18nKey="cartos.text2"
                  components={{ strong: <strong /> }}
                />
              </p>
            </div>
          </div>
          <div className="text-center ">
            <a
              href="https://cartos-app.com/"
              target="_blank"
              rel="noopener noreferrer">
              <button
                type="button"
                className="my-10 text-myGrey border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                {t('cartos.button')}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartosApp;
