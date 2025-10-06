import React from 'react';
import { useParams } from 'react-router-dom';

function LegalServices() {
  
  
  const service = {
    id:  4,
    Introduction: "Running a business or living in the Dubai comes with legal responsibilities. From drafting contracts to handling disputes or ensuring compliance, the right legal support can save you time, money, and stress. At Bizdoc, we provide professional legal services and legal assistance in Dubai, connecting you with experts who understand the local legal system and business environment. Our goal is to protect your interests and give you peace of mind.",
    ServicesOffered: {
      "Contract Drafting and Review": "Every business relationship begins with an agreement. We help draft, review, and validate contracts for employment, partnerships, real estate, and corporate deals. With Bizdoc, you can be sure your contracts protect your rights and reduce risks.",
      "Dispute Resolution": "Disputes can arise in business or personal dealings. We provide legal assistance in negotiations, mediation, and settlements. If matters escalate, we guide you through court processes with the right legal expertise.",
      "Corporate and Compliance Services": "Dubai companies must follow strict laws on labor, tax, and operations. We support you with legal compliance checks, company policies, and corporate governance to avoid penalties and maintain smooth operations.",
      "Legal Assistance for Individuals": "From tenancy contracts to family matters, we offer guidance for personal legal needs. Whether it's handling disputes or validating personal agreements, Bizdoc ensures you get accurate support."
    },
    WhyLegalSupportIsEssential: "The Dubai's legal framework is unique, combining civil, commercial, and Sharia-based laws. Navigating these systems without professional help can lead to costly mistakes. With Bizdoc's legal services in Dubai and across the Dubai, you gain expert support tailored to your specific case—be it business-related or personal.",
    Benefits: [
      "Local Expertise: Our network of legal professionals understands Dubai laws and procedures.",
      "Tailored Guidance: We provide solutions that fit your specific business or personal needs.",
      "Risk Protection: Avoid financial loss and legal disputes through proactive legal planning.",
      "Confidentiality: We treat every case with discretion and respect."
    ],
    WhoCanBenefit: [
      "Entrepreneurs & Startups: Get contracts and agreements drafted correctly from the start.",
      "Small & Medium Businesses: Ensure compliance with labor and tax laws.",
      "Large Corporates: Receive ongoing legal support for complex operations.",
      "Individuals: Get assistance with family, property, or tenancy disputes."
    ],
    CallToAction: "Protect your business and personal interests with professional legal support. Contact Bizdoc today for comprehensive legal services tailored to your needs in the Dubai."
  };

  const serviceKey = "LegalServicesAndAssistanceInDubai";

  return (
    <section className="intro section-padding">
      <div className="container">
        {/* Image at the top */}
        <div className="row mb-60">
          <div className="col-12">
            <div className="img-full fit-img rounded-lg overflow-hidden">
              <img src="/assets/images/services/legal-services-in-dubai.png" alt={serviceKey} className="w-75" />
            </div>
          </div>
        </div>
        
        {/* Service title and overview */}
        <div className="row mb-50">
          <div className="col-12">
            <h6 className="sub-title main-color mb-15">Service Overview</h6>
            <h1 className="mb-30 fw-600"> Legal Services in <span className='main-color'>Dubai</span></h1>
            <p className="lead-text mb-0">Running a business or living in the Dubai comes with legal responsibilities. From drafting contracts to handling disputes or ensuring compliance, the right legal support can save you time, money, and stress. At Bizdoc, we provide professional legal services, <a className='main-color' href="/legal-translation-services-in-dubai">legal translation services in Dubai </a> and legal assistance in Dubai, connecting you with experts who understand the local legal system and business environment. Our goal is to protect your interests and give you peace of mind.</p>
          </div>
        </div>
        
        {/* Service details */}
        <div className="row">
          <div className="col-lg-8">
            {/* Services offered */}
            {service.ServicesOffered && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Comprehensive Legal Services We Offer</h3>
                <div className="types-list-container  p-4 rounded">
                  {Object.entries(service.ServicesOffered).map(([serviceName, serviceDesc], index, array) => (
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
            
            {/* Why Legal Support is Essential */}
            {service.WhyLegalSupportIsEssential && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Why Legal Support is Essential in the <span className='main-color'>Dubai</span></h3>
                <div className="row">
                  <div className="col-12">
                    <p className="mb-0">The Dubai's legal framework is unique, combining civil, commercial, and Sharia-based laws. Navigating these systems without professional help can lead to costly mistakes. With Bizdoc's legal services in Dubai and across the Dubai, you gain expert <a className='main-color' href="/business-support-in-dubai">business support</a> in Dubai tailored to your specific case—be it business-related or personal.</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Benefits */}
            {service.Benefits && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Benefits of Choosing Bizdoc Legal Services</h3>
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
                <h3 className="mb-30 fw-500">Who Can Benefit from Our Legal Services?</h3>
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
                  <h4 className="mb-3">Trusted Legal Guidance for Your Business and Personal Needs</h4>
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

export default LegalServices;