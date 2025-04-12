import Image from 'next/image';

const HealthcareCoverageSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
          Healthcare Coverage
        </h2>
        <div className="w-full flex justify-center">
          <div className="relative transform rotate-6">
            <Image
              src="/images/services/healthcare-coverage.png"
              alt="Healthcare Coverage"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px] max-w-2xl mx-auto">
          Our healthcare plans provide a wide range of medical services and treatments, ensuring comprehensive coverage for all your healthcare needs.
        </p>
      </div>
    </div>
  );
};

export default HealthcareCoverageSection;