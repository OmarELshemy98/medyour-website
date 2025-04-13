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
      <div className="flex flex-col items-center  md:gap-8 w-full  px-4 md:px-6 lg:px-8">
        <h2 className="text-[#123D46] font-roboto text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem]">
          Mobile App
        </h2>
        <div className="w-full flex justify-center relative py-8 md:py-12">
          <div className="relative sm:w-[220px] md:w-[280px] lg:w-[450px] transform">
            <div className="relative">
              <Image
                src="/images/services/mobile-app.png"
                alt="Mobile App"
                className="object-contain w-full h-auto"
                width={420}
                height={840}
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
              />
           
            </div>
            {/* Colored squares */}
            {/* Left side squares */}
            <div className="absolute -top-4 -left-6 w-5 h-5 bg-yellow-300 animate-float opacity-80"></div>
            <div className="absolute top-1/3 -left-8 w-6 h-6 bg-green-400 animate-float-delay  opacity-80"></div>
            <div className="absolute bottom-1/4 -left-6 w-4 h-4 bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
            
            {/* Right side squares */}
            <div className="absolute -top-8 -right-8 w-5 h-5 bg-[#FF00FB] animate-float  opacity-80"></div>
            <div className="absolute top-1/2 -right-10 w-6 h-6 bg-[#00FF90] animate-float-delay blur-[1px] opacity-80"></div>
            <div className="absolute -bottom-4 -right-6 w-4 h-4 bg-[#8CE2FF] animate-float-delay opacity-80"></div>
           
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