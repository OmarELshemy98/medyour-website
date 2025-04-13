"use client";

import { FC } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { LineSeparator } from '@/components/shared/Separators';
import MobileAppSection from '@/components/services/MobileAppSection';
import HealthcareCoverageSection from '@/components/services/HealthcareCoverageSection';
import ProviderNetworkSection from '@/components/services/ProviderNetworkSection';
import DigitalPlatformsSection from '@/components/services/DigitalPlatformsSection';

const ServicesPage: FC = () => {
  return (
    <main className="min-h-screen bg-white relative">
      <PageHeader 
        title="Our Services"
        description="An intuitive mobile app designed to simplify healthcare. Users can quickly browse available services, find the best providers nearby or within the network, and access health information all in one easy-to-use platform, with support at every step of the healthcare journey."
      />

      <div className="mx-auto">
        <div className="space-y-16">
          <div className="bg-[rgba(0, 255, 212, 0.11)]">
            <MobileAppSection />
          </div>
          <div className="max-w-6xl w-full mx-auto">
            <LineSeparator />
          </div>
          
          <HealthcareCoverageSection />
          <div className="max-w-6xl w-full mx-auto">
            <LineSeparator />
          </div>
          
          <ProviderNetworkSection />
          <div className="max-w-6xl w-full mx-auto">
            <LineSeparator />
          </div>
          
          <DigitalPlatformsSection />
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;