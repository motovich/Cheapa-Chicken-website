import React, { useState } from 'react';
import { SectionId } from '../types';
import { Calculator, DollarSign, Sprout, TrendingUp, ArrowRight, RefreshCw, Zap, Download, FileText } from 'lucide-react';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

interface ProfitCalculatorProps {
  isSnippet?: boolean;
  onNavigate?: (section: SectionId) => void;
}

// Helper component for input groups
interface InputGroupProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, name, value, onChange, prefix = "$" }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-semibold text-slate-600 mb-1">{label}</label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">{prefix}</span>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        step="any"
        className="w-full pl-8 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
        placeholder="0.00"
      />
    </div>
  </div>
);

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ isSnippet = false, onNavigate }) => {
  // State for all inputs initialized as empty strings to allow proper decimal input
  const [formData, setFormData] = useState<any>({
    date: new Date().toISOString().split('T')[0],
    // Livestock
    costPerChick: '',
    numChicks: '',
    // Feed
    costFeedBag: '',
    numFeedBags: '',
    costBooster: '',
    numBoosters: '',
    costAntiStress: '',
    numAntiStress: '',
    // Supplies
    costPollyBag: '',
    numPollyBags: '',
    costSawdust: '',
    numSawdust: '',
    // Utilities
    electricity: '',
    water: '',
    transport: '',
    labor: '',
    // Revenue Main
    pricePerLbChicken: '',
    totalLbsChicken: '',
    // Revenue By-Products
    priceGizzard: '',
    lbsGizzard: '',
    priceLiver: '',
    lbsLiver: '',
    priceFoot: '',
    lbsFoot: '',
    priceNeck: '',
    lbsNeck: '',
  });

  const [result, setResult] = useState<{
    livestockCost: number;
    feedCost: number;
    suppliesCost: number;
    utilitiesCost: number;
    totalExpenses: number;
    chickenRevenue: number;
    byProductsRevenue: number;
    totalRevenue: number;
    netProfit: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  const getVal = (val: string | number): number => {
    return parseFloat(val.toString()) || 0;
  };

  const calculateProfit = () => {
    const costPerChick = getVal(formData.costPerChick);
    const numChicks = getVal(formData.numChicks);
    const livestockCost = costPerChick * numChicks;
    
    const feedCost = 
      (getVal(formData.costFeedBag) * getVal(formData.numFeedBags)) + 
      (getVal(formData.costBooster) * getVal(formData.numBoosters)) + 
      (getVal(formData.costAntiStress) * getVal(formData.numAntiStress));
    
    const suppliesCost = 
      (getVal(formData.costPollyBag) * getVal(formData.numPollyBags)) + 
      (getVal(formData.costSawdust) * getVal(formData.numSawdust));
    
    const utilitiesCost = getVal(formData.electricity) + getVal(formData.water) + getVal(formData.transport) + getVal(formData.labor);
    
    const totalExpenses = livestockCost + feedCost + suppliesCost + utilitiesCost;

    const pricePerLbChicken = getVal(formData.pricePerLbChicken);
    const totalLbsChicken = getVal(formData.totalLbsChicken);
    const chickenRevenue = pricePerLbChicken * totalLbsChicken;
    
    const byProductsRevenue = 
      (getVal(formData.priceGizzard) * getVal(formData.lbsGizzard)) + 
      (getVal(formData.priceLiver) * getVal(formData.lbsLiver)) + 
      (getVal(formData.priceFoot) * getVal(formData.lbsFoot)) + 
      (getVal(formData.priceNeck) * getVal(formData.lbsNeck));
    
    const totalRevenue = chickenRevenue + byProductsRevenue;
    const netProfit = totalRevenue - totalExpenses;

    setResult({
      livestockCost,
      feedCost,
      suppliesCost,
      utilitiesCost,
      totalExpenses,
      chickenRevenue,
      byProductsRevenue,
      totalRevenue,
      netProfit
    });

    // Scroll to results if on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        document.getElementById('calc-results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const downloadPDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;

    // --- Header ---
    doc.setTextColor(234, 179, 8); // Yellow-500
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Cheapa Chicken", 14, 20);

    doc.setFontSize(10);
    doc.setTextColor(100); // Gray
    doc.setFont("helvetica", "normal");
    doc.text("Quality, Fast & Cheap", 14, 26);
    
    doc.setDrawColor(234, 179, 8);
    doc.setLineWidth(0.5);
    doc.line(14, 30, pageWidth - 14, 30);

    // --- Title & Date ---
    doc.setTextColor(0);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Profit Calculation Report", 14, 42);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Report Date: ${formData.date}`, 14, 48);

    // --- Financial Summary Table ---
    autoTable(doc, {
      startY: 55,
      head: [['Financial Summary', 'Amount']],
      body: [
        ['Total Revenue', `$${result.totalRevenue.toFixed(2)}`],
        ['Total Expenses', `-$${result.totalExpenses.toFixed(2)}`],
        ['Net Profit', `$${result.netProfit.toFixed(2)}`],
      ],
      theme: 'grid',
      headStyles: { fillColor: [15, 23, 42], textColor: [255, 255, 255], fontStyle: 'bold' },
      columnStyles: {
        0: { fontStyle: 'bold' },
        1: { halign: 'right', fontStyle: 'bold' }
      },
      didParseCell: function(data) {
        if (data.section === 'body' && data.row.index === 2) {
            // Color Net Profit row based on value
            if (result.netProfit >= 0) {
                data.cell.styles.textColor = [22, 163, 74]; // Green
            } else {
                data.cell.styles.textColor = [220, 38, 38]; // Red
            }
        }
      }
    });

    // --- Detailed Tables ---
    const finalY = (doc as any).lastAutoTable.finalY;
    
    // Expenses
    doc.setFontSize(12);
    doc.setTextColor(30);
    doc.text("Detailed Expense Breakdown", 14, finalY + 15);

    autoTable(doc, {
      startY: finalY + 20,
      head: [['Category', 'Item Description', 'Cost']],
      body: [
        ['Livestock', `Chicks (${getVal(formData.numChicks)} @ $${getVal(formData.costPerChick).toFixed(2)})`, `$${(getVal(formData.numChicks) * getVal(formData.costPerChick)).toFixed(2)}`],
        ['Feed', `Feed Bags (${getVal(formData.numFeedBags)} @ $${getVal(formData.costFeedBag).toFixed(2)})`, `$${(getVal(formData.numFeedBags) * getVal(formData.costFeedBag)).toFixed(2)}`],
        ['Feed', `Boosters (${getVal(formData.numBoosters)} @ $${getVal(formData.costBooster).toFixed(2)})`, `$${(getVal(formData.numBoosters) * getVal(formData.costBooster)).toFixed(2)}`],
        ['Feed', `Anti-Stress (${getVal(formData.numAntiStress)} @ $${getVal(formData.costAntiStress).toFixed(2)})`, `$${(getVal(formData.numAntiStress) * getVal(formData.costAntiStress)).toFixed(2)}`],
        ['Supplies', `Polly Bags & Sawdust`, `$${result.suppliesCost.toFixed(2)}`],
        ['Utilities', `Electricity, Water, Labor, Transport`, `$${result.utilitiesCost.toFixed(2)}`],
      ].filter(row => row[2] !== '$0.00'), // Hide zero rows
      theme: 'striped',
      headStyles: { fillColor: [234, 179, 8], textColor: [0, 0, 0] },
      columnStyles: { 2: { halign: 'right' } }
    });

    // Revenue
    const revenueY = (doc as any).lastAutoTable.finalY;
    doc.text("Detailed Revenue Breakdown", 14, revenueY + 15);

    autoTable(doc, {
      startY: revenueY + 20,
      head: [['Category', 'Details', 'Revenue']],
      body: [
        ['Main Product', `Chicken Meat (${getVal(formData.totalLbsChicken)} lbs @ $${getVal(formData.pricePerLbChicken).toFixed(2)})`, `$${(getVal(formData.totalLbsChicken) * getVal(formData.pricePerLbChicken)).toFixed(2)}`],
        ['By-Product', `Gizzards (${getVal(formData.lbsGizzard)} lbs @ $${getVal(formData.priceGizzard).toFixed(2)})`, `$${(getVal(formData.lbsGizzard) * getVal(formData.priceGizzard)).toFixed(2)}`],
        ['By-Product', `Liver (${getVal(formData.lbsLiver)} lbs @ $${getVal(formData.priceLiver).toFixed(2)})`, `$${(getVal(formData.lbsLiver) * getVal(formData.priceLiver)).toFixed(2)}`],
        ['By-Product', `Chicken Foot (${getVal(formData.lbsFoot)} lbs @ $${getVal(formData.priceFoot).toFixed(2)})`, `$${(getVal(formData.lbsFoot) * getVal(formData.priceFoot)).toFixed(2)}`],
        ['By-Product', `Neck (${getVal(formData.lbsNeck)} lbs @ $${getVal(formData.priceNeck).toFixed(2)})`, `$${(getVal(formData.lbsNeck) * getVal(formData.priceNeck)).toFixed(2)}`],
      ].filter(row => row[2] !== '$0.00'), // Hide zero rows
      theme: 'striped',
      headStyles: { fillColor: [22, 163, 74], textColor: [255, 255, 255] },
      columnStyles: { 2: { halign: 'right' } }
    });

    // --- Footer ---
    const pageHeight = doc.internal.pageSize.height;
    
    // Grey background for footer
    doc.setFillColor(241, 245, 249); // slate-100
    doc.rect(0, pageHeight - 35, pageWidth, 35, 'F');

    // Logo Text (Fallback for image)
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Cheapa Chicken", pageWidth / 2, pageHeight - 25, { align: 'center' });

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text("Quality, Fast & Cheap", pageWidth / 2, pageHeight - 20, { align: 'center' });
    
    doc.text("Sellington District, St. Elizabeth Jamaica | 1-876-596-0024 | cheapachick@gmail.com", pageWidth / 2, pageHeight - 12, { align: 'center' });

    doc.save(`CheapaChicken_ProfitReport_${formData.date}.pdf`);
  };

  if (isSnippet) {
    return (
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border border-yellow-500/30">
                <Calculator size={16} /> Free Tool
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">Profit Calculator</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Stop guessing and start planning. Calculate your chicken farming profits with our detailed cost breakdown tool. Track feed, livestock, and operational costs to maximize your returns.
              </p>
              <div className="flex gap-4 text-sm font-semibold text-slate-400">
                <span className="flex items-center gap-1"><Sprout size={16} className="text-green-400" /> Cost Tracking</span>
                <span className="flex items-center gap-1"><TrendingUp size={16} className="text-blue-400" /> Revenue Analysis</span>
              </div>
            </div>

            <div className="lg:w-5/12 w-full">
              <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                 <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                   <div>
                     <p className="text-xs font-bold text-slate-400 uppercase">Estimated Profit</p>
                     <h3 className="text-3xl font-black text-slate-900">$--.---</h3>
                   </div>
                   <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                     <DollarSign size={24} />
                   </div>
                 </div>
                 <div className="space-y-3 mb-6">
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-3/4"></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                      <span>Expenses</span>
                      <span>Revenue</span>
                    </div>
                 </div>
                 <button 
                   onClick={() => onNavigate && onNavigate(SectionId.CALCULATOR)}
                   className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-900/20 group"
                 >
                   Start Calculating <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={SectionId.CALCULATOR} className="bg-slate-50 min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 text-yellow-700 rounded-full mb-4">
            <Calculator size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Farming Profit Calculator</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Enter all your costs below to get an accurate profit calculation. Accurate data helps you make better business decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Forms */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. Basic Info */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                📅 Report Details
              </h3>
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-slate-600 mb-1">Report Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            </div>

            {/* 2. Livestock Costs */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                🐣 Livestock Costs
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <InputGroup label="Cost Per Chick" name="costPerChick" value={formData.costPerChick} onChange={handleInputChange} />
                <InputGroup label="Number of Chicks" name="numChicks" value={formData.numChicks} onChange={handleInputChange} prefix="#" />
              </div>
              <div className="mt-2 text-right text-sm font-bold text-slate-600">
                Subtotal: <span className="text-slate-900">${(getVal(formData.costPerChick) * getVal(formData.numChicks)).toFixed(2)}</span>
              </div>
            </div>

            {/* 3. Feed & Nutrition */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                🌾 Feed & Nutrition
              </h3>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                <InputGroup label="Cost Per Bag of Feed" name="costFeedBag" value={formData.costFeedBag} onChange={handleInputChange} />
                <InputGroup label="Number of Feed Bags" name="numFeedBags" value={formData.numFeedBags} onChange={handleInputChange} prefix="#" />
                
                <div className="col-span-2 h-px bg-slate-50 my-2"></div>

                <InputGroup label="Cost Per Booster" name="costBooster" value={formData.costBooster} onChange={handleInputChange} />
                <InputGroup label="Number of Boosters" name="numBoosters" value={formData.numBoosters} onChange={handleInputChange} prefix="#" />
                
                <div className="col-span-2 h-px bg-slate-50 my-2"></div>

                <InputGroup label="Cost Per Anti-Stress" name="costAntiStress" value={formData.costAntiStress} onChange={handleInputChange} />
                <InputGroup label="Number of Anti-Stress" name="numAntiStress" value={formData.numAntiStress} onChange={handleInputChange} prefix="#" />
              </div>
              <div className="mt-2 text-right text-sm font-bold text-slate-600">
                Subtotal: <span className="text-slate-900">${((getVal(formData.costFeedBag) * getVal(formData.numFeedBags)) + (getVal(formData.costBooster) * getVal(formData.numBoosters)) + (getVal(formData.costAntiStress) * getVal(formData.numAntiStress))).toFixed(2)}</span>
              </div>
            </div>

            {/* 4. Supplies */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                📦 Supplies & Materials
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <InputGroup label="Cost Per Polly Bag" name="costPollyBag" value={formData.costPollyBag} onChange={handleInputChange} />
                <InputGroup label="Number of Polly Bags" name="numPollyBags" value={formData.numPollyBags} onChange={handleInputChange} prefix="#" />
                <InputGroup label="Cost Bag of Sawdust" name="costSawdust" value={formData.costSawdust} onChange={handleInputChange} />
                <InputGroup label="Number Sawdust Bags" name="numSawdust" value={formData.numSawdust} onChange={handleInputChange} prefix="#" />
              </div>
              <div className="mt-2 text-right text-sm font-bold text-slate-600">
                Subtotal: <span className="text-slate-900">${((getVal(formData.costPollyBag) * getVal(formData.numPollyBags)) + (getVal(formData.costSawdust) * getVal(formData.numSawdust))).toFixed(2)}</span>
              </div>
            </div>

            {/* 5. Utilities */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                ⚡ Utilities & Operations
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <InputGroup label="Electricity Bill" name="electricity" value={formData.electricity} onChange={handleInputChange} />
                <InputGroup label="Water Bill" name="water" value={formData.water} onChange={handleInputChange} />
                <InputGroup label="Transportation Cost" name="transport" value={formData.transport} onChange={handleInputChange} />
                <InputGroup label="Labor Cost" name="labor" value={formData.labor} onChange={handleInputChange} />
              </div>
              <div className="mt-2 text-right text-sm font-bold text-slate-600">
                Subtotal: <span className="text-slate-900">${(getVal(formData.electricity) + getVal(formData.water) + getVal(formData.transport) + getVal(formData.labor)).toFixed(2)}</span>
              </div>
            </div>

            {/* 6. Revenue */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-green-500">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                💰 Revenue - Main Product
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <InputGroup label="Selling Price Per Pound" name="pricePerLbChicken" value={formData.pricePerLbChicken} onChange={handleInputChange} />
                <InputGroup label="Total Pounds of Chicken" name="totalLbsChicken" value={formData.totalLbsChicken} onChange={handleInputChange} prefix="#" />
              </div>
              <div className="mt-2 text-right text-sm font-bold text-slate-600">
                Chicken Revenue: <span className="text-green-600">${(getVal(formData.pricePerLbChicken) * getVal(formData.totalLbsChicken)).toFixed(2)}</span>
              </div>
            </div>

            {/* 7. By-Products Revenue */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-green-500">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                🍖 Revenue - By-Products
              </h3>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                <InputGroup label="Price/Lb - Gizzard" name="priceGizzard" value={formData.priceGizzard} onChange={handleInputChange} />
                <InputGroup label="Total Lbs - Gizzard" name="lbsGizzard" value={formData.lbsGizzard} onChange={handleInputChange} prefix="#" />
                
                <div className="col-span-2 h-px bg-slate-50 my-2"></div>

                <InputGroup label="Price/Lb - Liver" name="priceLiver" value={formData.priceLiver} onChange={handleInputChange} />
                <InputGroup label="Total Lbs - Liver" name="lbsLiver" value={formData.lbsLiver} onChange={handleInputChange} prefix="#" />
                
                <div className="col-span-2 h-px bg-slate-50 my-2"></div>

                <InputGroup label="Price/Lb - Foot" name="priceFoot" value={formData.priceFoot} onChange={handleInputChange} />
                <InputGroup label="Total Lbs - Foot" name="lbsFoot" value={formData.lbsFoot} onChange={handleInputChange} prefix="#" />

                 <div className="col-span-2 h-px bg-slate-50 my-2"></div>

                <InputGroup label="Price/Lb - Neck" name="priceNeck" value={formData.priceNeck} onChange={handleInputChange} />
                <InputGroup label="Total Lbs - Neck" name="lbsNeck" value={formData.lbsNeck} onChange={handleInputChange} prefix="#" />
              </div>
              <div className="mt-2 text-right text-sm font-bold text-slate-600">
                By-Products Revenue: <span className="text-green-600">${((getVal(formData.priceGizzard) * getVal(formData.lbsGizzard)) + (getVal(formData.priceLiver) * getVal(formData.lbsLiver)) + (getVal(formData.priceFoot) * getVal(formData.lbsFoot)) + (getVal(formData.priceNeck) * getVal(formData.lbsNeck))).toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={calculateProfit}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 rounded-xl text-lg shadow-lg shadow-slate-900/20 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Calculator size={24} /> Calculate Profit
            </button>
          </div>

          {/* Results Panel - Sticky on Desktop */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div id="calc-results" className={`bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-500 ${result ? (result.netProfit >= 0 ? 'border-green-500' : 'border-red-500') : 'border-slate-100'}`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <TrendingUp className={result?.netProfit && result.netProfit < 0 ? 'text-red-500' : 'text-green-500'} /> 
                  Results
                </h3>
                
                {!result ? (
                  <div className="text-center py-12 text-slate-400">
                    <Calculator size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Enter your data and click calculate to see your profit breakdown.</p>
                  </div>
                ) : (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                    <div className="space-y-3">
                      <div className="flex justify-between text-slate-600">
                        <span>Total Revenue</span>
                        <span className="font-bold text-green-600">${result.totalRevenue.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Total Expenses</span>
                        <span className="font-bold text-red-500">-${result.totalExpenses.toFixed(2)}</span>
                      </div>
                      <div className="h-px bg-slate-200 my-2"></div>
                      <div className="flex justify-between items-end">
                        <span className="font-bold text-xl text-slate-900">Net Profit</span>
                        <span className={`font-black text-2xl ${result.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          ${result.netProfit.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <button 
                      onClick={downloadPDF}
                      className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-yellow-500/20"
                    >
                      <Download size={20} /> Download PDF Report
                    </button>

                    <div className="bg-slate-50 rounded-xl p-4 text-sm space-y-2">
                      <h4 className="font-bold text-slate-900 mb-2">Cost Breakdown</h4>
                      <div className="flex justify-between text-slate-500">
                        <span>Livestock</span>
                        <span>{((result.livestockCost / result.totalExpenses) * 100).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Feed</span>
                        <span>{((result.feedCost / result.totalExpenses) * 100).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Utilities</span>
                        <span>{((result.utilitiesCost / result.totalExpenses) * 100).toFixed(1)}%</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setResult(null)}
                      className="w-full text-slate-400 hover:text-slate-600 text-sm flex items-center justify-center gap-1"
                    >
                      <RefreshCw size={12} /> Reset Calculation
                    </button>
                  </div>
                )}
              </div>

              {/* Tips */}
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                  <Zap size={16} /> Pro Tip
                </h4>
                <p className="text-sm text-yellow-800/80">
                  Feed costs usually account for 60-70% of total expenses. Reducing feed waste is the fastest way to increase profit margins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};