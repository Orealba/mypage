const Footer = () => {
  return (
    <div>
      <footer className="  m-4 ">
        <div className="flex justify-between w-full max-w-screen-xl mx-auto p-4 md:py-8  ">
          <h4 className="block text-sm text-myWine sm:text-start dark:text-gray-400 pr-2 ">
            © 2023 Designed and created by Orealba Soriano. All Rights Reserved.
          </h4>

          <div className="sm:flex ">
            <ul className="flex items-end flex-wrap  mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 ">
              <li>
                <a
                  href="#home-section"
                  className="mr-4 hover:underline md:mr-6  text-myGrey"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#WhoamI-section"
                  className="mr-4 hover:underline md:mr-6  text-myWine "
                >
                  Who am I?
                </a>
              </li>
              <li>
                <a
                  href="#works-section"
                  className="mr-4 hover:underline md:mr-6  text-myWine "
                >
                  My works
                </a>
              </li>
              <li>
                <a
                  href="#contact-section"
                  className="hover:underline  text-myWine "
                >
                  Contact
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
