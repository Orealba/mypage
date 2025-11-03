import React from 'react';
import './Header.css';
import headerBackground from '../../assets/images/photos/headerBackground.webp';
import Navbar from '../Navbar/Navbar.js';
import { useTranslation, Trans } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        id="home-section"
        className="flex bg-no-repeat bg-cover h-48 md:h-[26rem] lg:h-[60rem] shadow-myShadow header__background"
        style={{ backgroundImage: `url(${headerBackground})` }}>
        <div className="mt-8">
          <Navbar />
        </div>
        <div>
          <h1 className="text-3xl text-myWine pl-14 font-alata text-start md:text-5xl md:pl-20 md:pt-20 lg:text-6xl lg:pt-60 lg:pl-16 xl:text-7xl xl:mt-28">
            {t('header.title')}
          </h1>
        </div>
        <div>
          <h2 className="text-md text-start font-alata text-myGrey pl-16 md:text-2xl md:pl-20 lg:text-4xl xl:text-5xl ">
            <Trans
              i18nKey="header.subtitle"
              components={{ br: <br /> }}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
