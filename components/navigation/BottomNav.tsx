import React from 'react';
import { useNavigation, Screen } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Home, 
  Search, 
  Table, 
  BookOpen, 
  MoreHorizontal,
  BarChart3
} from 'lucide-react';

export default function BottomNav() {
  const { activeScreen, setActiveScreen } = useNavigation();
  const { t } = useLanguage();

  const navItems: { id: Screen; icon: any; label: string }[] = [
    { id: 'home', icon: Home, label: t.tabs.home },
    { id: 'checker', icon: Search, label: t.tabs.checker },
    { id: 'statistics', icon: BarChart3, label: 'Stats' },
    { id: 'learn', icon: BookOpen, label: t.tabs.learn },
    { id: 'more', icon: MoreHorizontal, label: t.tabs.more },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-t border-slate-200 flex items-center justify-around px-2 z-50">
      <div className="max-w-4xl mx-auto w-full flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveScreen(item.id)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[64px] h-12 rounded-[6px] transition-all relative ${
                isActive ? 'text-medical-blue' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[9px] font-bold uppercase tracking-wider ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -bottom-2 w-1 h-1 bg-medical-blue rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
