import Link from 'next/link';

const ActiveButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8 mb-4">
      <Link 
        href="#" 
        className="flex items-center justify-center gap-3 border-2 border-[#123D46] rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-[#123D46] hover:bg-[#123D46] hover:text-white transition-all duration-300 group w-[200px] sm:w-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 30 37" fill="none" className="group-hover:fill-white">
          <path d="M27.5221 31.9375C26.035 34.1592 24.4584 36.3271 22.0575 36.363C19.6567 36.4167 18.8863 34.9475 16.1629 34.9475C13.4217 34.9475 12.5796 36.3271 10.3041 36.4167C7.95705 36.5063 6.1833 34.0517 4.6783 31.8838C1.61455 27.4584 -0.732529 19.3063 2.4208 13.8238C3.97955 11.1005 6.77456 9.38046 9.80247 9.32671C12.0959 9.29087 14.2817 10.8855 15.6971 10.8855C17.0946 10.8855 19.7463 8.96837 22.5234 9.25504C23.6879 9.30879 26.9488 9.72087 29.045 12.8025C28.8838 12.91 25.1571 15.0959 25.1929 19.6288C25.2467 25.0396 29.9409 26.8492 29.9946 26.8671C29.9409 26.9925 29.2421 29.4471 27.5221 31.9375ZM17.2917 3.27087C18.5996 1.78379 20.7675 0.655041 22.5592 0.583374C22.7921 2.67962 21.95 4.79379 20.6959 6.29879C19.4596 7.82171 17.4171 9.00421 15.4104 8.84296C15.1417 6.78254 16.145 4.63254 17.2917 3.27087Z" fill="currentColor"/>
        </svg>
        <span className="text-[0.9375rem] font-medium">App Store</span>
      </Link>
      <Link 
        href="#" 
        className="flex items-center justify-center gap-3 border-2 border-[#123D46] rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-[#123D46] hover:bg-[#123D46] hover:text-white transition-all duration-300 group w-[200px] sm:w-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 35" fill="none" className="group-hover:fill-white">
          <path d="M6.92858 0.889583L26.0677 11.8942L21.9655 15.9965L6.92858 0.889583ZM2.96337 0L20.5319 17.5L2.96483 35C2.07087 34.6048 1.45837 33.7254 1.45837 32.7031C1.45837 32.6696 1.45837 32.636 1.45983 32.604V32.6083V2.39313C1.45837 2.36542 1.45837 2.33188 1.45837 2.29833C1.45837 1.27604 2.07087 0.396667 2.94879 0.00729167L2.96483 0.00145833L2.96337 0ZM32.0163 15.4496C32.62 15.8973 33.0065 16.609 33.0065 17.4096C33.0065 17.4417 33.0065 17.4723 33.005 17.5044V17.5C33.0109 17.5627 33.0152 17.6371 33.0152 17.7115C33.0152 18.464 32.6507 19.1319 32.0877 19.546L32.0819 19.5504L27.9796 21.8735L23.5375 17.5L27.9811 13.0565L32.0163 15.4496ZM6.92858 34.1104L21.9669 19.0035L26.0692 23.1058L6.92858 34.1104Z" fill="currentColor"/>
        </svg>
        <span className="text-[0.9375rem] font-medium">Google Play</span>
      </Link>
    </div>
  );
};

export default ActiveButtons;