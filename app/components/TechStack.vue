<script setup lang="ts">
import { Database, ShieldCheck, Zap, Globe } from 'lucide-vue-next'

const techCards = [
  {
    title: "Grounding (RAG)",
    desc: "Our AI is verified against KICD-approved textbooks and national past papers.",
    icon: Database,
    detail: "Retrieval Augmented Generation"
  },
  {
    title: "Security & Privacy",
    desc: "Enterprise-grade encryption for student data with local Kenyan hosting.",
    icon: ShieldCheck,
    detail: "AES-256 Encryption"
  },
  {
    title: "Syncfusion PDF",
    desc: "Professional document handling for complex diagrams and multi-page guides.",
    icon: Globe,
    detail: "Enterprise Reader"
  }
]
</script>

<template>
  <section class="py-24 bg-white border-y border-slate-100">
    <div 
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10"
    >
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 class="text-sm font-bold text-brand-primary uppercase tracking-[0.25em] mb-4">The Infrastructure</h2>
          <h3 class="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tighter mb-8 leading-[1.05]">
            Enterprise tech for <br class="hidden md:block" /> personal learning.
          </h3>
          <p class="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
            We leverage world-class infrastructure usually reserved for enterprise software to ensure every Kenyan student has a reliable, fast, and grounded AI tutor.
          </p>

          <div class="flex flex-col gap-6">
             <div class="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex gap-5 items-center">
                <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-200 shrink-0">
                  <img src="/logo.png" alt="TopScore AI" class="h-6 opacity-80" />
                </div>
                <div>
                  <p class="font-bold text-slate-900">Syncfusion Registered</p>
                  <p class="text-xs text-slate-500 font-medium tracking-wide">Official license for enterprise PDF solutions in Kenya.</p>
                </div>
             </div>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
          <div
            v-for="(card, i) in techCards"
            :key="i"
            class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50 transition-all duration-500 group"
          >
            <div class="mb-6 p-4 bg-slate-50 rounded-2xl group-hover:bg-brand-primary/5 transition-colors w-fit">
              <component :is="card.icon" class="w-6 h-6" :class="{
                'text-indigo-400': card.title === 'Grounding (RAG)',
                'text-emerald-400': card.title === 'Security & Privacy',
                'text-rose-400': card.title === 'Syncfusion PDF'
              }" />
            </div>
            <h4 class="font-bold text-slate-900 mb-2 tracking-tight">{{ card.title }}</h4>
            <p class="text-sm text-slate-500 leading-relaxed mb-4">{{ card.desc }}</p>
            <div class="pt-4 border-t border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {{ card.detail }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
