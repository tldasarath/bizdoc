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
import LitigationservicesDubai from '../components/business-setup/LitigationservicesDubai';
import ArbitrationservicesDubai from '../components/business-setup/ArbitrationServicesDubai';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function   ArbitrationServicesDubai() {
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
        <title>Best Arbitration Law Firm Dubai | Expert Arbitration Lawyers – Bizdoc


</title>
        <meta
          name="description"
          content="  Bizdoc provides expert arbitration services in Dubai. Resolve disputes efficiently with top arbitration lawyers, commercial & construction arbitration experts"
        />
        <meta
          name="keywords"
          content="arbitration law firm Dubai, arbitration lawyers Dubai, dispute resolution Dubai, commercial arbitration UAE, construction arbitration Dubai, Bizdoc legal advisors Dubai, 
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
              <Header title={"Arbitration Law Firm in Dubai"} />
              <ArbitrationservicesDubai/>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
         