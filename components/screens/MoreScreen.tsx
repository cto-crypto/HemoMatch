'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigation } from '@/context/NavigationContext';
import { 
  Globe, 
  Info, 
  ShieldAlert, 
  Share2, 
  Heart, 
  Calendar, 
  ChevronRight,
  UserCheck,
  Droplets,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MoreScreen() {
  const { language, setLanguage, t } = useLanguage();
  const { setActiveScreen } = useNavigation();
  const [showDonationTracker, setShowDonationTracker] = useState(false);
  const [lastDonation, setLastDonation] = useState('');

  const calculateNextEligible = (date: string) => {
    if (!date) return null;
    const d = new Date(date);
    d.setMonth(d.getMonth() + 3);
    return d.toLocaleDateString(language === 'en' ? 'en-US' : 'ur-PK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const nextDate = calculateNextEligible(lastDonation);

  return (
    <div className="px-4 py-6 space-y-8">
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">{t.more.title}</h2>
          <p className="text-xs text-slate-500">App settings and resources</p>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {/* Donation Tracker */}
          <button 
            onClick={() => setShowDonationTracker(!showDonationTracker)}
            className="premium-card p-4 flex items-center gap-4 hover:border-medical-blue/20"
          >
            <div className="w-10 h-10 bg-medical-light rounded-[6px] flex items-center justify-center text-medical-blue shrink-0">
              <Calendar size={20} />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-sm font-bold text-slate-900">{t.more.tracker}</h4>
              <p className="text-[10px] text-slate-500">Track your eligibility</p>
            </div>
            <ChevronRight size={16} className={`text-slate-300 transition-transform ${showDonationTracker ? 'rotate-90' : ''}`} />
          </button>

          <AnimatePresence>
            {showDonationTracker && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="premium-card p-4 bg-slate-50/50 border-slate-200 mt-2 space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                      {t.tracker.label}
                    </label>
                    <input
                      type="date"
                      value={lastDonation}
                      onChange={(e) => setLastDonation(e.target.value)}
                      className="input-premium"
                    />
                  </div>
                  
                  {nextDate ? (
                    <div className="p-3 bg-medical-blue/5 rounded-[6px] border border-medical-blue/10 space-y-1">
                      <p className="text-[10px] font-bold text-medical-blue uppercase tracking-widest">{t.tracker.nextDate}</p>
                      <p className="text-sm font-bold text-slate-900">{nextDate}</p>
                    </div>
                  ) : (
                    <p className="text-[10px] text-slate-400 italic px-1">{t.tracker.empty}</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Other Options */}
          <button 
            onClick={() => setActiveScreen('card')}
            className="premium-card p-4 flex items-center gap-4 hover:border-medical-blue/20"
          >
            <div className="w-10 h-10 bg-medical-light rounded-[6px] flex items-center justify-center text-medical-blue shrink-0">
              <Droplets size={20} />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-sm font-bold text-slate-900">{t.card.title}</h4>
              <p className="text-[10px] text-slate-500">Digital emergency ID</p>
            </div>
            <ChevronRight size={16} className="text-slate-300" />
          </button>

          <div className="premium-card p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-medical-light rounded-[6px] flex items-center justify-center text-medical-blue shrink-0">
              <UserCheck size={20} />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-sm font-bold text-slate-900">{t.more.eligibility}</h4>
              <p className="text-[10px] text-slate-500">Check if you can donate</p>
            </div>
            <ChevronRight size={16} className="text-slate-300" />
          </div>

          <div className="premium-card p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-medical-light rounded-[6px] flex items-center justify-center text-medical-blue shrink-0">
              <Globe size={20} />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-sm font-bold text-slate-900">{t.more.language}</h4>
              <p className="text-[10px] text-slate-500">English / اردو</p>
            </div>
            <div className="flex gap-1">
              <button onClick={() => setLanguage('en')} className={`px-2 py-1 rounded-[4px] text-[10px] font-bold ${language === 'en' ? 'bg-medical-blue text-white' : 'bg-slate-100 text-slate-400'}`}>EN</button>
              <button onClick={() => setLanguage('ur')} className={`px-2 py-1 rounded-[4px] text-[10px] font-bold ${language === 'ur' ? 'bg-medical-blue text-white' : 'bg-slate-100 text-slate-400'}`}>UR</button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1">
          <HelpCircle size={14} className="text-slate-300" />
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Resources</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          <div className="premium-card p-4 space-y-2">
            <div className="flex items-center gap-2 text-medical-blue">
              <ShieldAlert size={14} />
              <h4 className="text-xs font-bold uppercase tracking-wider">{t.more.disclaimer}</h4>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">{t.disclaimer.text}</p>
          </div>

          <div className="premium-card p-4 space-y-2">
            <div className="flex items-center gap-2 text-slate-400">
              <Info size={14} />
              <h4 className="text-xs font-bold uppercase tracking-wider">{t.more.about}</h4>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">HemoMatch is a premium medical utility designed to simplify blood group compatibility and provide emergency identification tools.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center gap-4 pt-8 pb-4">
        <div className="flex items-center gap-2 text-slate-300">
          <Heart size={14} fill="currentColor" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">HemoMatch v1.0</span>
        </div>
        <button className="btn-secondary w-full flex items-center justify-center gap-2">
          <Share2 size={16} />
          {t.more.share}
        </button>
      </div>
    </div>
  );
}
