import React from "react";
import {
  DiPython,
  DiJava,
  DiJavascript1,
  DiReact,
  DiAngularSimple,
  DiNodejsSmall,
  DiDocker,
  DiHtml5,
  DiCss3,
  DiDatabase,
  DiPostgresql,
  DiDjango,
  DiMysql,
} from "react-icons/di";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="content">
        <h2>Skills</h2>

        <div className="skills-category">
          <h3>Programming Languages</h3>
          <ul className="skills-grid">
            <li>
              <DiPython /> Python
            </li>
            <li>
              <DiJava /> Java
            </li>
            <li>
              <DiJavascript1 /> Javascript
            </li>
            <li>
              <DiJavascript1 /> Typescript
            </li>
            <li>
              <DiJavascript1 /> C
            </li>
            <li>
              <DiJavascript1 /> C#
            </li>
            <li>
              <DiJavascript1 /> MATLAB
            </li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Frontend</h3>
          <ul className="skills-grid">
            <li>
              <DiHtml5 /> HTML
            </li>
            <li>
              <DiCss3 /> CSS
            </li>
            <li>
              <DiReact /> React
            </li>
            <li>
              <DiReact /> React Native
            </li>
            <li>
              <DiAngularSimple /> Angular
            </li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Backend</h3>
          <ul className="skills-grid">
            <li>
              <DiNodejsSmall /> Node.js
            </li>
            <li>
              <DiNodejsSmall /> Express.js
            </li>
            <li>
              <DiDjango /> Django
            </li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Database</h3>
          <ul className="skills-grid">
            <li>
              <DiMysql /> MySQL
            </li>
            <li>
              <DiPostgresql /> PostgreSQL
            </li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Tools</h3>
          <ul className="skills-grid">
            <li>
              <DiDocker /> Docker
            </li>
            <li>
              <DiDatabase /> Postman
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
