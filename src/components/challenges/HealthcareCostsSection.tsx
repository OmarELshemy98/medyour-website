import Image from 'next/image';

const HealthcareCostsSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
          Escalating Healthcare Costs
        </h2>
        <div className="w-full flex justify-center relative">
          <div className="relative w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px]">
            <Image
              src="/images/challenges/costs.png"
              alt="Escalating Healthcare Costs"
              width={450}
              height={450}
              className="object-contain w-full h-auto"
            />
            {/* Animated squares */}
            <div className="absolute -top-6 -left-6 w-5 h-5 bg-yellow-300 animate-float blur-[2px] opacity-80"></div>
            <div className="absolute top-1/4 -left-8 w-6 h-6 bg-[#00FF90] animate-float-delay blur-[1.5px] opacity-80"></div>
            <div className="absolute bottom-1/3 -left-4 w-4 h-4 bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
            
            <div className="absolute -top-8 -right-6 w-5 h-5 bg-[#FF00FB] animate-float-delay blur-[1.5px] opacity-80"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-[#00FF90] animate-float blur-[2px] opacity-80"></div>
            <div className="absolute -bottom-6 -right-4 w-4 h-4 bg-[#8CE2FF] animate-float-delay blur-[1.5px] opacity-80"></div>
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px] max-w-2xl mx-auto">
          Offering affordable, comprehensive coverage to combat rising healthcare expenses.
        </p>
      </div>
    </div>
  );
};

export default HealthcareCostsSection;