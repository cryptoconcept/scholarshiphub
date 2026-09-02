import React from 'react';
import PublicTopbar from '@/components/PublicTopbar';
import HeroSection from '@/app/components/HeroSection';
import StatsSection from '@/app/components/StatsSection';
import CategoriesSection from '@/app/components/CategoriesSection';
import FeaturedScholarships from '@/app/components/FeaturedScholarships';
import EligibilityWizardCTA from '@/app/components/EligibilityWizardCTA';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ProviderCTA from '@/app/components/ProviderCTA';
import LandingFooter from '@/app/components/LandingFooter';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicTopbar />
      <main>
        <HeroSection />
        <StatsSection />
        <CategoriesSection />
        <FeaturedScholarships />
        <EligibilityWizardCTA />
        <TestimonialsSection />
        <ProviderCTA />
      </main>
      <LandingFooter />
    </div>
  );
}