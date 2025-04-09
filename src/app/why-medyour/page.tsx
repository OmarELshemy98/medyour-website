"use client";

import { FC } from 'react';
import Header from './components/Header';
import BenefitsList from './components/BenefitsList';

const WhyMedYourPage: FC = () => {
  return (
    <main className="min-h-screen bg-white relative">
      <Header />
      <BenefitsList />
    </main>
  );
};

export default WhyMedYourPage;