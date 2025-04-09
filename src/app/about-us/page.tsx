"use client";

import { FC } from 'react';

const AboutUsPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-teal-700 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Your Health, Our Priority</h1>
        <p className="mt-2">Empowering Wellness through Innovative Care.</p>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            App Store
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
            Google Play
          </button>
        </div>
      </header>

      <section className="p-6">
        <h2 className="text-2xl font-semibold">Featured Services</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">Comprehensive Healthcare</h3>
            <p>Providing personalized care...</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">Digital Health Management</h3>
            <p>Integrating technology...</p>
          </div>
          {/* Add more services as needed */}
        </div>
      </section>

      <section className="p-6 bg-white">
        <h2 className="text-2xl font-semibold">Company Overview</h2>
        <p>MedYour is a subsidiary of the XYZ Group, based in ABC City. For over 15 years, we have been at the forefront of providing quality healthcare services through innovative solutions and personalized care.</p>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold">Mission Statement</h2>
        <p>Our mission is to ensure quality healthcare is accessible to everyone, regardless of financial status. Our care is driven by compassion and excellence.</p>
      </section>

      <section className="p-6 bg-white">
        <h2 className="text-2xl font-semibold">Vision and Values</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">Coverage Network</h3>
            <p>Expanding access to healthcare services across the region.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">Innovation</h3>
            <p>Leading the way in healthcare technology and solutions.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">Accessibility</h3>
            <p>Ensuring healthcare is within reach for all individuals.</p>
          </div>
          {/* Add more values as needed */}
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold">Client Testimonials</h2>
        <blockquote className="bg-teal-100 p-4 rounded shadow mt-4">
          <p>"Their insurance coverage helped me manage my family's health care without the stress of financial burden."</p>
          <cite className="block mt-2 text-right">Fatima B.</cite>
        </blockquote>
        <blockquote className="bg-teal-100 p-4 rounded shadow mt-4">
          <p>"As a corporate partner, I value MedYour's commitment to comprehensive care for my employees. Their personalized approach has transformed the industry."</p>
          <cite className="block mt-2 text-right">Omar T., Corporate Executive</cite>
        </blockquote>
        <blockquote className="bg-teal-100 p-4 rounded shadow mt-4">
          <p>"MedYour's approach to healthcare is refreshing. The resources and access they provide have made a world of difference for my family."</p>
          <cite className="block mt-2 text-right">Layla A.</cite>
        </blockquote>
        {/* Add more testimonials as needed */}
      </section>

      <footer className="bg-teal-700 text-white text-center p-4">
        <p>&copy; 2023 MedYour. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;