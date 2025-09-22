import React from 'react';
import teamData from '../../data/team-t'; // name, position, img (QR), socials
import {  FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import PixelTransition from '../bg/PixelTransition';

function Team() {
  return (
    <section className="team-flip section-padding pb-90">
      <div className="container">
        <div className="sec-head mb-80 text-center">
          <span className="sub-title main-color mb-5">Our Team</span>
          <h3 className="fw-600 fz-50">
            Meet our <span className="fw-200">legends</span>
          </h3>
        </div>

        <div className="row">
          {teamData.map((member, i) => (
            <div key={i} className="col-lg-3 col-md-6 mb-50 text-center">
              <div className="flip-card mb-3">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h5 className="mb-2 main-color">{member.name}</h5>
                    <p className="mb-0 text-white team-position">{member.position}</p>
                  </div>

                 
                  <div className="flip-card-back">
                    <img src={member.img} alt={`${member.name} QR`} style={{ maxWidth: '80%' }} />
                  </div>
                </div>
              </div>
              {/* <PixelTransition
  firstContent={
  <div
  style={{
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#111"
  }}
>
  <div className="text-center">
    <h5 className="mb-2 main-color">{member.name}</h5>
    <p className="mb-0 text-white team-position">{member.position}</p>
  </div>
</div>

  }
  secondContent={
     
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#111",
    }}
  >
    <img
      src={member.img}
      alt={member.name}
      style={{
        maxWidth: "100%",   // adjust as needed
        maxHeight: "100%",  // keep proportions
        objectFit: "contain",
      }}
    />
  </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
  className="custom-pixel-card"
/> */}

              {/* Social Media Section - Outside Flip Card */}
                  {/* <div className="social-icons mt-3">
                      <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebookF size={22} />
                      </a>
                      <a href="https://x.com" target="_blank" rel="noreferrer">
                        <FaXTwitter size={22} />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram size={22} />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedinIn size={22} />
                      </a>
                    </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
