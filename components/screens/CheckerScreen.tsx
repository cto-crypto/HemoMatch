'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { BLOOD_GROUPS, BloodGroup } from '@/data/blood-groups';
import { 
  Droplets, 
  ArrowRight, 
  Info, 
  CheckCircle2, 
  AlertCircle,
  ChevronRight,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CheckerScreen() {
  const { t, isRTL } = useLanguage();
  const [selectedGroup, setSelectedGroup] = useState<BloodGroup | null>(null);

  const bloodData = selectedGroup ? BLOOD_GROUPS.find(bg => bg.id === selectedGroup) : null;

  return (
    <div className="px-4 py-6 space-y-6">
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">{t.checker.step1}</h2>
          <p className="text-xs text-slate-500">{t.checker.pickBloodType}</p>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {BLOOD_GROUPS.map((bg) => (
            <motion.button
              key={bg.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedGroup(bg.id)}
              className={`premium-card py-4 flex flex-col items-center justify-center gap-1 transition-all ${
                selectedGroup === bg.id 
                  ? 'border-medical-blue bg-medical-blue text-white shadow-lg shadow-medical-blue/30' 
                  : 'hover:border-slate-300 bg-white'
              }`}
            >
              <span className={`text-sm font-bold ${selectedGroup === bg.id ? 'text-white' : 'text-slate-900'}`}>
                {bg.id}
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selectedGroup && bloodData ? (
          <motion.div
            key={selectedGroup}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-4"
          >
            {/* Compatibility Result Card */}
            <div className="premium-card p-5 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 end-0 w-24 h-24 bg-medical-blue/5 rounded-full -me-12 -mt-12" />
              
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 bg-medical-blue rounded-[8px] flex items-center justify-center text-white shadow-inner">
                  <span className="text-lg font-bold">{selectedGroup}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{t.checker.step2}</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">{t.checker.liveCompatibilityMap}</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Can Give To */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-medical-blue">
                      <ArrowRight size={14} className={isRTL ? 'rotate-180' : ''} />
                      <span className="text-[11px] font-bold uppercase tracking-wider">{t.checker.giveTo}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">{bloodData.donateTo.length} {t.checker.groupsCount}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bloodData.donateTo.map(group => (
                      <motion.span 
                        key={group}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="px-3 py-1.5 bg-medical-light text-medical-blue rounded-[6px] text-xs font-bold border border-medical-blue/10 shadow-sm"
                      >
                        {group}
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed bg-slate-50 p-2 rounded-[4px]">
                    <b>{isRTL ? 'کیوں؟' : 'Why?'}</b> {selectedGroup} {t.checker.whyDonate}
                  </p>
                </div>

                {/* Can Receive From */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-600">
                      <ArrowRight size={14} className={`rotate-90 ${isRTL ? 'rotate-[270deg]' : ''}`} />
                      <span className="text-[11px] font-bold uppercase tracking-wider">{t.checker.receiveFrom}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">{bloodData.receiveFrom.length} {t.checker.groupsCount}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bloodData.receiveFrom.map(group => (
                      <motion.span 
                        key={group}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-[6px] text-xs font-bold border border-slate-200 shadow-sm"
                      >
                        {group}
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed bg-slate-50 p-2 rounded-[4px]">
                    <b>{isRTL ? 'کیوں؟' : 'Why?'}</b> {selectedGroup} {t.checker.whyReceive}
                  </p>
                </div>
              </div>
            </div>

            {/* Educational Insight */}
            <div className="premium-card p-4 bg-medical-light/20 border-medical-blue/10 flex gap-4 items-center">
              <div className="w-10 h-10 bg-white rounded-[6px] flex items-center justify-center text-medical-blue shrink-0 shadow-sm">
                <Lightbulb size={20} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold text-medical-blue uppercase tracking-widest">{t.checker.expertInsight}</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.checker.supportiveNote}
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 animate-pulse">
              <Droplets size={40} />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-400">{t.checker.selectGroup}</p>
              <p className="text-xs text-slate-300">{t.checker.discoverSecrets}</p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
