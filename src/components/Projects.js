// components/Projects.js
import React, { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/PONDRICK/repos")
      .then((response) => response.json())
      .then((repos) => {
        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setProjects(repos);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  }, []);

  return (
    <section id="projects" className="section">
      <div className="content">
        <h2>Highlight Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              key={project.id}
            >
              <img src={`src/${project.name}.png`} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{new Date(project.created_at).getFullYear()}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
