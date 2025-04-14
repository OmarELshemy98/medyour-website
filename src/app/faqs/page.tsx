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

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="pb-4 sm:pb-6 lg:pb-8">
                <h3 className="text-[#003439] text-base sm:text-lg lg:text-xl font-medium mb-2 sm:mb-3 lg:mb-4 text-center">
                  {faq.question}
                </h3>
                <div className="text-[#003439] text-sm sm:text-base lg:text-lg font-normal leading-5 sm:leading-6 lg:leading-7 text-center mx-auto">
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