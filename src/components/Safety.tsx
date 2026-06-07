'use client';
import { useLocale } from '@/i18n';
import AnimatedSection from './AnimatedSection';
import { Shield, Lock, BookOpen, Users } from 'lucide-react';
import styles from './Safety.module.css';

const safetyFeatures = [
    { icon: Shield, idx: 0 },
    { icon: Lock, idx: 1 },
    { icon: BookOpen, idx: 2 },
    { icon: Users, idx: 3 },
];

export default function Safety() {
    const { t } = useLocale();

    return (
        <section className={styles.wrapper} id="safety">
            <div className={styles.section}>
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/3">
                        <AnimatedSection animation="fadeUp">
                            <div className={styles.label}>{t('safety.label')}</div>
                            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[0.95] mb-8">{t('safety.title')}</h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">{t('safety.sub')}</p>
                        </AnimatedSection>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {safetyFeatures.map((f, i) => {
                            const Icon = f.icon;
                            const titleKey = `safety.${f.idx}.title` as any;
                            const descKey = `safety.${f.idx}.desc` as any;

                            return (
                                <AnimatedSection key={i} animation="fadeUp" delay={`${i * 0.1}s`}>
                                    <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 group">
                                        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight mb-4">{t(titleKey)}</h3>
                                        <p className="text-slate-500 font-medium leading-relaxed">{t(descKey)}</p>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
