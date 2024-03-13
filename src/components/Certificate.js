// components/Certificate.js
import React from 'react';
import certificate_Onramp from "../assets/images/Matlab_Onramp.png";
import certificate_Funda from "../assets/images/Matlab_Funda.png";
import certificate_Img_Onramp from "../assets/images/Matlab_Image_Onramp.png";
import certificate_Img_Funda from "../assets/images/Matlab_Funda.png";

function Certificate() {
  return (
    <section id="certificate" class="section">
        <div class="content">
          <h2 class="certificate-heading">Certificate</h2>
          <div class="certificate-cards-container">
            <div class="certificate-card">
              <a
                href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=0f1d80f7-069f-4b99-bc5e-6dc2621032f0&"
                target="_blank"
              >
                <img src={certificate_Onramp} alt="Certificate" />
                <div class="certificate-info">
                  <h3>MATLAB Onramp</h3>
                  <p>2023</p>
                  <p class="subhead">Learn the basics of MATLAB.</p>
                </div>
              </a>
            </div>
            <div class="certificate-card">
              <a
                href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=14cdd5f9-64f9-4c23-ba58-d89953a1d001&"
                target="_blank"
              >
                <img src={certificate_Funda} alt="Certificate" />
                <div class="certificate-info">
                  <h3>MATLAB Fundamentals</h3>
                  <p>2023</p>
                  <p class="subhead">
                    Learn core MATLAB functionality for data analysis,
                    visualization, modeling, and programming
                  </p>
                </div>
              </a>
            </div>
            <div class="certificate-card">
              <a
                href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=feee8322-e4ae-4f49-9234-b2285c03c567&"
                target="_blank"
              >
                <img src={certificate_Img_Onramp} alt="Certificate" />
                <div class="certificate-info">
                  <h3>Image Processing Onramp</h3>
                  <p>2023</p>
                  <p class="subhead">
                    Learn the basics of practical image processing techniques in
                    MATLAB.
                  </p>
                </div>
              </a>
            </div>
            <div class="certificate-card">
              <a
                href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=b87cc49d-6a35-497d-a5f5-abc12fcd6d26&"
                target="_blank"
              >
                <img src={certificate_Img_Funda} alt="Certificate" />
                <div class="certificate-info">
                  <h3>Image Processing with MATLAB</h3>
                  <p>2023</p>
                  <p class="subhead">
                    Apply practical image processing workflows to images from a
                    variety of industries.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Certificate;
