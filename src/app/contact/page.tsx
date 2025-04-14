"use client";

import { useState } from 'react';
import type { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '@/components/shared/PageHeader';
import { LineSeparator } from '@/components/shared/Separators'; // Update the import path

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
      <PageHeader 
        title="Get in Touch"
        description="We're here to help! For inquiries, please fill out our contact <br /> form or reach us directly"
      />

      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-16">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="text-[#1C6D71] text-[15px] font-medium mb-2 sm:mb-0 sm:w-1/6">
              Phone:
            </label>
            <input
              type="tel"
              placeholder="Add Your Mobile"
              className="w-full sm:w-5/6 px-4 py-3 rounded-md placeholder-[#A4A4A4] focus:outline-none text-black shadow-sm bg-white border border-[#E8E8E8]"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="text-[#1C6D71] text-[15px] font-medium mb-2 sm:mb-0 sm:w-1/6">
              Email:
            </label>
            <input
              type="email"
              placeholder="Add Your Email"
              className="w-full sm:w-5/6 px-4 py-3 rounded-md placeholder-[#A4A4A4] focus:outline-none text-black shadow-sm bg-white border border-[#E8E8E8]"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="text-[#1C6D71] text-[15px] font-medium mb-2 sm:mb-0 sm:w-1/6">
              Location:
            </label>
            <input
              type="text"
              placeholder="Add Your Address"
              className="w-full sm:w-5/6 px-4 py-3 rounded-md placeholder-[#A4A4A4] focus:outline-none text-black shadow-sm bg-white border border-[#E8E8E8]"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start">
            <label className="text-[#1C6D71] text-[15px] font-medium mb-2 sm:mb-0 sm:w-1/6">
              Message:
            </label>
            <textarea
              placeholder="Type your message"
              className="w-full sm:w-5/6 px-4 py-3 rounded-md placeholder-[#A4A4A4] focus:outline-none text-black shadow-sm bg-white border border-[#E8E8E8] h-36 resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-[#123D46] text-white px-10 py-1.5 rounded-md text-[15px] font-[400] leading-6 tracking-[0%] font-roboto hover:bg-[#004c52] transition-colors"
            >
              Send
            </button>
          </div>
        </form>

        <div className="relative mt-8">
          <LineSeparator /> {/* Use LineSeparator or DottedSeparator as needed */}
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