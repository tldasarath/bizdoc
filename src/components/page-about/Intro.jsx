import React from 'react';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row">
          {/* Full Width - Content */}
          <div className="col-lg-12">
            <div className="cont">
              <h3 className="mb-20">
                About <span className="fw-200">Bizdoc</span> – Leading Business Setup Company in <span className='main-color'>UAE</span> 
              </h3>
              <p >
                Bizdoc is a trusted name for business setup services in UAE, supporting entrepreneurs,
                investors, and corporations with hassle-free solutions. Our mission is to simplify company
                formation in Dubai and across the Emirates, so you can focus on growth while we take care
                of compliance.
              </p>
              <p>
                We specialize in PRO services, document attestation, visa services, Golden Visa UAE assistance,
                bank account opening, tax & compliance, trademark registration, and legal solutions. With our
                expert guidance and deep knowledge of UAE government regulations, Bizdoc delivers transparency,
                speed, and reliability.
              </p>
              <p>
                Whether you are a startup, SME, or multinational, we provide the right solutions to launch
                and expand your business in the UAE.
              </p>

              {/* Mission & Vision */}
              <h4 className="mt-30">Mission</h4>
              <p>
                At Bizdoc, our mission is to simplify business setup in the UAE by providing entrepreneurs,
                investors, and companies with fast, reliable, and transparent services. We aim to remove the
                complexities of company formation, visas, PRO support, and compliance so our clients can focus
                on building and growing their business with confidence.
              </p>

              <h4 className="mt-20">Vision</h4>
              <p>
                Our vision is to become the most trusted business setup company in UAE, recognized for making
                business easy, accessible, and successful for everyone—from startups to global enterprises.
                We strive to be the first choice for those seeking corporate services, Golden Visa solutions,
                and end-to-end business support in the UAE.
              </p>

              <h4 className="mt-20">Why Choose Bizdoc</h4>
              <p>
                Bizdoc is your trusted partner for business setup in UAE, offering everything from company formation,
                trade licenses, and PRO services to visa processing, bank account opening, and document attestation.
                We make complex procedures simple so you can focus on building your business.
              </p>

              <h4 className="mt-20">Our Business Support & Visa Services in UAE</h4>
              <p>
                At Bizdoc, we offer a full suite of business setup services in UAE, backed by corporate support and
                legal expertise. Our services include:
              </p>
              <ul className="mb-30 about-us-li">
                <li><strong>Business Setup Services in Dubai & UAE:</strong> Trade licenses, company registration, and incorporation.</li>
                <li><strong>PRO Services:</strong> Government approvals, documentation, and renewals.</li>
                <li><strong>Document Attestation Services:</strong> Certified attestation for corporate, educational, and personal use.</li>
                <li><strong>Legal Services & Legal Assistance:</strong> Expert guidance on contracts, disputes, and compliance cases.</li>
                <li><strong>Legal Translation Services:</strong> Certified translations for contracts, agreements, and certificates.</li>
                <li><strong>Bank Account Opening in UAE:</strong> Support for opening personal and corporate accounts.</li>
                <li><strong>Family Visa Services:</strong> Hassle-free visa processing for dependents.</li>
                <li><strong>Golden Visa UAE:</strong> Eligibility assessment and 10-year residency visa applications.</li>
                <li><strong>Tax & Compliance Services:</strong> VAT registration, accounting, and auditing.</li>
                <li><strong>Trademark Registration:</strong> Protect your brand in the UAE market.</li>
                <li><strong>End-to-End Business Support:</strong> From setup to growth, complete corporate solutions.</li>
              </ul>

              <a href="/services" className="underline main-color mt-20">
                <span className="text">
                  Explore Our Services <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
