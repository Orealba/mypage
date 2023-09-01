import React from 'react';
import Form from './Form';

import ContactPhoto from '../images/ContactPhoto.jpg';

const Contact = () => {
  return (
    <div id="contact-section" className="p-12 bg-mybG shadow-myShadow ">
      <div className="container mx-auto ">
        <div>
          <h4 className="text-center pt-10 font-semibold  sm:text-5xl text-myGrey">
            Shall we have a coffee?
          </h4>

          <div className="flex flex-row">
            <div className="border-2 flex w-full flex-nowrap border-myWine my-12">
              <div className="w-full m-8 p-2 border-2  border-myWine ">
                <Form />
              </div>
            </div>

            <div className="hidden lg:block w-full">
              <img
                alt="contactForm"
                src={ContactPhoto}
                className="none hidden md:block max-w-screen-sm my-12 "
              />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
