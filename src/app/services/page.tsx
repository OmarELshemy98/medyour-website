"use client";

import { FC } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/shared/PageHeader';
import { LineSeparator } from '@/components/shared/Separators';

const ServicesPage: FC = () => {
  const services = [
    {
      title: "Mobile App",
      description: "An intuitive software app designed to digitally transform your healthcare experience, offers you a platform to provide healthcare services at a low cost, with a user-friendly mobile app.",
      image: "/images/services/mobile-app.png" // This is already correct
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
      <PageHeader 
        title="Our Services"
        description="An intuitive mobile app designed to simplify healthcare. Users can quickly browse available services, find the best providers nearby or within the network, and access health information all in one easy-to-use platform, with support at every step of the healthcare journey."
      />

      <div className=" mx-auto">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
              style={service.title === "Mobile App" ? { 
                backgroundColor: 'rgba(0, 255, 212, 0.11)',
                width: '100%',
                borderRadius: '8px'
              } : {}}
            >
              <div className="flex flex-col items-center gap-8">
                <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
                  {service.title}
                </h2>
                <div className="w-full flex justify-center">
                  <div className="relative transform rotate-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px] max-w-2xl mx-auto">
                  {service.description}
                </p>
                {/* Add buttons here */}
                {service.title === "Mobile App" && (
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
                )}
              </div>
              {index !== services.length - 1 && (
                <div className="max-w-6xl w-full mx-auto">
                  <LineSeparator />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add separator before Digital Platforms */}
        <div className="max-w-6xl mx-auto">
          <LineSeparator />
        </div>

        {/* Digital Platforms Section */}
        <div className=" text-center">
          <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
            Digital Platforms
          </h2>
          <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px] max-w-4xl mx-auto mb-20">
            Real-Time Access: Stay connected and informed about healthcare services and coverage details with a user-friendly mobile app.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8">
                <Image
                  src={`/images/services/RealTime.png`}
                  alt="Real Time Access"
                  width={70.17}
                  height={51.62}
                  priority
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#123D46] text-[24px] font-medium mb-4">Real-Time Access:</h3>
              <p className="text-[#00313B] text-[21px] font-light leading-[22px] opacity-60">
                Stay connected and informed about healthcare services and coverage details with a user-friendly mobile app.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-8">
                <Image
                  src={`/images/services/cloudSecured.png`}
                  alt="Cloud Secured Medical Files"
                  width={70.17}
                  height={51.62}
                  priority
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#123D46] text-[24px] font-medium mb-4">Cloud-Secured Medical Files:</h3>
              <p className="text-[#00313B] text-[21px] font-light leading-[22px] opacity-60">
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