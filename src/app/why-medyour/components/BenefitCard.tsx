import { FC } from 'react';
import { Benefit } from '../types';

interface BenefitCardProps {
  benefit: Benefit;
  color: string;
}

const BenefitCard: FC<BenefitCardProps> = ({ benefit, color }) => {
  return (
    <div className="bg-white rounded-tr-[30px] rounded-bl-[30px] p-8 shadow-[0_5px_25px_rgba(0,0,0,0.05)] max-w-[800px] mx-auto mb-6">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 flex items-start self-stretch">
          <div 
            className="w-[6px] h-full rounded-full" 
            style={{ backgroundColor: benefit.color }} 
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-start gap-8">
            <div className="flex flex-col">
              <div className="mb-4">
                {typeof benefit.icon === 'function' && benefit.icon(benefit.color)}
              </div>
              <h3 className="text-[#123D46] font-normal text-[33px] leading-[33px] font-roboto">
                {benefit.title.map((line, i) => (
                  <div key={i} className="mb-0.5">{line}</div>
                ))}
              </h3>
            </div>
            <div className="flex-1 flex items-start pl-8 mt-28 ml-8">
              <p className="text-[#00313B] text-[18px] leading-[24px] font-normal font-roboto max-w-[400px]">
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