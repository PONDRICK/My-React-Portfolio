import React from "react";

function Navigation() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => scrollToSection(e, "skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
            Projects
          </a>
        </li>
        <li>
          <a
            href="#certificate"
            onClick={(e) => scrollToSection(e, "certificate")}
          >
            Certificate
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
