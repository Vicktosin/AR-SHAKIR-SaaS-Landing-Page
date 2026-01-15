import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 md:px-6 lg:px-12 lg:py-6 sticky top-0 bg-white z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-gray-900">AR SHAKIR</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
              Product
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
              Template
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Pricing
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-gray-700 hover:text-gray-900 font-medium hidden sm:inline-block text-sm">
            Sign In
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 md:px-6 py-2 rounded-lg font-medium transition-colors text-sm md:text-base">
            Start Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="space-y-3 pt-4">
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-base px-2 py-2 rounded hover:bg-gray-100">
              Product
            </a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-base px-2 py-2 rounded hover:bg-gray-100">
              Template
            </a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-base px-2 py-2 rounded hover:bg-gray-100">
              Blog
            </a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-base px-2 py-2 rounded hover:bg-gray-100">
              Pricing
            </a>
            <button className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium text-base px-2 py-2 rounded hover:bg-gray-100">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

