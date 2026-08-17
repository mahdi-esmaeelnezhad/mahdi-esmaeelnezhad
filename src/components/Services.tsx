import { useI18n } from '../i18n';
import { useReveal } from '../useReveal';
import { SectionHead } from './SectionHead';

export function Services() {
  const { t } = useI18n();
  const gridRef = useReveal();

  return (
    <section id="services">
      <div className="container">
        <SectionHead kicker="07" title={t.services.title} subtitle={t.services.subtitle} />
        <div className="services-grid reveal" ref={gridRef}>
          {t.services.items.map((service) => (
            <div className="card service-card" key={service.title}>
              <span className="icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
