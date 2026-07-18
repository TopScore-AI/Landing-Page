<script setup lang="ts">
import { Cpu, FileText, Zap, Layers, Search, Layout } from "lucide-vue-next"

const features = [
  {
    title: "Multimodal Gemini Live",
    desc: "Talk to your AI tutor in real-time. Share your camera feed to solve physics problems or get feedback on your diagrams.",
    icon: Cpu,
    tag: "Next-Gen",
  },
  {
    title: "AI-Powered PDF Reader",
    desc: "Syncfusion-powered reader allows you to summarize chapters and ask questions directly from your textbooks.",
    icon: FileText,
    tag: "Essential",
  },
  {
    title: "Instant Content Gen",
    desc: "Convert any text into flashcards, quizzes, images, and diagrams instantly using our advanced AI generation.",
    icon: Zap,
    tag: "Productivity",
  },
  {
    title: "Spaced Repetition",
    desc: "Optimize your memory with algorithmically timed review sessions, ensuring long-term retention of complex topics.",
    icon: Layers,
    tag: "Science-Backed",
  },
  {
    title: "Retrieval Augmented (RAG)",
    desc: "Our AI is grounded in Kenyan past papers and curriculum-verified resources for 100% accurate information.",
    icon: Search,
    tag: "Reliable",
  },
  {
    title: "Interactive Summaries",
    desc: "Condense 50-page chapters into scannable summaries that link back to source materials for deep dives.",
    icon: Layout,
    tag: "Deep Insights",
  },
]
</script>

<template>
  <section id="features" class="py-24 bg-white">
    <Motion
      :initial="{ opacity: 0, y: 30 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
      :in-view-options="{ once: true, margin: '-100px' }"
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10"
    >
      <div class="text-center max-w-3xl mx-auto mb-24">
        <h2 class="text-sm font-bold text-brand-primary uppercase tracking-[0.25em] mb-6">Cutting-Edge Features</h2>
        <h3
          class="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[1.05] mb-8"
        >
          Personalized tools to accelerate <br class="hidden md:block" > your Kenyan learning journey.
        </h3>
        <p class="text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
          We've combined the latest in Gemini AI with cognitive science to build the ultimate study companion for
          students.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        <Motion
          v-for="(f, i) in features"
          :key="i"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: i * 0.1 }"
          :in-view-options="{ once: true }"
          class="group relative"
        >
          <div
            class="mb-8 inline-flex p-4 bg-slate-50 rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-indigo-200"
          >
            <component :is="f.icon" class="w-6 h-6" />
          </div>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <h4
                class="text-2xl font-display font-bold text-slate-900 tracking-tight group-hover:text-brand-primary transition-colors"
              >
                {{ f.title }}
              </h4>
              <span
                class="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-brand-primary/10 text-brand-primary rounded-full"
              >
                {{ f.tag }}
              </span>
            </div>
            <p class="text-slate-600 leading-relaxed text-base font-medium">
              {{ f.desc }}
            </p>
          </div>
        </Motion>
      </div>
    </Motion>
  </section>
</template>
