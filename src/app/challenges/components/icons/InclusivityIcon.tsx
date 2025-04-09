import { FC } from 'react';

const InclusivityIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="211"
    height="211"
    viewBox="0 0 211 211"
    fill="none"
    className="w-48 h-48"
  >
    {/* Main window background */}
    <path d="M186.254 175.917H24.7463C11.1368 175.917 0 164.78 0 151.167V25.6619C0 12.0491 11.1368 0.915527 24.7463 0.915527H186.25C199.863 0.915527 211 12.0524 211 25.6619V151.167C211 164.78 199.863 175.917 186.254 175.917Z" fill="#E9EDF1"/>
    
    {/* Black header bar with rounded corners */}
    <path d="M211 43.8615V29.6619C211 16.0491 199.863 4.91553 186.254 4.91553H24.7463C11.1368 4.91553 0 16.0524 0 29.6619V43.8615H211Z" fill="black"/>
    
    {/* Window control dots */}
    <circle cx="23.3829" cy="24.2957" r="5.37479" fill="#E9EDF1"/>
    <circle cx="38.6937" cy="24.2957" r="5.37479" fill="#FF9900"/>
    <circle cx="54.0142" cy="24.2957" r="5.37479" fill="#30D1E2"/>
    
    {/* Address bar and arrow */}
    <g transform="translate(75, 15)">
      <path d="M112.491 7.8374H99.9565V10.6496H112.491V7.8374Z" fill="white"/>
      <path d="M108.809 17.6951L106.689 15.8489L112.313 9.38698L106.689 2.9317L108.809 1.08545L116.052 9.38698L108.809 17.6951Z" fill="white"/>
      <path d="M79.2983 18.193H8.85722C4.01411 18.193 0.0512695 14.2301 0.0512695 9.38701C0.0512695 4.5439 4.01411 0.581055 8.85722 0.581055H79.2983C84.1414 0.581055 88.1042 4.5439 88.1042 9.38701C88.1042 14.2301 84.1414 18.193 79.2983 18.193Z" fill="white"/>
      <text x="8" y="13" fill="black" fontSize="15" fontFamily="Arial">www.</text>
    </g>
  
   
    
    {/* Checkmark */}
    <path 
      d="M70 105L95 130L145 75" 
      stroke="#30D1E2" 
      strokeWidth="14" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default InclusivityIcon;