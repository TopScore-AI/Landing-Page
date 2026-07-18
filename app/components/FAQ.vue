<script setup lang="ts">
import { ref } from "vue"
import { Plus, Minus, HelpCircle } from "lucide-vue-next"

const faqs = [
  { q: "Does it cover the new CBC (Competency Based Curriculum)?", a: "Yes! TopScore AI is fully updated with the Kenyan CBC curriculum from Early Years to Grade 12, including specific strands and sub-strands for Junior Secondary." },
  { q: "Is the AI specific to the Kenyan syllabus (KCSE)?", a: "Absolutely. We use RAG (Retrieval Augmented Generation) to ground our AI in Kenyan textbooks, past papers, and KICD-approved materials to ensure accuracy." },
  { q: "Can I use it for IGCSE or IB?", a: "Yes, our multi-curriculum engine allows you to switch between 8-4-4, CBC, and International systems (IGCSE, A-Levels) seamlessly." },
  { q: "How does the 'AI Camera' work for math?", a: "Using Gemini's multimodal capabilities, you simply point your camera at a handwritten problem. The AI doesn't just give the answer; it explains the logic step-by-step." },
  { q: "What are the subscription costs?", a: "You can start for free with basic features. Premium plans for advanced AI tools and unlimited study sessions start at just KES 300 per week or KES 1000 per month." },
]

const openIndex = ref<number | null>(0)

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

useJsonLd({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
})
</script>

<template>
  <section id="faq" class="py-40 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
      <div class="flex flex-col lg:flex-row gap-20">
        <div class="lg:w-1/3">
          <Motion :initial="{ opacity: 0, y: 30 }" :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, ease: 'easeOut' }" :in-view-options="{ once: true }">
            <div class="inline-flex p-3 bg-brand-primary/10 text-brand-primary rounded-2xl mb-8">
              <HelpCircle class="w-6 h-6" />
            </div>
            <h2 class="text-sm font-black text-brand-primary uppercase tracking-[0.25em] mb-6">Questions?</h2>
            <h3 class="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
              Everything <br > <span class="text-slate-300">to know.</span>
            </h3>
            <p class="text-slate-500 text-xl font-medium leading-relaxed">
              Common questions about TopScore AI, the Kenyan curriculum, and how we help students excel.
            </p>
          </Motion>
        </div>

        <div class="lg:w-2/3">
          <Motion :variants="containerVariants" initial="hidden" while-in-view="show"
            :in-view-options="{ once: true }" class="space-y-4">
            <Motion v-for="(faq, i) in faqs" :key="i" :variants="itemVariants"
              :class="[
                'border rounded-[2.5rem] overflow-hidden transition-all duration-500',
                openIndex === i
                  ? 'bg-white shadow-2xl shadow-brand-primary/5 border-brand-primary/20'
                  : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-slate-200',
              ]">
              <button type="button" class="w-full px-10 py-8 text-left flex items-center justify-between gap-6"
                @click="openIndex = openIndex === i ? null : i">
                <span class="font-display font-black text-2xl text-slate-900 tracking-tight">{{ faq.q }}</span>
                <div :class="[
                  'shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all',
                  openIndex === i ? 'bg-brand-primary text-white rotate-180' : 'bg-white text-slate-400 border border-slate-100',
                ]">
                  <Minus v-if="openIndex === i" class="w-5 h-5" />
                  <Plus v-else class="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                <Motion v-if="openIndex === i" :initial="{ height: 0, opacity: 0 }"
                  :animate="{ height: 'auto', opacity: 1 }" :exit="{ height: 0, opacity: 0 }"
                  :transition="{ duration: 0.3, ease: 'easeInOut' }" style="overflow: hidden">
                  <div class="px-10 pb-10 text-slate-500 text-lg leading-relaxed font-medium max-w-2xl">
                    {{ faq.a }}
                  </div>
                </Motion>
              </AnimatePresence>
            </Motion>
          </Motion>
        </div>
      </div>
    </div>
  </section>
</template>
