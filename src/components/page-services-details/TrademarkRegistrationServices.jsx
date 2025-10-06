import React from 'react';
import { useParams } from 'react-router-dom';

function TrademarkRegistrationServices() {
  const { id } = useParams();
  
  // Service data based on your provided content
  const service = {
    id: id || 10,
    Introduction: "In today's competitive market, your brand is one of your most valuable assets. Registering your trademark in the Dubai gives you legal ownership of your brand name, logo, slogan, or design, and prevents others from using it without permission. Bizdoc offers professional trademark registration services in Dubai, ensuring your intellectual property is legally protected.",
    WhyRegister: [
      "Safeguard your brand identity.",
      "Gain exclusive legal rights to your logo, brand name, or slogan.",
      "Prevent competitors from copying or misusing your brand.",
      "Build credibility with clients and partners.",
      "Increase the value of your business in case of franchising or sale."
    ],
    OurServicesCover: {
      "Trademark Search & Availability Check": "We verify if your brand name or logo is available before applying, avoiding conflicts.",
      "Documentation & Application Filing": "We prepare and file your trademark application with the Ministry of Economy.",
      "Government Liaison": "Our PRO team coordinates with authorities, ensuring smooth approvals.",
      "Objection Handling": "If objections arise, we provide legal support and responses to defend your application.",
      "Renewals & Maintenance": "We manage trademark renewals to ensure your protection never lapses."
    },
    Benefits: [
      "Expert guidance through the entire process",
      "Quick filing and processing",
      "Comprehensive protection for your brand",
      "Legal support for objection handling",
      "Ongoing maintenance and renewal services"
    ],
    WhoCanBenefit: [
      "Startups looking to protect their brand identity",
      "Established businesses expanding to the Dubai market",
      "Franchise businesses requiring trademark protection",
      "E-commerce businesses building brand recognition",
      "Companies with unique products or services"
    ],
    CallToAction: "Registering a trademark requires careful attention to detail and proper legal steps. With Bizdoc, you get expert guidance, quick filing, and reliable protection for your brand. Our trademark registration services in Dubai and across the Dubai safeguard your intellectual property so you can grow your business with confidence."
  };

  const serviceKey = "TrademarkRegistrationInDubai";

  return (
    <section className="intro section-padding">
      <div className="container">
        {/* Image at the top */}
        <div className="row mb-60">
          <div className="col-11">
            <div className="img-full fit-img rounded-lg overflow-hidden">
              <img src="/assets/images/services/trademark-registration-services-in-dubai.png" alt={serviceKey} className="w-75" />
            </div>
          </div>
        </div>
        
        {/* Service title and overview */}
        <div className="row mb-50">
          <div className="col-12">
            <h6 className="sub-title main-color mb-15">Service Overview</h6>
            <h1 className="mb-30 fw-600">Trademark Registration in <span className='main-color'>Dubai</span></h1>
            <h3 className="mb-20 fw-500">Protect Your Brand, Protect Your Business</h3>
            <p className="lead-text mb-0">In today's competitive market, your brand is one of your most valuable assets. Registering your trademark in Dubai gives you legal ownership of your brand name, logo, slogan, or design, preventing unauthorized use. Bizdoc offers professional trademark registration and <a href="/" className='main-color'>company formation services in Dubai</a>, ensuring your brand and business are fully protected.</p>
          </div>
        </div>
        
        {/* Service details */}
        <div className="row">
          <div className="col-lg-8">
            {/* Why Register */}
            {service.WhyRegister && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Why Register a Trademark in <span className='main-color'>Dubai</span>?</h3>
                <div className="row">
                  <div className="col-12">
                    <ul className="service-list">
                      {service.WhyRegister.map((item, index) => (
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
                <h3 className="mb-30 fw-500">Our Trademark Registration Services Include</h3>
                <div className="types-list-container  p-4 rounded">
                  {Object.entries(service.OurServicesCover).map(([serviceName, serviceDesc], index, array) => (
                    <div key={index} className="type-item mb-4 pb-4 border-bottom" style={index === array.length - 1 ? {borderBottom: 'none', marginBottom: '0', paddingBottom: '0'} : {}}>
                      <h5 className="mb-2 fw-500 d-flex align-items-center">
                        <span className="main-color mr-2">{index + 1}.</span>
                        {serviceName}
                      </h5>
                      <p className="mb-0 ps-4">{serviceDesc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Benefits */}
            {service.Benefits && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Benefits of Choosing Bizdoc</h3>
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
            
            {/* Who Can Benefit */}
            {service.WhoCanBenefit && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Who Can Benefit?</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      {service.WhoCanBenefit.map((item, index) => (
                        <div key={index} className="col-md-6 mb-3">
                          <p className="mb-0 d-flex align-items-start">
                            <i className="fas fa-user-check main-color mr-2 mt-1"></i>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Call to Action */}
            {service.CallToAction && (
              <div className="service-section mb-50">
                <div className="cta-box bg-main-color text-white p-4 rounded">
                  <h4 className="mb-3">Protect Your Brand with Trademark Registration</h4>
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

export default TrademarkRegistrationServices;