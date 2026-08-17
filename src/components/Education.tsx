import { useI18n } from '../i18n';
import { useReveal } from '../useReveal';
import { SectionHead } from './SectionHead';

export function Education() {
  const { t } = useI18n();
  const gridRef = useReveal();

  if (t.education.items.length === 0) return null;

  return (
    <section id="education">
      <div className="container">
        <SectionHead kicker="06" title={t.education.title} subtitle={t.education.subtitle} />
        <div className="education-grid reveal" ref={gridRef}>
          {t.education.items.map((item) => (
            <div className="card edu-card" key={item.degree}>
              <div className="edu-icon">🎓</div>
              <h3>{item.degree}</h3>
              <div className="edu-school">{item.school}</div>
              <div className="edu-period">{item.period}</div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
