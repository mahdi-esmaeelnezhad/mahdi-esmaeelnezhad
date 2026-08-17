import { useI18n } from '../i18n';
import { EXPERIENCE } from '../data';
import { useReveal } from '../useReveal';
import { SectionHead } from './SectionHead';

function TimelineItem({ id, period, location, tech }: (typeof EXPERIENCE)[number]) {
  const { t } = useI18n();
  const ref = useReveal();
  const text = t.experience.items[id];

  return (
    <div className="timeline-item reveal" ref={ref}>
      <div className="card timeline-card">
        <div className="timeline-head">
          <h3>
            {text.role} · <span className="timeline-company gradient-text">{text.company}</span>
          </h3>
          <span className="timeline-period">{period}</span>
        </div>
        <p className="timeline-note">
          {text.note} · {location}
        </p>
        <ul className="timeline-bullets">
          {text.bullets.map((bullet) => (
            <li key={bullet.slice(0, 32)}>{bullet}</li>
          ))}
        </ul>
        <div className="timeline-tech">
          {tech.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience">
      <div className="container">
        <SectionHead kicker="05" title={t.experience.title} subtitle={t.experience.subtitle} />
        <div className="timeline">
          {EXPERIENCE.map((job) => (
            <TimelineItem key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
