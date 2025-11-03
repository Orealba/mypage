import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <footer className="m-4 ">
        <div className="flex justify-between w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <h4 className="block text-sm text-myWine sm:text-start dark:text-gray-400 pr-2">
            {t('footer.copyright')}
          </h4>

          <div className="sm:flex">
            <ul className="flex items-end flex-wrap mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="#home-section"
                  className="mr-4 hover:underline md:mr-6 text-myGrey">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a
                  href="#WhoamI-section"
                  className="mr-4 hover:underline md:mr-6 text-myWine">
                  {t('nav.who')}
                </a>
              </li>
              <li>
                <a
                  href="#works-section"
                  className="mr-4 hover:underline md:mr-6 text-myWine">
                  {t('nav.works')}
                </a>
              </li>
              <li>
                <a
                  href="#contact-section"
                  className="hover:underline text-myWine">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
