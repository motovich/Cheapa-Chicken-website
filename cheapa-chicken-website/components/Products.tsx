import React from 'react';
import { SectionId, Product } from '../types';
import { ShoppingBag, Download, ArrowRight, Check, Star } from 'lucide-react';

const products: Product[] = [
  {
    id: 'whole-chicken',
    name: 'Whole Broiler Chicken',
    description: 'Fresh, locally raised, plucked, and cleaned. Perfect for roasting or Sunday dinner.',
    longDescription: 'Our flagship product. These birds are raised in open-air coops in St. Elizabeth, allowing them to develop natural muscle and flavor. They are hormone-free, antibiotic-residue-free, and processed using our sanitary mobile units. You get a real, whole bird including the neck, cleaned to perfection and ready for your pot.',
    specs: ['Weight: 4-5 lbs', 'Processing: Plucked & Gutted', 'Origin: St. Elizabeth, Jamaica', 'Shelf Life: 3 days (Refrigerated)'],
    priceDisplay: 'Per Kg / Lb',
    imageUrl: 'https://i.ibb.co/RpbPjHwy/IMG-0675.jpg',
    tags: ['Best Seller', 'Fresh']
  },
  {
    id: 'parts',
    name: 'Mixed Parts Pack',
    description: 'Juicy cuts of Thighs, Legs, and Wings. Ready for the grill or fryer.',
    longDescription: 'Ideally suited for quick weeknight dinners. We take our fresh whole birds and expertly butcher them into thighs, drumsticks, and wings. No backbone, no waste—just the meaty parts your family loves. Perfect for curry chicken, fried chicken, or barbecue.',
    specs: ['Includes: Thighs, Drumsticks, Wings', 'Bone-in, Skin-on', 'Vacuum Sealed available', 'No hormones added'],
    priceDisplay: 'Per Pack',
    imageUrl: 'https://i.ibb.co/fd0vGGNP/IMG-0676.jpg',
    tags: ['Versatile']
  },
  {
    id: 'foot',
    name: 'Chicken Foot',
    description: 'Cleaned and ready for traditional soups and stews. High in collagen.',
    longDescription: 'The secret to the perfect Saturday soup. Our real chicken feet are meticulously cleaned, peeled, and toenails removed. Rich in natural collagen and flavor, they add a gelatinous body and richness to broths that store-bought stock just can\'t match.',
    specs: ['Fully Cleaned & Peeled', 'Toenails Removed', 'High Collagen Content', 'Perfect for Soup'],
    priceDisplay: 'Per Kg',
    imageUrl: 'https://i.ibb.co/FqBLpVpx/IMG-0677.jpg',
    tags: ['Traditional', 'Soup Ready']
  },
  {
    id: 'giblets',
    name: 'Giblets (Liver & Gizzard)',
    description: 'Prepared fresh and packed for quick cooking. Nutrient dense.',
    longDescription: 'Don\'t overlook the nutrient powerhouse of the chicken. Our livers and gizzards are harvested fresh, cleaned thoroughly, and packed immediately. High in iron and protein, they are perfect for gravies, stuffings, or traditional Jamaican "run-dung".',
    specs: ['Cleaned Gizzards', 'Fresh Livers', 'High in Iron', 'Rich Flavor Profile'],
    priceDisplay: 'Per Pack',
    imageUrl: 'https://i.ibb.co/LzHtzgDm/IMG-0678.webp',
    tags: ['Nutrient Rich']
  },
  {
    id: 'bulk',
    name: 'Wholesale / Bulk',
    description: 'Special pricing for restaurants, cookshops, and large events.',
    longDescription: 'Running a restaurant, cookshop, or planning a big event? Our wholesale options give you the best value. Get crates of whole chickens or specific cuts at significantly reduced rates. Delivered in refrigerated trucks to ensure cold-chain integrity.',
    specs: ['Minimum Order: 50 lbs', 'Restaurant Grade', 'Scheduled Delivery', 'Volume Discounts'],
    priceDisplay: 'Custom Quote',
    imageUrl: 'https://i.ibb.co/1JY6P8C2/IMG-0680.png',
    tags: ['B2B', 'Events']
  },
  {
    id: 'custom',
    name: 'Custom Family Packs',
    description: 'Create your own mix. Example: 2 wings + 1 lb thighs. Tailored for you.',
    longDescription: 'We know every family cooks differently. Build your own pack! Want 10 wings and 2 lbs of breast? No problem. We pack to your exact specifications so you never have to buy what you won\'t eat. Just tell us what you need.',
    specs: ['Fully Customizable', 'Portion Controlled', 'Pay by Weight', 'Made to Order'],
    priceDisplay: 'Per Order',
    imageUrl: 'https://i.ibb.co/DfNPcY6x/IMG-0681.jpg',
    tags: ['Flexible']
  }
];

interface ProductsProps {
  isSnippet?: boolean;
  onNavigate?: (section: SectionId, targetId?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ isSnippet = false, onNavigate }) => {
  // If snippet, show top 3. If full page, show all.
  const displayProducts = isSnippet ? products.slice(0, 3) : products;

  if (isSnippet) {
    return (
      <section id={SectionId.PRODUCTS} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2">Our Offerings</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Customer Favorites</h3>
            <p className="text-slate-600">
              Discover our top-selling fresh poultry products. Quality you can taste, prices you'll love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayProducts.map((product) => (
              <div key={product.id} className="group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">{product.name}</h4>
                  </div>
                  <p className="text-slate-600 mb-4 text-sm line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                    <span className="font-semibold text-slate-900">{product.priceDisplay}</span>
                    <button 
                      onClick={() => onNavigate && onNavigate(SectionId.PRODUCTS, product.id)}
                      className="text-yellow-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
                    >
                      Details <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
             <button 
               onClick={() => onNavigate && onNavigate(SectionId.PRODUCTS)}
               className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 transition-colors"
             >
               View Full Menu <ArrowRight size={20} />
             </button>
           </div>
        </div>
      </section>
    );
  }

  // Full Page View
  return (
    <section id={SectionId.PRODUCTS} className="bg-slate-50 pb-24">
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden mb-16">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
           <ShoppingBag className="mx-auto w-12 h-12 text-yellow-500 mb-6" />
           <h1 className="text-5xl font-bold mb-6">Our Products</h1>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto">
             Whether you need a quick family meal or wholesale supplies for your business, we have the quality cuts you need at the prices you want.
           </p>
         </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              id={product.id} 
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-200 scroll-mt-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-2/5">
                <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 justify-center">
                     {product.tags.map(tag => (
                       <span key={tag} className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-3/5 flex flex-col justify-center">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-bold text-slate-900">{product.name}</h3>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-yellow-600">{product.priceDisplay}</span>
                    <span className="text-xs text-slate-400">Market Price</span>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {product.longDescription || product.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {product.specs?.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <Check size={16} className="text-green-500 shrink-0" />
                      <span className="font-medium">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                   <button 
                     onClick={() => onNavigate && onNavigate(SectionId.CONTACT)}
                     className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-yellow-500/20 active:scale-95"
                   >
                     Order Now
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Product Section */}
        <div className="mt-24 bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden text-center md:text-left">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-white max-w-xl">
                 <div className="inline-block bg-white/10 px-4 py-1 rounded-full text-yellow-400 font-bold text-sm mb-4">Bonus Content</div>
                 <h3 className="text-3xl font-bold mb-4">Free Cheapa Chicken Recipe Guide</h3>
                 <p className="text-slate-300 mb-8 text-lg">
                   Stuck on what to cook? Download our free PDF guide featuring simple, budget-friendly Jamaican recipes to stretch your purchases further.
                 </p>
                 <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 transition-colors">
                    <Download size={20} /> Download Free PDF
                 </button>
              </div>
              <div className="relative group perspective-1000">
                 <div className="w-56 h-72 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg shadow-2xl border-2 border-white/20 flex flex-col items-center justify-center p-6 transform rotate-6 group-hover:rotate-0 transition-transform duration-500 relative z-10">
                    <Star className="text-white w-12 h-12 mb-4" />
                    <span className="text-white font-black text-3xl text-center leading-tight mb-2">CHEAPA<br/>COOKBOOK</span>
                    <span className="text-white/80 text-sm font-bold uppercase tracking-widest">Vol. 1</span>
                    <div className="absolute bottom-4 w-12 h-1 bg-white/30 rounded-full"></div>
                 </div>
                 {/* Shadow card */}
                 <div className="absolute top-0 left-0 w-56 h-72 bg-white/10 rounded-lg transform -rotate-6 translate-x-4 translate-y-4"></div>
              </div>
           </div>
           {/* Decorative BG */}
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
};