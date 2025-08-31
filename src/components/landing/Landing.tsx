import React from 'react';
import HeroSection from './HeroSection';
import LogoCarousel from './LogoCarousel';
import HowItWorksSection from './HowItWorksSection';
import DemoSection from './DemoSection';
import SocialProofSection from './SocialProofSection';
import EarlyAccessForm from './EarlyAccessForm';
import Footer from './Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <LogoCarousel />
      <HowItWorksSection />
      <DemoSection />
      <SocialProofSection />
      <EarlyAccessForm />
      <Footer />
    </div>
  );
}
