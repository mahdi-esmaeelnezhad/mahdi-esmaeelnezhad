import { useI18n } from '../i18n';
import { LINKS } from '../data';
import { DownloadIcon, GitHubIcon, LinkedInIcon } from './Icons';

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero" id="intro">
      <div className="container hero-card">
        <div className="os-bar">
          <span className="os-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="os-path">home — Mahdi Esmaeelnezhad</span>
        </div>
        <div className="hero-top">
          <div className="hero-content">
            <p className="hero-hi">{t.hero.greeting}</p>
            <h1 className="hero-name">
              <span className="hl">Mahdi</span> Esmaeelnezhad
            </h1>
            <div className="hero-role-tag">{t.hero.role}</div>
            <p className="hero-tagline">{t.hero.tagline}</p>

            <div className="hero-badges">
              <span className="hero-badge">
                <span className="dot" />
                {t.hero.badge}
              </span>
              <span className="hero-badge">🇮🇷 {t.hero.location}</span>
            </div>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                {t.hero.viewProjects}
              </a>
              <a href={LINKS.cv} download className="btn btn-ghost">
                <DownloadIcon />
                {t.hero.downloadCV}
              </a>
            </div>

            <div className="hero-socials">
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="icon-link" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-value gradient-text">5+</div>
            <div className="stat-label">{t.hero.stats.years}</div>
          </div>
          <div className="stat">
            <div className="stat-value gradient-text">4</div>
            <div className="stat-label">{t.hero.stats.projects}</div>
          </div>
          <div className="stat">
            <div className="stat-value gradient-text">6</div>
            <div className="stat-label">{t.hero.stats.oss}</div>
          </div>
          <div className="stat">
            <div className="stat-value gradient-text">10+</div>
            <div className="stat-label">{t.hero.stats.users}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
