import React from 'react';
import featureImg1 from '../assets/Screenshot 2026-01-15 104056.png';
import featureImg2 from '../assets/Screenshot 2026-01-15 103847.png';
import featureImg3 from '../assets/Screenshot 2026-01-15 104702.png';

const Features = () => {
  const features = [
    {
      title: 'Quick Summaries',
      description: 'Warmly little before cousin sussex entire men set. Blessing if ladyship on sensible judgment settling outweigh.',
      image: featureImg1
    },
    {
      title: 'Manage your wallets',
      description: 'Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. Latter person am secure.',
      image: featureImg2
    },
    {
      title: 'Request Payments',
      description: 'And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.',
      image: featureImg3
    }
  ];

  return (
    <section className="w-full px-4 py-12 md:px-6 lg:px-12 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-bold text-[#3734A9] uppercase tracking-[0.2em] mb-3">
            WHY AR SHAKIR
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight px-4">
            Specially Designed For Crypto Payments
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-2 md:px-0">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col text-center md:text-left"
            >
              {/* Image Container with Mockup Background */}
              <div className="mb-6 md:mb-8 bg-[#F8F9FD] rounded-lg p-3 md:p-4 aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;