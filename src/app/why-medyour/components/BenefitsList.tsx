import { FC } from 'react';
import { benefits } from '../data/benefits';
import BenefitCard from './BenefitCard';
import LineSeparator from './LineSeparator';

const BenefitsList: FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20 space-y-12 rounded-[30px]">
      {benefits.map((benefit, index) => (
        <div key={index}>
          <BenefitCard benefit={benefit} color={benefit.color} />
          {index < benefits.length - 1 && <LineSeparator />}
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
