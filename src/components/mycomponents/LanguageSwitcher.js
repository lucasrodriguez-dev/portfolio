import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <a onClick={toggleLanguage} style={buttonStyle}>
            {language === "en" ? "ES" : "EN"}
        </a>
    );
};

const buttonStyle = {
    padding: "0",
    background: "none",
    cursor: "pointer",
    color: "var(--text)"
};

export default LanguageSwitcher;