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
        height: '65vh',
      }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Add overlay for better text visibility */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <h1 className="text-[#FFF] font-roboto text-[28px] sm:text-[34px] lg:text-[39px] font-[900] leading-[40px] sm:leading-[50px] lg:leading-[70px] mb-3 sm:mb-4 lg:mb-6">
          {title}
        </h1>
        <p className="text-[#FFF] text-center font-roboto text-[20px] sm:text-[26px] lg:text-[34px] font-[300] leading-[30px] sm:leading-[36px] lg:leading-[46px] w-full max-w-[75rem] mx-auto"
           dangerouslySetInnerHTML={{ __html: description }}>
        </p>
      </div>
    </div>
  );
};
export default PageHeader;