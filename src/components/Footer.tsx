import { useI18n } from '../i18n';
import { LINKS } from '../data';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} Mahdi Esmaeelnezhad. {t.footer.rights}
        </span>
        <span>{t.footer.built}</span>
        <span>
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {' · '}
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}
