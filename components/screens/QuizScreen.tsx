'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigation } from '@/context/NavigationContext';
import { QUIZ_QUESTIONS, QuizQuestion } from '@/data/quiz-questions';
import { 
  ChevronLeft, 
  Trophy, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Timer,
  Brain
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function QuizScreen() {
  const { t, isRTL } = useLanguage();
  const { setActiveScreen } = useNavigation();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime, setStartTime] = useState<number>(() => Date.now());
  const [endTime, setEndTime] = useState<number>(0);

  // Pick 10 random questions
  const [quizSet] = useState(() => {
    const shuffled = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  });

  const currentQuestion = quizSet[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizSet.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setEndTime(Date.now());
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
    setStartTime(Date.now());
  };

  const timeTaken = Math.floor((endTime - startTime) / 1000);

  if (quizCompleted) {
    return (
      <div className="min-h-full bg-slate-50 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-6"
          >
            <Trophy size={48} className="text-yellow-600" />
          </motion.div>
          
          <h2 className="text-2xl font-black text-slate-900 mb-2">Quiz Completed!</h2>
          <p className="text-slate-500 mb-8 text-center">
            You&apos;ve finished the HemoMatch Blood Knowledge Challenge.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full max-w-xs mb-8">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Score</p>
              <p className="text-2xl font-black text-medical-blue">{score}/{quizSet.length}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Time</p>
              <p className="text-2xl font-black text-slate-700">{timeTaken}s</p>
            </div>
          </div>

          <div className="space-y-3 w-full max-w-xs">
            <button 
              onClick={resetQuiz}
              className="btn-primary w-full py-4 flex items-center justify-center gap-2"
            >
              <RotateCcw size={18} />
              Try Again
            </button>
            <button 
              onClick={() => setActiveScreen('home')}
              className="w-full py-4 text-slate-600 font-bold hover:bg-slate-100 rounded-xl transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-slate-50 flex flex-col pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 h-14 flex items-center justify-between">
        <button 
          onClick={() => setActiveScreen('learn')}
          className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-[6px] transition-all"
        >
          <ChevronLeft size={20} className={isRTL ? 'rotate-180' : ''} />
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-xs font-black text-slate-400 uppercase tracking-widest">Question</h1>
          <p className="text-sm font-bold text-slate-900">{currentQuestionIndex + 1} of {quizSet.length}</p>
        </div>
        <div className="w-8 h-8 bg-medical-light rounded-full flex items-center justify-center">
          <Brain size={16} className="text-medical-blue" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 bg-slate-200 w-full">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestionIndex + 1) / quizSet.length) * 100}%` }}
          className="h-full bg-medical-blue"
        />
      </div>

      <div className="flex-1 px-6 py-8 flex flex-col">
        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 leading-tight">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 flex-1">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            
            let borderColor = 'border-slate-200';
            let bgColor = 'bg-white';
            let textColor = 'text-slate-700';

            if (isAnswered) {
              if (isCorrect) {
                borderColor = 'border-green-500';
                bgColor = 'bg-green-50';
                textColor = 'text-green-700';
              } else if (isSelected) {
                borderColor = 'border-red-500';
                bgColor = 'bg-red-50';
                textColor = 'text-red-700';
              }
            } else if (isSelected) {
              borderColor = 'border-medical-blue';
              bgColor = 'bg-medical-light';
              textColor = 'text-medical-blue';
            }

            return (
              <motion.button
                key={index}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOptionSelect(index)}
                disabled={isAnswered}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${borderColor} ${bgColor} ${textColor}`}
              >
                <span className="font-bold">{option}</span>
                {isAnswered && isCorrect && <CheckCircle2 size={20} className="text-green-500" />}
                {isAnswered && isSelected && !isCorrect && <XCircle size={20} className="text-red-500" />}
              </motion.button>
            );
          })}
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-slate-100 rounded-2xl border border-slate-200"
            >
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Explanation</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button */}
        <div className="mt-8">
          {!isAnswered ? (
            <button 
              onClick={handleConfirmAnswer}
              disabled={selectedOption === null}
              className={`w-full py-4 rounded-2xl font-bold transition-all shadow-lg ${
                selectedOption === null 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-medical-blue text-white shadow-medical-blue/20'
              }`}
            >
              Confirm Answer
            </button>
          ) : (
            <button 
              onClick={handleNextQuestion}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20"
            >
              {currentQuestionIndex === quizSet.length - 1 ? 'Finish Quiz' : 'Next Question'}
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
