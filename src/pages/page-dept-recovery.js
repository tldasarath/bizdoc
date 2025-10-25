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
import DebtrecoveryDubai from '../components/business-setup/Debt-Recovery';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function   DebtRecoveryDubai() {
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
    "name": "Bizdoc Legal Consultancy",
    "alternateName": "Bizdoc Debt Recovery Dubai",
    "url": "https://www.bizdoc.ae/debt-recovery",
    "logo": "https://www.bizdoc.ae/lbizdoc-businessmen-services-dubai.png",
    "description": "Bizdoc offers professional debt recovery services in Dubai, UAE. We specialize in ethical debt collection, legal notices, negotiation, and litigation for businesses and individuals.",
    "telephone": "+97145707920",
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Mobile",
      "value": "+971524740055"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Union Coop,Basement B 02, Al Twar 1, Near Dafza Metro Dubai",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "UAE"
    },
    "areaServed": {
      "@type": "Place",
      "name": "United Arab Emirates"
    },
    "priceRange": "AED",
    "serviceType": [
      "Debt Recovery",
      "Debt Collection",
      "Legal Notice Services",
      "Litigation Support",
      "Corporate Legal Services"
    ],
    "founder": {
      "@type": "Person",
      "name": "Bizdoc Legal Consultants"
    },
    "sameAs": [
      "https://www.facebook.com/bizdoc.ae",
      "https://www.linkedin.com/company/bizdoc-ae",
      "https://www.instagram.com/bizdoc.ae"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Debt Recovery Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Debt Collection",
            "description": "Recovering unpaid corporate dues through legal and amicable settlement channels in Dubai."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individual Debt Recovery",
            "description": "Professional assistance for individuals seeking repayment through compliant legal means."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arbitration & Mediation",
            "description": "Negotiation and arbitration support for debt-related disputes across UAE jurisdictions."
          }
        }
      ]
    }
  };
  return (
    <>
      <Helmet>
        <title>     Debt Recovery Dubai | Expert Debt Collection Agency – Bizdoc


</title>
        <meta
          name="description"
          content="  Recover your unpaid debts legally and efficiently with Bizdoc — Dubai’s trusted debt collection agency. Professional recovery services across UAE industries."
        />
        <meta
          name="keywords"
          content=" debt recovery Dubai, debt collection agency Dubai, debt recovery UAE, debt recovery consultants Dubai, legal debt recovery Dubai, Bizdoc debt collection, UAE debt settlement
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
              <Header title={" Debt Recovery"} />
              <DebtrecoveryDubai/>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
         