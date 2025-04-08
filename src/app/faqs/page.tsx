"use client";

import { useState } from 'react';
import type { FC } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { LineSeparator } from '@/components/shared/Separators'; // Import the separator

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
      <PageHeader 
        title="Frequently Asked Questions"
        description="MedYour is dedicated to addressing significant challenges in <br /> the healthcare landscape"
      />

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
                <LineSeparator />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;