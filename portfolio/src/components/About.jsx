import Introduction from './Introduction.jsx';

function About({ skills }) {
  return (
    <section id="about" className="pane">
      <div className="eyebrow mono">~/About Samuel Idah</div>

      <h1 className="hero-name">Samuel Idah</h1>

      <div className="profile-wrapper">
        <img src="/passport.png" className="profile-img" alt="Samuel Idah" />
      </div>

      <Introduction />

      <div className="hero-role mono">Front-End Developer | Web Builder</div>
      <div className="resume-cta-row">
        <a className="resume-cta" href="/resume.txt" download>
          Download Resume
        </a>
      </div>

      <div className="code-block mono">
        <div className="line-numbers">
          1<br />
          2<br />
          3<br />
          4<br />
          5<br />
          6<br />
          7<br />
          8
        </div>

        <div>
          <span className="kw">const</span> developer = {'{'}
        </div>
        <div>
          &nbsp;&nbsp;name: <span className="str">"Samuel Idah"</span>,
        </div>
        <div>
          &nbsp;&nbsp;focus: <span className="str">"Frontend Development"</span>,
        </div>
        <div>
          &nbsp;&nbsp;location: <span className="str">"Nigeria"</span>,
        </div>
        <div>
          &nbsp;&nbsp;available: <span className="kw">true</span>,
        </div>
        <div>{'}'}</div>
        <div>
          <span className="blink-cursor">▌</span>
        </div>

        <br />
      </div>

      <div className="hero-role mono">
        <h2>Skills</h2>
      </div>
      <div className="pill-row" id="skills">
        {skills.map((skill) => (
          <span className="pill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
