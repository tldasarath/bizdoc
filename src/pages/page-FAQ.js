import Lines from '../components/common/Lines';
import ProgressScroll from '../components/common/ProgressScroll';
import Cursor from '../components/common/cusor';
import LoadingScreen from '../components/common/loader';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Marq2 from '../components/common/Marq2';
import { Helmet } from 'react-helmet';
import Blog from '../components/home-main/Blog';
import Clients from '../components/common/Clients';
import Testimonials from '../components/home-creative-agency/Testimonials';
import Header from '../components/page-FAQ/Header';
import FAQS from '../components/page-FAQ/FAQS';
import Numbers from '../components/page-FAQ/Numbers';
import WOW from 'wowjs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function PageFAQ() {
  const main = useRef();
  const smoother = useRef();

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        script.onload = () => {
          resolve(true);
        };

        script.onerror = () => {
          reject(new Error(`Failed to load ${src}`));
        };

        document.body.appendChild(script);
      });
    };

    // Load ScrollSmoother.min.js first
    loadScript('/assets/js/gsap.min.js')
      .then(() => {
        loadScript('/assets/js/ScrollSmoother.min.js');
      })
      .then(() => {
        // Once ScrollSmoother.min.js is loaded, load smoother-script.js
        return loadScript('/assets/js/smoother-script.js');
      })
      .catch((error) => {
        console.error(error.message);
      });

    // // Cleanup function
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      new WOW.WOW({
        animateClass: 'animated',
        offset: 100,
      }).init();
    }
  }, []);
  return (
    <>
      <Helmet>
<title>Bizdoc UAE FAQ – Business Setup, Visas & PRO Services</title>
<meta
  name="description"
  content="Find answers to common questions about business setup, PRO services, Golden Visa, bank account opening, document attestation, trademark registration, legal support, and tax compliance in UAE with Bizdoc."
/>
<meta
  name="keywords"
  content="Business Setup FAQ UAE, PRO Services UAE, Golden Visa UAE"
/>
           <link rel="icon" href="/assets/images/home/favicon.png" />
        <link rel="shortcut icon" href="/assets/images/home/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/assets/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap"
        />
        <script src="/assets/js/ScrollTrigger.min.js" defer />
        <script src="/assets/js/ScrollSmoother.min.js" defer />
        <script defer src="/assets/js/gsap.min.js"></script>

        <script defer src="/assets/js/splitting.min.js"></script>
        <script defer src="/assets/js/isotope.pkgd.min.js"></script>
        <script defer src="/assets/js/plugins.js"></script>
        <script defer src="/assets/js/TweenMax.min.js"></script>
        <script defer src="/assets/js/charming.min.js"></script>
        <script defer src="/assets/js/countdown.js"></script>
          <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Bizdoc provide for business setup in UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bizdoc offers complete business setup services in UAE, including company formation in Dubai, trade license registration, PRO services, visa assistance, bank account opening, and corporate compliance support."
            }
          },
          {
            "@type": "Question",
            "name": "How can Bizdoc help with company formation in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our experts guide you through every step of company formation in Dubai, whether it’s mainland, free zone, or offshore setup. We handle documentation, government approvals, and compliance to ensure a smooth process."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide PRO services in UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Bizdoc specializes in PRO services in UAE, including visa processing, labor contracts, Emirates ID, trade license renewals, and government approvals—helping businesses save time and remain compliant."
            }
          },
          {
            "@type": "Question",
            "name": "What is the UAE Golden Visa and can Bizdoc assist with it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The UAE Golden Visa is a long-term residency visa (5–10 years) for investors, entrepreneurs, professionals, and outstanding talents. Bizdoc provides complete Golden Visa services in UAE, including eligibility checks, document preparation, application submission, and renewals."
            }
          },
          {
            "@type": "Question",
            "name": "Can Bizdoc help with bank account opening in UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide professional bank account opening services in UAE. Our team assists with documentation, compliance, and coordination with top banks, making the process simple and hassle-free for startups, SMEs, and international businesses."
            }
          },
          {
            "@type": "Question",
            "name": "What is document attestation and why is it important in UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Document attestation in UAE verifies the authenticity of personal, educational, or commercial documents for official use. Bizdoc provides fast and reliable attestation services, coordinating with MOFA, embassies, and government authorities."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer legal services and compliance support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Bizdoc provides expert legal services in UAE, including contract drafting, dispute resolution, corporate compliance, and personal legal assistance. We also offer legal translation services approved by UAE authorities."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I choose Bizdoc for trademark registration in UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our trademark registration services in UAE protect your brand identity by handling searches, documentation, application filing, objections, and renewals—ensuring your intellectual property is legally protected."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of tax and compliance services does Bizdoc provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bizdoc offers tax and compliance services in UAE, including VAT registration, corporate tax filing, financial audits, compliance checks, and advisory services to help businesses avoid penalties and stay compliant."
            }
          },
          {
            "@type": "Question",
            "name": "Does Bizdoc provide end-to-end business support in UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We offer end-to-end business support in UAE, covering business setup, PRO services, visas, legal solutions, banking, compliance, and trademark protection—making Bizdoc your long-term partner for growth."
            }
          }
        ]
      }
    `}
  </script>
      </Helmet>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <Navbar />
        <div id="smooth-wrapper" ref={main}>
          <div id="smooth-content">
            <main className="main-bg o-hidden">
              <Header />
              <FAQS />
              {/* <Numbers />
              <Testimonials />
              <Clients />
              <Blog />
              <Marq2 /> */}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
