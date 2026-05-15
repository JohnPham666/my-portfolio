import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import './Hero.css';

export default function Hero({ data }) {
  const { name, title, subtitle, tagline, resumeFile, imageFile, socials } = data;

  return (
    <section className="hero section" id="hero">
      <div className="hero__bg" />
      <div className="container hero__container">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__badge reveal">
            <span className="hero__status-dot" />
            Open to opportunities
          </div>

          <h1 className="hero__name reveal">
            {name}
          </h1>

          <p className="hero__title reveal">
            {title} <span className="hero__divider">/</span> {subtitle}
          </p>

          <p className="hero__tagline reveal">
            {tagline}
          </p>

          <div className="hero__actions reveal">
            <a href="#projects" className="btn btn--primary">
              <span>View Projects</span>
              <FiArrowRight />
            </a>
            <a href={resumeFile} className="btn btn--secondary" download>
              <FiDownload />
              <span>Download CV</span>
            </a>
          </div>

          <div className="hero__socials reveal">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${socials.email}`} className="hero__social-link" aria-label="Email">
              <FiMail />
            </a>
            {socials.zalo && (
              <a href={socials.zalo} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="Zalo">
                <FiMessageCircle />
              </a>
            )}
          </div>
        </div>

        {imageFile && (
          <div className="hero__image-wrapper reveal">
            <img src={imageFile} alt={name} className="hero__image" />
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
