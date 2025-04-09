import Image from 'next/image';

interface ChallengeCardProps {
  icon: string;
  title: string;
}

const ChallengeCard = ({ icon, title }: ChallengeCardProps) => {
  return (
    <div className="relative mx-auto w-full max-w-[300px]"> {/* Responsive width */}
      <div className="relative pt-[100%]"> {/* Aspect ratio box */}
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 bg-white rounded-lg p-4 flex items-center justify-center">
            <div className="w-full aspect-square relative"> {/* Responsive image container */}
              <Image
                src={icon}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;