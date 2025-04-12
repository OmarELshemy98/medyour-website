import React from 'react';

type FeatureCard = {
  title: string[];
  description: string;
  icon: JSX.Element;
};

const FeaturedServices = () => {
  const features: FeatureCard[] = [
    {
      title: ["Comprehensive", "Healthcare", "Coverage"],
      description: "Plans for individuals and corporates that ensure you receive the best possible care.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="83" height="88" viewBox="0 0 83 88" className="w-16 h-16">
                    <g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M60.071 26.7391C45.8104 36.4477 26.3604 32.8647 16.5051 18.6619C16.4066 18.52 16.3095 18.3775 16.2137 18.2346L13.2223 20.3102C5.96467 25.3463 4.16371 35.3123 9.19976 42.5699C14.2358 49.8276 24.2018 51.6286 31.4595 46.5925L60.071 26.7391ZM60.5405 26.4133L60.7293 26.2823L60.7277 26.2799C60.6655 26.3246 60.6031 26.369 60.5405 26.4133Z" fill="#00B833"/>
                    </g>
                    <g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.2171 18.2342L16.207 18.2411L47.0925 62.7514C52.1286 70.0091 62.0946 71.81 69.3523 66.774C76.6099 61.7379 78.4109 51.7719 73.3748 44.5143L60.7224 26.2804C60.5851 26.3789 60.4468 26.4765 60.3075 26.5732C46.0263 36.4829 26.4157 32.939 16.5061 18.6579C16.4085 18.5171 16.3121 18.3759 16.2171 18.2342Z" fill="#2AF562"/>
                    </g>
                  </svg>
      ),
    },
    {
      title: ["Digital", "Health", "Management"],
      description: "Experience seamless healthcare management at your fingertips.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="53" viewBox="0 0 71 53" fill="none" className="w-16 h-16">
                    <g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M38.3851 51.5505C38.5384 34.2994 52.5705 20.3621 69.8578 20.3621C70.0305 20.3621 70.2029 20.3635 70.375 20.3663L70.375 16.7253C70.375 7.89154 63.2138 0.730363 54.3801 0.730363C45.5463 0.730364 38.3851 7.89154 38.3851 16.7253L38.3851 51.5505ZM38.3851 52.1215L38.3851 52.3516L38.388 52.3516C38.3868 52.275 38.3858 52.1983 38.3851 52.1215Z" fill="#CC8700"/>
                    </g>
                    <g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M70.3734 20.3693L70.3734 20.3571L16.197 20.3571C7.36327 20.3571 0.202093 27.5182 0.202094 36.352C0.202094 45.1858 7.36328 52.3469 16.197 52.3469L38.3906 52.3469C38.388 52.178 38.3866 52.0087 38.3866 51.8391C38.3866 34.4565 52.478 20.3652 69.8605 20.3652C70.0318 20.3652 70.2028 20.3665 70.3734 20.3693Z" fill="#FFAE00"/>
                    </g>
                  </svg>
      ),
    },
    {
      title: ["Mobile", "App", "Convenience"],
      description: "Manage your health effortlessly anytime, anywhere with our user-friendly app.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="81" viewBox="0 0 87 81" fill="none" className="w-16 h-16">
        <g>
          <path fillRule="evenodd" clipRule="evenodd" d="M58.4772 60.6504C49.9848 45.6339 55.1683 26.5481 70.1393 17.9045C70.2889 17.8182 70.439 17.7332 70.5894 17.6495L68.7689 14.4964C64.352 6.8461 54.5697 4.22493 46.9194 8.64181C39.2691 13.0587 36.648 22.841 41.0649 30.4913L58.4772 60.6504ZM58.7632 61.1457L58.878 61.3445L58.8805 61.3431C58.8412 61.2775 58.8021 61.2117 58.7632 61.1457Z" fill="#50B3FF"/>
        </g>
        <g>
          <path fillRule="evenodd" clipRule="evenodd" d="M70.5895 17.653L70.5834 17.6424L23.6652 44.7306C16.015 49.1475 13.3938 58.9298 17.8107 66.5801C22.2276 74.2303 32.0099 76.8515 39.6602 72.4346L58.8804 61.3378C58.7936 61.1928 58.7078 61.0469 58.623 60.9C49.9317 45.8463 55.0895 26.5971 70.1433 17.9059C70.2916 17.8202 70.4403 17.7359 70.5895 17.653Z" fill="#0090FF"/>
        </g>
      </svg>
      ),
    },
    {
      title: ["Extensive", "Provider", "Network"],
      description: "Connecting you with over 2500 healthcare providers for exceptional care.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none" className="w-16 h-16">
                    <g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M58.7842 23.6672C46.4775 35.7571 26.7002 35.6901 14.4762 23.4662C14.3541 23.344 14.2332 23.2211 14.1134 23.0975L11.5389 25.672C5.29248 31.9185 5.29248 42.0459 11.5389 48.2923C17.7853 54.5387 27.9127 54.5387 34.1591 48.2923L58.7842 23.6672ZM59.1881 23.2634L59.3507 23.1007L59.3487 23.0987C59.2954 23.1537 59.2419 23.2086 59.1881 23.2634Z" fill="#FF93FD"/>
                    </g>
                    <g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.1167 23.0965L14.1081 23.1051L52.4166 61.4136C58.663 67.66 68.7904 67.66 75.0368 61.4136C81.2832 55.1672 81.2832 45.0398 75.0368 38.7934L59.3436 23.1001C59.226 23.2215 59.1072 23.3421 58.9873 23.462C46.696 35.7534 26.7678 35.7534 14.4765 23.462C14.3554 23.3409 14.2354 23.2191 14.1167 23.0965Z" fill="#FF00FB"/>
                    </g>
                  </svg>
      ),
    },
    
    // ... other features
  ];

  return (
    <div className="py-16 " style={{ backgroundColor: 'rgba(0, 225, 255, 0.02)' }} >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start ">
          <h2 className="text-[1.9375rem] font-roboto font-black text-[#123D46] leading-[4.375rem] whitespace-nowrap  pr-10 ">
            Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-start text-left space-y-4 p-6 rounded-lg"
              >
                <div className="mb-2">
                  {feature.icon}
                </div>
                <h3 className="text-[1.5rem] font-roboto font-bold text-[#123D46] leading-[1.5rem]">
                  {feature.title.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h3>
                <p className="text-[1.3125rem] font-roboto font-light text-[#123D46] leading-[1.375rem] max-w-[17.5rem]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;