const Footer = () => {
  return (
    <div>
      <footer class="  m-4 ">
        <div class="flex justify-between w-full max-w-screen-xl mx-auto p-4 md:py-8  ">
          <span class="block text-sm text-gray-500 sm:text-start dark:text-gray-400 pr-2">
            © 2023{' '}
            <a href="https://flowbite.com/" class="hover:underline">
              Designed and created by Orealba Soriano
            </a>
            . All Rights Reserved.
          </span>
          <div class="sm:flex ">
            <ul class="flex items-end flex-wrap  mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 ">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  Who am I?
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  My works
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
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
