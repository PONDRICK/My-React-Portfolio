import React from "react";
import profileImage from "../assets/images/pond.png";
import CV_download from "../assets/images/Sorrawit Nuernuam CV.pdf";

function Home() {
  return (
    <section id="home" className="section">
      <div className="content">
        <div className="profile-info">
          <div className="profile-image">
            <img src={profileImage} alt="Sorrawit Nuernuam" />
          </div>
          <div className="profile-text">
            <div className="text-container">
              <h1>Sorrawit Nuernuam</h1>
            </div>
            <p>Computer Science Student</p>
            <p>Kasetsart University</p>
            <div class="download-cv">
              <a href={CV_download} target="_blank" class="glow-on-hover">
                <button>
                  <i class="fa fa-download"></i> Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
