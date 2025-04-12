import Image from 'next/image';

const ProviderNetworkSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
          Healthcare Provider Network
        </h2>
        <div className="w-full flex justify-center">
          <div className="relative transform rotate-6">
            <Image
              src="/images/services/provider-network.png"
              alt="Healthcare Provider Network"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px] max-w-2xl mx-auto">
          A vast network of over 2,000 qualified healthcare centers in the Kingdom's network of care. The network spans across major cities and regions.
        </p>
      </div>
    </div>
  );
};

export default ProviderNetworkSection;