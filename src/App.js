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
import BusinessSetupDubai from './pages/business-setup-dubai.js';
import BusinessSetupShams from './pages/business-setup-shams.js';
import MasdarCityFreeZone from './pages/page-masdar-city-freeZone.js';
import LegalServicesDubai from './pages/page-legal-services-dubai.js';
import CompanyformationDubai from './pages/page-company-formation.js';
import FreezoneCompanySetup from './pages/page-free-zone-company.js';
import OffshoreCompanyFormation from './pages/page-offshore-company.js';
import MainlandCompanyFormation from './pages/page-mainland-company.js';
import LLCCompanySetup from './pages/page-llc-company.js';
import BranchOfficeSetup from './pages/page-branch-office.js';
import DMCCCompanySetup from './pages/page-dmcc-company.js';
import DICCompanyFormation from './pages/page-dic-company-formation.js';
import DSOBusinessSetup from './pages/page-dso-business.js';
import CorporatePROServices from './pages/page-coporate-pro-service.js';
import LicenseRenewalServices from './pages/page-license-renewal.js';
import LegalconsultantsDubai from './pages/page-LegalConsultants-dubai.js';
import DebtRecoveryDubai from './pages/page-dept-recovery.js';
import LitigationServicesDubai from './pages/page-litigationServices.js';
import ArbitrationServicesDubai from './pages/page-arbitration-services-dubai.js';
import ExpertLegalAdviceDubai from './pages/page-expert-legal-advice.js';
import ContractLawyersDubai from './pages/page-contract-lawyer.js';
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
        <Route path="/business-setup-in-dubai-a-complete-guide" element={<BusinessSetup />} />
        <Route path="/golden-visa-dubai-uae" element={<GoldenVisa />} />
        <Route path="/family-visa-services-dubai-uae" element={<FamilyVisa />} />
        <Route path="/business-setup-in-dubai-freezone" element={<Freezone />} />
        <Route path="/business-setup-company-in-dubai-uae-2025" element={<BusinessSetupDubai />} />
        <Route path="/business-setup-company-in-the-shams-freezone" element={<BusinessSetupShams/>} />
        <Route path="/benefits-of-setting-up-a-company-in-masdar-city-freezone" element={<MasdarCityFreeZone/>} />
        <Route path="/best-legal-services-in-dubai" element={<LegalServicesDubai/>} />
        {/* <Route path="/business-setup" element={<BusinessSetup />} /> */}
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
          path="/business-setup-services-in-dubai"
          element={<PageBusinessSetupServices/>}
          />
        <Route
          path="/pro-services-in-dubai"
          element={<PagePROServices/>}
          />
          <Route
            path="/document-attestation-services-in-dubai"
            element={<PageDocumentAttestationServices/>}
          />
          <Route
            path="/legal-services-in-dubai"
            element={<PageLegalServices/>}
          />
        <Route
          path="/legal-translation-services-in-dubai"
          element={<PageLegalTranslationServices/>}
          />
        <Route
          path="/bank-account-services-in-dubai"
          element={<PageBankAccountOpeningServices/>}
          />
        <Route
          path="/family-visa-services-in-dubai"
          element={<PageFamilyVisaServices/>}
          />
        <Route
          path="/golden-visa-services-in-dubai"
          element={<PageGoldenVisaServices/>}
          />
        <Route
          path="/tax&compliance-services-in-dubai"
          element={<PageTaxComplianceServices/>}
        />
        <Route
          path="/trademark-registration-services-in-dubai"
          element={<PageTrademarkRegistrationServices/>}
        />
        <Route
          path="/business-support-in-dubai"
          element={<PageEndToEndBusinessSupport/>}
          />
          
        <Route path="/services" element={<PageServices />} />
       {/* Business-Setup */}
        <Route path="/company-formation-in-dubai" element={<CompanyformationDubai />} />
        <Route path="/free-zone-company-setup-in-dubai" element={<FreezoneCompanySetup />} />
        <Route path="/offshore-company-formation-services-in-dubai" element={<OffshoreCompanyFormation />} />
        <Route path="/mainland-company-formation-services-in-dubai" element={<MainlandCompanyFormation />} />
        <Route path="/llc-company-setup-services-in-dubai" element={<LLCCompanySetup />} />
        <Route path="/branch-office-setup-services-in-dubai" element={<BranchOfficeSetup />} />
        <Route path="/dmccc-company-setup-services-in-dubai" element={<DMCCCompanySetup />} />
        <Route path="/dic-company-formation-services-in-dubai" element={<DICCompanyFormation />} />
        <Route path="/dso-business-setup-services-in-dubai" element={<DSOBusinessSetup/>} />
        <Route path="/corporate-pro-services-in-dubai" element={<CorporatePROServices/>} />
        <Route path="/license-renewal-services-in-dubai" element={<LicenseRenewalServices/>} />
        <Route path="/dubai-advocates-&-legal-consultants-in-dubai" element={<LegalconsultantsDubai/>} />
        <Route path="/debt-recovery-dubai" element={<DebtRecoveryDubai/>} />
        <Route path="/best-litigation-services-in-dubai" element={<LitigationServicesDubai/>} />
        <Route path="/best-arbitration-law-firm-in-dubai" element={<ArbitrationServicesDubai/>} />
        <Route path="/legal-advice-services-in-dubai" element={<ExpertLegalAdviceDubai/>} />
        <Route path="/contract-lawyers-in-dubai" element={<ContractLawyersDubai/>} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
