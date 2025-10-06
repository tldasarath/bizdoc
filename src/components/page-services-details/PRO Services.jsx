import React from 'react';
import { useParams } from 'react-router-dom';

function ProServices() {
  const { id } = useParams();
  
  // Service data based on your provided content
  const service = {
    id: id || 2,
    Introduction: "Running a company in the Dubai often means dealing with government approvals, labor contracts, and visa applications. These tasks can be time-consuming and confusing, especially for new entrepreneurs and investors. Bizdoc offers professional PRO services in Dubai to handle all your public relations and government requirements quickly and efficiently. With our support, you save time, reduce stress, and ensure full compliance with Dubai laws.",
    OurProServicesCover: [
      "Visa Processing and Cancellation - We manage employment visas, residency visas, family visas, and cancellation requests with smooth coordination across immigration departments.",
      "Emirates ID and Medical Typing - From typing applications to scheduling medical tests and processing Emirates IDs, we take care of all formalities.",
      "Labor Contracts and Immigration Approvals - We handle labor card renewals, contract preparation, and approvals from the Ministry of Human Resources and Emiratisation (MOHRE).",
      "Trade License Renewals and Amendments - Bizdoc assists with license renewals, activity changes, and amendments so your business remains legally active.",
      "Government Document Clearance - We process documentation with ministries, municipalities, and chambers of commerce to prevent delays and penalties."
    ],
    Benefits: [
      "Time-Saving: We handle paperwork and approvals while you focus on running your business.",
      "Error-Free Processing: Our experts ensure all documents are complete and accurate.",
      "Compliance Assurance: Stay up to date with Dubai's labor and immigration rules.",
      "Cost-Effective Solutions: Avoid fines and unnecessary expenses through professional handling."
    ],
    WhyChooseBizdoc: "Bizdoc combines local expertise with efficient processes to provide reliable business setup, PRO, and legal services in Dubai. Our team ensures smooth interactions with government departments, helping you stay compliant and maintain business continuity across the UAE.",
    CallToAction: "Let our experienced PRO team handle your government documentation and approvals, ensuring your business runs smoothly and remains compliant with Dubai regulations."
  };

  const serviceKey = "ProServicesInDubai";

  return (
    <section className="intro section-padding">
      <div className="container">
        {/* Image at the top */}
        <div className="row mb-60">
          <div className="col-12">
            <div className="img-full fit-img rounded-lg overflow-hidden">
              <img src="/assets/images/services/pro-service-in-dubai.png" alt={serviceKey} className="w-75" />
            </div>
          </div>
        </div>
        
        {/* Service title and overview */}
        <div className="row mb-50">
          <div className="col-12">
            <h6 className="sub-title main-color mb-15">Service Overview</h6>
            <h1 className="mb-30 fw-600">PRO Services in <span className='main-color'>Dubai</span></h1>
            <p className="lead-text mb-0">{service.Introduction}</p>
          </div>
        </div>
        
        {/* Service details */}
        <div className="row">
          <div className="col-lg-8">
            {/* Services offered */}
            {service.OurProServicesCover && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Our PRO Services in <span className='main-color'>Dubai</span> Cover</h3>
                <div className="row">
                  <div className="col-12">
                    <ul className="service-list">
                      {service.OurProServicesCover.map((item, index) => (
                        <li key={index} className="mb-3 d-flex align-items-start">
                          <span className="main-color mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* Benefits */}
            {service.Benefits && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Benefits of PRO Services with Bizdoc</h3>
                <div className="row">
                  <div className="col-12">
                    <ul className="benefits-list">
                      {service.Benefits.map((item, index) => (
                        <li key={index} className="mb-3 d-flex align-items-start">
                          <span className="main-color mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* Why Choose Bizdoc */}
            {service.WhyChooseBizdoc && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Why Choose Bizdoc for PRO Services in <span className='main-color'>Dubai</span></h3>
                <div className="row">
                  <div className="col-12">
                    <p className="mb-0">Bizdoc combines local expertise with efficient processes to provide reliable business setup, PRO, and <a className='main-color' href="/legal-services-in-dubai">legal services in Dubai</a>. Our team ensures smooth interactions with government departments, helping you stay compliant and maintain business continuity across the UAE.</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Call to Action */}
            {service.CallToAction && (
              <div className="service-section mb-50">
                <div className="cta-box bg-main-color text-white p-4 rounded">
                  <h4 className="mb-3">Simplify Your Business with Professional PRO Support</h4>
                  <p className="mb-0">{service.CallToAction}</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar with key information */}
         <div className="col-lg-4">
            <div className="sidebar sticky-top ps-lg-4">
              <div className="sidebar-widget  p-4 rounded mb-4">
                <h5 className="mb-3 fw-500">Our Services</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/business-setup-services-in-dubai" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Business Setup
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/pro-services-in-dubai" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      PRO Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/document-attestation-services-in-dubai" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Document Attestation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/legal-services-in-dubai" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Legal Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/legal-translation-services-in-dubai" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Legal Translation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/bank-account-services-in-dubai" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Banking Assistance
                    </a>
                  </li>


                  <li className="mb-2">
                    <a href="/family-visa-services-in-dubai" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Family Visa
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/golden-visa-services-in-dubai" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Golden Visa
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/tax&compliance-services-in-dubai" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Tax & Compliance
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/trademark-registration-services-in-dubai" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Trademark Protection
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/business-support-in-dubai" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Business Support
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget bg-main-color text-white p-4 rounded">
                <h5 className="mb-3">Comprehensive Business Support</h5>
                <p className="mb-3">From startup to success, we handle all your business needs in the Dubai.</p>
                <a href="/contact" className="btn text-white main-colorbg w-100">Get Started Today</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add some custom styles */}
      <style jsx>{`
        .lead-text {
          font-size: 1.1rem;
          line-height: 1.7;
        }
        .service-list, .why-choose-list, .eligibility-list, .benefits-list {
          list-style: none;
          padding-left: 0;
        }
        .service-list li, .why-choose-list li, .benefits-list li {
          padding: 5px 0;
        }
        .sticky-top {
          position: sticky;
          top: 20px;
        }
        .types-list-container {
          border-left: 3px solid var(--main-color);
        }
        .cta-box {
          background-color: var(--main-color);
        }
        @media (max-width: 991px) {
          .sticky-top {
            position: relative;
            top: 0;
          }
        }
      `}</style>
    </section>
  );
}

export default ProServices;