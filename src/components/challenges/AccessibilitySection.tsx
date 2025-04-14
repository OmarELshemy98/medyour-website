import Image from 'next/image';

const AccessibilitySection = () => {
  return (
    <div className="flex flex-col items-center pb-16 md:pb-24">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
          Provider Accessibility
        </h2>
        <div className="w-full flex justify-center relative">
          <div className=" w-full max-w-[220px]">
            <Image
              src="/images/challenges/accessibility.png"
              alt="Provider Accessibility"
              width={220}
              height={220}
              className="object-contain w-full h-auto"
              priority
            />
            {/* Left side squares */}
            <div className="hidden md:block absolute -top-14 -left-4 w-8 h-8  bg-yellow-300 animate-float opacity-80"></div>
            <div className=" hidden md:block absolute bottom-10 -left-6 w-4 h-4 bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
            
            {/* Right side squares */}
            <div className="hidden md:block absolute -top-10 -right-4 w-6 h-6  bg-[#00FBFF] animate-float opacity-80"></div>

            <div className="hidden md:block absolute top-8 -right-1.5 w-4 h-4 bg-[#49B1F7] animate-float-delay opacity-80"></div>
            <div className="hidden md:block absolute bottom-1/3 -right-15 w-5 h-5 bg-[#FF00FB] animate-float opacity-80"></div>
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[18px] font-normal leading-[24px]  mx-auto ">
          Access to healthcare providers is made easier, helping individuals connect with the care they need.
        </p>
      </div>
    </div>
  );
};

export default AccessibilitySection;