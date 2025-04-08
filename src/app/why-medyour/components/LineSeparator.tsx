import { FC } from 'react';

const LineSeparator: FC = () => (
  <div className="flex items-center w-full mt-8">
    <div className="flex-1" style={{ 
      borderTop: '2px dashed #3A6070',
      opacity: 0.4,
      backgroundSize: '20px 2px',
      backgroundPosition: 'top',
      height: '2px'
    }}></div>
    <div className="flex items-center">
      <div className="w-[1px] h-[8px] bg-[#3A6070]"></div>
      <div className="w-[200px] sm:w-[493px] border-t border-[#3A6070]"></div>
      <div className="w-[1px] h-[8px] bg-[#3A6070]"></div>
    </div>
    <div className="flex-1" style={{ 
      borderTop: '2px dashed #3A6070',
      opacity: 0.4,
      backgroundSize: '20px 2px',
      backgroundPosition: 'top',
      height: '2px'
    }}></div>
  </div>
);

export default LineSeparator;