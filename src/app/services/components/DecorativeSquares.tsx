import { FC } from 'react';

const DecorativeSquares: FC = () => (
  <div className="absolute w-full h-full pointer-events-none">
    <div className="absolute top-10 left-20 w-4 h-4 bg-[#30D1E2] opacity-20 rotate-45" />
    <div className="absolute top-40 right-32 w-3 h-3 bg-[#FF9900] opacity-20 rotate-45" />
    <div className="absolute bottom-20 left-40 w-2 h-2 bg-[#30D1E2] opacity-30 rotate-45" />
    <div className="absolute top-60 left-10 w-2 h-2 bg-[#FF00FF] opacity-20 rotate-45" />
    <div className="absolute bottom-40 right-20 w-3 h-3 bg-[#00FF00] opacity-20 rotate-45" />
    <div className="absolute top-20 right-10 w-4 h-4 bg-[#FF00FF] opacity-20 rotate-45" />
  </div>
);

export default DecorativeSquares;