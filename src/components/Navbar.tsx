"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Call handleScroll on mount to check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/challenges', label: 'Healthcare Challenges' },
    { href: '/why-medyour', label: 'Why MedYour?' }
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <nav 
      className={`fixed top-0 z-50 h-[85px] w-full transition-all duration-300 ${
        isScrolled ? 'bg-[#001218]/95' : 'bg-transparent'
      }`}
      style={{
        backgroundImage: isScrolled ? `url('/images/backgroundImg.png')` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-[1440px] mx-auto h-full px-6">
        <div className="flex items-center h-full relative">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" fill="currentColor"/>
                <rect x="4" y="11" width="16" height="2" fill="currentColor"/>
                <rect x="4" y="17" width="16" height="2" fill="currentColor"/>
              </svg>
            </button>
          </div>

          {/* Logo - Centered on mobile */}
          <div className="flex-1 flex justify-center md:justify-start md:flex-none">
            <Link href="/" className="block">
              <Image
                src="/images/logo.png"
                alt="MedYour Logo"
                width={150}
                height={50}
                className="w-[115px] sm:w-[130px] md:w-[150px] h-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Empty div for spacing on mobile */}
          <div className="w-[40px] md:hidden"></div>

          {/* Rest of the navbar content */}
          <div className="hidden md:flex justify-center flex-1 ml-8">
            <div className="flex space-x-12 ml-5 mr-5 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-white text-[13px] font-medium hover:text-gray-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-screen md:hidden z-50 overflow-y-auto bg-[#001218]">
              <div className="flex flex-col items-center px-6 py-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white text-lg hover:text-gray-200 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/contact" 
              className="bg-white text-[#005071] px-5 py-1.5 rounded-[2px] text-[13px] font-normal hover:bg-gray-50"
            >
              Contact Us
            </Link>
            <Link 
              href="/get-started" 
              className="bg-[#001218] text-white px-5 py-1.5 rounded-[2px] text-[13px] font-normal border border-[#002a35] hover:bg-[#001f2d]"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div 
            className="fixed top-0 left-0 w-full h-screen md:hidden z-50 overflow-y-auto"
            style={{
              backgroundImage: `url('/images/backgroundImg.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            {/* Update in mobile menu as well */}
            <div className="flex flex-col items-center px-6 py-8 space-y-6">
              <Link href="/AboutUs" className="text-white text-lg hover:text-gray-200 text-center">
                About Us
              </Link>
              <Link href="/services" className="text-white text-lg hover:text-gray-200 text-center">
                Services
              </Link>
              <Link href="/challenges" className="text-white text-lg hover:text-gray-200 text-center">
                Healthcare Challenges
              </Link>
              <Link href="/why-medyour" className="text-white text-lg hover:text-gray-200 text-center">
                Why MedYour?
              </Link>
              <div className="flex flex-col space-y-4 pt-8 w-full max-w-xs">
                <Link 
                  href="/contact" 
                  className="bg-white text-[#005071] px-4 py-3 rounded-[1px] text-base text-center"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/get-started" 
                  className="bg-transparent text-white px-4 py-3 rounded-[1px] text-base text-center border border-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
