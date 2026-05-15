import { useState } from 'react';
import { FiMail, FiSend, FiGithub, FiLinkedin, FiMessageCircle } from 'react-icons/fi';
import './Contact.css';

export default function Contact({ data, socials }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Web3Forms API Endpoint
    const web3formsAction = "https://api.web3forms.com/submit";

    const formData = new FormData(form);
    const senderName = formData.get('name') || 'Someone';
    // Set a dynamic subject line
    formData.set('subject', `New message from ${senderName} - Portfolio`);
    // Make the email display the sender's name instead of "Web3Forms"
    formData.set('from_name', senderName);
    // Explicitly set reply-to (though web3forms usually does this automatically if name="email")
    formData.set('replyto', formData.get('email'));

    try {
      const response = await fetch(web3formsAction, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Contact</p>
          <h2 className="section-title">{data.heading}</h2>
          <p className="section-subtitle">{data.description}</p>
        </div>

        <div className="contact__grid">
          <form className="contact__form reveal" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact__success">
                <FiMail />
                <p>Thanks for reaching out! I'll get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn--primary"
                  style={{ marginTop: '1.5rem' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="contact__field">
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" type="text" required placeholder="Your name" />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" required placeholder="your@email.com" />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" required rows="5" placeholder="Your message..." />
                </div>

                {/* Web3Forms required access key */}
                <input type="hidden" name="access_key" value={data.accessKey} />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <button type="submit" className="btn btn--primary contact__submit">
                  <FiSend />
                  <span>Send Message</span>
                </button>
              </>
            )}
          </form>

          <div className="contact__info reveal">
            <div className="contact__info-card">
              <h3 className="contact__info-title">Get in Touch</h3>
              <a href={`mailto:${socials.email}`} className="contact__email-link">
                <FiMail />
                {socials.email}
              </a>
              <div className="contact__info-socials">
                <a href={socials.github} target="_blank" rel="noopener noreferrer" className="contact__info-social">
                  <FiGithub /> GitHub
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="contact__info-social">
                  <FiLinkedin /> LinkedIn
                </a>
                {socials.zalo && (
                  <a href={socials.zalo} target="_blank" rel="noopener noreferrer" className="contact__info-social">
                    <FiMessageCircle /> Zalo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
