'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Screen = 'home' | 'checker' | 'card' | 'learn' | 'quiz' | 'statistics' | 'chart' | 'more';

interface NavigationContextType {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  return (
    <NavigationContext.Provider value={{ activeScreen, setActiveScreen }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
