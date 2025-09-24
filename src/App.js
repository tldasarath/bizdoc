import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Landing';
import BlogClassic from './pages/blog-classic';
import BlogGrid3Columns from './pages/blog-grid-3columns';
import BlogGridSidebar from './pages/blog-grid-sidebar';
import HomeCreativeAgency from './pages/home-creative-agency.js';
import HomeDigitalAgency from './pages/home-digital-agency.js';
import HomeMain from './pages/home-main.js';
import HomeModernStudio from './pages/home-modern-studio.js';
import HomePersonal from './pages/home-personal.js';
import Page404 from './pages/page-404.js';
import PageAbout from './pages/page-about.js';
import PageContact from './pages/page-contact.js';
import PageFAQ from './pages/page-FAQ.js';
import PageServices from './pages/page-services.js';
import PageServicesDetails from './pages/page-services-details.js';
import PageTeam from './pages/page-team.js';
import PageTeamDetails from './pages/page-team-details.js';
import PortfolioCreative from './pages/portfolio-creative.js';
import PortfolioCreativeCarousel from './pages/portfolio-creative-carousel.js';
import PortfolioGallery from './pages/portfolio-gallery.js';
import PortfolioGrid from './pages/portfolio-grid.js';
import PortfolioMasonry from './pages/portfolio-masonry.js';
import ProjectDetails from './pages/project-details.js';
import PageBusinessSetupServices from './pages/pageBusinessSetupServices.js';
import PageLegalTranslationServices from './pages/pageLegalTranslationServices.js';
import PageLegalServices from './pages/pageLegalServices.js';
import PageDocumentAttestationServices from './pages/pageDocumentAttestationServices.js';
import PagePROServices from './pages/pageProServices.js';
import PageBankAccountOpeningServices from './pages/pageBankAccountOpeningServices.js';
import PageFamilyVisaServices from './pages/pageFamilyVisaServices.js';
import PageGoldenVisaServices from './pages/pageGoldenVisaServices.js';
import PageTaxComplianceServices from './pages/pageTaxComplianceServices.js';
import PageTrademarkRegistrationServices from './pages/pageTrademarkRegistrationServices.js';
import PageEndToEndBusinessSupport from './pages/pageEndToEndBusinessSupport.js';
import BusinessSetup from './pages/business-setup.js';
import GoldenVisa from './pages/golden-visa.js';
import FamilyVisa from './pages/family-visa.js';
import Freezone from './pages/freezone.js';
import LightRays from './components/bg/LightRays .jsx';
import Chatbot from './components/chatbot/chatbot.jsx';
import Privacy from './pages/page-privacy.js';
import Terms from './pages/page-term.js';
import { useEffect, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

// gsap.registerPlugin(ScrollTrigger);
// gsap.config({ trialWarn: false });
function App() {
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // change breakpoint as needed
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Router>
      <Chatbot/>
            <div className="relative">
      {!isMobile && (
          <LightRays
            raysOrigin="top-center"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        )}
      <Routes>
        {/* <Route path="/blog-classic" element={<BlogClassic />} /> */}
        <Route path="/business-setup" element={<BusinessSetup />} />
        <Route path="/golden-visa" element={<GoldenVisa />} />
        <Route path="/family-visa" element={<FamilyVisa />} />
        <Route path="/freezone" element={<Freezone />} />
        <Route path="/business-setup" element={<BusinessSetup />} />
        <Route path="/blogs" element={<BlogGridSidebar />} />
       
        <Route path="/" element={<HomeMain />} />
       
        <Route path="*" element={<Page404 />} />
        <Route path="/about-us" element={<PageAbout />} />
        <Route path="/contact" element={<PageContact />} />
        <Route path="/faqs" element={<PageFAQ />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route
          path="/services-details/:id"
          element={<PageServicesDetails />}
        />
        <Route
          path="/business-setup-services"
          element={<PageBusinessSetupServices/>}
          />
        <Route
          path="/pro-services"
          element={<PagePROServices/>}
          />
          <Route
            path="/document-attestation-services"
            element={<PageDocumentAttestationServices/>}
          />
          <Route
            path="/legal-services"
            element={<PageLegalServices/>}
          />
        <Route
          path="/legal-translation-services"
          element={<PageLegalTranslationServices/>}
          />
        <Route
          path="/bank-account-opening-services"
          element={<PageBankAccountOpeningServices/>}
          />
        <Route
          path="/family-visa-services"
          element={<PageFamilyVisaServices/>}
          />
        <Route
          path="/golden-visa-services"
          element={<PageGoldenVisaServices/>}
          />
        <Route
          path="/tax-compliance-services"
          element={<PageTaxComplianceServices/>}
        />
        <Route
          path="/trademark-registration-services"
          element={<PageTrademarkRegistrationServices/>}
        />
        <Route
          path="/end-to-end-business-support"
          element={<PageEndToEndBusinessSupport/>}
          />
        <Route path="/services" element={<PageServices />} />
         {/* <Route path="/home-creative-agency" element={<HomeCreativeAgency />} /> */}
        {/* <Route path="/home-digital-agency" element={<HomeDigitalAgency />} /> */}
                {/* <Route path="/" element={<Home />} /> */}

         {/* <Route path="/home-modern-studio" element={<HomeModernStudio />} /> */}
        {/* <Route path="/home-personal" element={<HomePersonal />} /> */}
          {/* <Route path="/blog-grid-3column" element={<BlogGrid3Columns />} /> */}
        {/* <Route path="/page-team" element={<PageTeam />} />
        <Route path="/page-team-details" element={<PageTeamDetails />} />
        <Route path="/portfolio-creative" element={<PortfolioCreative />} />
        <Route
          path="/portfolio-creative-carousel"
          element={<PortfolioCreativeCarousel />}
        />
        <Route path="/portfolio-gallery" element={<PortfolioGallery />} />
        <Route path="/portfolio-grid" element={<PortfolioGrid />} />
        <Route path="/portfolio-masonry" element={<PortfolioMasonry />} />
        <Route path="/project-details" element={<ProjectDetails />} /> */}

        {/*        
        {/*
         */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
