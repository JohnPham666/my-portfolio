import { useState } from 'react';
import { FiAward, FiExternalLink, FiX } from 'react-icons/fi';
import './Certifications.css';

export default function Certifications({ data }) {
  const [lightbox, setLightbox] = useState(null);

  if (!data || data.length === 0) return null;

  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Certifications</p>
          <h2 className="section-title">Credentials & Achievements</h2>
        </div>

        <div className="certifications__grid reveal-stagger">
          {data.map((cert, i) => (
            <div className="certifications__card reveal" key={i}>
              <div className="certifications__icon">
                <FiAward />
              </div>
              <div className="certifications__info">
                <h3 className="certifications__name">{cert.name}</h3>
                <p className="certifications__issuer">{cert.issuer}</p>
                <div className="certifications__meta">
                  <span className="certifications__date">{cert.date}</span>
                  {cert.score && (
                    <span className="certifications__score">{cert.score}</span>
                  )}
                </div>
                {cert.image && (
                  <div className="certifications__image">
                    <img
                      src={cert.image}
                      alt={`${cert.name} certificate`}
                      onClick={() => setLightbox(cert.image)}
                    />
                  </div>
                )}
                {cert.credential && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certifications__link"
                  >
                    <FiExternalLink />
                    View Credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for certificate images */}
      {lightbox && (
        <div className="certifications__lightbox" onClick={() => setLightbox(null)}>
          <button
            className="certifications__lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <FiX />
          </button>
          <img src={lightbox} alt="Certificate" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
