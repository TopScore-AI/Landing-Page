'use client';
import { motion } from 'framer-motion';
import { useLocale } from '@/i18n';
import Image from 'next/image';
import { Smartphone, BookOpen, LayoutDashboard, LogIn, Sparkles } from 'lucide-react';

const screenshots = [
  { id: 1, title: "Secure Login", desc: "Access your personalized portal", color: "bg-blue-600", icon: <LogIn className="w-6 h-6" />, y: 0 },
  { id: 2, title: "AI Tutor Chat", desc: "Real-time 1-on-1 tutoring", color: "bg-indigo-500", icon: <Smartphone className="w-6 h-6" />, y: 40 },
  { id: 3, title: "Smart Library", desc: "100,000+ revision resources", color: "bg-emerald-500", icon: <BookOpen className="w-6 h-6" />, y: -20 },
  { id: 4, title: "Student Dashboard", desc: "Track your progress & study streaks", color: "bg-amber-500", icon: <LayoutDashboard className="w-6 h-6" />, y: 20 }
];

export default function Screenshots() {
  const { t } = useLocale();

  return (
    <section className="py-32 bg-slate-50 rounded-[4rem] mx-4 sm:mx-10 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-8"
            >
              <Sparkles size={12} />
              Visual Showcase
            </motion.div>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
                A premium interface <br className="hidden md:block" /> for elite scholars.
            </h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto text-balance">
                Every screen is meticulously designed to minimize distraction and maximize cognitive focus for the best learning experience.
            </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {screenshots.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: s.y }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <motion.div 
                whileHover={{ y: -20 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative aspect-[9/19] bg-slate-950 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-800 mb-10 overflow-hidden"
              >
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-slate-950/40 z-10 pointer-events-none" />
                  <div className="bg-slate-900 rounded-[2.5rem] h-full w-full overflow-hidden relative border border-white/5">
                      <Image 
                        src={`/screenshots/screen-${i}.png`} 
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority={i < 2}
                      />
                  </div>
              </motion.div>
              <div className="space-y-4 px-4">
                  <div className="flex items-center gap-4">
                      <div className={`${s.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-current/30 group-hover:scale-110 transition-transform duration-500`}>
                          {s.icon}
                      </div>
                      <h4 className="text-xl font-display font-black text-slate-900 tracking-tight">{s.title}</h4>
                  </div>
                  <p className="text-base text-slate-500 font-medium leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
