<script setup lang="ts">
import { Target, Brain, Shield, Zap, Users, TrendingUp } from "lucide-vue-next"

const benefits = [
  {
    icon: Target,
    title: "Socratic Learning Method",
    description: "Unlike other AI tutors that just give answers, our AI guides you to discover solutions through questions. This builds critical thinking skills and deeper understanding that lasts beyond exams.",
    details: ["Builds problem-solving skills", "Deeper concept understanding", "Better long-term retention", "Applies knowledge to new problems"]
  },
  {
    icon: Brain,
    title: "Real Educational Content",
    description: "Access thousands of verified curriculum resources with real educational diagrams from official textbooks. No AI-generated images that might be incorrect—only accurate, exam-aligned content.",
    details: ["Official textbook diagrams", "KCSE past papers (2010-2026)", "CBC assessments and activities", "IGCSE Cambridge materials"]
  },
  {
    icon: Shield,
    title: "Curriculum-Specific Training",
    description: "Our AI is trained specifically on Kenyan curricula (CBC, 8-4-4, IGCSE), not generic educational content. Every answer is grounded in KICD-approved materials and exam requirements.",
    details: ["Kenyan curriculum aligned", "KICD-approved content", "Exam-focused preparation", "Subject-specific expertise"]
  },
  {
    icon: Zap,
    title: "Personalized Long-Term Memory",
    description: "The AI remembers your learning history, weak areas, and progress over time. It adapts to your specific needs, focusing on improvement areas while building on your strengths.",
    details: ["Tracks learning history", "Identifies weak areas", "Adaptive tutoring sessions", "Personalized study plans"]
  },
  {
    icon: Users,
    title: "Voice & Screen Sharing",
    description: "Get truly personalized help with real-time video calls where your AI tutor sees your screen and camera. Perfect for complex problems that need visual guidance.",
    details: ["Screen sharing for step-by-step help", "Camera input for handwritten work", "Low-latency voice conversations", "Visual problem-solving"]
  },
  {
    icon: TrendingUp,
    title: "Proven Grade Improvement",
    description: "89% of students report grade improvement within 3 months. Our combination of Socratic learning, personalized tutoring, and comprehensive resources delivers real results.",
    details: ["89% see improvement in 3 months", "10,000+ active students", "4.8★ app rating", "Real success stories"]
  }
]
</script>

<template>
  <section class="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full -z-10 opacity-[0.03]"
      :style="{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }" />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <AnimatedSection animation="fadeUp">
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Zap class="w-3 h-3" />
            Why TopScore AI Works
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-display font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
            Built for Real<br class="hidden md:block"> Learning Results
          </h2>
          <p class="text-xl text-slate-500 font-medium max-w-3xl mx-auto">
            Every feature is designed to help you truly understand concepts, not just memorize answers. Our approach combines proven learning methods with cutting-edge AI technology.
          </p>
        </div>
      </AnimatedSection>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatedSection v-for="(benefit, i) in benefits" :key="i" animation="fadeUp" :delay="`${i * 0.1}s`">
          <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 hover:shadow-brand-primary/10 hover:-translate-y-1 transition-all duration-500 group hover-lift">
            <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110', benefit.icon === Target ? 'bg-brand-primary text-white' : benefit.icon === Brain ? 'bg-emerald-500 text-white' : benefit.icon === Shield ? 'bg-purple-500 text-white' : benefit.icon === Zap ? 'bg-amber-500 text-white' : benefit.icon === Users ? 'bg-rose-500 text-white' : 'bg-blue-500 text-white']">
              <component :is="benefit.icon" :size="32" />
            </div>
            
            <h3 class="text-2xl font-display font-black text-slate-900 mb-4">{{ benefit.title }}</h3>
            <p class="text-slate-600 leading-relaxed mb-6">{{ benefit.description }}</p>
            
            <div class="space-y-3">
              <div v-for="detail in benefit.details" :key="detail" class="flex items-center gap-3 text-sm text-slate-500">
                <div class="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <span>{{ detail }}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fadeUp" :delay="'0.6s'">
        <div class="mt-20 text-center">
          <div class="inline-flex flex-col sm:flex-row items-center gap-6 bg-slate-900 text-white px-10 py-8 rounded-3xl shadow-2xl">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <TrendingUp :size="24" />
              </div>
              <div class="text-left">
                <div class="text-2xl font-display font-black">89%</div>
                <div class="text-xs font-black uppercase tracking-widest text-slate-400">Grade Improvement</div>
              </div>
            </div>
            <div class="hidden sm:block w-px h-12 bg-slate-700" />
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center">
                <Users :size="24" />
              </div>
              <div class="text-left">
                <div class="text-2xl font-display font-black">10,000+</div>
                <div class="text-xs font-black uppercase tracking-widest text-slate-400">Active Students</div>
              </div>
            </div>
            <div class="hidden sm:block w-px h-12 bg-slate-700" />
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Shield :size="24" />
              </div>
              <div class="text-left">
                <div class="text-2xl font-display font-black">100%</div>
                <div class="text-xs font-black uppercase tracking-widest text-slate-400">Curriculum Aligned</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
</template>
