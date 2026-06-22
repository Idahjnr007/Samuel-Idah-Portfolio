function Projects() {
  const projects = [
    {
      title: 'TS Academy Capstone',
      description:
        'A capstone webpage built during TS Academy — responsive, accessible, and deployment-ready.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      evidence: 'Live demo and source repository available.',
      demo: 'https://ts-academy-s-group-9-capstone-proje-jet.vercel.app/',
      
      repo: 'https://github.com/Idahjnr007/TS-Academy-Mile-Stone-project-2-',
    },
    {
      title: 'Mile Stone Project 2',
      description:
        'A milestone project from TS Academy showcasing layout, interactivity, and responsive behavior.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      evidence: 'Source code available on GitHub.',
      repo: 'https://github.com/Idahjnr007/TS-Academy-Mile-Stone-project-2-',
    },
    {
      title: 'TS Academy — Assignment 1',
      description:
        'Initial assignment demonstrating DOM manipulation and basic app logic.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      evidence: 'See repository for implementation details.',
      repo: 'https://github.com/Idahjnr007/TS-Academy-Assignment1',
    },
  ];

  return (
    <section id="projects" className="pane">
      <div className="eyebrow mono">~/projects</div>

      <h2 className="mono">What I’ve built</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-label">Featured Project</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-meta">
              {project.tech.map((item) => (
                <span className="project-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="project-evidence">{project.evidence}</div>

            <div className="project-links">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
