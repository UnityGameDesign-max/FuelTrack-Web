'use client';

import { useState, useEffect } from 'react';
import StickyNavigation from '@/src/components/common/StickyNavigation';
import ConversionCTA from '@/src/components/common/ConversionCTA';
import SectionIndicator from '@/src/components/common/SectionIndicator';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import FeaturesSection from './FeatureSection';
import LocalizationSection from './LocalizationSection';
import HowItWorksSection from './HowItWorksSection';
import BenefitsSection from './BenefitsSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import DownloadSection from './DownloadSection';
import FooterSection from './FooterSection';
import DemoModal from './DemoModal';

const LandingPageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleDownloadClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'conversion',
        event_label: 'hero_download',
        value: 1
      });
    }
    const element = document.querySelector('#download');
    if (element) {
      const offset = 80;
      const elementPosition = element?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleDemoClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'demo_view', {
        event_category: 'engagement',
        event_label: 'hero_demo',
        value: 1
      });
    }
    setIsDemoModalOpen(true);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <StickyNavigation />
        <HeroSection onDownloadClick={handleDownloadClick} onDemoClick={handleDemoClick} />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <LocalizationSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PricingSection />
        <FAQSection />
        <DownloadSection />
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <StickyNavigation />
      <SectionIndicator />
      <ConversionCTA variant="primary" size="md" showOnMobile={true} trackingLabel="floating_cta" />
      
      <HeroSection onDownloadClick={handleDownloadClick} onDemoClick={handleDemoClick} />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <LocalizationSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      <DownloadSection />
      <FooterSection />

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
};

export default LandingPageInteractive;