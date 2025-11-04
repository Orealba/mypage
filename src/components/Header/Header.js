import React from 'react';
import './Header.css';
import headerBackground from '../../assets/images/photos/headerBackground.webp';
import Navbar from '../Navbar/Navbar.js';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  const title = t('header.title');
  const titleLetters = title.split('').map((letter, index) => (
    <span
      key={index}
      className="header-letter-title inline-block cursor-default"
      style={{ animationDelay: `${index * 0.05}s` }}>
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  const subtitle = t('header.subtitle');
  let letterIndex = 0;
  const subtitleParts = subtitle.split('<br />');
  const subtitleLetters = subtitleParts.map((part, partIndex) => {
    const partLetters = part.split('').map((letter) => {
      const currentIndex = letterIndex++;
      return (
        <span
          key={`subtitle-${partIndex}-${currentIndex}`}
          className="header-letter-subtitle inline-block cursor-default"
          style={{ animationDelay: `${currentIndex * 0.05}s` }}>
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      );
    });

    return (
      <React.Fragment key={`part-${partIndex}`}>
        {partLetters}
        {partIndex < subtitleParts.length - 1 && <br />}
      </React.Fragment>
    );
  });

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
            {titleLetters}
          </h1>
        </div>
        <div>
          <h2 className="text-md text-start font-alata text-myGrey pl-16 md:text-2xl md:pl-20 lg:text-4xl xl:text-5xl ">
            {subtitleLetters}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
