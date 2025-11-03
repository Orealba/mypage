import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import tito from '../../assets/images/photos/tito.png';

const Tito = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-mybG shadow-myShadow">
      <div className="container mx-auto">
        <h4 className="pl-8 pb-5 sm:text-2xl font-semibold pt-8 text-myGrey">
          {t('tito.title')}
        </h4>

        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 text-md md:pr-6">
              <p className="text-justify">
                <Trans
                  i18nKey="tito.text"
                  components={{ strong: <strong /> }}
                />
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
              {t('tito.button')}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Tito;
