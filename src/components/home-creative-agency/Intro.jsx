'use client';
import isInView from '../../common/isInView';
import React, { useEffect } from 'react';

function Intro() {
  function handleShowProgressValues() {
    isInView({
      selector: '.skill-progress .progres',
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute('data-value');
      },
    });
  }
  useEffect(() => {
    window.addEventListener('scroll', handleShowProgressValues);
    return () => window.removeEventListener('scroll', handleShowProgressValues);
  }, []);
  return (
    <section className="intro-skill section-padding pt-32">
      <div className="container pt-80 pb-80">
        <div className="row md-marg">
          <div className="col-lg-6">
           <div className="cont">
  <h6 className="sub-title main-color mb-15">About Us</h6>
  <h2 className="mb-15">Business Setup Services in UAE with Bizdoc.</h2>
  <p>
    Bizdoc simplifies business setup in the UAE. We offer end-to-end solutions,
    from <span className="home-about-text">company formation and trade license registration</span> to{" "}
    <span className="home-about-text">visa processing, PRO services, and bank account opening.</span>
    Our expert team handles every detail, ensuring your business journey is smooth, compliant, and successful.
  </p>

  <div className="skills-box row mt-4">
    {/* Mission */}
    <div className="col-12 mb-4">
      <div className="skill-item">
        <h5 className="sub-title mb-15 main-color">Mission</h5>
        <p>
          To simplify business setup in UAE with fast, reliable, and transparent
          services so entrepreneurs and companies can focus on growth.
        </p>
      </div>
    </div>

    {/* Vision */}
    <div className="col-12">
      <div className="skill-item">
        <h5 className="sub-title mb-15 main-color">Vision</h5>
        <p>
          To be the most trusted business setup company in UAE, making business
          easy and successful for startups, investors, and enterprises.
        </p>
      </div>
    </div>
  </div>
</div>

          </div>
          <div className="col-lg-6">
            <div className="imgs">
              <div className="img1">
                <img src="/assets/images/about-us/aboutus-3.png" alt="" />
              </div>
              <div className="img2">
                <img src="/assets/images/about-us/aboutus-1.png" alt="" />
              </div>
              <div className="img3">
                <img src="/assets/images/about-us/aboutus-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
