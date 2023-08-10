import React from 'react'

const Calendar = () => {
  return (
    <div className="container-fluid bg-mybG">
      <div>
        <h4 className="pl-8 pb-5 pt-5 sm:text-2xl font-semibold text-myGrey">
          MY CALENDAR
        </h4>
      </div>
      <div>
        <p className="pl-12 pr-20 pb-5">
          I have developed a highly functional calendar that allows users to
          efficiently and organizedly add, delete, and edit events. On the
          frontend side, I have utilized my expertise in <strong> React</strong>
          . I used <strong> CSS</strong>, along with the{' '}
          <strong> Bootstrap framework</strong>, to style and enhance the
          appearance of the calendar, providing a visually pleasing and
          <strong> user-friendly experience</strong>. For the backend, I chose
          to employ <strong> SQLite </strong>
          and <strong>Python</strong> to handle the server logic. This enabled
          the effective implementation of functionalities such as saving,
          retrieving, updating, and deleting events in the calendar.
        </p>
      </div>
    </div>
  )
}
export default Calendar
