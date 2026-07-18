<script setup lang="ts">
import { Mail, Phone, MessageSquare } from "lucide-vue-next"

const { t } = useLocale()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-slate-900 text-slate-500 pt-24 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div class="grid md:grid-cols-4 gap-16 mb-20">
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-2 text-white mb-8">
            <img src="/logo.png" alt="TopScore AI Logo" width="32" height="32" class="rounded-lg shadow-lg shadow-indigo-500/20" >
            <span class="text-xl font-display font-black tracking-tight">TopScore AI</span>
          </div>

          <p class="text-sm leading-relaxed mb-8 text-slate-400 font-medium">
            Kenyan-made, AI-powered. The ultimate study companion for the next generation of African scholars. Making learning accessible for all Kenyans.
          </p>

          <div class="flex flex-col gap-4 mb-10">
            <a href="tel:0717273230" class="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
              <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-brand-primary/20 group-hover:text-brand-primary transition-colors">
                <Phone class="w-4 h-4" />
              </div>
              <span class="text-sm font-semibold">{{ t('contact.telephone') }}</span>
            </a>
            <a href="https://wa.me/254717273230" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
              <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-green-500/20 group-hover:text-green-500 transition-colors">
                <MessageSquare class="w-4 h-4" />
              </div>
              <span class="text-sm font-semibold">{{ t('contact.whatsapp') }}</span>
            </a>
            <a href="mailto:admin@topscoreapp.ai" class="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
              <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-brand-secondary/20 group-hover:text-brand-secondary transition-colors">
                <Mail class="w-4 h-4" />
              </div>
              <span class="text-sm font-semibold">{{ t('contact.email') }}</span>
            </a>
          </div>

          <div class="flex flex-col gap-3">
            <a href="https://play.google.com/store/apps/details?id=com.topscoreapp.ai" target="_blank" rel="noopener noreferrer"
              class="transition-transform hover:scale-105 active:scale-95 w-fit">
              <img src="/GetItOnGooglePlay_Badge_Web_color_English.svg" alt="Get it on Google Play" class="h-10 w-auto" >
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-105 active:scale-95 w-fit">
              <img src="/app-store-badge.svg" alt="Download on the App Store" class="h-10 w-auto" >
            </a>
          </div>
        </div>

        <div class="flex flex-col">
          <h4 class="text-[10px] text-slate-400 uppercase font-black tracking-[0.25em] mb-8">Curriculum</h4>
          <ul class="space-y-4 text-sm font-semibold text-slate-300">
            <li><NuxtLink to="/features" class="hover:text-brand-primary transition-colors">CBC Support</NuxtLink></li>
            <li><NuxtLink to="/features" class="hover:text-brand-primary transition-colors">IGCSE Resources</NuxtLink></li>
            <li><NuxtLink to="/features" class="hover:text-brand-primary transition-colors">8-4-4 Transition</NuxtLink></li>
            <li><NuxtLink to="/features" class="hover:text-brand-primary transition-colors">Study Guides</NuxtLink></li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h4 class="text-[10px] text-slate-400 uppercase font-black tracking-[0.25em] mb-8">AI Tech</h4>
          <ul class="space-y-4 text-sm font-semibold text-slate-300">
            <li><NuxtLink to="/how-it-works" class="hover:text-brand-primary transition-colors">Gemini Live API</NuxtLink></li>
            <li><NuxtLink to="/how-it-works" class="hover:text-brand-primary transition-colors">RAG Grounding</NuxtLink></li>
            <li><NuxtLink to="/how-it-works" class="hover:text-brand-primary transition-colors">Syncfusion PDF</NuxtLink></li>
            <li><NuxtLink to="/how-it-works" class="hover:text-brand-primary transition-colors">Multimodal</NuxtLink></li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h4 class="text-[10px] text-slate-400 uppercase font-black tracking-[0.25em] mb-8">Company</h4>
          <ul class="space-y-4 text-sm font-semibold text-slate-300">
            <li><NuxtLink to="/vision" class="hover:text-brand-primary transition-colors">Our Vision</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-brand-primary transition-colors">Contact Us</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-brand-primary transition-colors">Terms</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[10px] uppercase tracking-widest font-bold text-slate-600">
          © {{ year }} TopScore AI — Nairobi, Kenya.
        </p>
        <div class="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-600">
          <NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-white transition-colors">Terms of Service</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
