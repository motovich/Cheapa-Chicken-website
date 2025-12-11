import React, { useState } from 'react';
import { SectionId } from '../types';
import { generateRecipe } from '../services/geminiService';
import { ChefHat, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface RecipeGeneratorProps {
  isSnippet?: boolean;
  onNavigate?: (section: SectionId) => void;
}

export const RecipeGenerator: React.FC<RecipeGeneratorProps> = ({ isSnippet = false, onNavigate }) => {
  const [selectedPart, setSelectedPart] = useState('Whole Chicken');
  const [pantryItems, setPantryItems] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);

  const chickenParts = ['Whole Chicken', 'Thighs', 'Wings', 'Legs', 'Liver', 'Gizzards', 'Chicken Foot'];

  const handleGenerate = async () => {
    if (!selectedPart) return;
    
    setLoading(true);
    setRecipe('');
    
    // Simulate a chef "thinking" for a better UX, then call API
    const result = await generateRecipe(selectedPart, pantryItems);
    setRecipe(result);
    setLoading(false);
  };

  return (
    <section id={SectionId.RECIPES} className="py-24 bg-orange-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-6">
             <ChefHat className="text-orange-500 w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Cheapa Chef AI</h2>
          <p className="text-slate-600 text-lg">
            Don't know what to cook? Tell our AI Chef what chicken part you bought and what's in your pantry. We'll generate a custom Jamaican-style recipe for you!
          </p>
        </div>

        {isSnippet ? (
          <div className="text-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto border border-orange-100 mb-8">
               <div className="flex justify-center gap-4 mb-6">
                  <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">Curry Chicken?</span>
                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">Brown Stew?</span>
                  <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">Fried?</span>
               </div>
               <p className="text-slate-600 mb-0">
                 Our advanced AI Kitchen can turn any ingredients into a delicious meal plan in seconds.
               </p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate(SectionId.RECIPES)}
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
            >
              <Sparkles size={20} /> Open AI Kitchen
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Input Panel */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-orange-100 h-fit">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="text-yellow-500" size={20} /> Let's get cooking
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Select Chicken Cut</label>
                  <div className="grid grid-cols-2 gap-2">
                    {chickenParts.map(part => (
                      <button
                        key={part}
                        onClick={() => setSelectedPart(part)}
                        className={`text-sm py-2 px-3 rounded-lg border transition-all ${
                          selectedPart === part 
                            ? 'bg-orange-100 border-orange-400 text-orange-700 font-semibold' 
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {part}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Pantry Ingredients (Optional)</label>
                  <textarea
                    value={pantryItems}
                    onChange={(e) => setPantryItems(e.target.value)}
                    placeholder="e.g., rice, curry powder, onions, thyme..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none min-h-[100px]"
                  ></textarea>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Chef is thinking...
                    </>
                  ) : (
                    <>Generate Recipe</>
                  )}
                </button>
              </div>
            </div>

            {/* Output Panel */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-xl border border-orange-100 min-h-[500px] relative">
              {!recipe && !loading && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                   <ChefHat size={64} className="mb-4 text-slate-200" />
                   <p className="text-lg">Your custom recipe will appear here.</p>
                   <p className="text-sm mt-2">Try selecting "Curry Powder" and "Thighs"!</p>
                 </div>
              )}
              
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-10 rounded-3xl">
                  <Loader2 size={48} className="text-orange-500 animate-spin mb-4" />
                  <p className="text-slate-600 font-medium animate-pulse">Whipping up something delicious...</p>
                </div>
              )}

              {recipe && (
                <div className="prose prose-orange prose-sm md:prose-base max-w-none overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Cheapa Certified Recipe</span>
                    <button 
                      onClick={() => {navigator.clipboard.writeText(recipe)}}
                      className="text-slate-400 hover:text-slate-600 text-xs"
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                  <ReactMarkdown
                    components={{
                      h1: ({node, ...props}) => <h3 className="text-2xl font-bold text-slate-900 mb-4" {...props} />,
                      h2: ({node, ...props}) => <h4 className="text-xl font-bold text-slate-800 mt-6 mb-3" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-5 space-y-2 text-slate-600" {...props} />,
                      li: ({node, ...props}) => <li className="pl-1" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-semibold text-slate-900" {...props} />
                    }}
                  >
                    {recipe}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};