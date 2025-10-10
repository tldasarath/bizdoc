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


import MainlandCompanyFormationDubai from '../components/business-setup/MainLandCompany';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function   MainlandCompanyFormation() {
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
        <title>   Mainland Company Formation Services in Dubai | Bizdoc Businessman Services

</title>
        <meta
          name="description"
          content="Bizdoc Businessman Services provides expert Mainland Company Formation Services in Dubai. Leading business setup company in Dubai offering legal services and tax & compliance services in Dubai."
        />
        <meta
          name="keywords"
          content="Mainland Company Formation Services in Dubai, LLC company setup Dubai, business setup company in Dubai, legal services in Dubai, tax & compliance services in Dubai"
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
              <Header title={" Offshore Company Formation "} />
              <MainlandCompanyFormationDubai/>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
         