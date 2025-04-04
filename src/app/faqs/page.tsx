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
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="text-center py-16 bg-gradient-to-r from-[#006778] to-[#003439]">
        <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-white text-lg max-w-2xl mx-auto px-4">
          MedYour is dedicated to addressing significant challenges in the healthcare landscape
        </p>
      </div>

      {/* FAQs Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="pb-8">
                <h3 className="text-[#003439] text-xl font-medium mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
              {index !== faqs.length - 1 && (
                <div className="flex items-center w-full mb-8">
                  <div className="w-[40%]  border-t-2 border-dotted border-gray-300"></div>
                  <div className="w-[40%] flex items-center">
                    <div className="w-[3px] h-[14px] bg-gray-300"></div>
                    <div className="flex-1 border-t-2 border-solid border-gray-300"></div>
                    <div className="w-[3px] h-[14px] bg-gray-300"></div>
                  </div>
                  <div className="w-[30%] border-t-2 border-dotted border-gray-300"></div>
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