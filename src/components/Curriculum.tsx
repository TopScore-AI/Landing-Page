'use client';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Clock, ArrowRight } from 'lucide-react';

const curricula = [
  {
    title: "CBC",
    subtitle: "Competency Based Curriculum",
    desc: "Personalized learning paths designed to build real-world skills and competencies.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "bg-indigo-600"
  },
  {
    title: "IGCSE",
    subtitle: "International Standard",
    desc: "Preparation for IGCSE exams with international standard resources and AI grounding.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-brand-primary"
  },
  {
    title: "8-4-4",
    subtitle: "Transition Phase",
    desc: "Full support for students completing the 8-4-4 cycle with comprehensive past papers.",
    icon: <Clock className="w-6 h-6" />,
    color: "bg-slate-900"
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-40 bg-white relative overflow-hidden border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8"
            >
              Curriculum Coverage
            </motion.div>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-slate-900 tracking-tighter leading-[0.95]">
              Personalized for <br /> <span className="text-slate-300">every student.</span>
            </h3>
          </div>
          <p className="text-slate-500 text-xl leading-relaxed font-medium max-w-md lg:mb-4">
            Whether you're navigating the new CBC system, excelling in IGCSE, or concluding the 8-4-4 cycle, our engine adapts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {curricula.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500"
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-10 shadow-xl shadow-current/20 group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase block">{item.subtitle}</span>
                <h4 className="text-4xl font-display font-black text-slate-900 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed text-base font-medium">{item.desc}</p>
              </div>

              <div className="mt-12 flex items-center gap-2 text-brand-primary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                Learn More <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
