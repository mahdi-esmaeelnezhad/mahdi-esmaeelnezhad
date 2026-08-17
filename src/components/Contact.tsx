import { useState, type FormEvent } from 'react';
import { useI18n } from '../i18n';
import { LINKS } from '../data';
import { useReveal } from '../useReveal';
import { SectionHead } from './SectionHead';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

export function Contact() {
  const { t } = useI18n();
  const gridRef = useReveal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="container">
        <SectionHead kicker="09" title={t.contact.title} subtitle={t.contact.subtitle} />
        <div className="contact-grid reveal" ref={gridRef}>
          <div className="contact-info">
            <p className="intro">{t.contact.intro}</p>

            <div className="contact-line">
              <span className="icon">
                <span style={{ width: 20, height: 20, display: 'inline-flex' }}>
                  <MailIcon />
                </span>
              </span>
              <div>
                <div className="label">{t.contact.emailLabel}</div>
                <a className="value" href={`mailto:${LINKS.email}`}>
                  {LINKS.email}
                </a>
              </div>
            </div>

            <div className="contact-line">
              <span className="icon">📞</span>
              <div>
                <div className="label">{t.contact.phoneLabel}</div>
                <a className="value" href={LINKS.phoneHref}>
                  {LINKS.phone}
                </a>
              </div>
            </div>

            <div className="contact-line">
              <span className="icon">📍</span>
              <div>
                <div className="label">{t.contact.locationLabel}</div>
                <div className="value">{t.contact.locationValue}</div>
              </div>
            </div>

            <div className="contact-socials">
              <div className="label">{t.contact.socials}</div>
              <div className="icons">
                <a href={LINKS.github} target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub">
                  <GitHubIcon />
                </a>
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="icon-link" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>

          <form className="card contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t.contact.form.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder={t.contact.form.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              rows={6}
              placeholder={t.contact.form.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              {t.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
