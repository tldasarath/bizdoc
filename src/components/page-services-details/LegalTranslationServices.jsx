import React from 'react';
import { useParams } from 'react-router-dom';

function LegalTranslationServices() {
  
  // Service data based on the provided content
  const service = {
    id: 5,
    Introduction: "In the UAE, many government authorities and legal bodies require documents to be submitted in Arabic. For these documents to be valid, they must be translated by certified legal translators approved by the Ministry of Justice. At Bizdoc, we provide professional legal translation services in UAE, ensuring your documents are translated accurately, reliably, and accepted by all relevant authorities. Whether you're a business submitting contracts or an individual applying for visas, our legal translation services give you the peace of mind that your paperwork is error-free and compliant.",
    OurLegalTranslationServicesCover: {
      "Corporate and Commercial Documents": "Contracts, agreements, trade licenses, shareholder agreements, and company formation papers all require precise translation. We ensure every detail is clear and legally accurate.",
      "Personal Documents": "Birth certificates, marriage certificates, death certificates, and academic qualifications must often be translated for visa, family sponsorship, or immigration purposes. We handle these with care and confidentiality.",
      "Court and Legal Papers": "Court orders, power of attorney documents, affidavits, and other legal papers are translated in strict compliance with legal standards.",
      "Financial and Tax Documents": "We translate audit reports, balance sheets, VAT documents, and other financial records for legal and compliance submissions."
    },
    WhyLegalTranslationMattersInUAE: "Translation errors can lead to document rejection, visa delays, or even legal disputes. Using certified translators ensures your documents are accepted by ministries, embassies, and courts without unnecessary back-and-forth. At Bizdoc, our team works with certified legal translators who understand both the source language and Arabic legal terminology, giving you precise translations every time.",
    BenefitsOfChoosingBizdoc: [
      "Certified Translations: Approved by UAE authorities, ministries, and embassies.",
      "Accuracy & Reliability: Every word translated with attention to legal detail.",
      "Fast Turnaround: We handle urgent requests without compromising quality.",
      "Confidential Handling: Sensitive documents are kept secure and private.",
      "Complete Support: From document attestation to translation, everything under one roof."
    ],
    WhoNeedsLegalTranslationServices: [
      "Companies: For contracts, licenses, and compliance paperwork.",
      "Entrepreneurs & Investors: For business formation documents and agreements.",
      "Individuals: For immigration, family sponsorship, and education purposes.",
      "Legal Professionals: For litigation, arbitration, and legal filings."
    ]
  };

  const serviceKey = "LegalTranslationServicesInUAE";

  return (
    <section className="intro section-padding">
      <div className="container">
        {/* Image at the top */}
        <div className="row mb-60">
          <div className="col-12">
            <div className="img-full fit-img rounded-lg overflow-hidden">
              <img src="/assets/images/services/translation.png" alt={serviceKey} className="w-75" />
            </div>
          </div>
        </div>
        
        {/* Service title and overview */}
        <div className="row mb-50">
          <div className="col-12">
            <h6 className="sub-title main-color mb-15">Service Overview</h6>
            <h1 className="mb-30 fw-600">Legal Translation Services in <span className='main-color'>UAE</span></h1>
            <p className="lead-text mb-0">{service.Introduction}</p>
          </div>
        </div>
        
        {/* Service details */}
        <div className="row">
          <div className="col-lg-8">
            {/* Types of Translation Services */}
            {service.OurLegalTranslationServicesCover && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Our Legal Translation Services Cover</h3>
                <div className="types-list-container  p-4 rounded">
                  {Object.entries(service.OurLegalTranslationServicesCover).map(([typeName, typeDesc], index, array) => (
                    <div key={index} className="type-item mb-4 pb-4 border-bottom" style={index === array.length - 1 ? {borderBottom: 'none', marginBottom: '0', paddingBottom: '0'} : {}}>
                      <h5 className="mb-2 fw-500 d-flex align-items-center">
                        <span className="main-color mr-2">{index + 1}.</span>
                        {typeName}
                      </h5>
                      <p className="mb-0 ps-4">{typeDesc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Why Legal Translation Matters */}
            {service.WhyLegalTranslationMattersInUAE && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Why Legal Translation Matters in <span className='main-color'>UAE</span></h3>
                <p className="lead-text mb-0">{service.WhyLegalTranslationMattersInUAE}</p>
              </div>
            )}
            
            {/* Benefits */}
            {service.BenefitsOfChoosingBizdoc && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Benefits of Choosing Bizdoc Legal Translation Services</h3>
                <div className="row">
                  <div className="col-12">
                    <ul className="benefits-list">
                      {service.BenefitsOfChoosingBizdoc.map((item, index) => (
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
            
            {/* Who Needs These Services */}
            {service.WhoNeedsLegalTranslationServices && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Who Needs Legal Translation Services in <span className='main-color'>UAE?</span></h3>
                <div className="row">
                  <div className="col-12">
                    <ul className="service-list">
                      {service.WhoNeedsLegalTranslationServices.map((item, index) => (
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
            
            {/* Call to Action */}
            <div className="service-section mb-50">
              <div className="cta-box bg-main-color text-white p-4 rounded">
                <h4 className="mb-3">Get Certified Legal Translations Today</h4>
                <p className="mb-0">Ensure your documents are accurately translated and legally compliant. Contact Bizdoc for professional legal translation services in the UAE.</p>
              </div>
            </div>
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

export default LegalTranslationServices;