import { FiBookOpen } from 'react-icons/fi';
import './Education.css';

export default function Education({ data }) {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education__grid reveal-stagger">
          {data.map((edu, i) => (
            <div className="education__card reveal" key={i}>
              <div className="education__icon">
                <FiBookOpen />
              </div>
              <div className="education__info">
                <h3 className="education__university">{edu.university}</h3>
                <p className="education__degree">
                  {edu.degree} in {edu.major}
                </p>
                <p className="education__period">{edu.period}</p>
                {edu.gpa && (
                  <div className="education__gpa">
                    <span className="education__gpa-label">GPA</span>
                    <span className="education__gpa-value">{edu.gpa}</span>
                  </div>
                )}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="education__highlights">
                    <p className="education__highlights-label">Key Coursework</p>
                    <div className="education__highlights-tags">
                      {edu.highlights.map((h, j) => (
                        <span className="education__highlight-tag" key={j}>{h}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
