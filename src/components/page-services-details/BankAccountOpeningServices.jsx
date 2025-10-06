import React from 'react';
import { useParams } from 'react-router-dom';

function BankAccountOpeningServices() {
  const { id } = useParams();
  
  // Service data based on your provided content
  const service = {
    id: id || 6,
    Introduction: "A business bank account is a must-have for any company in the Dubai. It allows you to manage transactions, build financial credibility, and stay compliant with Dubai banking regulations. But opening a bank account here can be challenging due to strict compliance rules, documentation requirements, and lengthy approval procedures. At Bizdoc, we simplify the process with our professional bank account opening services in Dubai, ensuring you meet all requirements without delays. Whether you are a startup, a growing SME, or an international company, our team guides you step by step until your account is ready to use.",
    Challenges: [
      "Banks have strict compliance checks due to international regulations.",
      "Incomplete or incorrect documents lead to rejection.",
      "Different banks have varying requirements, making the process confusing.",
      "Businesses with foreign shareholders often face added scrutiny."
    ],
    HowWeHelp: "This is where Bizdoc steps in. Our experts have years of experience working with Dubai banks and can make the process smooth and predictable.",
    OurServicesCover: {
      "Bank Selection Guidance": "Not all banks suit every business. We assess your company structure, industry, and financial goals, then recommend the right bank and account type.",
      "Documentation Preparation": "We prepare and review all required documents, including trade license, MOA, shareholder details, and compliance forms, to ensure error-free submission.",
      "Application Submission and Follow-up": "Bizdoc coordinates directly with the bank's compliance team to track your application and speed up approvals.",
      "Compliance Advisory": "We guide you on maintaining your account, handling deposits, and meeting ongoing compliance requirements to avoid restrictions."
    },
    Benefits: [
      "Save time with faster processing.",
      "Avoid rejections due to missing or incorrect documents.",
      "Get expert guidance on selecting the right bank.",
      "Build long-term banking relationships."
    ],
    WhoCanBenefit: [
      "Entrepreneurs and startups looking for quick account setup.",
      "SMEs managing daily transactions and vendor payments.",
      "International businesses establishing Dubai branches.",
      "Freelancers and professionals needing a reliable account."
    ],
    CallToAction: "Open your business bank account with confidence. Let Bizdoc handle the complexities while you focus on growing your business."
  };

  const serviceKey = "BankAccountOpeningServicesInDubai";

  return (
    <section className="intro section-padding">
      <div className="container">
        {/* Image at the top */}
        <div className="row mb-60">
          <div className="col-12">
            <div className="img-full fit-img rounded-lg overflow-hidden">
              <img src="/assets/images/services/bank-account-services-in-dubai.png" alt={serviceKey} className="w-75" />
            </div>
          </div>
        </div>
        
        {/* Service title and overview */}
        <div className="row mb-50">
          <div className="col-12">
            <h6 className="sub-title main-color mb-15">Service Overview</h6>
            <h1 className="mb-30 fw-600">Bank Account Opening Services in <span className='main-color'>Dubai</span></h1>
            <p className="lead-text mb-0">A business bank account is a must-have for any company in the Dubai. It allows you to manage transactions, build financial credibility, and stay compliant with Dubai banking regulations. But opening a bank account here can be challenging due to strict compliance rules, documentation requirements, and lengthy approval procedures. At <a className='main-color' href="/">Bizdoc</a>, we simplify the process with our professional bank account opening services in Dubai, ensuring you meet all requirements without delays. Whether you are a startup, a growing SME, or an international company, our team guides you step by step until your account is ready to use.</p>
          </div>
        </div>
        
        {/* Service details */}
        <div className="row">
          <div className="col-lg-8">
            {/* Challenges */}
            {service.Challenges && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Challenges of Opening a Bank Account in <span className='main-color'>Dubai</span></h3>
                <div className="row">
                  <div className="col-12">
                    <ul className="service-list">
                      {service.Challenges.map((item, index) => (
                        <li key={index} className="mb-3 d-flex align-items-start">
                          <span className="main-color mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {service.HowWeHelp && (
                  <div className="mt-4 p-3  rounded">
                    <p className="mb-0 fst-italic">{service.HowWeHelp}</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Services offered */}
            {service.OurServicesCover && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Our Bank Account Opening Services Cover</h3>
                <div className="types-list-container  p-4 rounded">
                  {Object.entries(service.OurServicesCover).map(([serviceName, serviceDesc], index, array) => (
                    <div key={index} className="type-item mb-4 pb-4 border-bottom" style={index === array.length - 1 ? {borderBottom: 'none', marginBottom: '0', paddingBottom: '0'} : {}}>
                      <h5 className="mb-2 fw-500 d-flex align-items-center">
                        <span className="main-color mr-2">{index + 1}.</span>
                        {serviceName}
                      </h5>
                     {serviceName=="Documentation Preparation"? <p className="mb-0 ps-4">Our <a className="main-color" href='/business-setup-services-in-dubai' >business setup company in Dubai</a> ensures error-free submission by preparing and reviewing all documents, including trade license, MOA, shareholder details, and compliance forms.</p>:<p className="mb-0 ps-4">{serviceDesc}</p>}
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
                  <h4 className="mb-3">Open Your Business Bank Account with Confidence</h4>
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

export default BankAccountOpeningServices;