import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import CartosApp from '../CartosApp';
import Tito from '../Tito/Tito';
import Magazine from '../Magazine/Magazine';
import Redes from '../Redes/Redes';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: Header, id: 'header' },
    { component: Profile, id: 'profile' },
    { component: CartosApp, id: 'cartosapp' },
    { component: Tito, id: 'tito' },
    { component: Magazine, id: 'magazine' },
    { component: Redes, id: 'redes' },
    { component: Contact, id: 'contact' },
  ];

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    let isScrolling = false;
    const handleWheel = (e) => {
      if (isScrolling) return;

      e.preventDefault();
      isScrolling = true;

      if (e.deltaX > 0 || (e.deltaX === 0 && e.deltaY > 0)) {
        nextSlide();
      } else {
        prevSlide();
      }

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const slideToHash = {
      0: 'home-section',
      1: 'WhoamI-section',
      2: 'works-section',
      3: 'works-section',
      4: 'works-section',
      5: 'works-section',
      6: 'contact-section',
    };

    const hash = slideToHash[currentSlide];
    if (hash && window.location.hash !== `#${hash}`) {
      window.history.replaceState(null, null, `#${hash}`);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const hashToSlide = {
        'home-section': 0,
        'WhoamI-section': 1,
        'works-section': 2,
        'contact-section': 6,
      };

      const slideIndex = hashToSlide[hash];
      if (slideIndex !== undefined) {
        setCurrentSlide(slideIndex);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <div
              key={slide.id}
              className="carousel-slide">
              <SlideComponent />
            </div>
          );
        })}
      </div>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-indicator ${
              currentSlide === index ? 'active' : ''
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="carousel-nav-button carousel-nav-prev"
        onClick={prevSlide}
        aria-label="Previous slide">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="carousel-nav-button carousel-nav-next"
        onClick={nextSlide}
        aria-label="Next slide">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {currentSlide === slides.length - 1 && <Footer />}
    </div>
  );
};

export default Carousel;
