"use client";

import { useState } from 'react';
import type { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Update imports
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import { useNavbar } from '@/context/NavbarContext';

const ContactPage: FC = () => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you can add your form submission logic
  };

  const { setNavbarBackground } = useNavbar();
  
  useEffect(() => {
    setNavbarBackground('url("/contact-background.png")');
    return () => setNavbarBackground('');
  }, [setNavbarBackground]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div 
        className="text-center relative w-full"
        style={{
          backgroundImage: 'url("/contact-background.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          marginTop: '-64px',
          paddingTop: '96px',
          paddingBottom: '64px'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">Get in Touch</h1>
          <p className="text-white text-sm sm:text-base md:text-xl max-w-2xl mx-auto px-2 sm:px-4 font-light">
            We're here to help! For inquiries, please fill out our contact form or reach us directly
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 md:py-16">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0">
            <label className="text-[#006778] text-base font-medium sm:w-24 sm:pt-3">Phone:</label>
            <input
              type="tel"
              placeholder="Add Your Mobile"
              className="w-full sm:flex-1 px-4 py-3 bg-white rounded placeholder-gray-400 focus:outline-none text-black shadow-sm"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0">
            <label className="text-[#006778] text-base font-medium sm:w-24 sm:pt-3">Email:</label>
            <input
              type="email"
              placeholder="Add Your Email"
              className="w-full sm:flex-1 px-4 py-3 bg-white rounded placeholder-gray-400 focus:outline-none text-black shadow-sm"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0">
            <label className="text-[#006778] text-base font-medium sm:w-24 sm:pt-3">Location:</label>
            <input
              type="text"
              placeholder="Add Your Address"
              className="w-full sm:flex-1 px-4 py-3 bg-white rounded placeholder-gray-400 focus:outline-none text-black shadow-sm"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <label className="text-[#006778] text-base font-medium sm:w-24">Message:</label>
            <textarea
              placeholder="Type your message"
              className="w-full sm:flex-1 px-4 py-3 bg-white rounded placeholder-gray-400 focus:outline-none text-black shadow-sm h-36 resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#003439] text-white px-8 py-3 sm:py-2 rounded text-sm font-medium hover:bg-[#004c52] transition-colors"
            >
              Send
            </button>
          </div>
        </form>

        <div className="relative mt-12 sm:mt-16">
          <div className="flex items-center w-full">
            <div className="w-[30%] border-t border-dotted border-gray-300"></div>
            <div className="w-[40%] flex items-center">
              <div className="w-[2px] h-[10px] bg-gray-300"></div>
              <div className="flex-1 border-t border-solid border-gray-300"></div>
              <div className="w-[2px] h-[10px] bg-gray-300"></div>
            </div>
            <div className="w-[30%] border-t border-dotted border-gray-300"></div>
          </div>
          <h2 className="text-[#003439] text-lg sm:text-xl font-semibold mb-2 mt-8 text-center">Follow Us:</h2>
          <p className="text-gray-700 mb-8 text-center text-sm sm:text-base">
            Stay connected with us: for the latest updates and community initiatives.
          </p>
          <div className="flex justify-center gap-4 sm:gap-6">
            <a href="#" className="bg-[#003439] rounded-md hover:bg-[#004c52] transition-colors w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
              <FontAwesomeIcon 
                icon={faFacebookF} 
                className="text-3xl sm:text-5xl text-white"
              />
            </a>
            <a href="#" className="bg-[#003439] rounded-md hover:bg-[#004c52] transition-colors w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
              <FontAwesomeIcon 
                icon={faLinkedinIn} 
                className="text-3xl sm:text-5xl text-white"
              />
            </a>
            <a href="#" className="bg-[#003439] rounded-md hover:bg-[#004c52] transition-colors w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
              <FontAwesomeIcon 
                icon={faTwitter} 
                className="text-3xl sm:text-4xl text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;