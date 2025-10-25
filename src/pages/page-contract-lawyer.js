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
import ContractlawyersDubai from '../components/business-setup/ContractLawyersDubai';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function   ContractLawyersDubai() {
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
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Bizdoc",
    "url": "https://www.bizdoc.ae",
    "logo": "https://www.bizdoc.ae/bizdoc-businessmen-services-dubai.png",
    "description": "Bizdoc offers professional contract lawyers in Dubai for contract drafting, auditing, and legal advice across corporate, employment, real estate, and finance sectors.",
    "telephone": "+971 4 570 7920",
    "email": "info@bizdoc.ae",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Union Coop Dubai,Basement B 02,Al Twar 1",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "areaServed": "Dubai, UAE",
    "sameAs": [
      "https://www.facebook.com/bizdoc",
      "https://www.linkedin.com/company/bizdoc",
      "https://twitter.com/bizdoc"
    ],
    "hasFAQ": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why should I hire a contract lawyer in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A contract lawyer ensures that your agreements are legally sound, risk-free, and enforceable. They help prevent disputes, ensure compliance with UAE laws, and safeguard your business or personal interests."
          }
        },
        {
          "@type": "Question",
          "name": "What is contract auditing and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contract auditing is the process of reviewing agreements for accuracy, compliance, and risk. It ensures that contracts are enforceable and minimizes potential legal disputes."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to draft a contract in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The time depends on the complexity of the contract. Simple agreements may take a few days, while complex corporate or real estate contracts may take several weeks. Bizdoc ensures thorough drafting without compromising speed or quality."
          }
        },
        {
          "@type": "Question",
          "name": "Can Bizdoc help with contract disputes in court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Bizdoc provides legal representation in Dubai courts and arbitration forums to enforce contracts or resolve disputes professionally and efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Are your contract services suitable for all industries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We handle contracts across corporate, commercial, employment, real estate, construction, banking, finance, and intellectual property sectors."
          }
        }
      ]
    }
  };
  return (
    <>
      <Helmet>
        <title>    Contract Lawyers Dubai | Contract Drafting & Auditing – Bizdoc



</title>
        <meta
          name="description"
          content="  Bizdoc offers expert contract lawyers in Dubai. Professional drafting, auditing, and legal advice for businesses, employment, real estate, and finance."
        />
        <meta
          name="keywords"
          content=" contract lawyers dubai, contract drafting dubai, contract auditing dubai, legal contract services dubai, employment contracts dubai, real estate contracts dubai, corporate contracts dubai, construction contracts dubai, banking contracts dubai, bizdoc legal services dubai
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
        {JSON.stringify(jsonLd)}
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
              <Header title={"Expert Legal Advice Services"} />
              <ContractlawyersDubai/>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
         