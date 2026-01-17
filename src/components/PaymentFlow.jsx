import React from 'react';
import girlImage from '../assets/girl.png'; 
import dropletPattern from '../assets/100.svg';
import profileImg1 from '../assets/Ellipse 2@2x.png';
import profileImg2 from '../assets/Ellipse 3@2x.png';

const PaymentFlow = () => {
  return (
    <section className="w-full px-6 py-12 lg:px-12 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SECTION - COMPOSITION */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[400px]">
              
              {/* 1. Background Tint Block */}
              <div className="absolute top-[10%] left-[-5%] w-[100%] h-[85%] bg-[#F3F7FF] rounded-none -z-10" />

              {/* 2. Droplet Decoration */}
              <img 
                src={dropletPattern} 
                alt="" 
                className="absolute top-[1%] right-[2%] w-14 h-14 z-10" 
              />

              {/* 3. BACKGROUND CARDS (Behind the girl) */}
              <div className="absolute top-[38%] right-[-45%] w-[220px] md:w-[260px] space-y-24 z-0 hidden lg:block">
                {/* Top Card (John Doe) */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-sm border border-gray-100">
                  <p className="font-bold text-gray-900 text-sm">John Do</p>
                  <p className="text-gray-400 text-[10px] font-medium">Mon, Feb 28</p>
                </div>

                {/* Bottom Card (Angela Taylor) */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center">
                   <div>
                    <p className="font-bold text-gray-900 text-sm">Angela Taylor</p>
                    <p className="text-gray-400 text-[10px] font-medium">Tue, Feb</p>
                  </div>
                  <img src={profileImg2} alt="" className="w-8 h-8 rounded-md object-cover" />
                </div>
              </div>

              {/* 4. MAIN SUBJECT (The Girl - Size Resticted) */}
              <div className="relative z-10 px-6">
                <img 
                  src={girlImage} 
                  alt="Customer" 
                  className="w-[85%] mx-auto h-auto object-contain"
                />
              </div>

              {/* 5. FOREGROUND CARD (In front of the girl) */}
              <div className="absolute top-[50%] right-[-45%] w-[240px] md:w-[280px] z-30 hidden lg:block">
                <div className="bg-white rounded-xl p-4 shadow-2xl border border-gray-50 flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#3734A9] flex items-center justify-center text-white">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                         </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Mike Taylor</p>
                        <p className="text-gray-400 text-[10px] font-medium">Tue, Feb</p>
                      </div>
                   </div>
                   <img src={profileImg1} alt="" className="w-10 h-10 rounded-md object-cover" />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SECTION - CONTENT */}
          <div className="lg:pl-10 text-center lg:text-left">
            <p className="text-xs font-bold text-[#3734A9] uppercase tracking-[0.2em] mb-4">
              OUR FEATURE
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-6">
              Receive payments <br className="hidden md:block" /> quickly from anywhere
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-[480px]">
              Why kept very own home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active to.
            </p>
            <button className="bg-[#3734A9] hover:bg-indigo-800 text-white font-bold py-4 px-10 rounded-md transition-all duration-300">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentFlow;