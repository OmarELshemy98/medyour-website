"use client";

import { FC } from 'react';
import Image from 'next/image';

const ChallengesPage: FC = () => {
  const challenges = [
    {
      title: "Escalating Healthcare Costs",
      description: "Rising medical expenses create barriers to accessing quality healthcare services.",
      icon: "/images/challenges/cost.png"
    },
    {
      title: "Industry Stage",
      description: "The healthcare landscape faces significant challenges in digital transformation.",
      icon: "/images/challenges/industry.png"
    },
    {
      title: "Financial Limitations",
      description: "Many patients struggle with healthcare costs, making it hard to access needed care.",
      icon: "/images/challenges/financial.png"
    },
    {
      title: "Administrative Systems",
      description: "A streamlined digital platform enhances efficiency and improves the overall healthcare experience.",
      icon: "/images/challenges/admin.png"
    },
    {
      title: "Provider Accessibility",
      description: "Access to healthcare services is limited by geographical and technological barriers.",
      icon: "/images/challenges/provider.png"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div 
        className="text-center relative w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/images/backgroundImg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginTop: '-5rem',
          paddingTop: '5rem',
          height: '280px',
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[90rem] mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <h1 className="text-[1.75rem] sm:text-[2.4375rem] font-[900] text-white mb-6 sm:mb-10 font-roboto leading-[2.5rem] sm:leading-[4.375rem] tracking-[0%]">Healthcare Challenges</h1>
          <p className="text-[#FFFFFF] text-[1.25rem] sm:text-[2.125rem] font-[300] leading-[1.75rem] sm:leading-[2.875rem] tracking-[0%] w-full max-w-[70rem] mx-auto text-center font-roboto">
            MedYour is dedicated to addressing significant challenges in the healthcare landscape
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid gap-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="relative">
              {/* Decorative elements */}
              {index % 2 === 0 && (
                <>
                  <div className="absolute -left-8 top-1/2 w-4 h-4 bg-[#00FF85] rounded-full transform -translate-y-1/2" />
                  <div className="absolute -right-8 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform -translate-y-1/2" />
                </>
              )}
              {index % 2 === 1 && (
                <>
                  <div className="absolute -left-8 top-1/2 w-4 h-4 bg-[#00E5FF] rounded-full transform -translate-y-1/2" />
                  <div className="absolute -right-8 top-1/2 w-4 h-4 bg-[#0066FF] rounded-full transform -translate-y-1/2" />
                </>
              )}
              
              <div className="bg-white rounded-[20px] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-[200px] h-[200px]">
                      <Image
                        src={challenge.icon}
                        alt={challenge.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className="text-[#005071] text-2xl font-bold mb-4">{challenge.title}</h2>
                    <p className="text-gray-600 text-lg">{challenge.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ChallengesPage;