"use client";

import { FC } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/shared/PageHeader';
import DecorativeSquares from './components/DecorativeSquares';
import { LineSeparator } from '@/components/shared/Separators';

const ServicesPage: FC = () => {
  const services = [
    {
      title: "Mobile App",
      description: "An intuitive software app designed to digitally transform your healthcare experience, offers you a platform to provide healthcare services at a low cost, with a user-friendly mobile app.",
      image: "/images/services/mobile-app.png"
    },
    {
      title: "Healthcare Coverage",
      description: "Our healthcare plans provide a wide range of medical services and treatments, ensuring comprehensive coverage for all your healthcare needs.",
      image: "/images/services/healthcare-coverage.png"
    },
    {
      title: "Healthcare Provider Network",
      description: "A vast network of over 2,000 qualified healthcare centers in the Kingdom's network of care. The network spans across major cities and regions.",
      image: "/images/services/provider-network.png"
    }
  ];

  return (
    <main className="min-h-screen bg-white relative">
      <DecorativeSquares />
      <PageHeader 
        title="Our Services"
        description="An intuitive mobile app designed to simplify healthcare. Users can quickly browse available services, find the best providers nearby or within the network, and access health information all in one easy-to-use platform, with support at every step of the healthcare journey."
      />

      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-8">
                <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
                  {service.title}
                </h2>
                <div className="w-full flex justify-center">
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px]">
                  {service.description}
                </p>
              </div>
              {index !== services.length - 1 && <LineSeparator />}
            </div>
          ))}
        </div>

        {/* Digital Platforms Section */}
        <div className="mt-32">
          <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px] text-center">
            Digital Platforms
          </h2>
          <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px] max-w-4xl mx-auto mb-20">
            Real-Time Access: Stay connected and informed about healthcare services and coverage details with a user-friendly mobile app.
          </p>
          <div className="grid md:grid-cols-2 gap-20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8">
                <Image
                  src={`/images/services/RealTime.png`}
                  alt="Real Time Access"
                  width={87}
                  height={80}
                  priority
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#123D46] text-[24px] font-medium mb-4">Real-Time Access:</h3>
              <p className="text-[#00313B] text-[18px] leading-[28px] opacity-60">
                Stay connected and informed about healthcare services and coverage details with a user-friendly mobile app.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-8">
                <Image
                  src={`/images/services/cloudSecured.png`}
                  alt="Cloud Secured Medical Files"
                  width={87}
                  height={80}
                  priority
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#123D46] text-[24px] font-medium mb-4">Cloud-Secured Medical Files:</h3>
              <p className="text-[#00313B] text-[18px] leading-[28px] opacity-60">
                Medical history is securely stored, allowing access from anywhere at any time.
              </p>
            </div>
          </div>
        </div>
     
      </div>
    </main>
  );
};

export default ServicesPage;