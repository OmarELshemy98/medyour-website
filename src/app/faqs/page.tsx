"use client";

import { useState } from 'react';
import type { FC } from 'react';

const FAQsPage: FC = () => {
  const faqs = [
    {
      question: "Is coverage available for all ages?",
      answer: "Absolutely! Our healthcare plans are designed to accommodate all age groups, ensuring comprehensive care for everyone."
    },
    {
      question: "What sets MedYour apart from traditional insurance providers?",
      answer: "MedYour offers inclusive, transparent healthcare programs that eliminate financial constraints and streamline access to care through innovative digital platforms."
    },
    {
      question: "How can I access my medical records?",
      answer: "You can easily access your medical records through our secure cloud-based platform or the MedYour mobile app."
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
          marginTop: '-6.5rem',  // Match contact page
          paddingTop: '6.5rem',  // Match contact page
          height: '60vh',
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[90rem] mx-auto px-8 py-12">
          <h1 className="text-[2.4375rem] font-[900] text-white mb-10 font-roboto leading-[4.375rem] tracking-[0%]">Frequently Asked Questions</h1>
          <p className="text-[#FFFFFF] text-[2.125rem] font-[300] leading-[2.875rem] tracking-[0%] w-full max-w-[70rem] mx-auto text-center font-roboto">
            MedYour is dedicated to addressing significant challenges in the healthcare landscape
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="pb-8">
                <h3 className="text-[#003439] text-xl font-medium mb-4 font-roboto">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed font-roboto">
                  {faq.answer}
                </p>
              </div>
              {index !== faqs.length - 1 && (
                <div className="flex items-center w-full mb-8">
                  <div className="flex-1" style={{ 
                    borderTop: '2px dashed #3A6070',
                    opacity: 0.3,
                    backgroundSize: '20px 2px',
                    backgroundPosition: 'top',
                    height: '1px'
                  }}></div>
                  <div className="flex items-center">
                    <div className="w-[2px] h-[10px] bg-[#3A6070]"></div>
                    <div className="w-[300px] border-t border-[#3A6070]"></div>
                    <div className="w-[2px] h-[10px] bg-[#3A6070]"></div>
                  </div>
                  <div className="flex-1" style={{ 
                    borderTop: '2px dashed #3A6070',
                    opacity: 0.3,
                    backgroundSize: '20px 2px',
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