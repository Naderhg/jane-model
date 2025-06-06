import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1920&w=1280" 
          alt="Model Portrait" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-wider mb-2 text-center">
          Jane Doe
        </h1>
        <div className="w-16 h-px bg-gold my-6"></div>
        <p className="text-lg md:text-xl tracking-wide mb-8 text-center max-w-2xl">
          PROFESSIONAL MODEL • NEW YORK
        </p>
        <button 
          onClick={scrollToPortfolio}
          className="mt-10 animate-bounce bg-transparent p-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;