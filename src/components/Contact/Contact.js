import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from '../Form/Form';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div
      id="contact-section"
      className="px-4 py-8 sm:px-8 md:p-12 bg-mybG shadow-myShadow">
      <div className="container mx-auto">
        <div>
          <h4 className="text-center pt-6 sm:pt-10 font-semibold text-4xl sm:text-5xl text-myGrey mb-6 sm:mb-12">
            {t('contact.title')}
          </h4>

          <div className="flex justify-center">
            <div className="w-full max-w-7xl">
              <div className="w-full border-2 border-myWine flex flex-col lg:flex-row gap-0 items-stretch">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
