import React from 'react';
import { BookOpen, ShoppingCart, Star, CheckCircle } from 'lucide-react';

export const BookPromo: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-12">
            
            {/* Image Side */}
            <div className="relative flex justify-center order-first md:order-last">
              <div className="relative group perspective-1000 w-full max-w-sm">
                 <div className="absolute inset-0 bg-yellow-500 rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                 <img 
                   src="https://i.ibb.co/gZ0419MT/Red-and-White-Video-Centric-Coming-Soon-Instagram-Post.jpg" 
                   alt="Feathers to Fortune Book Cover" 
                   className="relative w-full rounded-lg shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500 border border-white/10"
                 />
                 
                 {/* Badge */}
                 <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 px-4 py-2 rounded-lg shadow-xl flex items-center gap-1 font-bold animate-bounce-slow">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} /> Bestseller
                 </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="text-white space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-yellow-500/30">
                <BookOpen size={14} /> Official Guide
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                  Feathers to <span className="text-yellow-500">Fortune</span>
                </h2>
                <h3 className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                  Unlocking the secrets to profitable broiler chicken farming for small farmers
                </h3>
              </div>
              
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                Whether you're just starting or looking to scale, this book contains the blueprint for success. Learn the exact strategies we used to grow Cheapa Chicken from a backyard coop to a thriving business.
              </p>
              
              <ul className="space-y-2 text-sm text-slate-300 inline-block text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500 shrink-0" /> Proven Profit Strategies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500 shrink-0" /> Disease Management Guide
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500 shrink-0" /> Coop Construction Tips
                </li>
              </ul>

              <div className="pt-4">
                <a 
                  href="https://a.co/d/8yQ0hHD" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-yellow-500/20"
                >
                  <ShoppingCart size={20} /> Buy on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};