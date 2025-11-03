import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import magazine from '../../assets/images/photos/magazines.webp';

const Magazine = () => {
  const { t } = useTranslation();

  return (
    <div
      id="works-section"
      className="bg-mybG shadow-myShadow">
      <div className="container mx-auto ">
        <h4 className="pl-8 pb-5 mt-8 sm:text-2xl font-semibold text-myGrey">
          {t('works.journalistic')}
        </h4>
        <h4 className="pl-8 pb-5 sm:text-2xl font-semibold text-myGrey">
          {t('magazine.title')}
        </h4>

        {/* Fila: imagen izquierda, texto derecha */}
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <a
                href="https://www.behance.net/orealbasoriano"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  alt="magazine"
                  src={magazine}
                  className="w-full max-w-2xl rounded-3xl"
                />
              </a>
            </div>
            <div className="md:w-1/2 text-md">
              <p className="text-justify pb-5">
                <Trans
                  i18nKey="magazine.text"
                  components={{ strong: <strong /> }}
                />
              </p>
            </div>
          </div>
          <div className="text-center mt-25">
            <a
              href="https://www.behance.net/orealbasoriano"
              target="_blank"
              rel="noopener noreferrer">
              <button
                type="button"
                className="my-10 text-myGrey border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                {t('magazine.button')}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
