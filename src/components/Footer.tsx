'use client';
import { Mail, Phone, MessageSquare, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/i18n';


export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="bg-slate-900 text-slate-500 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-8">
               <Image 
                 src="/logo.png" 
                 alt="TopScore AI Logo" 
                 width={32}
                 height={32}
                 className="rounded-lg shadow-lg shadow-indigo-500/20"
               />
               <span className="text-xl font-display font-black tracking-tight">TopScore AI</span>
            </div>

            <p className="text-sm leading-relaxed mb-8 text-slate-400 font-medium">
              Kenyan-made, AI-powered. The ultimate study companion for the next generation of African scholars. Making learning accessible for all Kenyans.
            </p>
            
            <div className="flex flex-col gap-4 mb-10">
              <a href="tel:0717273230" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-brand-primary/20 group-hover:text-brand-primary transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold">{t('contact.telephone' as any)}</span>
              </a>
              <a href="https://wa.me/254717273230" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-green-500/20 group-hover:text-green-500 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold">{t('contact.whatsapp' as any)}</span>
              </a>
              <a href="mailto:admin@topscoreapp.ai" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-brand-secondary/20 group-hover:text-brand-secondary transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold">{t('contact.email' as any)}</span>
              </a>
            </div>
            
            <div className="flex flex-col gap-3">
              <a 
                href="https://play.google.com/store/apps/details?id=com.topscoreapp.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 active:scale-95 w-fit"
              >
                <Image 
                  src="/GetItOnGooglePlay_Badge_Web_color_English.svg" 
                  alt="Get it on Google Play" 
                  width={135}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 active:scale-95 w-fit"
              >
                <Image 
                  src="/app-store-badge.svg" 
                  alt="Download on the App Store" 
                  width={135}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
            </div>

          </div>

          <div className="flex flex-col">
            <h4 className="text-[10px] text-slate-400 uppercase font-black tracking-[0.25em] mb-8">Curriculum</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-300">
              <li><Link href="/features" className="hover:text-brand-primary transition-colors">CBC Support</Link></li>
              <li><Link href="/features" className="hover:text-brand-primary transition-colors">IGCSE Resources</Link></li>
              <li><Link href="/features" className="hover:text-brand-primary transition-colors">8-4-4 Transition</Link></li>
              <li><Link href="/features" className="hover:text-brand-primary transition-colors">Study Guides</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[10px] text-slate-400 uppercase font-black tracking-[0.25em] mb-8">AI Tech</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-300">
              <li><Link href="/how-it-works" className="hover:text-brand-primary transition-colors">Gemini Live API</Link></li>
              <li><Link href="/how-it-works" className="hover:text-brand-primary transition-colors">RAG Grounding</Link></li>
              <li><Link href="/how-it-works" className="hover:text-brand-primary transition-colors">Syncfusion PDF</Link></li>
              <li><Link href="/how-it-works" className="hover:text-brand-primary transition-colors">Multimodal</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[10px] text-slate-400 uppercase font-black tracking-[0.25em] mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-300">
              <li><Link href="/vision" className="hover:text-brand-primary transition-colors">Our Vision</Link></li>

              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-brand-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-slate-600">
            © {new Date().getFullYear()} TopScore AI — Nairobi, Kenya.

          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-600">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
