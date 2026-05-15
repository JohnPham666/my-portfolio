import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer({ name, socials }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          &copy; {year} {name}. All rights reserved.
        </p>
        <p className="footer__made">
          Made with <FiHeart className="footer__heart" /> and React
        </p>
        <div className="footer__socials">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={`mailto:${socials.email}`} aria-label="Email"><FiMail /></a>
        </div>
      </div>
    </footer>
  );
}
