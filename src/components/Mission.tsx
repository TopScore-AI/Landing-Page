'use client';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from '@/i18n';

export default function Mission() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-2xl">
          {/* Decorative background */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" 
          />

          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="max-w-3xl mx-auto mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-primary border border-white/10 mb-8"
              >
                <Sparkles className="w-3 h-3" />
                {t('mission.label' as any)}
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white tracking-tighter leading-[1.05] mb-8"
              >
                {t('mission.title' as any)}
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-2xl mx-auto text-balance"
              >
                {t('mission.sub' as any)}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/vision"
                  className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary hover:text-white transition-all shadow-xl group"
                >
                  {t('mission.cta' as any)}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
              {[
                { label: t('mission.stat.support' as any), value: "24/7" },
                { label: t('mission.stat.curricula' as any), value: "CBC/KCSE" },
                { label: t('mission.stat.resources' as any), value: "100K+" },
                { label: t('mission.stat.accuracy' as any), value: "99.9%" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-display font-black text-white mb-2">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
