import React from 'react';
import profileImage from '../assets/images/pond.png';

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
            <div className="download-cv">
              <a href="/src/assets/images/CV Sorrawit Nuernuam.pdf" target="_blank" rel="noopener noreferrer">
                <button><i className="fa fa-download"></i> Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
