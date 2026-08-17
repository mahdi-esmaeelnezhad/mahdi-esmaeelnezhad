import { useI18n } from '../i18n';
import { PROJECTS } from '../data';
import { useReveal } from '../useReveal';
import { SectionHead } from './SectionHead';
import { ExternalIcon, GitHubIcon } from './Icons';

export function Projects() {
  const { t } = useI18n();
  const gridRef = useReveal();

  return (
    <section id="projects">
      <div className="container">
        <SectionHead kicker="03" title={t.projects.title} subtitle={t.projects.subtitle} />
        <div className="projects-grid reveal" ref={gridRef}>
          {PROJECTS.map((project) => {
            const text = t.projects.items[project.id];
            return (
              <article className="card project-card" key={project.id}>
                <div className="project-cover" style={{ background: project.gradient }}>
                  <span>{project.icon}</span>
                </div>
                <div className="project-body">
                  <h3>{text.name}</h3>
                  <p className="project-desc">{text.desc}</p>
                  <div className="project-detail">
                    <strong>{t.projects.challengeLabel}</strong>
                    {text.challenge}
                  </div>
                  <div className="project-detail">
                    <strong>{t.projects.roleLabel}</strong>
                    {text.role}
                  </div>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span className="chip" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.live || project.source) && (
                    <div className="project-links">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <ExternalIcon />
                          {t.projects.liveDemo}
                        </a>
                      )}
                      {project.source && (
                        <a href={project.source} target="_blank" rel="noreferrer">
                          <span style={{ width: 15, height: 15, display: 'inline-flex' }}>
                            <GitHubIcon />
                          </span>
                          {t.projects.sourceCode}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
