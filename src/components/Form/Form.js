import GitIcon from '../../assets/images/icons/git.svg';
import LinkIcon from '../../assets/images/icons/link.svg';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import instagram from '../../assets/images/icons/instagram.svg';
import { useTranslation } from 'react-i18next';
import ContactPhoto from '../../assets/images/photos/ContactPhoto.jpg';

const Form = () => {
  const { t } = useTranslation();
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
    <div className="flex flex-col lg:flex-row items-stretch">
      <section className="bg-white dark:bg-gray-900 flex-1">
        <div className="w-full max-w-full lg:max-w-screen-md">
          <form
            ref={form}
            onSubmit={sendEmail}
            action="#"
            className="space-y-6 p-4 sm:p-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-1.5 text-xs font-medium text-gray-900 dark:text-gray-300">
                {t('contact.email')}
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder={t('contact.emailPlaceholder')}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-1.5 text-xs font-medium text-gray-900 dark:text-gray-300">
                {t('contact.subject')}
              </label>
              <input
                type="text"
                name="user_subject"
                id="subject"
                className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder={t('contact.subjectPlaceholder')}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-1.5 text-xs font-medium text-gray-900 dark:text-gray-400">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="user_text"
                rows="5"
                className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder={t('contact.messagePlaceholder')}></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-center my-4 text-myGrey border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                {t('contact.button')}
              </button>
              {showSuccessMessage && (
                <p className="text-myWine">{t('contact.success')}</p>
              )}
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/Orealba" // Reemplaza esto con la URL que desees
                target="_blank" // Esto abrirá la URL en una nueva pestaña
                rel="noopener noreferrer" // Buena práctica de seguridad para abrir enlaces externos
                className="hover:opacity-100 hover:scale-110 opacity-60 transition-all"
                title="GitHub">
                <img
                  alt="icon1"
                  src={GitIcon}
                  className="  "></img>
              </a>

              <a
                href="https://www.linkedin.com/in/orealba/" // Reemplaza esto con la URL que desees
                target="_blank" // Esto abrirá la URL en una nueva pestaña
                rel="noopener noreferrer" // Buena práctica de seguridad para abrir enlaces externos
                className="hover:opacity-100 hover:scale-110 opacity-60 transition-all"
                title="LinkedIn">
                <img
                  alt="icon2"
                  src={LinkIcon}></img>
              </a>
              <a
                href="https://www.instagram.com/ores.tennisjournal/" // Reemplaza esto con la URL que desees
                target="_blank" // Esto abrirá la URL en una nueva pestaña
                rel="noopener noreferrer" // Buena práctica de seguridad para abrir enlaces externos
                className="hover:opacity-100 hover:scale-110 opacity-60 transition-all"
                title="Instagram">
                <img
                  alt="icon2"
                  src={instagram}></img>
              </a>
            </div>
          </form>
        </div>
      </section>
      <div
        className="hidden lg:flex items-start justify-start flex-shrink-0 lg:w-1/2"
        style={{ marginTop: '-2.5rem' }}>
        <img
          alt="contactForm"
          src={ContactPhoto}
          className="h-full object-cover w-full"
          style={{ transform: 'scale(0.8)', maxWidth: '100%' }}
        />
      </div>
    </div>
  );
};

export default Form;
