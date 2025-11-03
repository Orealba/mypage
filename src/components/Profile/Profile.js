import React from 'react';
import './Profile.css';
import OrealbaPhoto from '../../assets/images/photos/OrealbaS.jpeg';
import { useTranslation, Trans } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div
      id="WhoamI-section"
      className="bg-mybG shadow-myShadow ">
      <div className="container mx-auto">
        <h4 className="text-center mt-20 font-semibold  sm:text-5xl text-myGrey">
          {t('profile.title')}
        </h4>

        <div className="md:flex">
          <div className="grid-col-12 gap-12">
            <img
              alt="foto"
              src={OrealbaPhoto}
              className="mt-5 ml-8 rounded-full max-w-xs col-span-2 xl:ml-16 max-h-full sm:max-w-xs md:place-content-center lg:max-w-sm xl:max-w-md 2xl:max-w-md"
            />
          </div>
          <div className="text-justify text-md mt-20 pl-12 pr-20">
            <p>
              <Trans
                i18nKey="profile.text1"
                components={{ strong: <strong /> }}
              />
            </p>

            <p className="mt-12">
              <Trans
                i18nKey="profile.text2"
                components={{ strong: <strong /> }}
              />
            </p>

            <p className="mt-12">
              <Trans
                i18nKey="profile.text3"
                components={{ strong: <strong /> }}
              />
            </p>
          </div>
        </div>
        <div className="pt-12">
          <div className="text-center py-12">
            <a
              href="#contact-section"
              className="text-myGrey  border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-3 dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              {t('profile.button')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
