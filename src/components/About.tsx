import { useI18n } from '../i18n';
import { useReveal } from '../useReveal';
import { SectionHead } from './SectionHead';

export function About() {
  const { t } = useI18n();
  const gridRef = useReveal();

  return (
    <section id="about">
      <div className="container">
        <SectionHead kicker="01" title={t.about.title} subtitle={t.about.subtitle} />
        <div className="about-grid reveal" ref={gridRef}>
          <div className="about-photo-wrap">
            <img src="/mahdi-profile.png" alt="Mahdi Esmaeelnezhad" className="about-photo" />
          </div>
          <div className="about-text">
            {t.about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div className="about-highlights">
              {t.about.highlights.map((h) => (
                <div className="card highlight-card" key={h.title}>
                  <span className="icon">{h.icon}</span>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
            <div className="looking-for">
              <h4>{t.about.lookingForTitle}</h4>
              <p>{t.about.lookingFor}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
