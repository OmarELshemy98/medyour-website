import Image from 'next/image';

const HealthcareCostsSection = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
          Escalating Healthcare Costs
        </h2>
        <div className="w-full flex justify-center relative">
          <div className=" w-full max-w-[220px]">
            <Image
              src="/images/challenges/costs.png"
              alt="Escalating Healthcare Costs"
              width={220}
              height={220}
              className="object-contain w-full h-auto"
              priority
            />
            {/* Left side squares */}
            <div className="absolute -top-14 -left-4 w-8 h-8 bg-[#8CE2FF] animate-float opacity-80"></div>
            <div className="absolute top-1/3 -left-1 w-5 h-5 bg-yellow-300 animate-float-delay opacity-80"></div>
            <div className="absolute bottom-10 -left-16 w-4 h-4 bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
            
            {/* Right side squares */}
            <div className="absolute top-8 -right-18 w-4 h-4 bg-[#FF00FB] animate-float-delay opacity-80"></div>
            <div className="absolute bottom-1/ -right-5 w-5 h-5 bg-[#00FF90] animate-float blur-[2px] opacity-80"></div>
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[18px] font-normal leading-[24px] max-w-2xl mx-auto">
          Offering affordable, comprehensive coverage to combat rising healthcare expenses.
        </p>
      </div>
    </div>
  );
};

export default HealthcareCostsSection;