import React, { useEffect, useState } from "react";

function Other_Projects() {
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
    <section id="other-projects" className="section">
      <div className="content">
        <h2>Other Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              key={project.id}
            >
              <h3>{project.name}</h3>
              <p>{new Date(project.created_at).getFullYear()}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Other_Projects;
