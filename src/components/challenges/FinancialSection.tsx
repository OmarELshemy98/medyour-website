import Image from 'next/image';

const FinancialSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
          Financial Limitations
        </h2>
        <div className="w-full flex justify-center">
          <div className="relative">
            <Image
              src="/images/why-medyour/financial.png"
              alt="Financial Limitations"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px] max-w-2xl mx-auto">
          Plans aim to remove financial barriers, making high-quality care accessible to everyone.
        </p>
      </div>
    </div>
  );
};

export default FinancialSection;