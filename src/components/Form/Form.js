import GitIcon from '../../assets/images/icons/git.svg';
import LinkIcon from '../../assets/images/icons/link.svg';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_MY_SERVICE_ID_KEY}`,
        `${process.env.REACT_APP_MY_TEMPLATE_ID_KEY}`,
        form.current,
        `${process.env.REACT_APP_MY_PUBLIC_ID_KEY}`,
      )
      .then(
        (result) => {
          console.log(result.text);

          setShowSuccessMessage(true);
          form.current.reset();
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000); // 8000 milisegundos (8 segundos)
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-md">
          <form
            ref={form}
            onSubmit={sendEmail}
            action="#"
            className="space-y-8 ">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="email..."
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                name="user_subject"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let me know how I can help you..."
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                name="user_text"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-center my-4 text-myGrey border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Send message
              </button>
              {showSuccessMessage && (
                <p className="text-myWine">Form submitted successfully.</p>
              )}
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/Orealba" // Reemplaza esto con la URL que desees
                target="_blank" // Esto abrirá la URL en una nueva pestaña
                rel="noopener noreferrer" // Buena práctica de seguridad para abrir enlaces externos
                className="hover:opacity-100 hover:scale-110 opacity-60 transition-all">
                <img
                  alt="icon1"
                  src={GitIcon}
                  className="  "></img>
              </a>

              <a
                href="https://www.linkedin.com/in/orealba/" // Reemplaza esto con la URL que desees
                target="_blank" // Esto abrirá la URL en una nueva pestaña
                rel="noopener noreferrer" // Buena práctica de seguridad para abrir enlaces externos
                className="hover:opacity-100 hover:scale-110 opacity-60 transition-all">
                <img
                  alt="icon2"
                  src={LinkIcon}></img>
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
