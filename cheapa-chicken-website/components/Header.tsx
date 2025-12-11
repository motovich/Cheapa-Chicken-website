import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

interface HeaderProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: SectionId.HOME, label: 'Home' },
    { id: SectionId.ABOUT, label: 'About Us' },
    { id: SectionId.SERVICES, label: 'Mobile Picking' },
    { id: SectionId.BANK, label: 'Bank' },
    { id: SectionId.ACCOUNTANT, label: 'Accountant' },
    { id: SectionId.CALCULATOR, label: 'Profit Calc' },
    { id: SectionId.PRODUCTS, label: 'Products' },
    { id: SectionId.RECIPES, label: 'AI Kitchen' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  const handleNavClick = (id: SectionId) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const getTextColor = (base: string, scrolled: string) => {
    if (isScrolled || activeSection !== SectionId.HOME) return scrolled;
    return base;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => handleNavClick(SectionId.HOME)}
        >
          <img 
            src="https://i.ibb.co/23bK3zcS/Untitled-design.png" 
            alt="Cheapa Chicken Logo" 
            className="h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md rounded-xl"
          />
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tight leading-none ${getTextColor('text-slate-900 lg:text-white', 'text-slate-900')}`}>
              Cheapa<span className="text-yellow-500">Chicken</span>
            </span>
            <span className={`text-[0.65rem] font-bold tracking-[0.15em] uppercase mt-0.5 ${getTextColor('text-slate-700 lg:text-slate-300', 'text-slate-500')}`}>
              Quality, Fast & Cheap
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-semibold transition-colors hover:text-yellow-500 ${
                activeSection === link.id 
                  ? 'text-yellow-500' 
                  : getTextColor('text-slate-200', 'text-slate-600')
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick(SectionId.PRODUCTS)}
            className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-lg shadow-yellow-500/20"
          >
            Order Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} className="text-slate-800" />
          ) : (
            <Menu size={28} className={getTextColor('text-slate-900 lg:text-white', 'text-slate-900')} />
          )} 
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl xl:hidden p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
           {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                activeSection === link.id ? 'bg-yellow-50 text-yellow-600' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};