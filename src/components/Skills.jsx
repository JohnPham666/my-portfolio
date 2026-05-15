import {
  FiMonitor, FiServer, FiDatabase, FiTool,
} from 'react-icons/fi';
import './Skills.css';

const CATEGORY_ICONS = {
  frontend: FiMonitor,
  backend: FiServer,
  database: FiDatabase,
  tools: FiTool,
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
                  {group.items.map((item, j) => (
                    <span className="skills__tag" key={j}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
