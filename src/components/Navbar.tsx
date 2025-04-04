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
                <svg width="40" height="40" viewBox="0 0 40 40" className="transform scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 30C12 30 6 25 6 20C6 15 9 12 12 12C15 12 18 15 18 20C18 15 21 12 24 12C27 12 30 15 30 20C30 25 24 30 24 30C21 33 15 33 12 30Z" fill="#00A651"/>
                  <path d="M18 28C18 28 12 23 12 18C12 13 15 10 18 10C21 10 24 13 24 18C24 13 27 10 30 10C33 10 36 13 36 18C36 23 30 28 30 28C27 31 21 31 18 28Z" fill="#FBB03B" fillOpacity="0.9"/>
                  <path d="M6 28C6 28 0 23 0 18C0 13 3 10 6 10C9 10 12 13 12 18C12 13 15 10 18 10C21 10 24 13 24 18C24 23 18 28 18 28C15 31 9 31 6 28Z" fill="#29ABE2" fillOpacity="0.9"/>
                </svg>
                <div className="flex flex-col ml-3">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    edyour
                  </span>
                  <span className="text-xs text-white/90 -mt-1 tracking-wider">Healthcare Solutions</span>
                </div>
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