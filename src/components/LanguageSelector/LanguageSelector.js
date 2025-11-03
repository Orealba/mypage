import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => changeLanguage('en')}
        className={`p-1 rounded transition-all hover:scale-110 text-2xl ${
          i18n.language === 'en' ||
          i18n.language === 'en-US' ||
          i18n.language === 'en-GB'
            ? ''
            : 'opacity-70 hover:opacity-100'
        }`}
        title="English">
        🇬🇧
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`p-1 rounded transition-all hover:scale-110 text-2xl ${
          i18n.language === 'es' || i18n.language === 'es-ES'
            ? ''
            : 'opacity-70 hover:opacity-100'
        }`}
        title="Español">
        🇪🇸
      </button>
    </div>
  );
};

export default LanguageSelector;
