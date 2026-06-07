'use client';
import { useLocale } from '@/i18n';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import styles from './Personalization.module.css';
import { Calendar, Target, Activity, Brain } from 'lucide-react';

const personalFeatures = [
    { icon: <Calendar />, idx: 0, color: '#3b82f6' },
    { icon: <Target />, idx: 1, color: '#10b981' },
    { icon: <Activity />, idx: 2, color: '#f59e0b' },
    { icon: <Brain />, idx: 3, color: '#8b5cf6' },
];

export default function Personalization() {
    const { t } = useLocale();

    return (
        <section className={styles.wrapper} id="personalization">
            <div className={styles.container}>
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <AnimatedSection animation="fadeUp">
                            <div className={styles.label}>{t('personal.label' as any)}</div>
                            <h2 className={styles.title}>{t('personal.title' as any)}</h2>
                            <p className={styles.sub}>{t('personal.sub' as any)}</p>
                            
                            <div className="mt-16 space-y-12">
                                {personalFeatures.map((f) => (
                                    <div key={f.idx} className="flex gap-6 items-start group">
                                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                                            {f.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{t(`personal.${f.idx}.name` as any)}</h3>
                                            <p className="text-slate-500 font-medium leading-relaxed">{t(`personal.${f.idx}.desc` as any)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="flex-1 relative w-full max-w-xl">
                        <AnimatedSection animation="fadeUp" delay="0.3s">
                            <div className="relative aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-indigo-50/50 to-brand-secondary/10 rounded-[4rem] blur-3xl -z-10" />
                                <div className="absolute inset-0 border-2 border-slate-100 rounded-[4rem] bg-white/50 backdrop-blur-xl shadow-2xl shadow-slate-200/50 flex items-center justify-center p-12 overflow-hidden">
                                    <div className="relative w-full aspect-video bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent" />
                                        <div className="p-8 h-full flex flex-col justify-between">
                                            <div className="flex items-center justify-between">
                                                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                                    <Brain className="w-6 h-6 text-brand-primary" />
                                                </div>
                                                <div className="px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-widest">Live Analysis</div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                                                <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                                                <div className="h-2 w-2/3 bg-white/15 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Floating elements */}
                                    <motion.div 
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-10 right-10 w-24 h-24 bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center p-4"
                                    >
                                        <Target className="w-10 h-10 text-emerald-500" />
                                    </motion.div>
                                    <motion.div 
                                        animate={{ y: [0, 20, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center p-4"
                                    >
                                        <Activity className="w-10 h-10 text-brand-primary" />
                                    </motion.div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
