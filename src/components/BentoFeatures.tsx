'use client';
import { useLocale } from '@/i18n';
import { useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { Brain, Headphones, GraduationCap, CloudOff, Target, Sparkles, Users, Trophy, FolderOpen } from 'lucide-react';
import styles from './BentoFeatures.module.css';

export default function BentoFeatures() {
    const { t } = useLocale();
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!gridRef.current) return;
            const cards = gridRef.current.getElementsByClassName(styles.card);
            for (const card of cards as any) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className={styles.section} id="features">
            <div className={styles.container}>
                <AnimatedSection animation="fadeUp">
                    <div className={styles.header}>
                        <h2 className={styles.title}>
                            Built for <span className="grad-text">Digital-First</span> Learning
                        </h2>
                        <p className={styles.sub}>
                            TopScore AI combines localized curriculum knowledge with state-of-the-art Generative AI to provide a premium, personal tutor for every student.
                        </p>
                    </div>
                </AnimatedSection>

                <div className={styles.grid} ref={gridRef}>
                    {/* Big Card: AI Tutor */}
                    <div className={`${styles.card} ${styles.colSpan2} ${styles.rowSpan2} glass`}>
                        <div className={styles.cardContent}>
                            <div className={styles.iconWrapper} style={{ '--color': '#4f46e5' } as any}>
                                <Headphones size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>{t('features.0.title')}</h3>
                            <p className={styles.cardDesc}>{t('features.0.desc')}</p>
                            
                            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden group/inner">
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                        <Sparkles size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Live Mode</div>
                                        <div className="text-sm font-bold text-slate-900 italic">"Explain the nitrogen cycle like I'm five..."</div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            </div>
                        </div>
                    </div>

                    {/* Medium Card: AI Voice Tutor */}
                    <div className={`${styles.card} ${styles.colSpan2} glass`}>
                        <div className={styles.cardContent}>
                            <div className="flex items-start gap-8">
                                <div className={styles.iconWrapper} style={{ '--color': '#10b981' } as any}>
                                    <Sparkles size={24} />
                                </div>
                                <div>
                                    <h3 className={styles.cardTitle}>Live Voice Tutor</h3>
                                    <p className={styles.cardDesc}>
                                        Practice pronunciation and conversational skills with our low-latency AI voice engine.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Card: Real-time Feedback */}
                    <div className={`${styles.card} glass`}>
                        <div className={styles.cardContent}>
                            <div className={styles.iconWrapper} style={{ '--color': '#8b5cf6' } as any}>
                                <Target size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>Instant Feedback</h3>
                            <p className={styles.cardDesc}>Immediate corrections for every answer.</p>
                        </div>
                    </div>

                    {/* Small Card: Exam Readiness */}
                    <div className={`${styles.card} glass`}>
                        <div className={styles.cardContent}>
                            <div className={styles.iconWrapper} style={{ '--color': '#ec4899' } as any}>
                                <GraduationCap size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>Exam Ready</h3>
                            <p className={styles.cardDesc}>Full KCSE & CBC alignment.</p>
                        </div>
                    </div>

                    {/* Wide Card: Smart Study Tools */}
                    <div className={`${styles.card} ${styles.colSpan2} glass`}>
                        <div className={styles.cardContent}>
                            <div className="flex items-start gap-6">
                                <div className={styles.iconWrapper} style={{ '--color': '#f59e0b' } as any}>
                                    <Brain size={24} />
                                </div>
                                <div>
                                    <h3 className={styles.cardTitle}>{t('features.smartTools.title' as any)}</h3>
                                    <p className={styles.cardDesc}>
                                        Instantly transform PDFs and photos into interactive flashcards and summaries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wide Card: Cloud Study */}
                    <div className={`${styles.card} ${styles.colSpan2} glass`}>
                        <div className={styles.cardContent}>
                            <div className="flex items-start gap-6">
                                <div className={styles.iconWrapper} style={{ '--color': '#0ea5e9' } as any}>
                                    <FolderOpen size={24} />
                                </div>
                                <div>
                                    <h3 className={styles.cardTitle}>Study Vault</h3>
                                    <p className={styles.cardDesc}>
                                        Your entire curriculum library synced across all your devices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Card: Offline */}
                    <div className={`${styles.card} glass`}>
                        <div className={styles.cardContent}>
                            <div className={styles.iconWrapper} style={{ '--color': '#94a3b8' } as any}>
                                <CloudOff size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>Offline Mode</h3>
                            <p className={styles.cardDesc}>
                                Download resources once and study anywhere without data costs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
