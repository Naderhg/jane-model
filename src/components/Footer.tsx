import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="/" className="text-xl font-serif tracking-wider mb-4 md:mb-0">
            JANE DOE
          </a>
          
          <div className="flex space-x-8">
            <a href="#portfolio" className="hover:text-gold transition-colors duration-300">PORTFOLIO</a>
            <a href="#about" className="hover:text-gold transition-colors duration-300">ABOUT</a>
            <a href="#services" className="hover:text-gold transition-colors duration-300">SERVICES</a>
            <a href="#contact" className="hover:text-gold transition-colors duration-300">CONTACT</a>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Jane Doe. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;