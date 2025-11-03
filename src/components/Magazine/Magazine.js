import React from 'react';

// Cambia esta imagen por la tuya
import magazine from '../../assets/images/photos/magazines.webp';

const Magazine = () => {
  return (
    <div
      id="works-section"
      className="bg-mybG shadow-myShadow">
      <div className="container mx-auto ">
        <h4 className="pl-8 pb-5 mt-8 sm:text-2xl font-semibold text-myGrey">
          JOURNALISTIC PROJECTS
        </h4>
        <h4 className="pl-8 pb-5 sm:text-2xl font-semibold text-myGrey">
          MAGAZINES
        </h4>

        {/* Fila: imagen izquierda, texto derecha */}
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <a
                href="https://www.behance.net/orealbasoriano"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  alt="magazine"
                  src={magazine}
                  className="w-full max-w-2xl rounded-3xl"
                />
              </a>
            </div>
            <div className="md:w-1/2 text-md">
              <p className="text-justify pb-5">
                {/* Reemplaza este texto por el de tu proyecto Magazine */}
                As <strong>chief writer and community manager</strong> for specialized magazines,
                I contributed to creating publications for prestigious jewelry
                brands in Spain such as Durán Joyeros, Unión Suiza, Solanes, and
                more. I was responsible for <strong>daily content writing</strong> on diverse
                topics, <strong>constant research for new articles</strong>, and direct
                coordination with brands and clients. I managed social media
                campaigns, wrote blogs on WordPress, conducted interviews, and
                collaborated on <strong>design, layout, and image editing</strong> to achieve
                professional finishes. <strong>Teamwork and attention to detail</strong> were
                essential to deliver high-quality publications with an exclusive
                focus.
              </p>
            </div>
          </div>
          <div className="text-center mt-25">
            <a
              href="https://www.behance.net/orealbasoriano"
              target="_blank"
              rel="noopener noreferrer">
              <button
                type="button"
                className="my-10 text-myGrey border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                My magazines
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
