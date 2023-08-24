import React from 'react'
import Form from "./Form"

import ContactPhoto from "../images/ContactPhoto.jpg"

const Contact = () => {
  return (
    <div className="bg-mybG shadow-myShadow ">
      <div className="container mx-auto ">
        <div>
          <h4 className="text-center pt-10 font-semibold  sm:text-5xl text-myGrey">
            Shall we have a coffee?
          </h4>
          <div className="flex ">

            <div className='border-2  border-myWine my-12' >
              <div className='m-8 p-2 border-2  border-myWine '>
                <Form />
              </div>

            </div>
            <div>
              <img src={ContactPhoto} className="max-w-screen-sm my-12 " />
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
