import React from 'react';
import { useParams } from 'react-router-dom';

function EndToEndBusinessSupport() {
  const { id } = useParams();
  
  // Service data based on your provided content
  const service = {
    id: id || 11,
    title: "End-to-End Business Support in Dubai",
    subtitle: "Complete Support from Startup to Success",
    Introduction: "Starting and running a business in the Dubai involves many steps — from setup and licensing to compliance, visas, and daily operations. Bizdoc provides complete end-to-end business support services in Dubai, helping entrepreneurs and companies at every stage of their journey.",
    OurServicesInclude: {
      "Business Setup & Licensing": "We guide you through company formation, trade license applications, and approvals.",
      "PRO & Government Services": "Our PRO team manages visa processing, Emirates ID, labor cards, and government approvals.",
      "Banking Assistance": "We help open corporate bank accounts with leading Dubai banks.",
      "Legal & Compliance": "From drafting contracts to handling disputes and tax compliance, we ensure your operations remain secure.",
      "Visa & Immigration": "We assist with investor visas, family visas, employee visas, and Golden Visa applications.",
      "Trademark & IP Protection": "Safeguard your brand with reliable trademark registration and renewals.",
      "Continuous Business Support": "Ongoing advisory, document processing, and compliance updates so your business runs without disruptions."
    },
    WhyChooseUs: "Bizdoc is more than a business setup company — we are your long-term partner in growth. Our end-to-end business services in Dubai and Dubai simplify every process, saving you time and effort. With local expertise, transparent guidance, and complete service coverage, we ensure you stay focused on growing your business while we handle the rest.",
    CallToAction: "Let Bizdoc be your partner for complete business success in the Dubai. Focus on your core business while we handle all the regulatory and operational complexities."
  };

  const serviceKey = "EndToEndBusinessSupportInDubai";

  return (
    <section className="intro section-padding">
      <div className="container">
        {/* Image at the top */}
        <div className="row mb-60">
          <div className="col-12">
            <div className="img-full fit-img rounded-lg overflow-hidden">
              <img src="/assets/images/services/business-support-in-dubai.png" alt={serviceKey} className="w-75" />
            </div>
          </div>
        </div>
        
        {/* Service title and overview */}
        <div className="row mb-50">
          <div className="col-12">
            <h6 className="sub-title main-color mb-15">Service Overview</h6>
            <h1 className="mb-10 fw-600">End-to-End Business Support in <span className='main-color'>Dubai</span></h1>
            <h4 className="mb-30 text-muted">{service.subtitle}</h4>
            <p className="lead-text mb-0">{service.Introduction}</p>
          </div>
        </div>
        
        {/* Service details */}
        <div className="row">
          <div className="col-lg-8">
            {/* Services offered */}
           {Object.entries(service.OurServicesInclude).map(([serviceName, serviceDesc], index, array) => (
  <div
    key={index}
    className="type-item mb-4 pb-4 border-bottom"
    style={
      index === array.length - 1
        ? { borderBottom: 'none', marginBottom: '0', paddingBottom: '0' }
        : {}
    }
  >
    <h5 className="mb-2 fw-500 d-flex align-items-center">
      <span className="main-color mr-2">{index + 1}.</span>
      {serviceName}
    </h5>

    {serviceName === 'Legal & Compliance' ? (
      <p className="mb-0 ps-4">
        From drafting contracts to handling disputes and,{' '}
        <a href="/tax&compliance-services-in-dubai" className="main-color">
          tax compliance services in Dubai
        </a>{' '}
        we ensure your operations remain secure.
      </p>
    ) : serviceName === 'Visa & Immigration' ? (
      <p className="mb-0 ps-4">
        We assist with investor visas services, <a href="/family-visa-services-in-dubai" className='main-color'>family visas services in Dubai</a>, employee visas, and <a  className='main-color' href="/golden-visa-services-in-dubai">Golden
        Visa services in Dubai.</a>
      </p>
    ) : (
      <p className="mb-0 ps-4">{serviceDesc}</p>
    )}
  </div>
))}

            {/* Why Choose Us */}
            {service.WhyChooseUs && (
              <div className="service-section mb-50">
                <h3 className="mb-30 fw-500">Why Bizdoc for End-to-End Business Support?</h3>
                <div className="mt-4 p-4  rounded">
                  <p className="mb-0">{service.WhyChooseUs}</p>
                </div>
              </div>
            )}
            
            {/* Call to Action */}
            {service.CallToAction && (
              <div className="service-section mb-50">
                <div className="cta-box bg-main-color text-white p-4 rounded">
                  <h4 className="mb-3">Your Complete Business Partner in the Dubai</h4>
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

export default EndToEndBusinessSupport;