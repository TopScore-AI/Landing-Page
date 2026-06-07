'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { useLocale } from '@/i18n';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative pt-32 pb-40 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-white -z-20" />
      
      {/* Mesh Gradient */}
      <div className="absolute top-0 left-0 w-full h-full -z-15 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/5 border border-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10"
            >
              <Sparkles className="w-3 h-3" />
              <span>{t('hero.badge' as any)}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[100px] font-display font-black leading-[0.95] lg:leading-[0.85] tracking-[-0.04em] text-slate-900 mb-8"
            >
              {t('hero.h1a' as any)}
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-indigo-500 to-brand-secondary">
                {t('hero.h1Grad' as any)}
              </span>
              <span className="text-4xl md:text-6xl lg:text-7xl text-slate-400 tracking-tight font-bold mt-4 block">
                {t('hero.h1b' as any)}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl mb-12 font-medium"
            >
              {t('hero.sub' as any)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
            >
              <a 
                href="https://app.topscoreapp.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-2xl shadow-slate-200 flex items-center justify-center gap-3 transition-all hover:bg-brand-primary hover:shadow-brand-primary/20 hover:-translate-y-1"
              >
                {t('hero.cta' as any)} 
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#features"
                className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 transition-all text-center"
              >
                {t('hero.explore' as any)}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 pt-10 border-t border-slate-100 w-full flex flex-wrap justify-center lg:justify-start gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <a href="https://play.google.com/store/apps/details?id=com.topscoreapp.ai" target="_blank" rel="noopener noreferrer">
                <img src="/GetItOnGooglePlay_Badge_Web_color_English.svg" alt="Google Play" className="h-8 w-auto" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/app-store-badge.svg" alt="App Store" className="h-8 w-auto" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative w-full max-w-2xl lg:max-w-none"
          >
            <div className="relative grid grid-cols-2 gap-6 p-4">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/5 to-brand-secondary/5 rounded-[4rem] -z-10 blur-2xl" />
              
              <div className="space-y-6">
                <HeroCard 
                  icon={<Play className="w-6 h-6" />}
                  title="Interactive Quiz"
                  desc="Practice quizzes and self-assessment for KCSE."
                  color="bg-indigo-50 text-brand-primary"
                  delay={0.4}
                  float="y"
                />
                <HeroCard 
                  icon={<Sparkles className="w-6 h-6" />}
                  title="Multimodal Live"
                  desc="AI camera vision for step-by-step problem solving."
                  color="bg-slate-900 text-white"
                  dark
                  delay={0.6}
                  float="y"
                />
              </div>
              <div className="space-y-6 pt-12">
                <HeroCard 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>}
                  title="AI PDF Reader"
                  desc="Synced PDF parsing powered by AI indexing."
                  color="bg-emerald-50 text-emerald-600"
                  delay={0.5}
                  float="x"
                />
                <HeroCard 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>}
                  title="Smart Flashcards"
                  desc="Automatic spaced repetition based on curriculum depth."
                  color="bg-rose-50 text-rose-600"
                  delay={0.7}
                  float="x"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroCard({ icon, title, desc, color, dark, delay, float }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        [float === 'y' ? 'y' : 'x']: [0, float === 'y' ? -15 : 15, 0]
      }}
      transition={{ 
        opacity: { duration: 0.5, delay },
        y: { duration: 0.5, delay },
        [float === 'y' ? 'y' : 'x']: { duration: 6, repeat: Infinity, ease: "easeInOut", delay }
      } as any}
      className={`${dark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-100 text-slate-900'} p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border flex flex-col gap-6 hover:shadow-brand-primary/10 transition-all group`}
    >
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center shadow-inner`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold tracking-tight mb-2">{title}</h3>
        <p className={`${dark ? 'text-slate-400' : 'text-slate-500'} text-sm leading-relaxed font-medium`}>{desc}</p>
      </div>
    </motion.div>
  );
}
