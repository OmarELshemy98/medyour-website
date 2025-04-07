"use client";

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#006778] to-[#003439] pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Welcome to MedYour
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Your trusted partner in digital healthcare solutions. Experience healthcare transformation through innovation.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/about-us" 
                  className="bg-white text-[#005071] px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-white text-white px-6 py-3 rounded font-medium hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/images/hero-app.png"
                alt="MedYour App"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services" className="group">
              <div className="p-8 bg-[#E5F6FF] rounded-lg transition-transform group-hover:transform group-hover:-translate-y-1">
                <h3 className="text-[#005071] text-xl font-semibold mb-4">Our Services</h3>
                <p className="text-gray-600">Discover our comprehensive healthcare solutions and digital services.</p>
              </div>
            </Link>
            <Link href="/about-us" className="group">
              <div className="p-8 bg-white shadow-lg rounded-lg transition-transform group-hover:transform group-hover:-translate-y-1">
                <h3 className="text-[#005071] text-xl font-semibold mb-4">About Us</h3>
                <p className="text-gray-600">Learn more about our mission, values, and commitment to healthcare.</p>
              </div>
            </Link>
            <Link href="/contact" className="group">
              <div className="p-8 bg-[#FFF5E5] rounded-lg transition-transform group-hover:transform group-hover:-translate-y-1">
                <h3 className="text-[#005071] text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-600">Connect with us for inquiries, support, or partnership opportunities.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;