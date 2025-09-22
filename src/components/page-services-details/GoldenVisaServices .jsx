import React from 'react';
import { useParams } from 'react-router-dom';

function GoldenVisaServices() {
  const { id } = useParams();
  
  // Service data based on your provided content
  const service = {
    id: id || 7,
    title: "Golden Visa Services in UAE",
    subtitle: "Secure Long-Term Residency with Ease",
    Introduction: "The UAE Golden Visa program offers investors, entrepreneurs, skilled professionals, and exceptional talents the opportunity to live, work, and study in the UAE for up to 10 years without the need for a sponsor. While this visa provides unmatched benefits, the application process can be complex, requiring eligibility checks, multiple documents, and government approvals. At Bizdoc, we provide professional Golden Visa services in UAE, guiding you step by step to ensure a smooth, error-free application.",
    WhoCanApply: [
      {
        category: "Investors",
        description: "Real estate and business investors meeting the required thresholds."
      },
      {
        category: "Entrepreneurs",
        description: "Owners of innovative startups or businesses."
      },
      {
        category: "Skilled Professionals",
        description: "Doctors, engineers, scientists, researchers, and executives."
      },
      {
        category: "Outstanding Talents",
        description: "Creatives, athletes, and innovators recognized in their fields."
      },
      {
        category: "Students",
        description: "Exceptional students with high academic achievements."
      }
    ],
    OurServicesInclude: {
      "Eligibility Assessment": "We review your profile, financials, and documents to confirm if you qualify for the Golden Visa under any category.",
      "Document Preparation": "Our team organizes and verifies all required documents, such as investment proof, business licenses, or academic records.",
      "Application Submission": "We file the application on your behalf with the relevant authorities, ensuring accuracy and compliance.",
      "Medical & Emirates ID": "From scheduling your medical test to typing your Emirates ID, we handle all required steps.",
      "Renewals & Support": "We assist with renewals, updates, and any queries even after approval."
    },
    Benefits: [
      "Long-term residency (5–10 years).",
      "Ability to sponsor family members, including parents.",
      "No need for a local sponsor.",
      "Multiple entry benefits.",
      "Greater stability for investors and professionals."
    ],
    WhyChooseUs: "Applying on your own can be confusing and time-consuming. Bizdoc ensures a hassle-free process by handling everything from eligibility to final approval. Our Golden Visa services in Dubai and across the UAE give you a secure pathway to residency without delays.",
    CallToAction: "Secure your future in the UAE with the Golden Visa. Let Bizdoc handle the complexities while you focus on your life and business."
  };

  const serviceKey = "GoldenVisaServicesInUAE";

  return (
    <section className="intro section-padding">
      <div className="container">
        {/* Image at the top */}
        <div className="row mb-60">
          <div className="col-12">
            <div className="img-full fit-img rounded-lg overflow-hidden">
              <img src="/assets/images/services/golden-visa.png" alt={serviceKey} className="w-75" />
            </div>
          </div>
        </div>
        
        {/* Service title and overview */}
        <div className="row mb-50">
          <div className="col-12">
            <h6 className="sub-title main-color mb-15">Service Overview</h6>
            <h1 className="mb-10 fw-600">Golden Visa Services in <span className='main-color'>UAE</span></h1>
            <h4 className="mb-30 text-muted">{service.subtitle}</h4>
            <p className="lead-text mb-0">{service.Introduction}</p>
          </div>
        </div>
        
        {/* Service details */}
        <div className="row">
          <div className="col-lg-8">
            {/* Who Can Apply */}
            {service.WhoCanApply && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Who Can Apply for the Golden Visa?</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="applicant-types">
                      {service.WhoCanApply.map((item, index) => (
                        <div key={index} className="applicant-item mb-4 p-4  rounded">
                          <h5 className="mb-2 fw-500 d-flex align-items-center">
                            <span className="main-color mr-2">{index + 1}.</span>
                            {item.category}
                          </h5>
                          <p className="mb-0 ps-4">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Services offered */}
            {service.OurServicesInclude && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Our Golden Visa Services Include</h3>
                <div className="types-list-container p-4 rounded">
                  {Object.entries(service.OurServicesInclude).map(([serviceName, serviceDesc], index, array) => (
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
                <h3 className="mb-30 fw-500">Benefits of a UAE Golden Visa</h3>
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
            
            {/* Why Choose Us */}
            {service.WhyChooseUs && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Why Choose Bizdoc for Golden Visa Services?</h3>
                <div className="mt-4 p-4  rounded">
                  <p className="mb-0">{service.WhyChooseUs}</p>
                </div>
              </div>
            )}
            
            {/* Call to Action */}
            {service.CallToAction && (
              <div className="service-section mb-50">
                <div className="cta-box bg-main-color text-white p-4 rounded">
                  <h4 className="mb-3">Secure Your Future in the UAE</h4>
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
                    <a href="/business-setup-services" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Business Setup
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/pro-services" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      PRO Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/document-attestation-services" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Document Attestation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/legal-services" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Legal Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/legal-translation-services" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Legal Translation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/bank-account-opening-services" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Banking Assistance
                    </a>
                  </li>
                  
                
                  <li className="mb-2">
                    <a href="/family-visa-services" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                     Family Visa
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/golden-visa-services" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Golden Visa
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/tax-compliance-services" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                     Tax & Compliance
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/trademark-registration-services" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                      Trademark Protection
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/end-to-end-business-support" className=" d-flex align-items-center">
                      <i className="fas fa-arrow-right main-color me-2"></i>
                       Business Support
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="sidebar-widget bg-main-color text-white p-4 rounded">
                <h5 className="mb-3">Comprehensive Business Support</h5>
                <p className="mb-3">From startup to success, we handle all your business needs in the UAE.</p>
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

export default GoldenVisaServices;