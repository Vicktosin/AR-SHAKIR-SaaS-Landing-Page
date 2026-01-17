import React from 'react';
import dropletPattern from '../assets/46.svg';

const CTA = () => {
  return (
    <section className="w-full px-6 py-20 lg:px-12 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* The Clipped Background Container */}
        <div 
          className="relative bg-[#F8F9FD] py-20 px-6 md:px-12 text-center overflow-hidden"
          style={{
            // Creating the double-notched corner effect seen in the reference
            clipPath: 'polygon(8% 0, 100% 0, 100% 85%, 92% 100%, 0 100%, 0 15%)'
          }}
        >
          
          {/* Droplet Pattern - Positioned inside the clipped area */}
          <img 
            src={dropletPattern} 
            alt="" 
            className="absolute top-10 left-10 w-16 h-16 opacity-100 rotate-[-15deg]"
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.2] mb-6">
              Get Started With AR Shakir
            </h2>
            
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not.
            </p>

            {/* CTA Button */}
            <button className="bg-[#3734A9] hover:bg-indigo-900 text-white font-bold py-4 px-10 rounded-md transition-all duration-300 shadow-lg shadow-indigo-100">
              Get Started
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;