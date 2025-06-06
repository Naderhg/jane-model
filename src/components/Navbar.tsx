import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-xl font-serif tracking-wider">
          JANE DOE
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#portfolio" className="hover:text-gold transition-colors duration-300">PORTFOLIO</a>
          <a href="#about" className="hover:text-gold transition-colors duration-300">ABOUT</a>
          <a href="#services" className="hover:text-gold transition-colors duration-300">SERVICES</a>
          <a href="#testimonials" className="hover:text-gold transition-colors duration-300">TESTIMONIALS</a>
          <a href="#contact" className="hover:text-gold transition-colors duration-300">CONTACT</a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          <a href="#portfolio" className="py-2 border-b border-gray-100" onClick={toggleMenu}>PORTFOLIO</a>
          <a href="#about" className="py-2 border-b border-gray-100" onClick={toggleMenu}>ABOUT</a>
          <a href="#services" className="py-2 border-b border-gray-100" onClick={toggleMenu}>SERVICES</a>
          <a href="#testimonials" className="py-2 border-b border-gray-100" onClick={toggleMenu}>TESTIMONIALS</a>
          <a href="#contact" className="py-2" onClick={toggleMenu}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;