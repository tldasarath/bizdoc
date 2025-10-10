import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

function Footer() {
  return (
    <footer className="clean-footer crev relative z-10">
      <div className="container pb-40 pt-40 ontop relative z-20">
        <div className="row justify-content-between">
          {/* Logo */}
          <div className="col-lg-2">
            <div className="logo icon-img-240 md-mb80">
              <img src="/assets/images/logos/bizdoc-businessman-services-dubai.png" alt=" business-setup-company-in-dubai" />
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                Union Coop, Basement B 02, <br /> Al Twar 1,<br /> Near Dafza Metro, Dubai,
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="mailto:info@bizdoc.ae">info@bizdoc.ae</a>
              </h6>
              <a
                className="main-color"
                href="https://wa.me/97145707920 
"
                target="_blank"
                rel="noopener noreferrer"
              >
                +971 4 570 7920

              </a>
              <br />
              <a
                className="main-color"
                href="https://wa.me/971524740055"
                target="_blank"
                rel="noopener noreferrer"
              >
                +971 52 474 0055
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/about-us">About</a>
                </li>
                <li className="mb-15">
                  <a href="/services">Services</a>
                </li>
                <li className="mb-15">
                  <a href="/blogs">Blog</a>
                </li>
                <li className="mb-15">
                  <a href="/faqs">Faqs</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal + Social */}
          <div className="col-lg-3">
            <div className="column md-mb50 relative z-30">
              <h6 className="sub-title mb-30">Legal</h6>
              <ul className="rest fz-14 opacity-7 mb-30">
                <li className="mb-15">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms &amp; Conditions</a>
                </li>
              </ul>

              <h6 className="sub-title mb-20">Follow Us</h6>
              <ul className="rest social-icon d-flex align-items-center relative z-30">
                <li className="mr-15">
                  <a
                    href="https://www.facebook.com/profile.php?id=61579783263789"
                    className="social-link group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer relative z-40"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="text-gray-500 transition-all duration-300 group-hover:text-[#1877F2] text-xl" />
                  </a>
                </li>

                <li className="mr-15">
                  <a
                    href="https://x.com/bizdoc_official"
                    className="social-link group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer relative z-40"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiX className="text-gray-500 transition-all duration-300 group-hover:text-black text-xl" />
                  </a>
                </li>

                <li className="mr-15">
                  <a
                    href="https://www.linkedin.com/company/107069996/admin/dashboard/"
                    className="social-link group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer relative z-40"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="text-gray-500 transition-all duration-300 group-hover:text-[#0A66C2] text-xl" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/bizdoc_official?igsh=azNjamsweDRvaGw1"
                    className="social-link group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer relative z-40"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-gray-500 transition-all duration-300 group-hover:text-[#E4405F] text-xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-50 pb-50 mt-80 bord-thin-top  relative z-20">
          <div className="">
            <h6 className="sub-title mb-30">Business Setup</h6>
            <ul className="rest fz-14 opacity-7 mb-30">
              <li className="mb-5">
                <a href="/company-formation-in-dubai">Company Formation Dubai</a>
              </li>
              <li className="mb-5">
                <a href="/free-zone-company-setup-in-dubai">Free Zone Company Setup in Dubai</a>
              </li>
              <li className="mb-5">
                <a href="/offshore-company-formation-services-in-dubai">Offshore Company Formation Services in Dubai</a>
              </li>
              <li className="mb-5">
                <a href="/mainland-company-formation-services-in-dubai">Mainland Company Formation Services in Dubai
                </a>
              </li>
              <li className="mb-5">
                <a href="/llc-company-setup-services-in-dubai">LLC Company Setup Services in Dubai
                </a>
              </li>
              <li className="mb-5">
                <a href="/branch-office-setup-services-in-dubai">Branch Office Setup Services in Dubai
                </a>
              </li>
              <li className="mb-5">
                <a href="/dmccc-company-setup-services-in-dubai">DMCC Company Setup Services in Dubai
                </a>
              </li>
              <li className="mb-5">
                <a href="/dic-company-formation-services-in-dubai">DIC Company Formation Services in Dubai

                </a>
              </li>
              <li className="mb-5">
                <a href="/dso-business-setup-services-in-dubai">DSO Business Setup Services in Dubai

                </a>
              </li>
              <li className="mb-5">
                <a href="/corporate-pro-services-in-dubai">Corporate PRO Services in Dubai


                </a>
              </li>
              <li className="mb-5">
                <a href="/license-renewal-services-in-dubai">License Renewal Services in Dubai


                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top relative z-20">
          <div className="text-center">
            <p className="fz-14">
              Copyright © 2025 <span className="font-semibold">Bizdoc</span> by{' '}
              <a
                href="https://www.nextmedia.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline main-color"
              >
                Next Media
              </a>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background Blur */}
      <div className="circle-blur absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <img src="/assets/imgs/patterns/blur1.png" alt="blur effect" className="w-full h-full object-cover opacity-30" />
      </div>
    </footer>
  );
}

export default Footer;