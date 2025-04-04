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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section remains the same */}
      
      <div className="max-w-2xl mx-auto px-4 py-16">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-start ">
            <label className="text-[#006778] text-base font-medium w-24 pt-3">Phone:</label>
            <input
              type="tel"
              placeholder="Add Your Mobile"
              className="flex-1 px-4 py-3 bg-white rounded placeholder-gray-400 focus:outline-none text-black shadow-sm"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="flex items-start">
            <label className="text-[#006778] text-base font-medium w-24 pt-3">Email:</label>
            <input
              type="email"
              placeholder="Add Your Email"
              className="flex-1 px-4 py-3 bg-white rounded placeholder-gray-400 focus:outline-none text-black shadow-sm"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="flex items-start">
            <label className="text-[#006778] text-base font-medium w-24 pt-3">Location:</label>
            <input
              type="text"
              placeholder="Add Your Address"
              className="flex-1 px-4 py-3 bg-white rounded placeholder-gray-400 focus:outline-none text-black shadow-sm"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>

          <div className="flex">
            <div className="w-24"></div>
            <textarea
              placeholder="Type your message"
              className="flex-1 px-4 py-3 bg-white rounded placeholder-gray-400 focus:outline-none text-black shadow-sm h-36 resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#003439] text-white px-8 py-2 rounded text-sm font-medium hover:bg-[#004c52] transition-colors"
            >
              Send
            </button>
          </div>
        </form>

        <div className="relative mt-16">
          <div className="flex items-center w-full">
            <div className="w-[30%] border-t border-dotted border-gray-300"></div>
            <div className="w-[40%] flex items-center">
              <div className="w-[2px] h-[10px] bg-gray-300"></div>
              <div className="flex-1 border-t border-solid border-gray-300"></div>
              <div className="w-[2px] h-[10px] bg-gray-300"></div>
            </div>
            <div className="w-[30%] border-t border-dotted border-gray-300"></div>
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