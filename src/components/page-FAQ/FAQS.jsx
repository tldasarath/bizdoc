'use client';
import React from 'react';

function FAQS() {
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
    <section className="page-faqs section-padding pb-80 position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Bizdoc UAE FAQ</h6>
                <h3>
                  Frequently Asked Questions
                </h3>
                <p className="mt-20">
                  Starting and managing a business in the UAE can feel overwhelming with so many rules, approvals, and processes. 
                  At Bizdoc, we've created this FAQ page to answer the most common questions about business setup in UAE, 
                  PRO services, Golden Visa, bank account opening, document attestation, trademark registration, 
                  legal services, and compliance support.
                </p>
              </div>
              <div className="accordion bord">
                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>What services does Bizdoc provide for business setup in UAE?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Bizdoc offers complete business setup services in UAE, including company formation in Dubai, 
                      trade license registration, PRO services, visa assistance, bank account opening, 
                      and corporate compliance support.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".2s">
                  <div onClick={openAccordion} className="title">
                    <h6>How can Bizdoc help with company formation in Dubai?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Our experts guide you through every step of company formation in Dubai, whether it's mainland, 
                      free zone, or offshore setup. We handle documentation, government approvals, 
                      and compliance to ensure a smooth process.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>Do you provide PRO services in UAE?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Yes, Bizdoc specializes in PRO services in UAE, including visa processing, labor contracts, 
                      Emirates ID, trade license renewals, and government approvals—helping businesses save time 
                      and remain compliant.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".4s">
                  <div onClick={openAccordion} className="title">
                    <h6>What is the UAE Golden Visa and can Bizdoc assist with it?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      The UAE Golden Visa is a long-term residency visa (5–10 years) for investors, entrepreneurs, 
                      professionals, and outstanding talents. Bizdoc provides complete Golden Visa services in UAE, 
                      including eligibility checks, document preparation, application submission, and renewals.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Can Bizdoc help with bank account opening in UAE?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Yes, we provide professional bank account opening services in UAE. Our team assists with documentation, 
                      compliance, and coordination with top banks, making the process simple and hassle-free for startups, 
                      SMEs, and international businesses.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".6s">
                  <div onClick={openAccordion} className="title">
                    <h6>What is document attestation and why is it important in UAE?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Document attestation in UAE verifies the authenticity of personal, educational, 
                      or commercial documents for official use. Bizdoc provides fast and reliable attestation services, 
                      coordinating with MOFA, embassies, and government authorities.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".7s">
                  <div onClick={openAccordion} className="title">
                    <h6>Do you offer legal services and compliance support?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Yes, Bizdoc provides expert legal services in UAE, including contract drafting, dispute resolution, 
                      corporate compliance, and personal legal assistance. We also offer legal translation services 
                      approved by UAE authorities.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".8s">
                  <div onClick={openAccordion} className="title">
                    <h6>Why should I choose Bizdoc for trademark registration in UAE?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Our trademark registration services in UAE protect your brand identity by handling searches, 
                      documentation, application filing, objections, and renewals—ensuring your intellectual property 
                      is legally protected.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".9s">
                  <div onClick={openAccordion} className="title">
                    <h6>What kind of tax and compliance services does Bizdoc provide?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Bizdoc offers tax and compliance services in UAE, including VAT registration, corporate tax filing, 
                      financial audits, compliance checks, and advisory services to help businesses avoid penalties 
                      and stay compliant.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay="1s">
                  <div onClick={openAccordion} className="title">
                    <h6>Does Bizdoc provide end-to-end business support in UAE?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Absolutely. We offer end-to-end business support in UAE, covering business setup, PRO services, 
                      visas, legal solutions, banking, compliance, and trademark protection—making Bizdoc your 
                      long-term partner for growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img1">
        <img src="/assets/imgs/intro/03.jpg" alt="" />
      </div>
      <div className="img2">
        <img src="/assets/imgs/arw0.png" alt="" />
      </div>
      <div className="img3">
        <img src="/assets/imgs/intro/04.jpg" alt="" />
      </div>
    </section>
  );
}

export default FAQS;