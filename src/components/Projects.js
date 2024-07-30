import React, { useEffect, useState } from "react";
import image_port from "../assets/images/My_Port.png";
import image_food from "../assets/images/Food_menu.png";
import image_country from "../assets/images/Country_API.png";
import image_memo from "../assets/images/MemoAPP.png";
import image_covid from "../assets/images/Covid.png";
import image_sucide from "../assets/images/Sucide_rate.png";
import image_rabbit from "../assets/images/rabbit_card.jpg";
import image_seek from "../assets/images/Seek_campaign.png";
import Rabbit_pdf from "../assets/images/Rabbit.pdf";
import Seek_pdf from "../assets/images/ปัญหาการส่งเสริมสุขภาพ.pdf";
import image_kidney from "../assets/images/Kidney.png";
import image_janken from "../assets/images/Janken.png";
import image_spotscout from "../assets/images/spotscout.png";
import image_spot from "../assets/images/spot.png";

function Projects() {
  return (
    <section id="projects" class="section">
      <div class="content">
        <h2>Highlight Projects</h2>
        <div class="projects-grid">
          <a
            href="https://github.com/PONDRICK/Spot_Scout"
            target="_blank"
            class="project-card"
          >
            <img src={image_spotscout} />
            <h3>Spotscout Final Project</h3>
            <p>2024</p>
          </a>
          <a
            href="https://github.com/PONDRICK/Place_Predict"
            target="_blank"
            class="project-card"
          >
            <img src={image_spot} />
            <h3>Research on Models Predicting Place Types</h3>
            <p>2024</p>
          </a>
          <a
            href="https://github.com/PONDRICK/Kidney_Stone_Detection"
            target="_blank"
            class="project-card"
          >
            <img src={image_kidney} />
            <h3>Kidney Stone Detection</h3>
            <p>2023</p>
          </a>
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
            href="https://github.com/PONDRICK/MeMoStar"
            target="_blank"
            class="project-card"
          >
            <img src={image_memo} />
            <h3>Memo Mobile Application Mini Project</h3>
            <p>2023</p>
          </a>
          <a href={Seek_pdf} target="_blank" class="project-card">
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
            href="https://github.com/PONDRICK/JangKenFlightJavaMiniProject"
            target="_blank"
            class="project-card"
          >
            <img src={image_janken} />
            <h3>JangKenFight Java Mini Project</h3>
            <p>2022</p>
          </a>
          <a href={Rabbit_pdf} target="_blank" class="project-card">
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
