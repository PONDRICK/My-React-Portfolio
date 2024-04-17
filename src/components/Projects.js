import React, { useEffect, useState } from "react";
import image_port from "../assets/images/My_Port.png";
import image_food from "../assets/images/Food_menu.png";
import image_country from "../assets/images/Country_API.png";
import image_memo from "../assets/images/MemoAPP.png";
import image_covid from "../assets/images/Covid.png";
import image_sucide from "../assets/images/Sucide_rate.png";
import image_rabbit from "../assets/images/rabbit_card.jpg";
import image_seek from "../assets/images/Seek_campaign.png";

function Projects() {
  return (
    <section id="projects" class="section">
      <div class="content">
        <h2>Highlight Projects</h2>
        <div class="projects-grid">
          <a
            href="https://github.com/PONDRICK/My-React-Portfolio"
            target="_blank"
            class="project-card"
          >
            <img src={image_port} />
            <h3>My Portfolio</h3>
            <p>2023</p>
          </a>
          <a
            href="https://github.com/PONDRICK/Food-Menu-Web"
            target="_blank"
            class="project-card"
          >
            <img src={image_food} />
            <h3>Food Menu</h3>
            <p>2023</p>
          </a>
          <a
            href="https://github.com/PONDRICK/Country-API.github.io"
            target="_blank"
            class="project-card"
          >
            <img src={image_country} />
            <h3>Country API</h3>
            <p>2023</p>
          </a>
          <a
            href="https://github.com/PONDRICK/MeMoStar"
            target="_blank"
            class="project-card"
          >
            <img src={image_memo} />
            <h3>Memo Mobile Application Mini Project</h3>
            <p>2023</p>
          </a>
          <a
            href="https://github.com/PONDRICK/Covid"
            target="_blank"
            class="project-card"
          >
            <img src={image_covid} />
            <h3>Covid Mobile Application Mini Project</h3>
            <p>2023</p>
          </a>
          <a
            href="https://docs.google.com/document/d/1YddJAZqO_BAP_oZp8C8NTAHsDHTjajtrFxzO_KDd9Tk/edit?usp=sharing"
            target="_blank"
            class="project-card"
          >
            <img src={image_seek} />
            <h3>Seek Campaign System Analysis Design</h3>
            <p>2023</p>
          </a>
          <a
            href="https://github.com/PONDRICK/Suicide-rate-Project"
            target="_blank"
            class="project-card"
          >
            <img src={image_sucide} />
            <h3>Suicide Rate Prediction Mini Project</h3>
            <p>2022</p>
          </a>
          <a
            href="https://docs.google.com/document/d/1xiywLjA7Zh1-uK9Vrn61E-vTeqstQ7NJVTLVwP5SMWY/edit?usp=sharing"
            target="_blank"
            class="project-card"
          >
            <img src={image_rabbit} />
            <h3>Rabbit Card Database Design</h3>
            <p>2022</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
