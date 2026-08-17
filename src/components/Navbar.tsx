import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n';
import { LANGUAGES } from '../translations';
import { LINKS } from '../data';
import { DownloadIcon } from './Icons';

const NAV_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'contact',
] as const;

type NavId = (typeof NAV_IDS)[number];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [active, setActive] = useState<NavId>('home');
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 3;
      let current: NavId = 'home';
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang)!;

  const label = (id: NavId) => t.nav[id];

  return (
    <>
      <header className="mobile-topbar">
        <a href="#home" className="logo">
          Mahdi<span>.</span>dev
        </a>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </header>

      {menuOpen && <div className="sidebar-backdrop" onClick={() => setMenuOpen(false)} />}

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-photo">
          <img src="/mahdi-profile.png" alt="Mahdi Esmaeelnezhad" />
        </div>

        <div className="sidebar-name">
          Mahdi Esmaeelnezhad
          <span>{t.hero.role}</span>
        </div>

        <nav>
          <ul className="sidebar-nav">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {label(id)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-bottom">
          <div className="lang-switcher" ref={langRef}>
            <button
              className="lang-btn"
              onClick={() => setLangOpen((v) => !v)}
              aria-label="Change language"
            >
              <span>{current.flag}</span>
              <span>{current.code.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="lang-menu">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    className={l.code === lang ? 'active' : ''}
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href={LINKS.cv} download className="btn btn-dark nav-cv">
            <DownloadIcon />
            {t.hero.downloadCV}
          </a>
        </div>
      </aside>
    </>
  );
}
