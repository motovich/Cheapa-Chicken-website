import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { ArrowRight, Star, Clock, DollarSign } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: SectionId) => void;
}

const SLIDES = [
  {
    image: "https://i.ibb.co/RpbPjHwy/IMG-0675.jpg",
    alt: "Whole Broiler Chicken"
  },
  {
    image: "https://i.ibb.co/fd0vGGNP/IMG-0676.jpg",
    alt: "Mixed Parts Pack"
  },
  {
    image: "https://i.ibb.co/FqBLpVpx/IMG-0677.jpg",
    alt: "Chicken Foot"
  },
  {
    image: "https://i.ibb.co/LzHtzgDm/IMG-0678.webp",
    alt: "Giblets (Liver & Gizzard)"
  },
  {
    image: "https://i.ibb.co/1JY6P8C2/IMG-0680.png",
    alt: "Wholesale / Bulk"
  },
  {
    image: "https://i.ibb.co/DfNPcY6x/IMG-0681.jpg",
    alt: "Custom Family Packs"
  }
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Slideshow */}
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.alt} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/30"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8 animate-fade-in-up">
          <div className="inline-block bg-yellow-500/20 border border-yellow-500/40 backdrop-blur-sm px-4 py-1 rounded-full text-yellow-300 text-sm font-semibold uppercase tracking-wider">
            Established 2020
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            No Fowl Play,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Just Cheapa Chicken
            </span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            From our family farm to your table. We deliver high-quality, farm-raised poultry with unbeatable prices and speed. 
            Experience the Cheapa Chicken difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate(SectionId.PRODUCTS)}
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-yellow-500/25"
            >
              View Products <ArrowRight size={20} />
            </button>
            <button 
               onClick={() => onNavigate(SectionId.ABOUT)}
               className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm transition-colors"
            >
              Our Story
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-yellow-400 font-bold">
                <Star size={20} /> QUALITY
              </div>
              <p className="text-xs text-slate-400">Farm-raised broilers</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-yellow-400 font-bold">
                <Clock size={20} /> FAST
              </div>
              <p className="text-xs text-slate-400">Rapid processing & delivery</p>
            </div>
             <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-yellow-400 font-bold">
                <DollarSign size={20} /> CHEAP
              </div>
              <p className="text-xs text-slate-400">Unbeatable market rates</p>
            </div>
          </div>
        </div>

        {/* Visual Element on Right (Desktop) */}
        <div className="hidden lg:block relative">
           <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=800" 
                alt="Delicious Chicken" 
                className="rounded-2xl w-full h-80 object-cover mb-4"
              />
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Whole Broiler</h3>
                  <p className="text-slate-500">Fresh, Cleaned & Plucked</p>
                </div>
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold">
                  Top Seller
                </div>
              </div>
           </div>
           {/* Decorative Elements */}
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-20"></div>
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-yellow-500 w-8' : 'bg-white/30 hover:bg-white/50 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};