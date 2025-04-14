import Image from 'next/image';

const InclusivitySection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#123D46] font-roboto text-[2rem] font-normal leading-[4.375rem]">
          Inclusivity Gaps
        </h2>
        <div className="w-full flex justify-center relative">
          <div className=" w-full max-w-[220px]">
            <Image
              src="/images/challenges/inclusivity.png"
              alt="Inclusivity Gaps"
              width={220}
              height={220}
              className="object-contain w-full h-auto"
              priority
            />
            {/* Animated squares */}
            {/* Left side squares */}
            <div className="hidden md:block absolute -top-6 -left-8 w-5 h-5 bg-[#FF00FB] animate-float  opacity-80"></div>
            <div className="hidden md:block absolute bottom-1/3 -left-6 w-4 h-4 bg-[#8CE2FF] animate-float-delay blur-[1.5px] opacity-80"></div>
            
            {/* Right side square */}
            <div className="hidden md:block absolute bottom-12 -right-2.5 w-8 h-8 bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[18px] font-normal leading-[24px] max-w-4xl mx-auto">
        Recognizing that most individuals face barriers to accessing proper healthcare, the goal is to close these gaps and make top-quality services available to all        </p>
      </div>
    </div>
  );
};

export default InclusivitySection;