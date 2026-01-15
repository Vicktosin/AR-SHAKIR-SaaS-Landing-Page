import React, { useState } from 'react';
import dropletPattern from '../assets/34.svg';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <section className="w-full px-6 py-12 lg:px-12 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Blue-ish Background Card */}
        <div className="relative bg-[#F8F9FD] rounded-[40px] px-8 py-16 md:px-16 md:py-20 overflow-hidden">
          
          {/* Droplet Decoration (Positioned exactly as reference) */}
          <img 
            src={dropletPattern} 
            alt="" 
            className="absolute top-10 right-10 w-16 h-16 opacity-100 z-0 rotate-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            
            {/* Left Side Content */}
            <div className="flex flex-col text-center lg:text-left">
              <p className="text-sm font-bold text-[#3734A9] uppercase tracking-[0.2em] mb-6">
                OUR NEWSLETTER
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                Stay updated with our<br className="hidden md:block" /> weekly newsletter
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                Why kept very own home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
              </p>
            </div>

            {/* Right Side Form */}
            <div className="w-full max-w-md lg:ml-auto">
              <h3 className="text-2xl font-bold text-[#3734A9] mb-8">
                Signup For Newsletter
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-white text-gray-900 placeholder-gray-400 rounded-md focus:outline-none shadow-sm border border-gray-50"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-6 py-4 bg-white text-gray-900 placeholder-gray-400 rounded-md focus:outline-none shadow-sm border border-gray-50"
                  required
                />
                
                {/* Specific Orange-Red Button */}
                <button
                  type="submit"
                  className="w-full bg-[#FF7F5C] hover:bg-[#ff6b42] text-white font-bold py-4 px-6 rounded-md transition-all duration-300 uppercase tracking-widest text-sm"
                >
                  Get Started
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;