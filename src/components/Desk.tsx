import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n';
import { LINKS } from '../data';
import { DownloadIcon } from './Icons';

const CODE = `function App() {
  return (
    <Site
      name="Mahdi"
      role="Senior Frontend"
      stack={['React', 'TypeScript', 'MUI']}
    />
  )
}`;

function useNarrow() {
  const [narrow, setNarrow] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 720px)').matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)');
    const onChange = () => setNarrow(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return narrow;
}

export function Desk() {
  const { t } = useI18n();
  const pinRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const narrow = useNarrow();

  useEffect(() => {
    const onScroll = () => {
      const el = pinRef.current;
      if (!el) return;
      const vh = window.visualViewport?.height ?? window.innerHeight;
      const total = el.offsetHeight - vh;
      if (total <= 0) return;
      const scrolled = -el.getBoundingClientRect().top;
      setP(Math.min(1, Math.max(0, scrolled / total)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.visualViewport?.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.visualViewport?.removeEventListener('resize', onScroll);
    };
  }, []);

  const sit = clamp((p - 0.02) / 0.14);
  const glow = clamp((p - 0.1) / 0.12);
  const typed = CODE.slice(0, Math.floor(clamp((p - 0.18) / 0.3) * CODE.length));
  const ui = clamp((p - 0.5) / 0.18);
  const zoom = 1 + clamp((p - 0.66) / 0.22) * (narrow ? 0.08 : 0.32);
  const intro = narrow ? 0 : clamp((p - 0.82) / 0.12);
  const walk = narrow ? 32 : 70;
  const walkY = narrow ? 14 : 28;

  const caption =
    p < 0.16
      ? t.story.deskTitle
      : p < 0.5
        ? t.story.ideTitle
        : p < 0.78
          ? t.story.success
          : t.hero.scroll;

  return (
    <section className="desk-pin" id="home" ref={pinRef} aria-label="Desk scene">
      <div className="desk-sticky">
        <div className="room" style={{ ['--zoom' as string]: String(zoom) }}>
          <div className="room-floor" />
          <div className="room-window">
            <span />
            <span />
            <span />
          </div>
          <div className="room-lamp" style={{ opacity: 0.45 + glow * 0.55 }} />
          <div className="room-lamp-cone" style={{ opacity: 0.2 + glow * 0.5 }} />

          <div className="room-monitor">
            <div className="room-bezel">
              <div
                className="room-screen"
                style={{
                  opacity: 0.12 + glow * 0.88,
                  boxShadow: `0 0 ${24 + glow * 70}px rgba(79, 140, 255, ${0.1 + glow * 0.32})`,
                }}
              >
                <pre className="room-code" style={{ opacity: 1 - ui }}>
                  {typed}
                  {p > 0.18 && p < 0.5 && <span className="caret" />}
                </pre>
                <div className="room-ui" style={{ opacity: ui }}>
                  <div className="room-ui-bar">Mahdi.dev</div>
                  <div className="room-ui-hero">
                    <b>Mahdi</b>
                    <small>Frontend Developer</small>
                  </div>
                  <div className="room-ui-row">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
            <div className="room-neck" />
            <div className="room-base" />
          </div>

          <div
            className="workspace"
            style={{
              opacity: 0.2 + sit * 0.8,
              ['--walk-x' as string]: `${(1 - sit) * walk}px`,
              ['--walk-y' as string]: `${(1 - sit) * walkY}px`,
            }}
          >
            <div className="room-chair" />
            <div className="room-dev">
            <div className="dev-hair" />
            <div className="dev-head">
              <span className="dev-ear" />
              <span className="dev-glasses" />
              <span className="dev-eye" />
              <span className="dev-brow" />
              <span className="dev-nose" />
              <span className="dev-mouth" />
            </div>
            <div className="dev-neck" />
            <div className="dev-torso">
              <span className="dev-collar" />
            </div>
            <div className="dev-arm-back" />
            <div className={`dev-arm-front ${p > 0.2 && p < 0.52 ? 'typing' : ''}`}>
              <span className="dev-forearm" />
              <span className="dev-hand" />
            </div>
            <div className={`dev-arm-near ${p > 0.2 && p < 0.52 ? 'typing' : ''}`}>
              <span className="dev-forearm" />
              <span className="dev-hand" />
            </div>
            <div className="dev-legs">
              <span className="dev-thigh" />
              <span className="dev-calf" />
              <span className="dev-shoe" />
            </div>
            </div>
            <div className="macbook" aria-hidden="true">
              <div className="macbook-lid">
                <svg className="apple-logo" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div className="macbook-hinge" />
              <div className="macbook-base" />
            </div>
          </div>

          <div className="room-desk" />
          <div className="room-mug" />
        </div>

        <p className="desk-caption" style={{ opacity: 1 - intro }}>
          <span>{t.story.clock}</span>
          {caption}
        </p>

        <div className="desk-intro" style={{ opacity: intro, pointerEvents: intro > 0.6 ? 'auto' : 'none' }}>
          <p className="hero-hi">{t.hero.greeting}</p>
          <h1 className="hero-name">
            <span className="hl">Mahdi</span> Esmaeelnezhad
          </h1>
          <div className="hero-role-tag">{t.hero.role}</div>
          <div className="hero-cta">
            <a href="#about" className="btn btn-primary">
              {t.hero.viewProjects}
            </a>
            <a href={LINKS.cv} download className="btn btn-ghost">
              <DownloadIcon />
              {t.hero.downloadCV}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function clamp(n: number) {
  return Math.min(1, Math.max(0, n));
}
