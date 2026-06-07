'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import JsonLd from './JsonLd';

const faqs = [
  {
    q: "Does it cover the new CBC (Competency Based Curriculum)?",
    a: "Yes! TopScore AI is fully updated with the Kenyan CBC curriculum from Early Years to Grade 12, including specific strands and sub-strands for Junior Secondary."
  },
  {
    q: "Is the AI specific to the Kenyan syllabus (KCSE)?",
    a: "Absolutely. We use RAG (Retrieval Augmented Generation) to ground our AI in Kenyan textbooks, past papers, and KICD-approved materials to ensure accuracy."
  },
  {
    q: "Can I use it for IGCSE or IB?",
    a: "Yes, our multi-curriculum engine allows you to switch between 8-4-4, CBC, and International systems (IGCSE, A-Levels) seamlessly."
  },
  {
    q: "How does the 'AI Camera' work for math?",
    a: "Using Gemini's multimodal capabilities, you simply point your camera at a handwritten problem. The AI doesn't just give the answer; it explains the logic step-by-step."
  },
  {
    q: "What are the subscription costs?",
    a: "You can start for free with basic features. Premium plans for advanced AI tools and unlimited study sessions start at just KES 300 per week or KES 1000 per month."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-40 bg-white relative overflow-hidden">
      <JsonLd data={faqSchema} />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-3 bg-brand-primary/10 text-brand-primary rounded-2xl mb-8">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-sm font-black text-brand-primary uppercase tracking-[0.25em] mb-6">Questions?</h2>
              <h3 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
                Everything <br /> <span className="text-slate-300">to know.</span>
              </h3>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                Common questions about TopScore AI, the Kenyan curriculum, and how we help students excel.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className={`border rounded-[2.5rem] overflow-hidden transition-all duration-500 ${openIndex === i ? 'bg-white shadow-2xl shadow-brand-primary/5 border-brand-primary/20' : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-slate-200'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full px-10 py-8 text-left flex items-center justify-between gap-6"
                  >
                    <span className="font-display font-black text-2xl text-slate-900 tracking-tight">{faq.q}</span>
                    <div className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${openIndex === i ? 'bg-brand-primary text-white rotate-180' : 'bg-white text-slate-400 border border-slate-100'}`}>
                      {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-10 pb-10 text-slate-500 text-lg leading-relaxed font-medium max-w-2xl">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
