import { createContext, useEffect, useState, useContext } from "react";
import { dictionaries } from "../i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [langCode, setLangCode] = useState(() => {
    const savedLang = localStorage.getItem("siteLang");
    return savedLang || "tr";
  });

  useEffect(() => {
    localStorage.setItem("siteLang", langCode);
    document.documentElement.lang = langCode;
  }, [langCode]);

  const switchLanguage = () => {
    setLangCode((prev) => (prev === "tr" ? "en" : "tr"));
  };

  const setLanguage = (code) => {
    if (dictionaries[code]) {
      setLangCode(code);
    } else {
      console.warn(`Desteklenmeyen dil kodu: ${code}`);
    }
  };

  const t = (key, fallback = "") => {
    const dict = dictionaries[langCode] || {};
    const value = key.split(".").reduce((acc, part) => {
      if (acc && typeof acc === "object" && part in acc) {
        return acc[part];
      }
      return undefined;
    }, dict);

    if (typeof value === "string") return value;
    if (fallback) return fallback;
    return key;
  };

  const value = { langCode, switchLanguage, setLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
