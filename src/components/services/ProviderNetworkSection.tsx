import Image from 'next/image';

const ProviderNetworkSection = () => {
  return (
    <div className="flex flex-col items-center w-full py-8 md:py-12">
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
        <h2 className="text-[#123D46] font-roboto text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem]">
          Healthcare Provider Network
        </h2>
        <div className="w-full flex justify-center">
          <div className="relative w-full md:w-4/5 lg:w-3/4 transform rotate-6">
            <Image
              src="/images/services/provider-network.png"
              alt="Healthcare Provider Network"
              className="object-contain w-full h-auto"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 75vw"
            />
            {/* Animated squares */}
            {/* Left side squares */}
            <div className="absolute top-0 -left-2 w-5 h-5 bg-yellow-300 animate-float opacity-80"></div>
            <div className="absolute top-1/2 -translate-y-10 -left-8 w-6 h-6 bg-[#00FF90] animate-float-delay opacity-80"></div>
            <div className="absolute  left-8 w-4 h-4 bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
            
            {/* Right side squares */}
            <div className="absolute top-15 -right-8 w-5 h-5 bg-[#FF00FB] animate-float-delay opacity-80"></div>
            <div className="absolute top-2/3 -right-8 w-6 h-6 bg-[#8CE2FF] animate-float  opacity-80"></div>
          
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[1rem] md:text-[1.125rem] font-normal leading-[1.25rem] md:leading-[1.5rem] max-w-2xl mx-auto px-4 md:px-0">
          A vast network of over 2,000 qualified healthcare centers in the Kingdom's network of care. The network spans across major cities and regions.
        </p>
      </div>
    </div>
  );
};

export default ProviderNetworkSection;