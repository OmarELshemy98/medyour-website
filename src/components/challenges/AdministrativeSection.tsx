import Image from 'next/image';

const AdministrativeSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
          Administrative Burdens
        </h2>
        <div className="w-full flex justify-center relative">
          <div className=" w-full max-w-[220px]">
            <Image
              src="/images/challenges/administrative.png"
              alt="Administrative Burdens"
              width={220}
              height={220}
              className="object-contain w-full h-auto"
              priority
            />
            {/* Top squares */}
            <div className="absolute -top-10 right-0 w-4 h-4 bg-[#00FBFF] animate-float opacity-80"></div>
            
            {/* Left side squares */}
            <div className="absolute top-20 -left-4 w-3 h-3 bg-[#FF00FB] animate-float-delay opacity-80"></div>
            <div className="absolute bottom-5 left-9 w-3 h-3 bg-yellow-300 animate-float blur-[2px] opacity-80"></div>
            
            {/* Right side squares */}
            <div className="absolute top-1/3 right-0 w-3 h-3 bg-[#00FF90] animate-float-delay opacity-80"></div>
            <div className="absolute bottom-10 right-1/3 w-4 h-4 bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[18px] font-normal leading-[24px] max-w-3xl mx-auto">
          A streamlined digital platform eliminates paperwork, enhances efficiency, and simplifies the healthcare experience.
        </p>
      </div>
    </div>
  );
};

export default AdministrativeSection;