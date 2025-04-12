"use client";

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LineSeparator } from '@/components/shared/Separators';
import Testimonials from '@/components/home/Testimonials';
import VisionValues from '@/components/home/VisionValues';
import FeaturedServices from '@/components/home/FeaturedServices';
import HeroSection from '@/components/home/HeroSection';

const HomePage: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

     
   {/* Add buttons here */}
                  <div className="flex justify-center space-x-4 mt-4">
                    <button className="flex items-center border border-[#123D46] rounded-full px-6 py-2 text-[#123D46] hover:bg-[#123D46] hover:text-white transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="37" viewBox="0 0 30 37" fill="none">
                        <path d="M27.5221 31.9375C26.035 34.1592 24.4584 36.3271 22.0575 36.363C19.6567 36.4167 18.8863 34.9475 16.1629 34.9475C13.4217 34.9475 12.5796 36.3271 10.3041 36.4167C7.95705 36.5063 6.1833 34.0517 4.6783 31.8838C1.61455 27.4584 -0.732529 19.3063 2.4208 13.8238C3.97955 11.1005 6.77456 9.38046 9.80247 9.32671C12.0959 9.29087 14.2817 10.8855 15.6971 10.8855C17.0946 10.8855 19.7463 8.96837 22.5234 9.25504C23.6879 9.30879 26.9488 9.72087 29.045 12.8025C28.8838 12.91 25.1571 15.0959 25.1929 19.6288C25.2467 25.0396 29.9409 26.8492 29.9946 26.8671C29.9409 26.9925 29.2421 29.4471 27.5221 31.9375ZM17.2917 3.27087C18.5996 1.78379 20.7675 0.655041 22.5592 0.583374C22.7921 2.67962 21.95 4.79379 20.6959 6.29879C19.4596 7.82171 17.4171 9.00421 15.4104 8.84296C15.1417 6.78254 16.145 4.63254 17.2917 3.27087Z" fill="#00353A"/>
                      </svg>
                      App Store
                    </button>
                    <button className="flex items-center border border-[#123D46] rounded-full px-6 py-2 text-[#123D46] hover:bg-[#123D46] hover:text-white transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <g clipPath="url(#clip0_2834_386)">
                          <path d="M6.92858 0.889583L26.0677 11.8942L21.9655 15.9965L6.92858 0.889583ZM2.96337 0L20.5319 17.5L2.96483 35C2.07087 34.6048 1.45837 33.7254 1.45837 32.7031C1.45837 32.6696 1.45837 32.636 1.45983 32.604V32.6083V2.39313C1.45837 2.36542 1.45837 2.33188 1.45837 2.29833C1.45837 1.27604 2.07087 0.396667 2.94879 0.00729167L2.96483 0.00145833L2.96337 0ZM32.0163 15.4496C32.62 15.8973 33.0065 16.609 33.0065 17.4096C33.0065 17.4417 33.0065 17.4723 33.005 17.5044V17.5C33.0109 17.5627 33.0152 17.6371 33.0152 17.7115C33.0152 18.464 32.6507 19.1319 32.0877 19.546L32.0819 19.5504L27.9796 21.8735L23.5375 17.5L27.9811 13.0565L32.0163 15.4496ZM6.92858 34.1104L21.9669 19.0035L26.0692 23.1058L6.92858 34.1104Z" fill="#00353A"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2834_386">
                            <rect width="35" height="35" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      Google Play
                    </button>
                  </div>
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

