import Image from 'next/image';

const AccessibilitySection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
          Provider Accessibility
        </h2>
        <div className="w-full flex justify-center">
          <div className="relative">
            <Image
              src="/images/why-medyour/accessibility.png"
              alt="Provider Accessibility"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px] max-w-2xl mx-auto">
          Access to healthcare providers is made easier, helping individuals connect with the care they need.
        </p>
      </div>
    </div>
  );
};

export default AccessibilitySection;