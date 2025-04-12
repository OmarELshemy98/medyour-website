// components/Testimonials.tsx

import React from "react";

type Testimonial = {
  text: string;
  author: string;
  role?: string;
  bgColor: string;
};

const testimonials: Testimonial[] = [
  {
    text: "MedYour has completely changed how I manage my family's healthcare. The mobile app is intuitive, and the support is exceptional. I can't imagine going back to the old way!",
    author: "Fatima R.",
    bgColor: "#49D8EB", // Cyan color from screenshot
  },
  {
    text: "As a corporate partner, I value MedYour's commitment to comprehensive coverage for my employees. Their proactive support and efficient systems truly set them apart in the healthcare industry",
    author: "Omar T.",
    role: "Corporate Executive",
    bgColor: "#84F5C4", // Green color from screenshot
  },
  {
    text: "MedYour's approach to healthcare is refreshing. The transparency and ease of access have made a world of difference in my family's healthcare journey",
    author: "Layla A.",
    bgColor: "#FFF0004A",
  },
];

const QuoteOpen = () => (
  <div className="absolute left-8 top-15">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" style={{ fill: 'white', transform: 'rotate(180deg)' }}>
      <path d="M44.3555 32.0645L44.3555 15.4883L60.9316 15.4883L60.9316 29.9082C60.9316 34.8047 60.5498 38.6006 59.7861 41.2959C59.0225 43.9912 57.4053 46.1924 54.9346 47.8994C52.4639 49.6514 48.9375 50.5947 44.3555 50.7295L44.3555 43.7217C49.7461 42.9131 52.4414 39.5664 52.4414 33.6816L52.4414 32.0645L44.3555 32.0645ZM11.0684 32.0645L11.0684 15.4883L27.5771 15.4883L27.5771 29.9082C27.5771 34.8047 27.2178 38.6006 26.499 41.2959C25.7353 43.9912 24.1182 46.1924 21.6475 47.8994C19.1318 49.6514 15.6055 50.5947 11.0683 50.7295L11.0683 43.7217C16.459 42.9131 19.1543 39.5664 19.1543 33.6816L52.4414 32.0645Z"/>
    </svg>
  </div>
);

const QuoteClose = () => (
  <div className="absolute right-12 bottom-15">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" style={{ fill: 'white' }}>
      <path d="M44.3555 32.0645L44.3555 15.4883L60.9316 15.4883L60.9316 29.9082C60.9316 34.8047 60.5498 38.6006 59.7861 41.2959C59.0225 43.9912 57.4053 46.1924 54.9346 47.8994C52.4639 49.6514 48.9375 50.5947 44.3555 50.7295L44.3555 43.7217C49.7461 42.9131 52.4414 39.5664 52.4414 33.6816L52.4414 32.0645L44.3555 32.0645ZM11.0684 32.0645L11.0684 15.4883L27.5771 15.4883L27.5771 29.9082C27.5771 34.8047 27.2178 38.6006 26.499 41.2959C25.7353 43.9912 24.1182 46.1924 21.6475 47.8994C19.1318 49.6514 15.6055 50.5947 11.0683 50.7295L11.0683 43.7217C16.459 42.9131 19.1543 39.5664 19.1543 33.6816L52.4414 32.0645Z"/>
    </svg>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-[2.0625rem] font-normal text-center text-[#123D46] mb-10 font-roboto leading-[4.375rem]">
        Client Testimonials
      </h2>

      <div className="flex flex-col space-y-6">
        {testimonials.map((item, index) => (
          <div 
            key={index} 
            className={`relative ${
              index === 1 ? 'rounded-bl-[1.875rem] rounded-tr-[1.875rem]' 
              : 'rounded-tl-[1.875rem] rounded-br-[1.875rem]'
            } text-center min-h-[12.5rem] flex flex-col items-center justify-center`}
            style={{ backgroundColor: item.bgColor }}
          >
            <QuoteOpen />
            <blockquote className="text-[1.125rem] font-roboto font-normal leading-[1.5rem] text-[#0F3C42] max-w-4xl text-center ">
              {item.text}
            </blockquote>
            <QuoteClose />
            <p className="absolute bottom-8 right-17 font-roboto text-[1.44rem] font-medium leading-[1.5rem] text-[#0F3C42]">
              — {item.author}
              {item.role && (
                <span className="text-[1.125rem] font-normal ml-1">, {item.role}</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
