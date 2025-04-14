"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#003439] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
          {/* Navigation Links */}
          <div className="hidden md:flex flex-wrap justify-center space-x-6">
            <Link href="/" className="hover:text-gray-300">
              About Us
            </Link>
            <Link href="/services" className="hover:text-gray-300">
              Services
            </Link>
            <Link href="/faqs" className="hover:text-gray-300">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </div>

          {/* Copyright Text */}
          <div className="flex items-center justify-center mt-4 md:mt-0">
            <span className="text-sm text-center">
              (c) Copyrights 2025, all rights reserved.{' '}
              <Link href="/terms" className="hover:text-gray-300 underline underline-offset-2">
                Terms & Conditions
              </Link>
              {' | '}
              <Link href="/privacy" className="hover:text-gray-300 underline underline-offset-2">
                Privacy Policy
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;