import Image from 'next/image';

const FinancialSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
          Financial Limitations
        </h2>
        <div className="w-full flex justify-center relative">
          <div className="w-full max-w-[220px]">
            <Image
              src="/images/challenges/financial.png"
              alt="Financial Limitations"
              width={220}
              height={220}
              className="object-contain w-full h-auto"
              priority
            />
            {/* Left side square */}
            <div className="hidden md:block absolute -top-2 -left-2.5 w-8 h-8 bg-[#8CE2FF] animate-float opacity-80"></div>
            
            {/* Bottom square */}
            <div className="hidden md:block absolute -bottom-3 left-12 w-6 h-6 bg-[#00FBFF] animate-float blur-[2px] opacity-80"></div>
            
            {/* Right side square */}
            <div className="hidden md:block absolute top-1/3 -right-0 w-5 h-5 bg-yellow-300 animate-float-delay opacity-80"></div>
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[18px] font-normal leading-[24px]  mx-auto">
          Plans aim to remove financial barriers, making high-quality care accessible to everyone.
        </p>
      </div>
    </div>
  );
};

export default FinancialSection;