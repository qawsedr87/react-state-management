import React, { createContext, useState } from 'react'

interface IProps {
    children: React.ReactNode;
}

// context 
export interface ILanguageContextProps {
    language: string;
    toggleLang: () => void;
}

export const languageContext = createContext<ILanguageContextProps>({
    language: "JavaScript",
    toggleLang: () => { }
});

const LanguageProvider = ({ children }: IProps) => {
    const [language, setLanguage] = useState<string>("JavaScript");

    const toggleLang = (): void => {
        setLanguage((prevLang) => prevLang === "JavaScript" ? "Java" : "JavaScript");
    }

    const value: ILanguageContextProps = { language, toggleLang };

    return (
        <languageContext.Provider value={value}>{children}</languageContext.Provider>
    );
}

export default LanguageProvider;