'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { CollaborativeWorkflowSection } from '@/components/CollaborativeWorkflowSection';
import { HardwareInTheLoopSection } from '@/components/HardwareInTheLoopSection';
import { ModularSynthsSection } from '@/components/ModularSynthsSection';
import { DeploymentArchitectureSection } from '@/components/DeploymentArchitectureSection';
import { PricingCalculator } from '@/components/PricingCalculator';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CollaborativeWorkflowSection />
        <ModularSynthsSection />
        <HardwareInTheLoopSection />
        <DeploymentArchitectureSection />
        <PricingCalculator />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
