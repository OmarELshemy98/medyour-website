import { FC } from 'react';
import { Benefit } from '../types';

interface BenefitCardProps {
  benefit: Benefit;
  color: string;
}

const BenefitCard: FC<BenefitCardProps> = ({ benefit, color }) => {
  return (
    <div className="bg-white rounded-tr-[1.875rem] rounded-bl-[1.875rem] p-1.5 sm:p-2 shadow-[0_0.3125rem_1.5625rem_rgba(0,0,0,0.05)] max-w-full sm:max-w-[50rem] mx-auto mb-1 sm:mb-1.5">
      <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-1.5">
        <div className="flex-shrink-0 flex items-start self-stretch">
          <div 
            className="w-[0.375rem] h-full rounded-full" 
            style={{ backgroundColor: benefit.color }} 
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-2">
            <div className="flex flex-col">
              <div className="mb-0.125 sm:mb-0.25">
                {typeof benefit.icon === 'function' && benefit.icon(benefit.color)}
              </div>
              <h3 className="text-[#123D46] font-normal text-[1.5rem] sm:text-[2.0625rem] leading-[1.75rem] sm:leading-[2.0625rem] font-roboto">
                {benefit.title.map((line, i) => (
                  <div key={i} className="mb-0.03125">{line}</div>
                ))}
              </h3>
            </div>
            <div className="flex-1 flex items-start pl-0.25 sm:pl-0.5 mt-0.25 sm:mt-1.75 ml-0.25 sm:ml-0.5">
              <p className="text-[#00313B] text-[1rem] sm:text-[1.125rem] leading-[1.375rem] sm:leading-[1.5rem] font-normal font-roboto max-w-full sm:max-w-[25rem]">
                {benefit.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;