<script setup lang="ts">
import { CheckCircle, Shield, Award, Zap, Users, BookOpen, TrendingUp, Clock } from "lucide-vue-next"

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Students",
    description: "Across Kenya using CBC, 8-4-4, and IGCSE",
    color: "bg-brand-primary/20 text-brand-primary"
  },
  {
    icon: BookOpen,
    value: "100K+",
    label: "Study Resources",
    description: "Past papers, notes, and verified materials",
    color: "bg-emerald-500/20 text-emerald-400"
  },
  {
    icon: TrendingUp,
    value: "89%",
    label: "Grade Improvement",
    description: "Students see better grades within 3 months",
    color: "bg-amber-500/20 text-amber-400"
  },
  {
    icon: Award,
    value: "4.8★",
    label: "App Rating",
    description: "Based on 1,250+ student reviews",
    color: "bg-rose-500/20 text-rose-400"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Curriculum Aligned",
    description: "KCSE, CBC, and IGCSE certified content",
    color: "bg-purple-500/20 text-purple-400"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "AI Availability",
    description: "Get help anytime, even late at night",
    color: "bg-blue-500/20 text-blue-400"
  }
]
</script>

<template>
  <section class="py-16 bg-slate-900 border-y border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-display font-black text-white mb-4">Trusted by Students Across Kenya</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">Join thousands of students who have improved their grades with TopScore AI's proven learning methodology.</p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="(stat, i) in stats" :key="i" class="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all">
          <div :class="['w-14 h-14 rounded-xl flex items-center justify-center mb-4', stat.color]">
            <component :is="stat.icon" :size="28" />
          </div>
          <div class="text-3xl font-display font-black text-white mb-1">{{ stat.value }}</div>
          <div class="text-sm font-bold text-slate-300 mb-2">{{ stat.label }}</div>
          <div class="text-xs text-slate-500 leading-relaxed">{{ stat.description }}</div>
        </div>
      </div>

      <div class="mt-12 grid md:grid-cols-3 gap-6">
        <div class="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
          <div class="flex items-center gap-3 mb-3">
            <CheckCircle class="w-5 h-5 text-emerald-400" />
            <div class="font-bold text-white">Verified Content</div>
          </div>
          <p class="text-sm text-slate-400">All educational materials are verified by Kenyan curriculum experts to ensure accuracy and relevance.</p>
        </div>
        
        <div class="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
          <div class="flex items-center gap-3 mb-3">
            <Shield class="w-5 h-5 text-brand-primary" />
            <div class="font-bold text-white">Safe Learning Environment</div>
          </div>
          <p class="text-sm text-slate-400">Content moderation and privacy protection ensure a safe, focused learning experience for students.</p>
        </div>
        
        <div class="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
          <div class="flex items-center gap-3 mb-3">
            <Zap class="w-5 h-5 text-amber-400" />
            <div class="font-bold text-white">Proven Results</div>
          </div>
          <p class="text-sm text-slate-400">89% of students report grade improvement within 3 months of using TopScore AI consistently.</p>
        </div>
      </div>
    </div>
  </section>
</template>
