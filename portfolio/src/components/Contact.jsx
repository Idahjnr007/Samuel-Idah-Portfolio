function Contact() {
  return (
    <section id="contact" className="pane">
      <div className="eyebrow mono">~/contact.ts</div>

      <h2 className="mono">Let's Build Something Great</h2>

      <p>
        I'm available for internships, freelance work, and junior front-end
        development opportunities.
      </p>

      <div className="terminal-box">
        <div className="term-line">
          <span className="term-prompt">Contact Links</span>
        </div>

        <div className="contact-links">
          <a className="contact-link" href="mailto:ohigboche2019@gmail.com">
            ✉ ohigboche2019@gmail.com
          </a>

          <a
            className="contact-link"
            href="https://github.com/Idahjnr007"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            className="contact-link"
            href="https://linkedin.com/in/samuel-idah-a61568373"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
