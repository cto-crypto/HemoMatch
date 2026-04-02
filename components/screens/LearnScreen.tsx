'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigation } from '@/context/NavigationContext';
import { 
  BookOpen, 
  Droplets, 
  Heart, 
  Info, 
  ShieldCheck, 
  ChevronRight,
  Lightbulb,
  AlertTriangle,
  Check,
  Brain
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function LearnScreen() {
  const { t } = useLanguage();
  const { setActiveScreen } = useNavigation();
  const [activeTab, setActiveTab] = React.useState<'basics' | 'myths' | 'quiz'>('basics');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="px-4 py-6 space-y-8">
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">{t.learn.title}</h2>
          <p className="text-xs text-slate-500">Interactive guide to blood groups</p>
        </div>

        {/* Custom Tabs */}
        <div className="flex p-1 bg-slate-100 rounded-[8px] gap-1">
          {(['basics', 'myths', 'quiz'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-[6px] transition-all ${
                activeTab === tab 
                  ? 'bg-white text-medical-blue shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'basics' && (
            <motion.div
              key="basics"
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 gap-3"
            >
              <motion.div variants={item} className="premium-card p-5 flex gap-5 items-start group hover:border-medical-blue/20 transition-all">
                <div className="w-12 h-12 bg-medical-light rounded-[8px] flex items-center justify-center text-medical-blue shrink-0 group-hover:scale-110 transition-transform">
                  <Droplets size={24} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-900">ABO System</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.learn.simpleAbo}</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="premium-card p-5 flex gap-5 items-start group hover:border-medical-blue/20 transition-all">
                <div className="w-12 h-12 bg-medical-light rounded-[8px] flex items-center justify-center text-medical-blue shrink-0 group-hover:scale-110 transition-transform">
                  <Heart size={24} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-900">Rh Factor</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.learn.simpleRh}</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="premium-card p-5 flex gap-5 items-start group hover:border-medical-blue/20 transition-all">
                <div className="w-12 h-12 bg-medical-light rounded-[8px] flex items-center justify-center text-medical-blue shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-900">Why it Matters</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.learn.whyMatters}</p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'myths' && (
            <motion.div
              key="myths"
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="space-y-4"
            >
              {t.myths.items.map((item, idx) => (
                <motion.div key={idx} variants={item} className="premium-card p-5 space-y-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-medical-red/5 rounded-full -mr-8 -mt-8" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-400">
                      <AlertTriangle size={12} className="text-medical-red" />
                      <span className="text-[9px] font-bold uppercase tracking-widest">Common Myth</span>
                    </div>
                    <p className="text-xs font-medium text-slate-500 line-through decoration-slate-300 italic">{item.myth}</p>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-medical-blue">
                      <Check size={12} />
                      <span className="text-[9px] font-bold uppercase tracking-widest">Medical Reality</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-relaxed">{item.reality}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="premium-card p-8 text-center space-y-6 bg-gradient-to-br from-white to-slate-50"
            >
              <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center text-medical-blue mx-auto shadow-inner">
                <BookOpen size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Test Your Knowledge</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Ready to see how much you&apos;ve learned about blood groups? Take our interactive quiz.
                </p>
              </div>
              <button 
                onClick={() => setActiveScreen('quiz')}
                className="btn-primary w-full py-4 shadow-lg shadow-medical-blue/20 flex items-center justify-center gap-2"
              >
                <Brain size={18} />
                Start Quiz
              </button>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">10 Random Questions per Session</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Memory Trick Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1">
          <Lightbulb size={14} className="text-medical-blue" />
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            {t.memory.title}
          </h3>
        </div>
        <motion.div 
          whileHover={{ y: -5 }}
          className="premium-card p-6 bg-gradient-to-br from-medical-blue/5 to-blue-600/5 border-medical-blue/10 space-y-6"
        >
          <p className="text-sm font-bold text-slate-900 italic text-center leading-relaxed">
            &quot;{t.memory.trick}&quot;
          </p>
          <div className="grid grid-cols-1 gap-4">
            {t.memory.rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-4 p-3 bg-white/50 rounded-[8px] border border-white">
                <div className="w-6 h-6 bg-medical-blue text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 shadow-sm">
                  {idx + 1}
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-900">{rule.title}</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
