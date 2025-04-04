"use client";

import { FC } from 'react';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BusinessIcon from '@mui/icons-material/Business';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BoltIcon from '@mui/icons-material/Bolt';
import WifiIcon from '@mui/icons-material/Wifi';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SatelliteTwoToneIcon from '@mui/icons-material/SatelliteTwoTone';


const WhyMedYourPage = () => {
  const benefits = [
    {
      icon: (color: string) => (
        <div className="relative inline-block bg-gray-50 p-3 rounded-lg">
          <PhoneIphoneIcon 
            sx={{ 
              fontSize: 32,
              color,
              position: 'relative',
              zIndex: 2
            }} 
          />
          <BoltIcon 
            sx={{ 
              fontSize: 16,
              color,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(12deg)',
              zIndex: 3
            }} 
          />
          <WifiIcon 
            sx={{ 
              fontSize: 14,
              color,
              position: 'absolute',
              top: '50%',
              left: 2,
              transform: 'translateY(-50%) rotate(-90deg)',
              opacity: 0.7,
              zIndex: 1
            }} 
          />
          <WifiIcon 
            sx={{ 
              fontSize: 14,
              color,
              position: 'absolute',
              top: '50%',
              right: 2,
              transform: 'translateY(-50%) rotate(90deg)',
              opacity: 0.7,
              zIndex: 1
            }} 
          />
        </div>
      ),
      title: ["Inclusive", "Healthcare", "Coverage"],
      description: "Plans are available for all ages, ensuring that individuals and corporations alike receive the care they deserve."
    },
    {
      icon: (color: string) => (
        <div className="relative inline-block bg-gray-50 p-3 rounded-lg">
          <SatelliteAltIcon 
            sx={{ 
              fontSize: 32,
              color,
              transform: 'rotate(-45deg)',
              position: 'relative',
              zIndex: 2
            }} 
          />
          <SignalCellularAltIcon 
            sx={{ 
              fontSize: 16,
              color,
              position: 'absolute',
              bottom: 2,
              right: 2,
              transform: 'rotate(45deg)',
              opacity: 0.7,
              zIndex: 1
            }} 
          />
          <SignalCellularAltIcon 
            sx={{ 
              fontSize: 16,
              color,
              position: 'absolute',
              top: 2,
              left: 2,
              transform: 'rotate(-135deg)',
              opacity: 0.7,
              zIndex: 1
            }} 
          />
        </div>
      ),
      icon: (color: string) => (
        <div className="relative inline-block bg-gray-50 p-3 rounded-lg">
          <SatelliteTwoToneIcon 
            sx={{ 
              fontSize: 40,
              color,
              transform: 'rotate(-45deg) scaleX(-1)',
              position: 'relative',
              zIndex: 2,
              filter: `drop-shadow(0px 0px 1px ${color})`
            }} 
          />
          <div 
            className="absolute inset-0 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${color}10 0%, transparent 100%)`,
              opacity: 0.3
            }}
          />
        </div>
      ),
      title: ["Digital", "Transformation"],
      description: "Experience a fully digital healthcare journey with streamlined processes and enhanced efficiency"
    },
    {
      icon: (color: string) => (
        <div className="relative inline-block bg-gray-50 p-3 rounded-lg">
          <PhoneIphoneIcon sx={{ fontSize: 32, color }} />
        </div>
      ),
      title: ["User-Friendly", "Mobile App"],
      description: "Access your healthcare services easily through our intuitive and comprehensive mobile application"
    },
    {
      icon: (color: string) => (
        <div className="relative inline-block bg-gray-50 p-3 rounded-lg">
          <AccountBalanceWalletIcon sx={{ fontSize: 32, color }} />
        </div>
      ),
      title: ["Financial", "Freedom"],
      description: "Enjoy hassle-free access to premium healthcare services without worrying about financial constraints"
    },
    {
      icon: (color: string) => (
        <div className="relative inline-block bg-gray-50 p-3 rounded-lg">
          <CreditCardIcon sx={{ fontSize: 32, color }} />
        </div>
      ),
      title: ["Convenient", "Online", "Payment Options"],
      description: "Easily handle your payments securely across our wide network of providers"
    },
    {
      icon: (color: string) => (
        <div className="relative inline-block bg-gray-50 p-3 rounded-lg">
          <BusinessIcon sx={{ fontSize: 32, color }} />
        </div>
      ),
      title: ["Enterprise", "Access"],
      description: "Comprehensive healthcare solutions designed specifically for enterprises and their employees"
    },
    {
      icon: (color: string) => (
        <div className="relative inline-block bg-gray-50 p-3 rounded-lg">
          <ShowChartIcon sx={{ fontSize: 32, color }} />
        </div>
      ),
      title: ["Instant", "Results"],
      description: "Access all of your digital health records instantly and securely, making your healthcare journey more efficient"
    }
  ];

  const getColor = (index: number) => {
    const colors = ['#0066FF', '#00FF85', '#FFB800', '#00E5FF', '#0066FF', '#00FF85', '#0066FF'];
    return colors[index] || colors[0];
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#006778] via-[#005071] to-[#003439] text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">Why Choose MedYour?</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            MedYour is dedicated to addressing significant challenges in the healthcare landscape
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-20 px-4">
        <div className="grid gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-[30px] p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-8">
                <div className="flex flex-col items-start relative">
                  <div 
                    className="absolute left-0 top-0 w-1.5 h-full rounded-full"
                    style={{ backgroundColor: getColor(index) }}
                  />
                  <div className="ml-8">
                    {typeof benefit.icon === 'function' 
                      ? benefit.icon(getColor(index))
                      : <FontAwesomeIcon
                          icon={benefit.icon}
                          style={{ color: getColor(index) }}
                          className="text-3xl mb-4"
                        />
                    }
                    <h3 className="text-[#005071] font-semibold text-2xl leading-tight">
                      {benefit.title.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mt-2">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WhyMedYourPage;