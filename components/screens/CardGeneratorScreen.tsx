'use client';

import React, { useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigation } from '@/context/NavigationContext';
import { BLOOD_GROUPS, BloodGroup } from '@/data/blood-groups';
import { 
  Download, 
  Share2, 
  User, 
  Phone, 
  MapPin, 
  Calendar, 
  AlertCircle,
  ShieldCheck,
  Heart,
  Droplets,
  ChevronLeft,
  X,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toPng } from 'html-to-image';

interface CardData {
  name: string;
  bloodGroup: BloodGroup;
  age: string;
  phone: string;
  location: string;
  emergencyName: string;
  emergencyPhone: string;
  medicalNote: string;
}

const INITIAL_DATA: CardData = {
  name: '',
  bloodGroup: 'O+',
  age: '',
  phone: '',
  location: '',
  emergencyName: '',
  emergencyPhone: '',
  medicalNote: '',
};

export default function CardGeneratorScreen() {
  const { t, isRTL } = useLanguage();
  const { setActiveScreen } = useNavigation();
  const [formData, setFormData] = useState<CardData>(INITIAL_DATA);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCompatibility, setShowCompatibility] = useState(false);
  const [revealEmergency, setRevealEmergency] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const bloodData = BLOOD_GROUPS.find(bg => bg.id === formData.bloodGroup);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 3,
        backgroundColor: '#f8fafc',
      });
      const link = document.createElement('a');
      link.download = `HemoMatch-ID-${formData.name.replace(/\s+/g, '-')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const shareCard = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 3,
        backgroundColor: '#f8fafc',
      });
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'HemoMatch-ID.png', { type: 'image/png' });

      if (navigator.share) {
        await navigator.share({
          files: [file],
          title: 'HemoMatch Blood ID',
          text: 'My digital blood ID card generated via HemoMatch.',
        });
      }
    } catch (err) {
      console.error('Failed to share', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-full bg-slate-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 h-14 flex items-center justify-between">
        <button 
          onClick={() => setActiveScreen('home')}
          className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-[6px] transition-all"
        >
          <ChevronLeft size={20} className={isRTL ? 'rotate-180' : ''} />
        </button>
        <h1 className="text-sm font-bold text-slate-900">{t.card.title}</h1>
        <div className="w-8" />
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-8">
        {/* Live Card Preview */}
        <div className="sticky top-20 z-30 perspective-1000">
          <motion.div 
            initial={{ rotateX: 20, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            className="flex justify-center"
          >
            <div 
              ref={cardRef}
              className="w-[320px] bg-white rounded-[16px] shadow-2xl overflow-hidden border border-white/20 relative group"
            >
              {/* Holographic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Card Header */}
              <div className="bg-medical-blue p-5 flex justify-between items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl" />
                <div className="relative z-10 space-y-0.5">
                  <p className="text-[9px] font-black text-white/60 tracking-[0.3em] uppercase">
                    {t.card.idLabel}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Heart size={14} className="text-white" fill="currentColor" />
                    </div>
                    <span className="text-base font-bold text-white tracking-tight">HemoMatch</span>
                  </div>
                </div>
                <div className="relative z-10 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-[6px] border border-white/10">
                  <p className="text-[8px] font-bold text-white tracking-widest uppercase">
                    {t.card.validID}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6 bg-white relative">
                <div className="flex justify-between items-start">
                  <div className="space-y-5">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        {t.card.form.name}
                      </p>
                      <p className="text-base font-bold text-slate-900 leading-tight">
                        {formData.name || 'Your Name'}
                      </p>
                    </div>
                    <div className="flex gap-8">
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          {t.card.form.age}
                        </p>
                        <p className="text-sm font-bold text-slate-700">
                          {formData.age || '--'}
                        </p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          {t.card.form.location}
                        </p>
                        <p className="text-sm font-bold text-slate-700 truncate max-w-[100px]">
                          {formData.location || '---'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Blood Group Badge (Interactive) */}
                  <div className="flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() => setShowCompatibility(!showCompatibility)}
                      className="w-20 h-20 bg-medical-light rounded-[12px] border-2 border-medical-blue flex items-center justify-center relative overflow-hidden shadow-inner active:scale-95 transition-transform group/badge"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/10 to-transparent" />
                      <span className="text-3xl font-black text-medical-blue relative z-10 drop-shadow-sm">
                        {formData.bloodGroup}
                      </span>
                      <div className="absolute bottom-1 right-1 opacity-0 group-hover/badge:opacity-100 transition-opacity">
                        <Info size={10} className="text-medical-blue/40" />
                      </div>
                    </button>
                    <p className="text-[8px] font-bold text-medical-blue mt-2 tracking-widest uppercase">
                      {t.card.form.bloodGroup}
                    </p>
                  </div>
                </div>

                {/* Compatibility Overlay */}
                <AnimatePresence>
                  {showCompatibility && bloodData && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-x-6 top-6 bottom-6 bg-white/95 backdrop-blur-sm z-20 rounded-[12px] border border-medical-blue/20 p-4 shadow-xl flex flex-col justify-center space-y-4"
                    >
                      <button 
                        onClick={() => setShowCompatibility(false)}
                        className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
                      >
                        <X size={16} />
                      </button>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <p className="text-[8px] font-bold text-medical-blue uppercase tracking-widest">Can Give To</p>
                          <div className="flex flex-wrap gap-1">
                            {bloodData.donateTo.map(g => (
                              <span key={g} className="px-1.5 py-0.5 bg-medical-light text-medical-blue rounded-[4px] text-[9px] font-bold">{g}</span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Can Receive From</p>
                          <div className="flex flex-wrap gap-1">
                            {bloodData.receiveFrom.map(g => (
                              <span key={g} className="px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded-[4px] text-[9px] font-bold">{g}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-[8px] text-slate-400 italic text-center">Tap anywhere to close</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Emergency Info (Interactive Reveal) */}
                <div 
                  className="bg-slate-50 rounded-[10px] p-4 border border-slate-100 space-y-4 shadow-sm relative overflow-hidden cursor-pointer group/emergency"
                  onMouseEnter={() => setRevealEmergency(true)}
                  onMouseLeave={() => setRevealEmergency(false)}
                  onClick={() => setRevealEmergency(!revealEmergency)}
                >
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle size={12} className="text-medical-red" />
                      <p className="text-[9px] font-black text-medical-red uppercase tracking-widest">
                        {t.card.emergencyContact}
                      </p>
                    </div>
                    {!revealEmergency && (
                      <span className="text-[8px] font-bold text-slate-400 animate-pulse uppercase">Tap to reveal</span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 relative">
                    {/* Blurred Overlay */}
                    <AnimatePresence>
                      {!revealEmergency && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-slate-50/80 backdrop-blur-[4px] z-10 flex items-center justify-center"
                        >
                          <ShieldCheck size={16} className="text-slate-300" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="relative z-0">
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        {t.card.form.emergencyName}
                      </p>
                      <p className="text-[11px] font-bold text-slate-700">
                        {formData.emergencyName || '---'}
                      </p>
                    </div>
                    <div className="relative z-0">
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        {t.card.form.emergencyPhone}
                      </p>
                      <p className="text-[11px] font-bold text-slate-700">
                        {formData.emergencyPhone || '---'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={12} className="text-medical-blue" />
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                    HemoMatch Medical ID
                  </span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200">
                  <Droplets size={14} className="text-medical-blue" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-lg font-bold text-slate-900">Personalize Your ID</h2>
            <p className="text-xs text-slate-500">Fill in your details to update the card live</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-5">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                  {t.card.form.name}
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-medical-blue transition-colors" size={14} />
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-premium pl-9 focus:ring-2 focus:ring-medical-blue/10"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Blood Group & Age */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                    {t.card.form.bloodGroup}
                  </label>
                  <div className="relative group">
                    <Droplets className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-medical-blue transition-colors" size={14} />
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      className="input-premium pl-9 appearance-none focus:ring-2 focus:ring-medical-blue/10"
                    >
                      {BLOOD_GROUPS.map(bg => (
                        <option key={bg.id} value={bg.id}>{bg.id}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                    {t.card.form.age}
                  </label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-medical-blue transition-colors" size={14} />
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="input-premium pl-9 focus:ring-2 focus:ring-medical-blue/10"
                      placeholder="25"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                    {t.card.form.phone}
                  </label>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-medical-blue transition-colors" size={14} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-premium pl-9 focus:ring-2 focus:ring-medical-blue/10"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                    {t.card.form.location}
                  </label>
                  <div className="relative group">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-medical-blue transition-colors" size={14} />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="input-premium pl-9 focus:ring-2 focus:ring-medical-blue/10"
                      placeholder="New York, USA"
                    />
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="pt-4 border-t border-slate-200 mt-2 space-y-4">
                <div className="flex items-center gap-2">
                  <AlertCircle size={14} className="text-medical-red" />
                  <p className="text-[11px] font-bold text-medical-red uppercase tracking-[0.2em]">
                    {t.card.emergencyContact}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                      {t.card.form.emergencyName}
                    </label>
                    <input
                      type="text"
                      name="emergencyName"
                      value={formData.emergencyName}
                      onChange={handleInputChange}
                      className="input-premium focus:ring-2 focus:ring-medical-blue/10"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                      {t.card.form.emergencyPhone}
                    </label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      className="input-premium focus:ring-2 focus:ring-medical-blue/10"
                      placeholder="+1 987 654 321"
                    />
                  </div>
                </div>
              </div>

              {/* Medical Note */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                  {t.card.form.medicalNote}
                </label>
                <textarea
                  name="medicalNote"
                  value={formData.medicalNote}
                  onChange={handleInputChange}
                  className="input-premium min-h-[100px] resize-none focus:ring-2 focus:ring-medical-blue/10"
                  placeholder="Any allergies or medical conditions..."
                />
              </div>
            </div>

            <div className="pt-6 flex gap-4">
              <button
                type="button"
                onClick={downloadCard}
                disabled={isGenerating || !formData.name}
                className="btn-primary flex-1 flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:grayscale"
              >
                <Download size={18} />
                {t.card.preview.download}
              </button>
              <button
                type="button"
                onClick={shareCard}
                disabled={isGenerating || !formData.name}
                className="btn-secondary flex-1 flex items-center justify-center gap-2 py-4 disabled:opacity-50"
              >
                <Share2 size={18} />
                {t.card.preview.share}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
