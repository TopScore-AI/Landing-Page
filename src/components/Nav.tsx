'use client';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/i18n';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/features', key: 'nav.features' },
    { href: '/how-it-works', key: 'nav.howItWorks' },
    { href: '/tools', key: 'nav.tools' },
    { href: '/pricing', key: 'nav.pricing' },
    { href: '/contact', key: 'contact.label' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4 shadow-2xl shadow-slate-200/20' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative">
            <Image 
              src="/logo.png" 
              alt="TopScore AI" 
              width={48} 
              height={48} 
              className="rounded-2xl shadow-2xl shadow-brand-primary/10 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-brand-primary/20 scale-0 group-hover:scale-125 transition-all duration-500 -z-10 blur-xl" />
          </div>
          <span className="text-3xl font-display font-black tracking-tighter text-slate-900">TopScore AI</span>
        </Link>


        <div className="hidden lg:flex items-center gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">
          {navLinks.map(({ href, key }) => (
            <Link 
              key={href} 
              href={href} 
              className={`hover:text-brand-primary transition-all py-1 relative group ${pathname === href ? 'text-brand-primary' : ''}`}
            >
              {t(key as any)}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-500 group-hover:w-full ${pathname === href ? 'w-full' : 'w-0'}`} />
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-8">
          <Link 
            href="https://app.topscoreapp.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-primary transition-all shadow-2xl shadow-slate-200 hover:shadow-brand-primary/20 hover:-translate-y-1"
          >
            Get Started
          </Link>
        </div>

        <button 
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 px-6 py-10 space-y-6 lg:hidden shadow-2xl"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map(({ href, key }) => (
              <Link 
                key={href} 
                href={href} 
                className={`text-xl font-display font-bold ${pathname === href ? 'text-brand-primary' : 'text-slate-800'}`}
                onClick={() => setIsOpen(false)}
              >
                {t(key as any)}
              </Link>
            ))}
          </div>
          <div className="pt-6 border-t border-slate-100">
            <a 
              href="https://app.topscoreapp.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-center block shadow-lg shadow-slate-200"
            >
              {t('nav.download' as any)}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

