import React from 'react';
import { useParams } from 'react-router-dom';

function FamilyVisaServices() {
  const { id } = useParams();
  
  // Service data based on your provided content
  const service = {
    id: id || 8,
    Introduction: "Bringing your loved ones to the Dubai is an important step toward building a stable and fulfilling life here. However, the process of obtaining a family visa can be complex, involving documentation, attestations, approvals, and government procedures. At Bizdoc, we provide professional family visa services in Dubai to make this journey smooth and stress-free. Whether you are sponsoring your spouse, children, or parents, our team ensures fast processing and complete compliance with Dubai regulations.",
    WhoCanApply: [
      "Spouse Sponsorship – Bring your husband or wife to the Dubai with ease.",
      "Child Sponsorship – Sponsor your children and secure their stay and education in the Dubai.",
      "Parent Sponsorship – Facilitate long-term residence for your parents with proper approvals."
    ],
    OurServicesCover: {
      "Assessment of eligibility and requirements": "We evaluate your specific situation to determine eligibility and requirements for family visa sponsorship.",
      "Assistance with application forms and documentation": "Our experts help you complete all necessary forms and gather required documents accurately.",
      "Attestation and translation support": "We handle document attestation and translation to meet Dubai government requirements.",
      "Coordination with immigration and relevant authorities": "We liaise with all relevant government departments on your behalf.",
      "Medical fitness test and Emirates ID processing": "We guide you through medical testing and Emirates ID application processes.",
      "Visa stamping and renewal services": "We assist with visa stamping and provide renewal services when needed."
    },
    WhyChooseBizdoc: [
      "Local Expertise – We are well-versed in Dubai's visa rules and immigration processes.",
      "Quick Processing – Save time with our efficient handling of paperwork and approvals.",
      "Transparent Guidance – No hidden charges, complete clarity at every step.",
      "Comprehensive Support – From document preparation to final visa stamping, we manage it all."
    ],
    CallToAction: "With Bizdoc, sponsoring your family in the Dubai is simple and worry-free. Let us take care of the procedures so you can focus on creating memorable experiences with your loved ones."
  };

  const serviceKey = "FamilyVisaServicesInDubai";

  return (
    <section className="intro section-padding">
      <div className="container">
        {/* Image at the top */}
        <div className="row mb-60">
          <div className="col-12">
            <div className="img-full fit-img rounded-lg overflow-hidden">
              <img src="/assets/images/services/family-visa-services-in-dubai.png" alt={serviceKey} className="w-75" />
            </div>
          </div>
        </div>
        
        {/* Service title and overview */}
        <div className="row mb-50">
          <div className="col-12">
            <h6 className="sub-title main-color mb-15">Service Overview</h6>
            <h1 className="mb-30 fw-600">Family Visa Services in <span className='main-color'>Dubai</span></h1>
            <p className="lead-text mb-0">Bringing your loved ones to the Dubai is an important step toward building a stable and fulfilling life here. However, the process of obtaining a family visa can be complex, involving documentation, attestations, approvals, and government procedures. At Bizdoc, we provide professional <a href="/family-visa-services-dubai-uae" className='main-color'>family visa services Dubai,UAE</a> to make this journey smooth and stress-free. Whether you are sponsoring your spouse, children, or parents, our team ensures fast processing and complete compliance with Dubai regulations.</p>
          </div>
        </div>
        
        {/* Service details */}
        <div className="row">
          <div className="col-lg-8">
            {/* Who Can Apply */}
            {service.WhoCanApply && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Who Can Apply for a Family Visa in <span className='main-color'>Dubai</span>?</h3>
                <div className="row">
                  <div className="col-12">
                    <ul className="service-list">
                      {service.WhoCanApply.map((item, index) => (
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
            
            {/* Services offered */}
            {service.OurServicesCover && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Our Family Visa Services Cover</h3>
                <div className="types-list-container  p-4 rounded">
                  {Object.entries(service.OurServicesCover).map(([serviceName, serviceDesc], index, array) => (
                    <div key={index} className="type-item mb-4 pb-4 border-bottom" style={index === array.length - 1 ? {borderBottom: 'none', marginBottom: '0', paddingBottom: '0'} : {}}>
                      <h5 className="mb-2 fw-500 d-flex align-items-center">
                        <span className="main-color mr-2">{index + 1}.</span>
                        {serviceName}
                      </h5>
                     {serviceName=="Attestation and translation support"? <p className="mb-0 ps-4">We handle <a className='main-color' href="/document-attestation-services-in-dubai">document attestation services in Dubai</a> and <a href="/legal-translation-services-in-dubai" className='main-color'>legal translation services in Dubai</a> to meet Dubai government requirements.</p>: <p className="mb-0 ps-4">{serviceDesc}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Why Choose Bizdoc */}
            {service.WhyChooseBizdoc && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Why Choose Bizdoc for Family Visa Services in Dubai?</h3>
                <div className="row">
                  <div className="col-12">
                    <ul className="benefits-list">
                      {service.WhyChooseBizdoc.map((item, index) => (
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
            
            {/* Call to Action */}
            {service.CallToAction && (
              <div className="service-section mb-50">
                <div className="cta-box bg-main-color text-white p-4 rounded">
                  <h4 className="mb-3">Begin Your Family Visa Process Today</h4>
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

export default FamilyVisaServices;