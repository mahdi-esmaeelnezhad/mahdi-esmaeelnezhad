import { useI18n } from '../i18n';
import { GITHUB_STATS, LINKS } from '../data';
import { useReveal } from '../useReveal';
import { SectionHead } from './SectionHead';
import { ExternalIcon } from './Icons';

const REPO_LINKS = [LINKS.orbit, LINKS.smartTable, LINKS.configkit, LINKS.jobCrawler];

export function OpenSource() {
  const { t } = useI18n();
  const statsRef = useReveal();
  const prsRef = useReveal();

  return (
    <section id="opensource">
      <div className="container">
        <SectionHead kicker="04" title={t.oss.title} subtitle={t.oss.subtitle} />
        <p className="oss-statement">{t.oss.statement}</p>
        <div className="oss-stats reveal" ref={statsRef}>
          {GITHUB_STATS.map((stat) => (
            <div className="card oss-stat" key={stat.id}>
              <div className="value gradient-text">{stat.value}</div>
              <div className="label">{t.oss.statLabels[stat.id]}</div>
            </div>
          ))}
        </div>
        <div className="oss-prs reveal" ref={prsRef}>
          {t.oss.prs.map((pr, index) => (
            <div className="card pr-card" key={pr.repo}>
              <span className="pr-repo">{pr.repo}</span>
              <p>{pr.desc}</p>
              <a href={REPO_LINKS[index]} target="_blank" rel="noreferrer">
                {t.oss.viewPr}
                <ExternalIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
