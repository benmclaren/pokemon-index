import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageProps {
  language: string;
  switchLanguage: (lang: any) => void;
}

const defaultLanguageContext: LanguageProps = {
  language: 'english',
  switchLanguage: () => {}, 
};

const LanguageContext = createContext<LanguageProps>(defaultLanguageContext);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const contextValue = { language, switchLanguage };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
