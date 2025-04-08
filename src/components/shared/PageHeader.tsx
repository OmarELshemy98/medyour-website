import { FC } from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title, description, backgroundImage = '/images/backgroundImg.png' }) => {
  return (
    <div 
      className="text-center relative w-full flex items-center justify-center overflow-hidden min-h-[350px] h-[60vh] md:h-[50vh] lg:h-[45vh]"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: '-6.5rem',
        paddingTop: '6.5rem',
        height: '60vh',
      }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Add overlay for better text visibility */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[90rem] mx-auto px-4 md:px-8 py-12 md:py-16">
        <h1 className="text-[2rem] md:text-[2.75rem] font-[900] text-white mb-6 md:mb-10 font-roboto leading-[2.75rem] md:leading-[4.5rem] tracking-[0%]">
          {title}
        </h1>
        <p className="text-[#FFFFFF] text-[1.25rem] md:text-[2.25rem] font-[300] leading-[1.75rem] md:leading-[3rem] tracking-[0%] w-full max-w-[75rem] mx-auto text-center font-roboto">
          {description}
        </p>
      </div>
    </div>
  );
};
export default PageHeader;