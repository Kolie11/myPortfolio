import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('de'); // 'de' pour Allemand, 'en' pour Anglais

    // Fonction de traduction simple
    const t = (deText, enText) => {
        return lang === 'de' ? deText : enText;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);