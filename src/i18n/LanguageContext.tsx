"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { Language, Translations } from "./types";
import { es } from "./es";
import { en } from "./en";

const dictionaries: Record<Language, Translations> = { es, en };

const STORAGE_KEY = "site-language";

interface LanguageContextValue {
    language: Language;
    setLanguage: (language: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("es");

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "es" || stored === "en") {
            setLanguageState(stored);
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (next: Language) => {
        setLanguageState(next);
        window.localStorage.setItem(STORAGE_KEY, next);
    };

    const value = useMemo(
        () => ({ language, setLanguage, t: dictionaries[language] }),
        [language]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
