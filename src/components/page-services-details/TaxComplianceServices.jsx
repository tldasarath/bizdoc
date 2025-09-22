import React from 'react';
import { useParams } from 'react-router-dom';

function TaxComplianceServices() {
  const { id } = useParams();
  
  // Service data based on your provided content
  const service = {
    id: id || 9,
    title: "Tax & Compliance Services in UAE",
    subtitle: "Stay Compliant and Protect Your Business",
    Introduction: "The UAE has introduced corporate tax and VAT to strengthen its financial system. For businesses, staying compliant with these regulations is essential to avoid penalties and build credibility. Bizdoc provides complete tax and compliance services in UAE, helping you manage financial obligations with accuracy and confidence.",
    OurServicesCover: {
      "VAT Registration & Filing": "We assist with VAT registration, quarterly filing, and returns submission as per Federal Tax Authority (FTA) rules.",
      "Corporate Tax Support": "Our experts prepare and submit corporate tax filings, ensuring compliance with new regulations.",
      "Financial Audits & Reports": "We coordinate auditing services and prepare financial statements to meet legal and investor requirements.",
      "Compliance Checks": "We review your company's operations, policies, and transactions to identify and fix compliance risks.",
      "Advisory Services": "We provide ongoing tax and compliance advice to help businesses plan efficiently."
    },
    WhyImportant: "Non-compliance with VAT or corporate tax laws can lead to heavy fines, reputational damage, or even suspension of licenses. By working with Bizdoc, you protect your business and gain confidence that all obligations are handled correctly.",
    Benefits: [
      "Timely filings to avoid penalties.",
      "Expert support on complex tax laws.",
      "Transparent processes with clear guidance.",
      "Peace of mind knowing your compliance is in safe hands."
    ],
    WhoNeedsServices: [
      {
        category: "Startups & SMEs",
        description: "Setting up tax systems from the beginning."
      },
      {
        category: "Corporates",
        description: "Managing large-scale audits and filings."
      },
      {
        category: "International Businesses",
        description: "Adapting to UAE's unique tax framework."
      }
    ],
    CallToAction: "Ensure your business stays compliant with UAE tax regulations. Let Bizdoc handle your tax and compliance needs while you focus on growing your business."
  };

  const serviceKey = "TaxComplianceServicesInUAE";

  return (
    <section className="intro section-padding">
      <div className="container">
        {/* Image at the top */}
        <div className="row mb-60">
          <div className="col-11">
            <div className="img-full fit-img rounded-lg overflow-hidden">
              <img src="/assets/images/services/tax.png" alt={serviceKey} className="w-75" />
            </div>
          </div>
        </div>
        
        {/* Service title and overview */}
        <div className="row mb-50">
          <div className="col-12">
            <h6 className="sub-title main-color mb-15">Service Overview</h6>
            <h1 className="mb-10 fw-600">Tax & Compliance Services in <span className='main-color'>UAE</span></h1>
            <h4 className="mb-30 text-muted">{service.subtitle}</h4>
            <p className="lead-text mb-0">{service.Introduction}</p>
          </div>
        </div>
        
        {/* Service details */}
        <div className="row">
          <div className="col-lg-8">
            {/* Services offered */}
            {service.OurServicesCover && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Our Tax & Compliance Services Cover</h3>
                <div className="types-list-container p-4 rounded">
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
            
            {/* Why Important */}
            {service.WhyImportant && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Why Tax Compliance is Important in UAE</h3>
                <div className="mt-4 p-4  rounded">
                  <p className="mb-0">{service.WhyImportant}</p>
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
            
            {/* Who Needs Services */}
            {service.WhoNeedsServices && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Who Needs Our Services?</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="applicant-types">
                      {service.WhoNeedsServices.map((item, index) => (
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
            
            {/* Call to Action */}
            {service.CallToAction && (
              <div className="service-section mb-50">
                <div className="cta-box bg-main-color text-white p-4 rounded">
                  <h4 className="mb-3">Protect Your Business with Proper Compliance</h4>
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

export default TaxComplianceServices;