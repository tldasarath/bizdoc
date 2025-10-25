    import Lines from '../components/common/Lines';
import ProgressScroll from '../components/common/ProgressScroll';
import Cursor from '../components/common/cusor';
import LoadingScreen from '../components/common/loader';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import { Helmet } from 'react-helmet';
import Header from '../components/page-services-details/Header';
import Blog from '../components/blog-details/Blog';
import WOW from 'wowjs';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';


import BranchOfficeSetupDubai from '../components/business-setup/BranchOfficeSetupDubai';
import DMCCCompanySetupDubai from '../components/business-setup/DMCCCompanySetupDubai';
import DICCompanyFormationDubai from '../components/business-setup/DICCompanyFormationDubai';
import DSOBusinessSetupDubai from '../components/business-setup/DSOBusinessSetupDubai';
import CorporatePROServicesDubai from '../components/business-setup/CorporatePROServicesDubai';
import LicenseRenewalServicesDubai from '../components/business-setup/LicenseRenewalServicesDubai';
import LegalConsultantsDubai from '../components/business-setup/LegalConsultantsDubai';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function   LegalconsultantsDubai() {
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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "legal consultants in Dubai",
    "image": "https://www.bizdoc.ae/images/logo.png",
    "url": "https://www.bizdoc.ae/legal-consultants-in-dubai",
    "logo": "https://www.bizdoc.ae/images/logo.png",
    "description": "Bizdoc provides legal services in Dubai with the best legal consultants in Dubai handling corporate, family, real estate, and criminal law. 24*7 customer support.",
    "telephone": "+97145707920",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Union Coop Dubai,Basement B 02,Al Twar 1",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "areaServed": {
      "@type": "Place",
      "name": "Dubai, UAE"
    },
    "sameAs": [
      "https://www.facebook.com/bizdoc.ae",
      "https://www.linkedin.com/company/bizdoc-ae"
    ],
    "founder": {
      "@type": "Person",
      "name": "Legal Consultants in Dubai | Bizdoc"
    },
    "keywords": [
      "Best legal consultants in Dubai",
      "legal services in Dubai",
      "Dubai legal advisors",
      "corporate lawyers in Dubai",
      "real estate legal consultants Dubai",
      "family lawyers Dubai",
      "UAE law consultancy"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bizdoc Legal Consultants in Dubai",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate & Commercial Law",
            "description": "Bizdoc provides legal services in Dubai with the best legal consultants in Dubai handling corporate, family, real estate, and criminal law. 24*7 customer support."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real Estate & Property Law",
            "description": "Property purchase, lease, dispute resolution, and title verification."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Law",
            "description": "Divorce, child custody, and inheritance planning under UAE law."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intellectual Property Law",
            "description": "Trademark, copyright, and patent registration and protection."
          }
        }
      ]
    },
    "faqPage": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes Bizdoc one of the best legal consultants in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bizdoc stands out for combining business consultancy with professional legal services in Dubai, offering end-to-end representation and compliance support for individuals and companies."
          }
        },
        {
          "@type": "Question",
          "name": "What legal services does Bizdoc offer in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bizdoc provides comprehensive legal services in Dubai covering corporate, real estate, family, labour, criminal, and intellectual property law."
          }
        },
        {
          "@type": "Question",
          "name": "Are Bizdoc’s legal consultants authorized to represent clients in UAE courts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Bizdoc collaborates with licensed advocates and partner law firms authorized to represent clients in all UAE courts."
          }
        },
        {
          "@type": "Question",
          "name": "Can Bizdoc assist with property and real estate legal issues in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Bizdoc’s real estate legal consultants in Dubai handle property transactions, lease agreements, disputes, and title verification to protect your investment."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Bizdoc’s legal consultants in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Bizdoc via our Dubai office, website contact form, or phone call to schedule a confidential consultation with our legal consultants in Dubai."
          }
        }
      ]
    }
  };
  return (
    <>
      <Helmet>
        <title>      Dubai Advocates & Legal Consultants in Dubai | Bizdoc Businessmen Services



</title>
        <meta
          name="description"
          content=" Expert Dubai Advocates & Legal Consultants in Dubai
 offering corporate, litigation, arbitration & debt recovery services. Consult Bizdoc - your trusted legal partner in Dubai,UAE. 
"
        />
        <meta
          name="keywords"
          content=" dubai advocates & legal consultants in dubai
"
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
          <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
        <script src="/assets/js/ScrollTrigger.min.js" defer />
        <script src="/assets/js/ScrollSmoother.min.js" defer />
        <script defer src="/assets/js/gsap.min.js"></script>

        <script defer src="/assets/js/splitting.min.js"></script>
        <script defer src="/assets/js/isotope.pkgd.min.js"></script>
        <script defer src="/assets/js/plugins.js"></script>
        <script defer src="/assets/js/TweenMax.min.js"></script>
        <script defer src="/assets/js/charming.min.js"></script>
        <script defer src="/assets/js/countdown.js"></script>
      </Helmet>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <Navbar />
        <div id="smooth-wrapper" ref={main}>
          <div id="smooth-content">
            <main className="main-bg">
              <Header title={"Legal Consultants Dubai"} />
              <LegalConsultantsDubai/>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
         