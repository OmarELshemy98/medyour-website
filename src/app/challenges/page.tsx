"use client";

import { FC } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { LineSeparator } from '@/components/shared/Separators';
import CostIcon from './components/icons/CostIcon';
import InclusivityIcon from './components/icons/InclusivityIcon';
import FinancialIcon from './components/icons/FinancialIcon';
import AdminIcon from './components/icons/AdminIcon';
import ProviderIcon from './components/icons/ProviderIcon';

const ChallengesPage: FC = () => {
  const challenges = [
    {
      title: "Escalating Healthcare Costs",
      description: "Offering affordable, comprehensive coverage to combat rising healthcare expenses.",
      icon: <CostIcon />
    },
    {
      title: "Inclusivity Gaps",
      description: "Recognizing that most individuals face barriers in accessing proper healthcare, the goal is to close these gaps and make top-quality services available to all.",
      icon: <InclusivityIcon />
    },
    {
      title: "Financial Limitations",
      description: "Plans are tailored to remove financial barriers, making high-quality care accessible to everyone.",
      icon: <FinancialIcon />
    },
    {
      title: "Administrative Burdens",
      description: "A streamlined digital platform eliminates paperwork, enhances efficiency, and simplifies the healthcare experience.",
      icon: <AdminIcon />
    },
    {
      title: "Provider Accessibility",
      description: "Access to healthcare providers is made easier, helping individuals connect with the care they need.",
      icon: <ProviderIcon />
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Healthcare Challenges"
        description="MedYour is dedicated to addressing significant challenges in <br /> the healthcare landscape"
      />

      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="space-y-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-8">
                <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">{challenge.title}</h2>
                <div className="w-full flex justify-center">
                  {challenge.icon}
                </div>
                <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px]">{challenge.description}</p>
              </div>
              {index !== challenges.length - 1 && <LineSeparator />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ChallengesPage;