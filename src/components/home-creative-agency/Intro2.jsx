'use client';
import React from 'react';

function Intro2() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }
  return (
    <section className="intro-accord section-padding sub-bg o-hidden">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-5">
            <div className="img md-mb50">
              <img src="/assets/images/about-us/why-choose.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h3 className="sub-title main-color mb-15">Why choose us?</h3>
                <h6>
Bizdoc offers complete businessman services, including company formation, visas, PRO support, bank accounts, legal help, tax and compliance, and Golden Visa solutions. With local knowledge and clear guidance, we make doing business in the UAE easy and smooth.
                </h6>
              </div>
              <div className="accordion bord">
                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6> What services does Bizdoc provide for business setup in UAE?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                     Bizdoc offers complete <span className='main-color'>business setup services in UAE</span>, including company formation in Dubai, trade license registration, PRO services, visa assistance,<span className='main-color'>bank account opening</span>, and corporate compliance support.

                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>How can Bizdoc help with company formation in Dubai?
</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Our experts guide you through every step of <span className='main-color'>company formation in Dubai</span>, whether it’s mainland, free zone, or offshore setup. We handle documentation, government approvals, and compliance to ensure a smooth process.

                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>What is the UAE Golden Visa and can Bizdoc assist with it?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    The <span className='main-color'>UAE Golden Visa</span> is a long-term residency visa (5–10 years) for investors, entrepreneurs, professionals, and outstanding talents. Bizdoc provides complete <span className='main-color'>Golden Visa services in UAE</span>, including eligibility checks, document preparation, application submission, and renewals.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </section>
  );
}

export default Intro2;
