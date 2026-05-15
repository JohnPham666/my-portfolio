import { FiBriefcase, FiClock } from 'react-icons/fi';
import './Experience.css';

export default function Experience({ data }) {
  const isEmpty = !data || data.length === 0;

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Professional Journey</h2>
        </div>

        {isEmpty ? (
          <div className="experience__empty reveal">
            <div className="experience__empty-icon">
              <FiBriefcase />
            </div>
            <h3 className="experience__empty-title">Coming Soon</h3>
            <p className="experience__empty-text">
              Currently seeking internship and junior software engineering opportunities.
              Excited to start my professional journey!
            </p>
          </div>
        ) : (
          <div className="experience__timeline">
            {data.map((exp, i) => (
              <div className="experience__item reveal" key={i}>
                <div className="experience__dot" />
                <div className="experience__card">
                  <div className="experience__card-header">
                    <h3 className="experience__role">{exp.role}</h3>
                    <span className="experience__period">
                      <FiClock />
                      {exp.period}
                    </span>
                  </div>
                  <p className="experience__company">{exp.company}</p>
                  <p className="experience__desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
