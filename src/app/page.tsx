"use client";

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LineSeparator } from '@/components/shared/Separators';
import Testimonials from '@/components/home/Testimonials';
import VisionValues from '@/components/home/VisionValues';
import FeaturedServices from '@/components/home/FeaturedServices';
import HeroSection from '@/components/home/HeroSection';
import ActiveButtons from '@/components/shared/activeButtons';

const HomePage: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

     
   {/* Add buttons here */}
                 <ActiveButtons/>
      {/* Welcome Section */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[#123D46] text-[18px] text-center font-roboto font-normal leading-[24px]">
           <span className="text-[#123D46] text-[18px] text-center font-roboto font-bold leading-[24px]">Welcome to MedYour,</span>  a pioneering healthcare platform that brings together the best 
            care of experience in the Middle East. Our Car MedApp lets you become a patient in an endless network of healthcare providers.
            Our mission is to ensure everyone has access to quality healthcare services at an affordable cost.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
          <LineSeparator />
        </div>

      {/* Replace the existing Featured Services section with: */}
      <FeaturedServices />
      
      <div className="max-w-6xl mx-auto">
          <LineSeparator />
        </div>

      {/* Company Overview */}
      <div className="py-10 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[31px]  font-roboto font-black text-[#123D46] leading-[70px]">Company Overview</h2>
          <p className="text-[#123D46] text-[18px] font-roboto font-normal leading-[24px]">
            MedYour is a subsidiary of One of the Saudi founded by Arab Companies in the GCC. For over 15 years, we have been at the 
            forefront of delivering excellent healthcare services, with a focus on making healthcare a positive and accessible experience for all clients.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
          <LineSeparator />
        </div>

      {/* Mission Statement */}
      <div className="py-10 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[31px]  font-roboto font-black text-[#123D46] leading-[70px]">Mission Statement</h2>
          <p className="text-[#123D46] text-[18px] font-roboto font-normal leading-[24px]">
            MedYour is a subsidiary of One of the Saudi founded by Arab Companies in the GCC. For over 15 years, we have been at the 
            forefront of delivering excellent healthcare services, with a focus on making healthcare a positive and accessible experience for all clients.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
          <LineSeparator />
        </div>

      {/* Vision and Values */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[31px]  font-roboto font-black text-[#123D46] leading-[70px]">Vision and Values</h2>
          <p className="text-[#123D46] text-[18px] font-roboto font-normal leading-[24px]">
          The mission is a core value where quality healthcare is accessible to everyone, 
          regardless of their financial status. Our core values reflect our commitment to care.
            </p>
        </div>
      </div>
      <VisionValues />
      
      <div className="max-w-6xl mx-auto">
          <LineSeparator />
        </div>

      {/* Client Testimonials */}
      <Testimonials/>

    </main>
  );
};

export default HomePage;

