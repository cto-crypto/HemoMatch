'use client';

import { useNavigation } from '@/context/NavigationContext';
import HomeScreen from '@/components/screens/HomeScreen';
import CheckerScreen from '@/components/screens/CheckerScreen';
import ChartScreen from '@/components/screens/ChartScreen';
import LearnScreen from '@/components/screens/LearnScreen';
import MoreScreen from '@/components/screens/MoreScreen';
import CardGeneratorScreen from '@/components/screens/CardGeneratorScreen';
import QuizScreen from '@/components/screens/QuizScreen';
import StatisticsScreen from '@/components/screens/StatisticsScreen';

export default function Page() {
  const { activeScreen } = useNavigation();

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home': return <HomeScreen />;
      case 'checker': return <CheckerScreen />;
      case 'chart': return <ChartScreen />;
      case 'learn': return <LearnScreen />;
      case 'more': return <MoreScreen />;
      case 'card': return <CardGeneratorScreen />;
      case 'quiz': return <QuizScreen />;
      case 'statistics': return <StatisticsScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="h-full">
      {renderScreen()}
    </div>
  );
}
