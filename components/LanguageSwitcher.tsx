'use client';

import React from 'react';
import { useLanguage } from '../components/LanguageState';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

const handleLanguageChange = (newLanguage) => {
  switchLanguage(newLanguage);
};

  return (
    <details className="dropdown">
    <summary className="m-1 btn">Select Language</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li>
        <a onClick={() => handleLanguageChange('english')} className={language === 'english' ? 'active' : ''}>
          English
        </a>
      </li>
      <li>
        <a onClick={() => handleLanguageChange('japanese')} className={language === 'japanese' ? 'active' : ''}>
          Japanese
        </a>
      </li>
      <li>
        <a onClick={() => handleLanguageChange('chinese')} className={language === 'chinese' ? 'active' : ''}>
          Chinese
        </a>
      </li>
      <li>
        <a onClick={() => handleLanguageChange('french')} className={language === 'french' ? 'active' : ''}>
          French
        </a>
      </li>
    </ul>
  </details>
  );
};

export default LanguageSwitcher;
