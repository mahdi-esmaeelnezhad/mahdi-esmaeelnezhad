import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Dict, type Lang } from './translations';

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}

const I18nContext = createContext<I18nValue | null>(null);

function getInitialLang(): Lang {
  const saved = localStorage.getItem('lang');
  if (saved && saved in translations) return saved as Lang;
  const browser = navigator.language.slice(0, 2);
  if (browser in translations) return browser as Lang;
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem('lang', next);
    document.documentElement.lang = next;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
