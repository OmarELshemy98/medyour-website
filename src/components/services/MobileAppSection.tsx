import Image from 'next/image';
import ActiveButtons from '../shared/activeButtons';

const MobileAppSection = () => {
  return (
    <div 
      className="flex flex-col items-center w-full py-8 md:py-12"
      style={{ 
        backgroundColor: 'rgba(0, 255, 212, 0.11)',
        borderRadius: '0.5rem'
      }}
    >
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
        <h2 className="text-[#123D46] font-roboto text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem]">
          Mobile App
        </h2>
        <div className="w-full flex justify-center">
          <div className="relative w-full md:w-4/5 lg:w-3/4 transform rotate-6">
            <Image
              src="/images/services/mobile-app.png"
              alt="Mobile App"
              className="object-contain w-full h-auto"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 75vw"
            />
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[1rem] md:text-[1.125rem] font-normal leading-[1.25rem] md:leading-[1.5rem] max-w-2xl mx-auto px-4 md:px-0">
          An intuitive software app designed to digitally transform your healthcare experience, offers you a platform to provide healthcare services at a low cost, with a user-friendly mobile app.
        </p>
        <ActiveButtons />
      </div>
    </div>
  );
};

export default MobileAppSection;