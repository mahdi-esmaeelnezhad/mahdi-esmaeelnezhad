import { useI18n } from '../i18n';
import { useReveal } from '../useReveal';
import { SectionHead } from './SectionHead';

export function Testimonials() {
  const { t } = useI18n();
  const gridRef = useReveal();

  if (t.testimonials.items.length === 0) return null;

  return (
    <section id="testimonials">
      <div className="container">
        <SectionHead kicker="08" title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
        <div className="testimonials-grid reveal" ref={gridRef}>
          {t.testimonials.items.map((item) => (
            <div className="card testimonial-card" key={item.role}>
              <span className="testimonial-quote-mark gradient-text">“</span>
              <blockquote>{item.quote}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{item.name.charAt(0)}</div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
