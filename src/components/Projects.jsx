import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

export default function Projects({ data }) {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for building software.
          </p>
        </div>

        <div className="projects__grid reveal-stagger">
          {data.map((project, i) => (
            <article className="projects__card reveal" key={i}>
              <div className="projects__card-top">
                <div className="projects__card-header">
                  <h3 className="projects__card-title">{project.name}</h3>
                  <span className="projects__role">{project.role}</span>
                </div>
                <p className="projects__description">{project.description}</p>

                <ul className="projects__features">
                  {project.features.map((f, j) => (
                    <li className="projects__feature" key={j}>
                      <span className="projects__feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="projects__card-bottom">
                <div className="projects__tech">
                  {project.tech.map((t, j) => (
                    <span className="projects__tech-tag" key={j}>{t}</span>
                  ))}
                </div>

                <div className="projects__links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link" aria-label="View source code">
                      <FiGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="projects__link projects__link--demo" aria-label="View live demo">
                      <FiExternalLink />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
