import {
  FiMonitor, FiServer, FiDatabase, FiTool, FiGlobe,
} from 'react-icons/fi';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs,
  SiNodedotjs, SiSpringboot, SiDocker, SiGit, SiLinux,
  SiMysql, SiPostgresql, SiIntellijidea, SiGithubactions,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './Skills.css';

const CATEGORY_ICONS = {
  frontend: FiMonitor,
  backend: FiServer,
  database: FiDatabase,
  tools: FiTool,
  languages: FiGlobe,
};

/* Map each technology name to its brand icon */
const TECH_ICONS = {
  'HTML': SiHtml5,
  'CSS': SiCss,
  'JavaScript': SiJavascript,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Java': FaJava,
  'Spring Boot': SiSpringboot,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Git': SiGit,
  'Docker': SiDocker,
  'IntelliJ IDEA': SiIntellijidea,
  'Linux': SiLinux,
  'GitHub Actions': SiGithubactions,
};

export default function Skills({ data }) {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            A curated set of technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="skills__grid reveal-stagger">
          {data.map((group, i) => {
            const Icon = CATEGORY_ICONS[group.icon] || FiTool;
            return (
              <div className="skills__card reveal" key={i}>
                <div className="skills__card-header">
                  <div className="skills__card-icon">
                    <Icon />
                  </div>
                  <h3 className="skills__card-title">{group.category}</h3>
                </div>
                <div className="skills__tags">
                  {group.items.map((item, j) => {
                    const TechIcon = TECH_ICONS[item];
                    return (
                      <span className="skills__tag" key={j}>
                        {TechIcon && <TechIcon className="skills__tag-icon" />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
