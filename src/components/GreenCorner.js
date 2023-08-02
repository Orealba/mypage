import React from 'react'

import GreenCornerPhoto1 from '../images/GreenCornerPhoto1.png'
import GreenCornerPhoto2 from '../images/GreenCornerPhoto2.png'
const GreenCorner = () => {
  return (
    <div>
      <div className="greenCorner__background ">
        <div className="row">
          <div className="col-md-12">
            <h4 className="greenCorner__tittle"> My works</h4>
            <h4 className="greenCorner__tittle__GC">GREEN CORNER</h4>
          </div>
        </div>
        <div className="row greenCorner__GC__photos">
          <div className="col-md-8">
            <img src={GreenCornerPhoto1} className="greenCorner__GC__photo1" />
          </div>

          <div className="row">
            <div className="col-md-12">
              <img
                src={GreenCornerPhoto2}
                className="greenCorner__GC__photo2"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <article className="format lg:format-lg">
            <p className="lead greenCorner__paragraph1">
              This project was a collaborative effort to create a web
              application from scratch. Its purpose was to allow users to
              create, save, and edit their own plant collections, providing
              personalized watering reminders based on a reference database.
            </p>
            <p className="lead greenCorner__paragraph1">
              I primarily focused on front-end development, utilizing JavaScript
              with React as the main technologies. Additionally, I implemented
              the back-end using Python. We created a plant API that provided
              necessary information to users and connected it with a
              custom-built calendar. This integration enabled the creation of
              reminders based on the data provided by our API.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
export default GreenCorner
