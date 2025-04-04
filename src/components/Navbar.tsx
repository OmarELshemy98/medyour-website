"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-800 via-teal-600 to-emerald-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 hover:opacity-90 transition-opacity">
              <div className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="MedYour Logo"
                  width={150}
                  height={50}
                  className="object-contain"
                  priority
                />
               
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/about" className="text-white hover:text-gray-200 px-3 py-2">
              About Us
            </Link>
            <Link href="/services" className="text-white hover:text-gray-200 px-3 py-2">
              Services
            </Link>
            <Link href="/challenges" className="text-white hover:text-gray-200 px-3 py-2">
              Healthcare Challenges
            </Link>
            <Link href="/why-medyour" className="text-white hover:text-gray-200 px-3 py-2">
              Why MedYour?
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-[#005071] px-4 py-2 rounded-md ml-4 hover:bg-gray-100"
            >
              Contact Us
            </Link>
            <Link 
              href="/get-started" 
              className="bg-[#001218] text-white px-4 py-2 rounded-md hover:bg-teal-800"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-teal-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-teal-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/about" className="block text-white hover:bg-teal-600 px-3 py-2 rounded-md">
              About Us
            </Link>
            <Link href="/services" className="block text-white hover:bg-teal-600 px-3 py-2 rounded-md">
              Services
            </Link>
            <Link href="/challenges" className="block text-white hover:bg-teal-600 px-3 py-2 rounded-md">
              Healthcare Challenges
            </Link>
            <Link href="/why-medyour" className="block text-white hover:bg-teal-600 px-3 py-2 rounded-md">
              Why MedYour?
            </Link>
            <Link href="/contact" className="block text-white hover:bg-teal-600 px-3 py-2 rounded-md">
              Contact Us
            </Link>
            <Link href="/get-started" className="block text-white hover:bg-teal-600 px-3 py-2 rounded-md">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;