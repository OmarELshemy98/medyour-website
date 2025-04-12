import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  phoneImage?: string;
  title?: string;
  subtitle?: string;
}

const HeroSection: FC<HeroSectionProps> = ({ 
  phoneImage = '/images/home/mob.png', 
  title = 'YOUR HEALTH, OUR PRIORITY.',
  subtitle = 'Empowering Well-being Through Innovative Care.'
}) => {
  return (
    <div className="py-10 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div 
          className="rounded-tl-3xl rounded-br-3xl  bg-cover bg-center"
          style={{ 
            backgroundImage: ' url("/images/BackgroundImg.png")'
          }}
        >
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
            {/* Content Side */}
            <div className="w-full md:w-1/2 relative">
              <div className="flex items-start gap-6">
                <div className="min-w-[8px] h-[120px] bg-[#FFB800] rounded-full self-stretch"></div>
                <div className="flex flex-col">
                  <h1 className="font-roboto text-[40px] font-black text-white uppercase mb-4 whitespace-nowrap leading-6">
                    {title}
                  </h1>
                  <p className="font-roboto text-[38px] font-light text-white leading-[42px]">
                    {subtitle.split(' Through')[0]} Through<br />
                    {subtitle.split(' Through')[1]}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Image Side */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
              <div className="absolute right-0.5 top-[-450px] w-[600px] h-[1000px]">
                <Image
                  src={phoneImage}
                  alt="MedYour App"
                  fill
                  className="object-contain rotate-[5deg]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;