import React, { createContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const browserLanguage = navigator.language.startsWith("en") ? "en" : "es";

  const [language, setLanguage] = useState(localStorage.getItem("language") || browserLanguage);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};