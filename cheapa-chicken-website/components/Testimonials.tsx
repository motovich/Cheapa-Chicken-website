import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "I used to spend all day plucking chickens by hand. The Mobile Picking Station came to my farm and finished 50 birds in 30 minutes. Absolute game changer!",
    role: "Local Farmer"
  },
  {
    id: 2,
    name: "Michael Thompson",
    text: "The Profit Calculator helped me realize I was overspending on feed. Now I use their 'Cheapa Accountant' app and my profits are up 20%.",
    role: "Small Business Owner"
  },
  {
    id: 3,
    name: "Chef Andre",
    text: "The freshness of the meat is unmatched. My restaurant customers always ask where I get my chicken. Cheapa Chicken is the secret ingredient.",
    role: "Head Chef, Ochi Grill"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Community Says</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From farmers to families, see how Cheapa Chicken is making a difference in St. Elizabeth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow relative">
              <Quote className="absolute top-6 right-6 text-yellow-100 w-10 h-10 transform rotate-180" />
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};