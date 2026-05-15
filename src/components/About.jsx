import { FiTarget, FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';
import './About.css';

const STRENGTH_ICONS = {
  puzzle: FiTarget,
  code: FiCode,
  team: FiUsers,
  learn: FiTrendingUp,
};

export default function About({ data }) {
  const { intro, strengths } = data;

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about__grid">
          <div className="about__text reveal">
            <p className="about__intro">{intro}</p>
          </div>

          <div className="about__strengths reveal-stagger">
            {strengths.map((s, i) => {
              const Icon = STRENGTH_ICONS[s.icon] || FiCode;
              return (
                <div className="about__strength-card reveal" key={i}>
                  <div className="about__strength-icon">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="about__strength-title">{s.title}</h3>
                    <p className="about__strength-desc">{s.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
