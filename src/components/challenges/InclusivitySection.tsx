import Image from 'next/image';

const InclusivitySection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
          Inclusivity Gaps
        </h2>
        <div className="w-full flex justify-center">
          <div className="relative">
            <Image
              src="/images/why-medyour/inclusivity.png"
              alt="Inclusivity Gaps"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px] max-w-2xl mx-auto">
          Recognizing the need to have families in accessing proper healthcare, the system is inclusive.
        </p>
      </div>
    </div>
  );
};

export default InclusivitySection;