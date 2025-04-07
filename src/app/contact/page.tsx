"use client";

import { useState } from 'react';
import type { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Update imports
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

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

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div 
        className="text-center relative w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/images/backgroundImg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginTop: '-6.5rem',
          paddingTop: '6.5rem',
          height: '60vh',
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[90rem] mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <h1 className="text-[1.75rem] sm:text-[2.4375rem] font-[900] text-white mb-6 sm:mb-10 font-roboto leading-[2.5rem] sm:leading-[4.375rem] tracking-[0%]">Get in Touch</h1>
          <p className="text-[#FFFFFF] text-[1.25rem] sm:text-[2.125rem] font-[300] leading-[1.75rem] sm:leading-[2.875rem] tracking-[0%] w-full max-w-[70rem] mx-auto text-center font-roboto">
            We're here to help! For inquiries, please fill out our contact form or reach us directly
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-16">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-[#1C6D71] text-[15px] font-medium mb-2">Phone:</label>
            <input
              type="tel"
              placeholder="Add Your Mobile"
              className="w-full px-4 py-3 rounded-md placeholder-[#A4A4A4] focus:outline-none text-black shadow-sm bg-white border border-[#E8E8E8]"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#1C6D71] text-[15px] font-medium mb-2">Email:</label>
            <input
              type="email"
              placeholder="Add Your Email"
              className="w-full px-4 py-3 rounded-md placeholder-[#A4A4A4] focus:outline-none text-black shadow-sm bg-white border border-[#E8E8E8]"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#1C6D71] text-[15px] font-medium mb-2">Location:</label>
            <input
              type="text"
              placeholder="Add Your Address"
              className="w-full px-4 py-3 rounded-md placeholder-[#A4A4A4] focus:outline-none text-black shadow-sm bg-white border border-[#E8E8E8]"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>

          <div className="flex flex-col">
            <textarea
              placeholder="Type your message"
              className="w-full px-4 py-3 rounded-md placeholder-[#A4A4A4] focus:outline-none text-black shadow-sm bg-white border border-[#E8E8E8] h-36 resize-none mt-5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-[#123D46] text-white px-10 py-2.5 rounded-md text-[15px] font-[400] leading-6 tracking-[0%] font-roboto hover:bg-[#004c52] transition-colors"
            >
              Send
            </button>
          </div>
        </form>

        <div className="relative mt-8">
          <div className="flex items-center w-full mb-8">
            <div className="flex-1" style={{ 
              borderTop: '1px dashed #3A6070',
              opacity: 0.2,
              backgroundSize: '20px 1px',
              backgroundPosition: 'top',
              height: '1px'
            }}></div>
            <div className="flex items-center">
              <div className="w-[1px] h-[8px] bg-[#3A6070]"></div>
              <div className="w-[493px] border-t border-[#3A6070]"></div>
              <div className="w-[1px] h-[8px] bg-[#3A6070]"></div>
            </div>
            <div className="flex-1" style={{ 
              borderTop: '1px dashed #3A6070',
              opacity: 0.2,
              backgroundSize: '20px 1px',
              backgroundPosition: 'top',
              height: '1px'
            }}></div>
          </div>
          <h2 className="text-[#003439] text-xl font-semibold mb-2 mt-8">Follow Us:</h2>
          <p className="text-gray-700 mb-8">
            Stay connected with us: for the latest updates and community initiatives.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="bg-[#003439] rounded-md hover:bg-[#004c52] transition-colors w-14 h-14 flex items-end justify-end pr-2">
              <FontAwesomeIcon 
                icon={faFacebookF} 
                className="text-5xl text-white"
              />
            </a>
            <a href="#" className="bg-[#003439] rounded-md hover:bg-[#004c52] transition-colors w-14 h-14 flex items-end pb-1 justify-center">
              <FontAwesomeIcon 
                icon={faLinkedinIn} 
                className="text-5xl text-white"
              />
            </a>
            <a href="#" className="bg-[#003439] rounded-md hover:bg-[#004c52] transition-colors w-14 h-14 flex items-center justify-center">
              <FontAwesomeIcon 
                icon={faTwitter} 
                className="text-4xl text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;