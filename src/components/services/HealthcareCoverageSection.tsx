import Image from 'next/image';

const HealthcareCoverageSection = () => {
  return (
    <div className="flex flex-col items-center w-full py-8 md:py-12">
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
        <h2 className="text-[#123D46] font-roboto text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem]">
          Healthcare Coverage
        </h2>
        <div className="w-full flex justify-center">
          <div className="relative w-full md:w-4/5 lg:w-3/4">
            <Image
              src="/images/services/healthcare-coverage.png"
              alt="Healthcare Coverage"
              className="object-contain w-full h-auto"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 75vw"
            />
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[1rem] md:text-[1.125rem] font-normal leading-[1.25rem] md:leading-[1.5rem] max-w-2xl mx-auto px-4 md:px-0">
          Our healthcare plans provide a wide range of medical services and treatments, ensuring comprehensive coverage for all your healthcare needs.
        </p>
      </div>
    </div>
  );
};

export default HealthcareCoverageSection;