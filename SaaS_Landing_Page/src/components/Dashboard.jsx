import React from 'react';
// Using the specific assets provided
import createInvoiceImg from '../assets/create_invoice.png';
import dailyActivitiesImg from '../assets/daily_activities.png';
import dropletPattern from '../assets/1.svg';

const Dashboard = () => {
  return (
    <section className="w-full px-6 py-12 lg:px-12 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - TEXT CONTENT */}
          <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <p className="text-xs font-bold text-[#3734A9] uppercase tracking-[0.2em] mb-4">
              OUR FEATURE
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Manage all expenses & <br className="hidden md:block" /> incomes from your dashboard
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
              Why kept very own home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
            </p>
            
            <div>
              <button className="bg-[#3734A9] hover:bg-[#2a2580] text-white font-bold py-4 px-10 rounded-md transition-all duration-300 shadow-lg shadow-indigo-100">
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - VISUAL COMPOSITION */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 h-[450px] md:h-[550px]">
            <div className="relative w-full max-w-[500px] h-full">
              
              {/* 1. Background Light Tint Block */}
              <div className="absolute top-[15%] left-[10%] w-[85%] h-[75%] bg-[#F8F9FD] -z-10 rounded-2xl" />

              {/* 2. Droplet Decoration (Hand-drawn dots) */}
              <img 
                src={dropletPattern} 
                alt="" 
                className="absolute bottom-[25%] left-[10%] w-16 h-16 z-10"
              />

              {/* 3. Daily Activities Card (The Background Element) */}
              <div className="absolute top-0 left-0 w-[60%] md:w-[65%] z-0">
                <div className="bg-white rounded-xl shadow-xl border border-gray-50 p-2">
                   <img 
                    src={dailyActivitiesImg} 
                    alt="Daily Activities" 
                    className="w-full h-auto object-contain" 
                  />
                </div>
              </div>

              {/* 4. Create Invoice Card (The Foreground Element) */}
              <div className="absolute top-[12%] right-0 w-[65%] md:w-[70%] z-20">
                <div className="bg-white rounded-xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.16)] border border-gray-50 overflow-hidden">
                  <img 
                    src={createInvoiceImg} 
                    alt="Create Invoice" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;