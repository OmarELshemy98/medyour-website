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
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[90rem] mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16">
        <h1 className="text-[#FFF] font-roboto text-[39px] font-[900] leading-[70px] mb-4 md:mb-6 lg:mb-10">
          {title}
        </h1>
        <p className="text-[#FFF] text-center font-roboto text-[34px] font-[300] leading-[46px] w-full max-w-[75rem] mx-auto"
           dangerouslySetInnerHTML={{ __html: description }}>
        </p>
      </div>
    </div>
  );
};
export default PageHeader;