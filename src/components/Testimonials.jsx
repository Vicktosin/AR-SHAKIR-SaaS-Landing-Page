import React from 'react';
import blueCircle from '../assets/Ellipse 41.svg';
import starRating from '../assets/Shape.svg';
import profileImg1 from '../assets/Image@2x.png';
import profileImg2 from '../assets/image1@2x.png';
import profileImg3 from '../assets/Image3@2x.png';
import profileImg4 from '../assets/Ellipse 9@2x.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Leverage agile frameworks to provide a robust synopsis with righteous indignation and dislike men who are demoralized.',
      author: 'Sasha Hepsky',
      title: 'CEO Founder',
      image: profileImg1
    },
    {
      id: 2,
      text: 'Leverage agile frameworks to provide a robust synopsis with righteous indignation and dislike men who are demoralized.',
      author: 'Joshus Mende',
      title: 'CEO Interchange',
      image: profileImg2
    },
    {
      id: 3,
      text: 'Leverage agile frameworks to provide a robust synopsis with righteous indignation and dislike men who are demoralized.',
      author: 'Britain Eriksen',
      title: 'CEO Bonds',
      image: profileImg3
    },
    {
      id: 4,
      text: 'Leverage agile frameworks to provide a robust synopsis with righteous indignation and dislike men who are demoralized.',
      author: 'Skyler White',
      title: 'CEO Founder',
      image: profileImg4
    }
  ];

  return (
    <section className="w-full px-4 py-12 md:px-6 lg:px-12 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-bold text-[#3734A9] uppercase tracking-[0.2em] mb-3">
            TESTIMONIAL
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            What Our Happy<br />User Says
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="relative bg-white border border-gray-200 rounded-lg pt-12 px-6 pb-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Blue Circle Badge - Top Left Border */}
              <div className="absolute -top-5 -left--5">
                <img 
                  src={blueCircle} 
                  alt="Badge" 
                  className="w-10 h-10"
                />
              </div>

              {/* Star Rating */}
              <div className="mb-4">
                <img 
                  src={starRating} 
                  alt="Rating" 
                  className="w-auto h-4"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Divider Border - Full Width */}
              <div className="-mx-6 border-t border-gray-200 mb-6"></div>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-10 h-10 object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-gray-700">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
