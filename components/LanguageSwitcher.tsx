'use client';

import React from 'react';
import { useLanguage } from '../components/LanguageState';

const languages = ['english', 'japanese', 'chinese', 'french']

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    switchLanguage(newLanguage);
  };

  return (
    <details className="dropdown dropdown-end">
    <summary className="m-1 btn">Select Language</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      {languages.map(languageName => (
        <li>
          <a onClick={() => handleLanguageChange(languageName)} className={language === languageName ? 'active' : ''}>
            {languageName}
          </a>
        </li>
      ))}
    </ul>
  </details>
  );
};

export default LanguageSwitcher;
