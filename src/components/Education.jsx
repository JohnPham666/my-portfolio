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
                {edu.courses && edu.courses.length > 0 && (
                  <div className="education__courses">
                    <p className="education__courses-label">Key Coursework</p>
                    <div className="education__courses-list">
                      {edu.courses.map((course, j) => (
                        <div className="education__course" key={j}>
                          <span className="education__course-name">{course.name}</span>
                          {course.score && (
                            <span className="education__course-score">
                              {course.score}
                              <span className="education__course-grade">({course.grade})</span>
                            </span>
                          )}
                        </div>
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
