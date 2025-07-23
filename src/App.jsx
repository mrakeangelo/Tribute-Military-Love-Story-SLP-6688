import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import LoveLettersSection from './components/LoveLettersSection';
import GallerySection from './components/GallerySection';
import MessageWallSection from './components/MessageWallSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyMrakeSection from './components/WhyMrakeSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bone">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <LoveLettersSection />
      <GallerySection />
      <MessageWallSection />
      <PricingSection />
      <TestimonialsSection />
      <WhyMrakeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;