import React from "react";

type VisionCard = {
  title: string;
  description: string;
  image: string;
  roundedCorners: string;
  bgColor: string; // Added background color property
};

const VisionValues = () => {
  const cards: VisionCard[] = [
    {
      title: "Coverage Network",
      description: "A comprehensive network of over 2500 healthcare providers ensures seamless access to top-tier care.",
      image: "/images/home/coverage-network.png",
      roundedCorners: "rounded-tl-[70px] rounded-br-[70px]",
      bgColor: "bg-[#4FBBD6]" // Cyan background
      
    },
    {
      title: "Innovation",
      description: "Utilizing advanced technology to enhance healthcare delivery.",
      image: "/images/home/innovation.png",
      roundedCorners: "rounded-bl-[70px] rounded-tr-[70px]",
      bgColor: "bg-[#DFDFDF]" // Gray background
    },
    {
      title: "Accessibility",
      description: "Removing barriers to ensure everyone has the care they need.",
      image: "/images/home/accessibility.png",
      roundedCorners: "rounded-tl-[70px] rounded-br-[70px]",
      bgColor: "bg-[#FFAE00]" // Yellow background
    }
  ];

  return (

        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto px-4">
          {cards.map((card, index) => (
            index === 2 ? (
              <div 
                key={index}
                className={`relative ${card.roundedCorners} h-[320px] w-full md:w-1/3 overflow-hidden`}
              >
                {/* Background Image Layer */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${card.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                {/* Overlay Layer */}
                <div className={`absolute inset-0 ${card.bgColor} opacity-30`} />
                
                {/* Content Layer */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                  <h3 className="text-[17px] font-roboto font-black text-[#394149] leading-[21px] mb-4 text-center">
                    {card.title}
                  </h3>
                  <p className="text-[14px] font-roboto font-normal text-[#394149] leading-[21px] text-center p-3 max-w-[180px]">
                    {card.description}
                  </p>
                </div>
              </div>
            ) : (
              // Original card structure for first two cards
              <div 
                key={index}
                className={`flex flex-col items-center justify-center ${card.roundedCorners} ${card.bgColor} h-[320px] w-full md:w-1/3 overflow-hidden p-6`}
                style={{
                  backgroundImage: `url('${card.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: '0.95'
                }}
              >
                <h3 className="text-[17px] font-roboto font-black text-[#394149] leading-[21px] mb-4 text-center">
                  {card.title}
                </h3>
                <p className="text-[14px] font-roboto font-normal text-[#394149] leading-[21px] text-center p-3 max-w-[180px]">
                  {card.description}
                </p>
              </div>
            )
          ))}
        </div>

  );
};

export default VisionValues;