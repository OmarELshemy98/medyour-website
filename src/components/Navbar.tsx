"use client";

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav 
      className="relative z-10"
      style={{
        backgroundImage: `url('/images/navbarBackground.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/images/logo.png"
                alt="MedYour Logo"
                width={150}
                height={50}
                className="w-[90px] sm:w-[110px] md:w-[140px] h-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center justify-center pl-16 pr-8 flex-1">
            <div className="flex space-x-12">
              <Link href="/about" className="text-white text-sm hover:text-gray-200">
                About Us
              </Link>
              <Link href="/services" className="text-white text-sm hover:text-gray-200">
                Services
              </Link>
              <Link href="/challenges" className="text-white text-sm hover:text-gray-200">
                Healthcare Challenges
              </Link>
              <Link href="/why-medyour" className="text-white text-sm hover:text-gray-200">
                Why MedYour?
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3 absolute right-8">
            <Link 
              href="/contact" 
              className="bg-white text-[#005071] px-5 py-1.5 rounded-sm text-sm"
            >
              Contact Us
            </Link>
            <Link 
              href="/get-started" 
              className="bg-[#001218] text-white px-5 py-1.5 rounded-sm text-sm border border-[#002a35]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;