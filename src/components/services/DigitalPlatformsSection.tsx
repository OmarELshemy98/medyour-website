import Image from 'next/image';

const DigitalPlatformsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <h2 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px]">
        Digital Platforms
      </h2>
      <p className="text-[#00313B] text-center font-roboto text-[24px] font-normal leading-[38px] max-w-4xl mx-auto mb-20">
        Real-Time Access: Stay connected and informed about<br />
        healthcare services and coverage details with a user-friendly<br />
        mobile app.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/images/services/RealTime.png"
              alt="Real Time Access"
              width={70}
              height={52}
              priority
              className="object-contain"
            />
          </div>
          <div className="text-[#123D46] text-[24px] font-medium">
            Real-Time<br />Access:
          </div>
          <p className="text-[#00313B] text-[21px] font-light leading-[22px] opacity-60 mt-4 max-w-[280px]">
            Stay connected and informed about healthcare services and coverage details with a user-friendly mobile app.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/images/services/cloudSecured.png"
              alt="Cloud Secured Medical Files"
              width={70}
              height={52}
              priority
              className="object-contain"
            />
          </div>
          <div className="text-[#123D46] text-[24px] font-medium">
            Cloud-Secured<br />Medical<br />Files:
          </div>
          <p className="text-[#00313B] text-[21px] font-light leading-[22px] opacity-60 mt-4 max-w-[280px]">
            Medical history is securely stored, allowing access from anywhere at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalPlatformsSection;