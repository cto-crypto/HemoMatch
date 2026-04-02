'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigation } from '@/context/NavigationContext';
import { 
  ChevronLeft, 
  BarChart3, 
  PieChart as PieChartIcon, 
  TrendingUp, 
  Info,
  Droplets,
  Globe,
  AlertCircle,
  Table
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend 
} from 'recharts';

const GLOBAL_DATA = [
  { name: 'O+', value: 37, color: '#ef4444' },
  { name: 'A+', value: 34, color: '#3b82f6' },
  { name: 'B+', value: 10, color: '#10b981' },
  { name: 'O-', value: 7, color: '#f59e0b' },
  { name: 'A-', value: 6, color: '#8b5cf6' },
  { name: 'AB+', value: 3, color: '#ec4899' },
  { name: 'B-', value: 2, color: '#6366f1' },
  { name: 'AB-', value: 1, color: '#14b8a6' },
];

const REGIONAL_DATA = [
  { region: 'Africa', O: 50, A: 25, B: 20, AB: 5 },
  { region: 'Americas', O: 45, A: 35, B: 15, AB: 5 },
  { region: 'Asia', O: 35, A: 30, B: 25, AB: 10 },
  { region: 'Europe', O: 40, A: 40, B: 15, AB: 5 },
];

const SHORTAGE_DATA = [
  { type: 'O-', level: 15, status: 'Critical' },
  { type: 'O+', level: 45, status: 'Stable' },
  { type: 'B-', level: 25, status: 'Low' },
  { type: 'A-', level: 30, status: 'Low' },
];

export default function StatisticsScreen() {
  const { t, isRTL } = useLanguage();
  const { setActiveScreen } = useNavigation();

  return (
    <div className="min-h-full bg-slate-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 h-14 flex items-center justify-between">
        <button 
          onClick={() => setActiveScreen('home')}
          className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-[6px] transition-all"
        >
          <ChevronLeft size={20} className={isRTL ? 'rotate-180' : ''} />
        </button>
        <h1 className="text-sm font-bold text-slate-900">{t.stats.title}</h1>
        <div className="w-8 h-8 bg-medical-light rounded-full flex items-center justify-center">
          <BarChart3 size={16} className="text-medical-blue" />
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-8">
        {/* Live Shortage Alert */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-50 border border-red-100 p-5 rounded-[24px] relative overflow-hidden"
        >
          <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} p-4 opacity-10`}>
            <AlertCircle size={64} className="text-red-600" />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <h3 className="text-xs font-black text-red-600 uppercase tracking-widest">{t.stats.shortageAlert}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {SHORTAGE_DATA.map((item) => (
                <div key={item.type} className="bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-red-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-black text-slate-900">{item.type}</span>
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${
                      item.status === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {item.status === 'Critical' ? t.stats.shortageCritical : t.stats.shortageLow}
                    </span>
                  </div>
                  <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      className={`h-full ${item.status === 'Critical' ? 'bg-red-500' : 'bg-orange-500'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-red-600/70 italic">{t.stats.shortageSimulated}</p>
          </div>
        </motion.div>

        {/* Global Distribution Pie Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <PieChartIcon size={16} className="text-red-600" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">{t.stats.globalDistribution}</h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t.stats.percentByType}</p>
            </div>
          </div>

          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={GLOBAL_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={1500}
                >
                  {GLOBAL_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Regional Comparison Bar Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Globe size={16} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">{t.stats.regionalComparison}</h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t.stats.aboByRegion}</p>
            </div>
          </div>

          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REGIONAL_DATA}>
                <XAxis dataKey="region" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold' }} />
                <Bar dataKey="O" fill="#ef4444" radius={[4, 4, 0, 0]} />
                <Bar dataKey="A" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="B" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="AB" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Compatibility Matrix Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <Table size={16} className="text-purple-600" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">{t.stats.donorRecip}</h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t.stats.rowsDonorColsRecip}</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[9px] border-collapse">
              <thead>
                <tr>
                  <th className="p-1 border border-slate-100 bg-slate-50">{t.stats.donorRecipHeader}</th>
                  {['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'].map(type => (
                    <th key={type} className="p-1 border border-slate-100 bg-slate-50 font-bold">{type}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'].map(donor => (
                  <tr key={donor}>
                    <td className="p-1 border border-slate-100 bg-slate-50 font-bold">{donor}</td>
                    {['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'].map(recip => {
                      // Simplified logic for visualization
                      const isCompatible = 
                        donor === 'O-' || 
                        (donor === 'O+' && recip.includes('+')) ||
                        (donor === 'A-' && (recip.includes('A') || recip.includes('AB')) && !recip.includes('+')) ||
                        (donor === 'A+' && (recip === 'A+' || recip === 'AB+')) ||
                        // ... and so on, but for the matrix we can just use a boolean map or simple rules
                        (donor === recip); // Placeholder for visual effect
                      
                      // Real logic for matrix
                      const canGive = (d: string, r: string) => {
                        const dRh = d.endsWith('+');
                        const rRh = r.endsWith('+');
                        const dType = d.slice(0, -1);
                        const rType = r.slice(0, -1);
                        
                        if (dRh && !rRh) return false;
                        if (dType === 'O') return true;
                        if (dType === 'A') return rType === 'A' || rType === 'AB';
                        if (dType === 'B') return rType === 'B' || rType === 'AB';
                        if (dType === 'AB') return rType === 'AB';
                        return false;
                      };

                      const compatible = canGive(donor, recip);

                      return (
                        <td key={recip} className={`p-1 border border-slate-100 text-center ${compatible ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-300'}`}>
                          {compatible ? '✓' : '×'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[8px] text-slate-400 text-center uppercase tracking-widest font-bold">{t.stats.matrixLegend}</p>
        </motion.div>

        {/* Fun Fact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-medical-blue p-6 rounded-[24px] text-white relative overflow-hidden"
        >
          <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-32 h-32 bg-white/10 rounded-full ${isRTL ? '-ml-16' : '-mr-16'} -mt-16 blur-xl`} />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={20} />
              <h3 className="text-lg font-bold">{t.stats.growthTrends}</h3>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              {t.stats.growthTrendsDesc}
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60">
              <Info size={12} />
              {t.stats.sourceWho}
            </div>
          </div>
        </motion.div>

        {/* Interactive Compatibility Matrix Teaser */}
        <button 
          onClick={() => setActiveScreen('checker')}
          className="w-full bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex items-center justify-between group hover:border-medical-blue transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-medical-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Droplets size={24} className="text-medical-blue" />
            </div>
            <div className="text-start">
              <h3 className="text-base font-bold text-slate-900">{t.stats.donorRecip}</h3>
              <p className="text-xs text-slate-500">{t.stats.rowsDonorColsRecip}</p>
            </div>
          </div>
          <ChevronLeft size={20} className={`text-slate-300 group-hover:text-medical-blue transition-all rotate-180`} />
        </button>
      </div>
    </div>
  );
}
