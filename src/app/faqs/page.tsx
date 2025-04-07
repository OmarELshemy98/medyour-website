"use client";

import { useState } from 'react';
import type { FC } from 'react';

const FAQsPage: FC = () => {
  const faqs = [
    {
      question: "Is coverage available for all ages?",
      answer: ["Absolutely! Our healthcare plans are designed to accommodate all", "age groups, ensuring comprehensive care for everyone."]
    },
    {
      question: "What sets MedYour apart from traditional insurance providers?",
      answer: ["MedYour offers inclusive, transparent healthcare programs that", "eliminate financial constraints and streamline access to care through", "innovative digital platforms."]
    },
    {
      question: "How can I access my medical records?",
      answer: ["You can easily access your medical records through our secure", "cloud-based platform or the MedYour mobile app."]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div 
        className="text-center relative w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/images/backgroundImg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginTop: '-6.5rem',
          paddingTop: '6.5rem',
          height: '60vh',
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[90rem] mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <h1 className="text-[1.8rem] sm:text-[2.4375rem] font-[900] text-white mb-6 sm:mb-10 font-roboto leading-[3rem] sm:leading-[4.375rem] tracking-[0%]">
            Frequently Asked Questions
          </h1>
          <p className="text-[#FFFFFF] text-[1.5rem] sm:text-[2.125rem] font-[300] leading-[2rem] sm:leading-[2.875rem] tracking-[0%] w-full max-w-[70rem] mx-auto text-center font-roboto">
            MedYour is dedicated to addressing significant challenges in the healthcare landscape
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-8 sm:py-16">
        <div className="space-y-12 sm:space-y-20">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="pb-8 sm:pb-12">
                <h3 className="text-[#003439] text-[28px] sm:text-[33px] font-[400] mb-4 sm:mb-6 font-roboto leading-[50px] sm:leading-[70px] tracking-[0%] text-center">
                  {faq.question}
                </h3>
                <div className="text-[#003439] text-[22px] sm:text-[27px] font-[400] leading-[28px] sm:leading-[33px] tracking-[0%] text-center font-roboto max-w-[900px] mx-auto">
                  {faq.answer.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
              {index !== faqs.length - 1 && (
                <div className="flex items-center w-full mt-8">
                  <div className="flex-1" style={{ 
                    borderTop: '1px dashed #3A6070',
                    opacity: 0.2,
                    backgroundSize: '20px 1px',
                    backgroundPosition: 'top',
                    height: '1px'
                  }}></div>
                  <div className="flex items-center">
                    <div className="w-[1px] h-[8px] bg-[#3A6070]"></div>
                    <div className="w-[200px] sm:w-[493px] border-t border-[#3A6070]"></div>
                    <div className="w-[1px] h-[8px] bg-[#3A6070]"></div>
                  </div>
                  <div className="flex-1" style={{ 
                    borderTop: '1px dashed #3A6070',
                    opacity: 0.2,
                    backgroundSize: '20px 1px',
                    backgroundPosition: 'top',
                    height: '1px'
                  }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;