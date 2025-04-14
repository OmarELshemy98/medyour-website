import Image from 'next/image';

const HealthcareCoverageSection = () => {
  return (
    <div className="flex flex-col items-center w-full py-8 md:py-12">
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
        <h2 className="text-[#123D46] font-roboto text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem]">
          Healthcare Coverage
        </h2>
        <div className="w-full flex justify-center">
          <div className="relative w-full sm:w-3/4 md:w-4/5 lg:w-3/4 transform ">
            <Image
              src="/images/services/healthcare-coverage.png"
              alt="Healthcare Coverage"
              className="object-contain w-full h-auto"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 80vw, 75vw"
            />
            {/* Animated squares */}
            <div className=" hidden md:block absolute top-2 left-2 w-4 h-4 bg-[#00FBFF] animate-float opacity-80"></div>
            <div className="hidden md:block absolute top-1/4 left-8 w-5 h-5 bg-[#00FF90] animate-float-delay opacity-80"></div>
            <div className="hidden md:block absolute bottom-2 left-4 w-6 h-6 bg-[#8CE2FF] animate-float opacity-80"></div>
            
            <div className="hidden md:block absolute top-2 right-2 w-4 h-4 bg-[#FF00FB] animate-float-delay opacity-80"></div>
            <div className="hidden md:block absolute top-2/3 right-8 w-5 h-5 bg-[#00FF90] animate-float opacity-80"></div>
            <div className="hidden md:block absolute bottom-2 right-4 w-6 h-6 bg-[#8CE2FF] animate-float-delay opacity-80"></div>
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[18px] font-normal leading-[24px] max-w-2xl mx-auto px-4 md:px-0">
          Comprehensive healthcare plans tailored to meet the diverse needs of individuals and corporates alike. With competitive rates and no hidden fees, quality healthcare is made accessible to all.
        </p>
      </div>
    </div>
  );
};

export default HealthcareCoverageSection;