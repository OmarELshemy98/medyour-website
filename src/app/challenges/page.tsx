"use client";

import { FC } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/shared/PageHeader';
import { LineSeparator } from '@/components/shared/Separators';

const ChallengesPage: FC = () => {
  const reasons = [
    {
      title: "Escalating Healthcare Costs",
      description: "Offering affordable, comprehensive coverage to combat rising healthcare expenses.",
      image: "/images/why-medyour/costs.png"
    },
    {
      title: "Inclusivity Gaps",
      description: "Recognizing the need to have families in accessing proper healthcare, the system is inclusive.",
      image: "/images/why-medyour/inclusivity.png"
    },
    {
      title: "Financial Limitations",
      description: "Plans aim to remove financial barriers, making high-quality care accessible to everyone.",
      image: "/images/why-medyour/financial.png"
    },
    {
      title: "Administrative Burdens",
      description: "A streamlined digital platform eliminates paperwork, enhances efficiency, and simplifies the healthcare experience.",
      image: "/images/why-medyour/administrative.png"
    },
    {
      title: "Provider Accessibility",
      description: "Access to healthcare providers is made easier, helping individuals connect with the care they need.",
      image: "/images/why-medyour/accessibility.png"
    }
  ];

  return (
    <main className="min-h-screen bg-white relative">
      <PageHeader 
        title="Healthcare Challenges"
        description="MedYour is dedicated to addressing significant challenges in the healthcare landscape"
      />

      <div className="mx-auto">
        <div className="space-y-16">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-8">
                <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
                  {reason.title}
                </h2>
                <div className="w-full flex justify-center">
                  <div className="relative">
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px] max-w-2xl mx-auto">
                  {reason.description}
                </p>
              </div>
              {index !== reasons.length - 1 && (
                <div className="max-w-6xl w-full mx-auto">
                  <LineSeparator />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ChallengesPage;