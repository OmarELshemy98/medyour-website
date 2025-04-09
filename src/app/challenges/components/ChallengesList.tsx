import { challenges } from '../data/challenges';
import ChallengeCard from './ChallengeCard';
import { LineSeparator } from '@/components/shared/Separators';

const ChallengesList = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="flex flex-col items-center space-y-32">
        {challenges.map((challenge, index) => (
          <div key={index} className="w-full flex flex-col items-center relative">
            <h3 className="text-[#123D46] font-roboto text-[33px] font-normal leading-[70px] mb-10">
              {challenge.title}
            </h3>
            <ChallengeCard 
              icon={challenge.icon}
              title={challenge.title}
            />
            <p className="text-[#00313B] text-center font-roboto text-[18px] font-normal leading-[24px] max-w-[400px] mt-8">
              {challenge.description}
            </p>
            {index !== challenges.length - 1 && (
              <LineSeparator className="max-w-[800px]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesList;