import React from 'react';
import { SectionId } from '../types';
import { Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex gap-3 items-center">
              <img 
                src="https://i.ibb.co/23bK3zcS/Untitled-design.png" 
                alt="Cheapa Chicken Logo" 
                className="h-14 w-auto object-contain rounded-xl bg-slate-800/50 p-1"
              />
              <div>
                <h4 className="text-2xl font-bold text-white leading-none">Cheapa<span className="text-yellow-500">Chicken</span></h4>
                <p className="text-xs font-bold text-yellow-500 tracking-widest uppercase mt-1.5">Quality, Fast & Cheap</p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400">
              Providing Jamaica with the freshest farm-raised poultry since 2020. 
              We stand by our promises and strive to surpass your expectations.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.youtube.com/@cheapachicken?reload=9&app=desktop" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/cheapachicken" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-500 rounded-full"></span> Quick Links
            </h5>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate(SectionId.HOME)} className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span> Home</button></li>
              <li><button onClick={() => onNavigate(SectionId.ABOUT)} className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span> About Us</button></li>
              <li><button onClick={() => onNavigate(SectionId.SERVICES)} className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span> Mobile Picking</button></li>
              <li><button onClick={() => onNavigate(SectionId.BANK)} className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span> Cheapa Bank</button></li>
              <li><button onClick={() => onNavigate(SectionId.CALCULATOR)} className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span> Profit Calculator</button></li>
              <li><button onClick={() => onNavigate(SectionId.PRODUCTS)} className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span> Products</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-500 rounded-full"></span> Contact Us
            </h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-yellow-500 mt-1 shrink-0 group-hover:text-white transition-colors" />
                <span>Sellington District, St. Elizabeth Jamaica<br/><span className="text-slate-500 text-xs">Delivery Islandwide</span></span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-yellow-500 shrink-0 group-hover:text-white transition-colors" />
                <a href="tel:18765960024" className="hover:text-white transition-colors">+1 (876) 596-0024</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-yellow-500 shrink-0 group-hover:text-white transition-colors" />
                <a href="mailto:cheapachick@gmail.com" className="hover:text-white transition-colors">cheapachick@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-500 rounded-full"></span> Stay Updated
            </h5>
            <p className="text-xs mb-4 text-slate-400">Subscribe for price updates and new recipes.</p>
            <form 
              action="https://formsubmit.co/cheapachick@gmail.com" 
              method="POST"
              className="flex flex-col gap-2"
            >
              <input type="hidden" name="_subject" value="New Newsletter Subscription" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_autoresponse" value="Thank you for subscribing to Cheapa Chicken updates! We will keep you posted on the latest prices and farm news." />
              
              <input 
                type="email" 
                name="email"
                required
                placeholder="Enter your email" 
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all placeholder:text-slate-500"
              />
              <button 
                type="submit"
                className="bg-yellow-500 text-slate-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/10"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Cheapa Chicken. Quality, Fast & Cheap. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};