import React from 'react';

function BusinessSetupServices() {

  // Service data based on your provided content
  const service = {
    id: 1,
    Introduction: "Setting up a business with leading business setup company in Dubai can open doors to limitless opportunities, but the process often involves complex paperwork, government approvals, and regulatory requirements. At Bizdoc, we provide professional business setup services in Dubai to simplify this journey. Whether you are a new entrepreneur, investor, or a global company, our experts guide you through every step of company formation with speed and transparency.",
    TypesOfBusinessSetupInDubai: {
      "Mainland Company Formation": "We help you establish a mainland business in Dubai and across the Dubai, giving you access to the local market and the flexibility to work with government and private entities.",
      "Free Zone Company Formation": "If you want 100% ownership and a cost-effective setup, our free zone company setup services in Dubai are the ideal solution. We guide you in selecting the right free zone based on your industry and goals.",
      "Offshore Company Formation": "Looking for international trade or asset protection? We provide offshore company formation services in Dubai, ensuring complete confidentiality and legal compliance."
    },
    OurBusinessSetupServicesCover: [
      "Trade license registration and renewal",
      "Assistance with choosing the right business activity and structure",
      "Preparation and submission of incorporation documents",
      "Government approvals and NOC coordination",
      "Office space and business address solutions",
      "Corporate bank account opening support"
    ],
    WhyChooseBizdoc: [
      "Local Expertise: We understand Dubai's legal and business environment inside out.",
      "Fast Processing: Save time with quick and efficient documentation handling.",
      "Transparent Guidance: No hidden costs or unclear steps — we keep everything clear.",
      "End-to-End Support: From company registration to visas and compliance, we cover it all."
    ],
    CallToAction: "With Bizdoc, starting your company is simple, reliable, and stress-free. Let our team handle the paperwork while you focus on growing your business."
  };

  const serviceKey = "BusinessSetupServicesInDubai";

  return (
    <section className="intro section-padding">
      <div className="container">
        {/* Image at the top */}
        <div className="row mb-60">
          <div className="col-10">
            <div className="img mb-40">
              <img src="/assets/images/services/business-setup.png" alt={serviceKey} className="w-100" />
            </div>
          </div>
        </div>

        {/* Service title and overview */}
        <div className="row mb-50">
          <div className="col-12">
            <h6 className="sub-title main-color mb-15">Service Overview</h6>
            <h1 className="mb-30 fw-600">Business Setup Services In <span className='main-color'>Dubai</span></h1>
            <p className="lead-text mb-0">Setting up a business with <a className='main-color' href="/about-us">leading business setup company in Dubai</a> can open doors to limitless opportunities, but the process often involves complex paperwork, government approvals, and regulatory requirements. At Bizdoc, we provide professional business setup services in Dubai to simplify this journey. Whether you are a new entrepreneur, investor, or a global company, our experts guide you through every step of company formation with speed and transparency.</p>
          </div>
        </div>

        {/* Service details */}
        <div className="row">
          <div className="col-lg-8">
            {/* Types of Business Setup */}
            {service.TypesOfBusinessSetupInDubai && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Types of Business Setup in <span className='main-color'>Dubai</span></h3>
                <div className="types-list-container  p-4 rounded">
                  {Object.entries(service.TypesOfBusinessSetupInDubai).map(([typeName, typeDesc], index, array) => (
                    <div key={index} className="type-item mb-4 pb-4 border-bottom" style={index === array.length - 1 ? { borderBottom: 'none', marginBottom: '0', paddingBottom: '0' } : {}}>
                      <h5 className="mb-2 fw-500 d-flex align-items-center">
                        <span className="main-color mr-2">•</span>
                        {typeName}
                      </h5>
                      {typeName !== "Offshore Company Formation" ? <p className="mb-0 ps-4">{typeDesc}</p> : <p className="mb-0 ps-4">Looking for international trade or asset protection? We provide offshore <a className='main-color' href="/contact">company formation services in Dubai</a>, ensuring complete confidentiality and legal compliance.</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Services offered */}
            {service.OurBusinessSetupServicesCover && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Our Business Setup Services Cover</h3>
                <div className="row">
                  <div className="col-12">
                    <ul className="service-list">
                      {service.OurBusinessSetupServicesCover.map((item, index) => (
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

            {/* Why Choose Bizdoc */}
            {service.WhyChooseBizdoc && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Why Choose Bizdoc for Business Setup in <span className='main-color'>Dubai</span></h3>
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
                  <h4 className="mb-3">Begin Your Business Setup in <span className='main-color'>Dubai</span> Today</h4>
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

export default BusinessSetupServices;