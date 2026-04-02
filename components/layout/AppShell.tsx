'use client';

import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';
import BottomNav from '@/components/navigation/BottomNav';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { language, setLanguage } = useLanguage();
  const { activeScreen } = useNavigation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const isCardScreen = activeScreen === 'card';

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      {/* Top Header */}
      {!isCardScreen && (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 flex items-center px-4">
          <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-medical-blue rounded-[6px] flex items-center justify-center text-white shadow-sm">
                <Heart size={18} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-tight text-slate-900 leading-none">HemoMatch</span>
                <span className="text-[8px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">Blood Guide</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex bg-slate-100 p-1 rounded-[6px] border border-slate-200">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-[4px] text-[10px] font-bold transition-all ${
                    language === 'en' ? 'bg-white text-medical-blue shadow-sm' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('ur')}
                  className={`px-3 py-1 rounded-[4px] text-[10px] font-bold transition-all ${
                    language === 'ur' ? 'bg-white text-medical-blue shadow-sm' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  اردو
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 overflow-y-auto ${isCardScreen ? 'pt-0' : 'pt-16'} pb-24 scroll-smooth`}>
        <div className="max-w-4xl mx-auto min-h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Navigation */}
      {!isCardScreen && (
        <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50 pointer-events-none">
          <div className="w-full max-w-4xl pointer-events-auto">
            <BottomNav />
          </div>
        </div>
      )}
    </div>
  );
}
