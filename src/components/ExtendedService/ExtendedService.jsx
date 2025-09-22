import React, { useState, useEffect, useRef } from 'react';

const ExtendedService = () => {
  const services = [
    { title: "Virtual Office Space", description: "Access prestigious business addresses and professional facilities." },
    { title: "Documents Clearing", description: "Streamline your document processing with our expert team." },
    { title: "Offshore & Free Zone Company", description: "Benefit from our expertise in setting up offshore and free zone companies." },
    { title: "Amer, Tasheel, Tadbeer", description: "Utilize our services for various government transactions." },
    { title: "Visa Immigration", description: "Navigate visa immigration complexities with our comprehensive support." },
    { title: "Insurance", description: "Protect yourself and your business with tailored insurance solutions." },
    { title: "Notary Services", description: "Get your documents notarized accurately and swiftly." },
    { title: "Emirates ID / Medical", description: "Complete your ID and medical requirements seamlessly." },
    { title: "All Kinds of External Approvals", description: "Obtain necessary approvals with our extensive network." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    };

    startAutoPlay();

    return () => clearInterval(autoPlayRef.current);
  }, [itemsPerView]); // Only restart when itemsPerView changes

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % services.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + services.length) % services.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleNavClick = (direction) => {
    // Clear existing auto-play
    clearInterval(autoPlayRef.current);
    
    if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
    
    // Restart auto-play after a delay
    setTimeout(() => {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }, 5000);
  };

  // Duplicate services for seamless looping
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="services-container">
      <div className="section-header">
        <h1 className="section-title">Our Extended Services</h1>
      </div>
      
      <div className="slider-wrapper">
        {/* Previous button on left side */}
        <button 
          className="nav-btn nav-btn-prev" 
          onClick={() => handleNavClick('prev')}
          aria-label="Previous services"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="slider-viewport">
          <div 
            className="services-slider"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            {duplicatedServices.map((service, index) => (
              <div 
                key={`${service.title}-${index}`} 
                className="service-card"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="service-item">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next button on right side */}
        <button 
          className="nav-btn nav-btn-next" 
          onClick={() => handleNavClick('next')}
          aria-label="Next services"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ExtendedService;