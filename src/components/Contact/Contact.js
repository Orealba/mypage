import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from '../Form/Form';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div
      id="contact-section"
      className="p-12 bg-mybG shadow-myShadow">
      <div className="container mx-auto">
        <div>
          <h4 className="text-center pt-10 font-semibold sm:text-5xl text-myGrey">
            {t('contact.title')}
          </h4>

          <div className="flex flex-row">
            <div className="flex w-full flex-nowrap my-12">
              <div className="w-full mt-15 mx-40 border-2 border-myWine flex-row gap-0 items-stretch">
                <Form />
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
