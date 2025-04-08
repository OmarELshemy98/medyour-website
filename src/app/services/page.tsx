"use client";

import { FC } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/shared/PageHeader';

const ServicesPage: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <PageHeader 
        title="Our Services"
        description="Our innovative mobile app along with our digital healthcare system is used to solve real-world issues, built for rapid population scaling to give access to healthcare services at a low cost"
      />

      <div className="max-w-6xl mx-auto py-20 px-4">
        {/* Mobile App Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-[#005071] text-3xl font-bold mb-6">Mobile App</h2>
              <p className="text-gray-600 text-lg mb-8">
                An intuitive software app designed to digitally transform your healthcare experience, offers you a platform to provide healthcare services at a low cost, with a user-friendly mobile app.
              </p>
              <div className="flex gap-4">
                <Image
                  src="/images/app-store.png"
                  alt="App Store"
                  width={140}
                  height={42}
                  className="cursor-pointer"
                />
                <Image
                  src="/images/play-store.png"
                  alt="Play Store"
                  width={140}
                  height={42}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/images/services/mobile-app.png"
                alt="Mobile App"
                width={500}
                height={500}
                className="object-contain"
              />
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-[#00FF85] rounded-full" />
              <div className="absolute top-1/2 -right-4 w-3 h-3 bg-[#FFB800] rounded-full" />
              <div className="absolute -bottom-4 left-1/2 w-3 h-3 bg-[#00E5FF] rounded-full" />
            </div>
          </div>
        </div>

        {/* Healthcare Coverage Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <Image
                src="/images/services/healthcare-coverage.png"
                alt="Healthcare Coverage"
                width={500}
                height={500}
                className="object-contain"
              />
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#0066FF] rounded-full" />
              <div className="absolute bottom-1/2 -left-4 w-3 h-3 bg-[#00FF85] rounded-full" />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="text-[#005071] text-3xl font-bold mb-6">Healthcare Coverage</h2>
              <p className="text-gray-600 text-lg">
                Our healthcare plans provide a wide range of medical services and treatments, ensuring comprehensive coverage for all your healthcare needs.
              </p>
            </div>
          </div>
        </div>

        {/* Healthcare Provider Network Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-[#005071] text-3xl font-bold mb-6">Healthcare Provider Network</h2>
              <p className="text-gray-600 text-lg">
                A vast network of over 2,000 qualified healthcare centers in the Kingdom's network of care. The network spans across major cities and regions.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/images/services/provider-network.png"
                alt="Provider Network"
                width={500}
                height={500}
                className="object-contain"
              />
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-[#FFB800] rounded-full" />
              <div className="absolute -bottom-4 right-1/4 w-3 h-3 bg-[#00E5FF] rounded-full" />
            </div>
          </div>
        </div>

        {/* Digital Platforms Section */}
        <div>
          <h2 className="text-[#005071] text-3xl font-bold mb-12 text-center">Digital Platforms</h2>
          <p className="text-gray-600 text-lg text-center mb-12">
            Real-Time Access to key integrated and enhanced digital healthcare services and coverage details with a user-friendly mobile app
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <Image
                src="/images/services/web-portal.png"
                alt="Web Portal"
                width={60}
                height={60}
                className="mb-6"
              />
              <h3 className="text-[#005071] text-xl font-semibold mb-4">Web Portal</h3>
              <p className="text-gray-600">
                Easy to use portal for all your digital healthcare needs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <Image
                src="/images/services/self-service.png"
                alt="Self Service"
                width={60}
                height={60}
                className="mb-6"
              />
              <h3 className="text-[#005071] text-xl font-semibold mb-4">Self Service Portal</h3>
              <p className="text-gray-600">
                Manage your healthcare needs independently with our comprehensive self-service tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;