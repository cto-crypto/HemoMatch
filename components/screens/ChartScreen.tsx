'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { BLOOD_GROUPS } from '@/data/blood-groups';
import { 
  Table, 
  Info, 
  Check, 
  X,
  ChevronRight,
  ArrowDown,
  ArrowRight
} from 'lucide-react';

export default function ChartScreen() {
  const { t, isRTL } = useLanguage();
  const groups = BLOOD_GROUPS.map(bg => bg.id);

  const canDonate = (donor: string, recipient: string) => {
    const donorData = BLOOD_GROUPS.find(bg => bg.id === donor);
    return donorData?.donateTo.includes(recipient as any);
  };

  return (
    <div className="px-4 py-6 space-y-8">
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">{t.chart.title}</h2>
          <p className="text-xs text-slate-500">{t.chart.subtitle}</p>
        </div>

        <div className="premium-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-r border-slate-200">
                    GIVE ↓
                  </th>
                  {groups.map(group => (
                    <th key={group} className="p-2 text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
                      {group}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {groups.map(donor => (
                  <tr key={donor} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-all">
                    <td className="p-2 bg-slate-50/50 text-[10px] font-bold text-slate-600 uppercase tracking-tighter border-r border-slate-200 text-center">
                      {donor}
                    </td>
                    {groups.map(recipient => {
                      const match = canDonate(donor, recipient);
                      return (
                        <td key={recipient} className="p-2 text-center">
                          <div className="flex items-center justify-center">
                            {match ? (
                              <div className="w-5 h-5 bg-medical-blue/10 rounded-[4px] flex items-center justify-center text-medical-blue">
                                <Check size={12} strokeWidth={3} />
                              </div>
                            ) : (
                              <div className="w-5 h-5 bg-slate-100 rounded-[4px] flex items-center justify-center text-slate-300">
                                <X size={10} strokeWidth={3} />
                              </div>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1">
          <Info size={14} className="text-medical-blue" />
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            {t.chart.howTo}
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          <div className="premium-card p-4 flex gap-4 items-start">
            <div className="w-8 h-8 bg-medical-light rounded-[6px] flex items-center justify-center text-medical-blue shrink-0">
              <ArrowDown size={16} />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-900">{t.chart.step1}</p>
              <p className="text-[10px] text-slate-500 leading-relaxed">The vertical column shows who is giving the blood.</p>
            </div>
          </div>
          
          <div className="premium-card p-4 flex gap-4 items-start">
            <div className="w-8 h-8 bg-medical-light rounded-[6px] flex items-center justify-center text-medical-blue shrink-0">
              <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-900">{t.chart.step2}</p>
              <p className="text-[10px] text-slate-500 leading-relaxed">The horizontal row shows who is receiving the blood.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
