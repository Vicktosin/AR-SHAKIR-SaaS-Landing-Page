import React from 'react';
import mainDashboard from '../assets/Frame 1 353@2x.png';
import revenueCard from '../assets/Group 150@2x.png';
import balanceCard from '../assets/Group 149@2x.png';
import logo1 from '../assets/Group.svg';
import logo2 from '../assets/Group (1).svg';
import logo3 from '../assets/Group (2).svg';
import logo4 from '../assets/Group (3).svg';
import logo5 from '../assets/Group (5).svg';
import logo6 from '../assets/Group (6).svg';
import logo7 from '../assets/Group (7).svg';

const Hero = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <section className="w-full px-4 py-12 md:px-6 lg:px-12 lg:py-20 bg-white overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .animate-marquee {
            display: flex;
            width: max-content;
            animation: scroll 25s linear infinite;
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Section */}
          <div className="space-y-6 md:space-y-8 z-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-center md:text-left">
              Managing business payments has never been easier
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl text-center md:text-left">
              End-to-end payments and financial management in a single solution. 
              Meet the right platform to help realize.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-stretch sm:items-center justify-center md:justify-start">
              <button className="w-full sm:w-auto bg-[#3734A9] hover:bg-indigo-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-md font-semibold text-base md:text-lg transition-all shadow-lg">
                Get Started
              </button>
              <button className="text-[#3734A9] hover:underline font-semibold text-base md:text-lg flex items-center justify-center sm:justify-start">
                See How It Works
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6 pt-2 md:pt-4 justify-center md:justify-start">
              <div className="flex items-center space-x-2">
                <div className="bg-[#3734A9] rounded-full p-1 text-white flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm md:text-base">Free Register</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-[#3734A9] rounded-full p-1 text-white flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm md:text-base">Great Service</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative mt-12 lg:mt-0 -mr-4 md:-mr-6 lg:-mr-12">
            <div className="relative z-0 transform translate-x-0">
              <img src={mainDashboard} alt="Dashboard" className="w-full scale-125 h-auto drop-shadow-2xl" />
            </div>
            <div className="absolute top-[24%] -left-2 md:-left-4 lg:-left-30 w-[45%] md:w-[40%] min-w-[140px] md:min-w-[160px] animate-float z-20">
              <img src={revenueCard} alt="Revenue" className="w-full h-auto" />
            </div>
            <div className="absolute bottom-[5%] -left-2 md:-left-4 lg:-left-30 w-[45%] md:w-[42%] min-w-[140px] md:min-w-[170px] animate-float" style={{ animationDelay: '1s' }} z-30>
              <img src={balanceCard} alt="Balance" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* --- REFINED AUTO-SCROLLING LOGOS --- */}
        <div className="mt-16 md:mt-20 lg:mt-32 pt-8 md:pt-12">
          <h2 className="text-center text-gray-700 font-medium text-base md:text-lg mb-8 md:mb-12">
            Companies we have helped grow
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="animate-marquee">
              {/* First Set */}
              <div className="flex items-center gap-8 md:gap-16 lg:gap-24 px-6 md:px-12">
                {logos.map((logo, index) => (
                  <img 
                    key={`logo-1-${index}`} 
                    src={logo} 
                    alt="Brand Logo" 
                    className="h-auto w-auto max-h-8 md:max-h-12 object-contain flex-shrink-0" 
                  />
                ))}
              </div>
              {/* Duplicate Set for Loop */}
              <div className="flex items-center gap-8 md:gap-16 lg:gap-24 px-6 md:px-12">
                {logos.map((logo, index) => (
                  <img 
                    key={`logo-2-${index}`} 
                    src={logo} 
                    alt="Brand Logo" 
                    className="h-auto w-auto max-h-8 md:max-h-12 object-contain flex-shrink-0" 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;