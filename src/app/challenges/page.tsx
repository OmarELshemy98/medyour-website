"use client";

import { FC } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { LineSeparator } from '@/components/shared/Separators';
import HealthcareCostsSection from '@/components/challenges/HealthcareCostsSection';
import InclusivitySection from '@/components/challenges/InclusivitySection';
import FinancialSection from '@/components/challenges/FinancialSection';
import AdministrativeSection from '@/components/challenges/AdministrativeSection';
import AccessibilitySection from '@/components/challenges/AccessibilitySection';

const ChallengesPage: FC = () => {
  return (
    <main className="min-h-screen bg-white relative">
      <PageHeader 
        title="Healthcare Challenges"
        description="MedYour is dedicated to addressing significant challenges in the healthcare landscape"
      />

      <div className="mx-auto">
        <div className="space-y-16">
          <HealthcareCostsSection />
          <div className="max-w-6xl w-full mx-auto">
            <LineSeparator />
          </div>
          
          <InclusivitySection />
          <div className="max-w-6xl w-full mx-auto">
            <LineSeparator />
          </div>
          
          <FinancialSection />
          <div className="max-w-6xl w-full mx-auto">
            <LineSeparator />
          </div>
          
          <AdministrativeSection />
          <div className="max-w-6xl w-full mx-auto">
            <LineSeparator />
          </div>
          
          <AccessibilitySection />
        </div>
      </div>
    </main>
  );
};

export default ChallengesPage;