'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigation } from '@/context/NavigationContext';
import { BLOOD_GROUPS } from '@/data/blood-groups';
import { 
  Droplets, 
  ArrowRight, 
  ShieldCheck, 
  Heart,
  ChevronRight,
  Contact,
  Info,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function HomeScreen() {
  const { t } = useLanguage();
  const { setActiveScreen } = useNavigation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="px-4 py-6 space-y-8"
    >
      {/* Hero Section */}
      <motion.section variants={item} className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
            {t.home.welcome}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
            {t.home.subtitle}
          </p>
        </div>
        
        <button 
          onClick={() => setActiveScreen('checker')}
          className="btn-primary w-full flex items-center justify-center gap-2 py-4 shadow-lg shadow-medical-blue/20 group"
        >
          {t.home.cta}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.section>

      {/* Interactive Quick Select */}
      <motion.section variants={item} className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            {t.home.quickSelect}
          </h3>
          <span className="text-[10px] text-medical-blue font-bold animate-pulse">Tap to explore</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {BLOOD_GROUPS.map((bg) => (
            <motion.button
              key={bg.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveScreen('checker')}
              className="premium-card flex flex-col items-center justify-center py-4 gap-1 hover:border-medical-blue/30 hover:bg-medical-light/10 transition-all"
            >
              <span className="text-base font-bold text-slate-900">{bg.id}</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">{bg.rarity}%</span>
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Interactive Blood Drop Counter */}
      <motion.section variants={item} className="space-y-4">
        <div className="premium-card p-6 bg-white border-slate-200 flex flex-col items-center text-center space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-medical-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">Community Impact</h3>
            <p className="text-xs text-slate-500">Tap the drop to simulate a donation</p>
          </div>
          
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 bg-medical-light rounded-full flex items-center justify-center relative z-10 shadow-inner group"
            >
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Droplets size={40} className="text-medical-blue fill-medical-blue/20" />
              </motion.div>
            </motion.button>
            
            {/* Floating Drops Animation */}
            <AnimatePresence>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 1, 0], y: -50, scale: [0.5, 1, 0.5] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: "easeOut"
                  }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
                >
                  <Droplets size={16} className="text-medical-blue/40" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="space-y-1">
            <p className="text-2xl font-black text-medical-blue">1,248,392</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Simulated Lives Saved</p>
          </div>
        </div>
      </motion.section>

      {/* Educational Fact Card */}
      <motion.section variants={item}>
        <div className="premium-card p-4 bg-gradient-to-br from-medical-blue to-blue-700 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform duration-700" />
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <Info size={12} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Did you know?</span>
            </div>
            <p className="text-sm font-medium leading-relaxed">
              Blood is actually <b>living tissue</b>. It carries oxygen, nutrients, and helps fight infections.
            </p>
            <button 
              onClick={() => setActiveScreen('learn')}
              className="text-[11px] font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Learn more about blood groups
            </button>
          </div>
        </div>
      </motion.section>

      {/* Features Row */}
      <motion.section variants={item} className="grid grid-cols-1 gap-3">
        <button 
          onClick={() => setActiveScreen('card')}
          className="premium-card p-4 flex items-center gap-4 border-medical-blue/10 bg-medical-light/30 hover:bg-medical-light/50 transition-all group"
        >
          <div className="w-12 h-12 bg-medical-blue/10 rounded-[8px] flex items-center justify-center text-medical-blue group-hover:scale-110 transition-transform">
            <Contact size={24} />
          </div>
          <div className="flex-1 text-left">
            <h4 className="text-sm font-bold text-slate-900">{t.card.title}</h4>
            <p className="text-[10px] text-slate-500">{t.card.subtitle}</p>
          </div>
          <ChevronRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
        </button>

        <button 
          onClick={() => setActiveScreen('statistics')}
          className="premium-card p-4 flex items-center gap-4 border-slate-200 bg-white hover:bg-slate-50 transition-all group"
        >
          <div className="w-12 h-12 bg-blue-50 rounded-[8px] flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
            <BarChart3 size={24} />
          </div>
          <div className="flex-1 text-left">
            <h4 className="text-sm font-bold text-slate-900">Global Statistics</h4>
            <p className="text-[10px] text-slate-500">Explore blood type distribution worldwide</p>
          </div>
          <ChevronRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="grid grid-cols-2 gap-3">
          <div className="premium-card p-4 space-y-2 hover:border-medical-blue/20 transition-all">
            <div className="w-8 h-8 bg-medical-light rounded-[6px] flex items-center justify-center text-medical-blue">
              <Droplets size={16} />
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{t.home.universalDonor}</p>
              <p className="text-sm font-bold text-slate-900">O Negative</p>
            </div>
          </div>
          <div className="premium-card p-4 space-y-2 hover:border-medical-blue/20 transition-all">
            <div className="w-8 h-8 bg-medical-light rounded-[6px] flex items-center justify-center text-medical-blue">
              <Heart size={16} />
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{t.home.universalRecipient}</p>
              <p className="text-sm font-bold text-slate-900">AB Positive</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trust Badge */}
      <motion.div variants={item} className="flex items-center justify-center gap-2 pt-4">
        <ShieldCheck size={14} className="text-slate-300" />
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Verified Medical Info</span>
      </motion.div>
    </motion.div>
  );
}
