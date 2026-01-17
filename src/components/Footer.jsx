import React from 'react';
import linkedinIcon from '../assets/052-linkedin.svg';
import twitterIcon from '../assets/096-twitter.svg';
import messengerIcon from '../assets/025-messenger.svg';

const Footer = () => {
  return (
    <footer className="w-full px-4 py-12 md:px-6 lg:px-12 lg:py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="flex flex-row gap-12 mb-12 relative justify-between">
          
          {/* Left Section - Brand */}
          <div className="flex-shrink-0 w-32">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">AR</h3>
            <p className="text-gray-600 text-xs mb-4">
              Finance helps companies manage payments easily.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                title="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                title="Twitter"
              >
                <img src={twitterIcon} alt="Twitter" className="w-4 h-4" />
              </a>
              <a 
                href="https://messenger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                title="Messenger"
              >
                <img src={messengerIcon} alt="Messenger" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex-shrink-0">
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  Blog
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div className="flex-shrink-0">
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#invoicing" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  Invoicing
                </a>
              </li>
              <li>
                <a href="#contract" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  Contract
                </a>
              </li>
              <li>
                <a href="#accounting" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  Accounting
                </a>
              </li>
              <li>
                <a href="#proposal" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  Proposal
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex-shrink-0">
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#proposal-template" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  Proposal Template
                </a>
              </li>
              <li>
                <a href="#invoice-template" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  Invoice Template
                </a>
              </li>
              <li>
                <a href="#tutorial" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  Tutorial
                </a>
              </li>
              <li>
                <a href="#how-to-contract" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs">
                  How to write a contract
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex-shrink-0">
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:shakir360@gmail.com" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs flex items-center gap-1">
                  <span>✉</span>
                  shakir360@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923008488985" className="text-gray-600 hover:text-[#3734A9] transition-colors text-xs flex items-center gap-1">
                  <span>📱</span>
                  +92-300-848-8985
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Copyright © AR Shakir 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
