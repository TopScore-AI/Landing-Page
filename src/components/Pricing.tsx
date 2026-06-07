'use client';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: "Basic",
    price: "Free",
    desc: "Perfect for casual study sessions.",
    features: ["3 AI Scans per day", "CBC & KCSE Notes", "Web Access"],
    cta: "Start Free",
    featured: false
  },
  {
    name: "Weekly Scholar",
    price: "KES 300",
    period: "/wk",
    desc: "Quick boost before exams.",
    features: ["Unlimited AI Scans", "Gemini Live API Voice Tutor", "Multi-Curriculum Switcher", "Full Practice Library", "Priority Support"],
    cta: "Get Weekly",
    featured: false
  },
  {
    name: "Monthly Scholar",
    price: "KES 1000",
    period: "/mo",
    desc: "Best value for consistent performance.",
    features: ["Everything in Weekly", "Personal Progress Analytics", "Custom Quiz Generator", "Download Study Guides"],
    cta: "Go Monthly",
    featured: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
          >
            Investment
          </motion.div>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-slate-900 tracking-tighter leading-[1.05]">
            Flexible plans for <br className="hidden md:block" /> every scholar.
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-10 rounded-[3rem] border transition-all duration-500 ${tier.featured ? 'bg-slate-900 text-white border-slate-800 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] scale-105 z-10' : 'bg-slate-50 text-slate-900 border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2' }`}
            >
              {tier.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full flex items-center gap-2 shadow-xl shadow-brand-primary/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <h4 className={`text-sm font-black uppercase tracking-[0.2em] mb-6 ${tier.featured ? 'text-brand-primary' : 'text-slate-400'}`}>{tier.name}</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display font-black tracking-tight">{tier.price}</span>
                  {tier.period && <span className={`${tier.featured ? 'text-slate-500' : 'text-slate-400'} text-lg font-bold`}>{tier.period}</span>}
                </div>
                <p className={`mt-4 text-base font-medium leading-relaxed ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>{tier.desc}</p>
              </div>

              <div className="flex-grow space-y-5 mb-12">
                {tier.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <div className={`mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${tier.featured ? 'bg-brand-primary/20 text-brand-primary' : 'bg-brand-primary/10 text-brand-primary'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={`text-base font-medium ${tier.featured ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://app.topscoreapp.ai"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest text-center transition-all duration-300 ${tier.featured ? 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-2xl shadow-indigo-500/40 hover:-translate-y-1' : 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm'}`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
