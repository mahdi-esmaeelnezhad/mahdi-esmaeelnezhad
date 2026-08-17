import { useI18n } from '../i18n';
import { SKILL_CATEGORIES } from '../data';
import { useReveal } from '../useReveal';
import { SectionHead } from './SectionHead';

export function Skills() {
  const { t } = useI18n();
  const gridRef = useReveal();

  return (
    <section id="skills">
      <div className="container">
        <SectionHead kicker="02" title={t.skills.title} subtitle={t.skills.subtitle} />
        <div className="skills-grid reveal" ref={gridRef}>
          {SKILL_CATEGORIES.map((cat) => (
            <div className="card skill-card" key={cat.id}>
              <div className="skill-card-head">
                <span className="icon">{cat.icon}</span>
                <h3>{t.skills.categories[cat.id]}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
