import React from 'react';
import { useParams } from 'react-router-dom';

function DocumentAttestationServices() {
  const { id } = useParams();
  
  // Service data based on the provided content
  const service = {
    id: id || 3,
    Introduction: "When living, working, or doing business in Dubai, official documents must often be verified by authorities. This process, called attestation, proves that your documents are authentic and legally valid. Bizdoc provides professional document attestation and legal translation services in Dubai for personal, educational, and commercial papers. Furthermore, we offer comprehensive legal services in Dubai to ensure your entire process is seamless, compliant, and stress-free.",
    OurDocumentAttestationServicesInclude: {
      "Educational Certificates": "Attestation of degrees, diplomas, transcripts, and training certificates for job applications, higher education, or professional licensing.",
      "Personal Documents": "Verification of birth certificates, marriage certificates, and passports required for visas, family sponsorship, or other personal matters.",
      "Commercial Documents": "Attestation of trade licenses, contracts, invoices, and company papers for business transactions and compliance in the Dubai.",
      "Ministry and Embassy Approvals": "We coordinate with the Ministry of Foreign Affairs (MOFA), embassies, and other authorities to complete the process quickly."
    },
    BenefitsOfChoosingBizdoc: [
      "Fast Processing: We handle submissions and approvals without delays.",
      "End-to-End Support: From initial verification to final stamping, everything is managed by our team.",
      "Legal Compliance: Ensure your documents meet Dubai government requirements.",
      "Trusted Service: Our experience guarantees accuracy and reliability."
    ],
    WhyChooseBizdoc: "At Bizdoc, we know how important it is for your documents to be ready on time. Whether you are applying for a job, sponsoring family, or finalizing a business deal, our document attestation services in Dubai and across the Dubai give you complete peace of mind."
  };

  const serviceKey = "DocumentAttestationServicesInDubai";

  return (
    <section className="intro section-padding">
      <div className="container">
        {/* Image at the top */}
        <div className="row mb-60">
          <div className="col-12">
            <div className="img-full fit-img rounded-lg overflow-hidden">
              <img src="/assets/images/services/document-attestation-services-in-dubai.png" alt={serviceKey} className="w-75" />
            </div>
          </div>
        </div>
        
        {/* Service title and overview */}
        <div className="row mb-50">
          <div className="col-12">
            <h6 className="sub-title main-color mb-15">Service Overview</h6>
            <h1 className="mb-30 fw-600">Document Attestation Services in <span className='main-color'>Dubai</span></h1>
            <p className="lead-text mb-0">When living, working, or doing business in Dubai, official documents must often be verified by authorities. This process, called attestation, proves that your documents are authentic and legally valid. Bizdoc provides professional document attestation and <a className='main-color' href="/legal-translation-services-in-dubai">legal translation services in Dubai</a> for personal, educational, and commercial papers. Furthermore, we offer comprehensive <a href="/legal-services-in-dubai" className='main-color'>legal services in Dubai</a> to ensure your entire process is seamless, compliant, and stress-free.</p>
          </div>
        </div>
        
        {/* Service details */}
        <div className="row">
          <div className="col-lg-8">
            {/* Types of Attestation Services */}
            {service.OurDocumentAttestationServicesInclude && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Our Document Attestation Services Include</h3>
                <div className="types-list-container  p-4 rounded">
                  {Object.entries(service.OurDocumentAttestationServicesInclude).map(([typeName, typeDesc], index, array) => (
                    <div key={index} className="type-item mb-4 pb-4 border-bottom" style={index === array.length - 1 ? {borderBottom: 'none', marginBottom: '0', paddingBottom: '0'} : {}}>
                      <h5 className="mb-2 fw-500 d-flex align-items-center">
                        <span className="main-color mr-2">•</span>
                        {typeName}
                      </h5>
                      <p className="mb-0 ps-4">{typeDesc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Benefits */}
            {service.BenefitsOfChoosingBizdoc && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Benefits of Choosing Bizdoc for Document Attestation</h3>
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
            
            {/* Why Choose Bizdoc */}
            {service.WhyChooseBizdoc && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Why Bizdoc for Document Attestation in <span className='main-color'>Dubai</span></h3>
                <p className="lead-text mb-0">At <a href='/' className="main-color">Bizdoc</a>, we know how important it is for your documents to be ready on time. Whether you are applying for a job, sponsoring family, or finalizing a business deal, our document attestation services in Dubai and across the Dubai give you complete peace of mind.</p>
              </div>
            )}
            
            {/* Call to Action */}
            <div className="service-section mb-50">
              <div className="cta-box bg-main-color text-white p-4 rounded">
                <h4 className="mb-3">Get Your Documents Attested Today</h4>
                <p className="mb-0">Let our experts handle the attestation process while you focus on what matters most. Contact us now for a consultation.</p>
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

export default DocumentAttestationServices;