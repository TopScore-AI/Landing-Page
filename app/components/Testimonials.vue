<script setup lang="ts">
import { Star, Quote } from "lucide-vue-next"
import { useTiltEffect } from "~/composables/useScrollAnimation"
import styles from "./Testimonials.module.css"

const { t } = useLocale()

const testimonials = [
  {
    name: "Amani K.",
    role: "Form 4 Student, Nairobi",
    avatar: "AK",
    rating: 5,
    content: "I was struggling with organic chemistry and couldn't understand the reaction mechanisms from my textbook. The Socratic AI tutor didn't just give me answers—it asked me questions that helped me discover the patterns myself. The real educational diagrams made everything click. My KCSE mock grades improved from C+ to A in just 3 months, and I actually enjoy chemistry now.",
    result: "Grade improvement: C+ → A",
    subjects: "Chemistry, Biology, Mathematics"
  },
  {
    name: "David O.",
    role: "Grade 9 Student, Mombasa",
    avatar: "DO",
    rating: 5,
    content: "The CBC resources are exactly what I need. I can study offline when we don't have data, and my study streak keeps me motivated every day. What I love most is the voice feature—I can speak my questions and get instant explanations. The competitive quizzes with my classmates make studying fun instead of boring. I've maintained a 45-day study streak and my grades have never been better.",
    result: "45-day study streak",
    subjects: "CBC Integrated Science, Mathematics, English"
  },
  {
    name: "Sarah W.",
    role: "IGCSE Student, Kisumu",
    avatar: "SW",
    rating: 5,
    content: "The AI composition grading helped me improve my English writing significantly. Instead of just getting a grade, I get detailed feedback on structure, vocabulary, and grammar. The real-time Google search integration helps me find current examples for my essays. My teacher noticed the difference immediately—she asked what I was doing differently. My English grade went from B to A* in one term.",
    result: "English grade: B → A*",
    subjects: "English Literature, First Language English, History"
  },
  {
    name: "Parent of Form 2 Student",
    role: "Parent, Eldoret",
    avatar: "P",
    rating: 5,
    content: "Finally, an app that actually helps with Kenyan curriculum. We've tried so many tutoring apps that just give generic answers. TopScore AI is different—it remembers my son's learning history and adapts to his needs. The long-term memory feature means it knows his weak areas and focuses on them. His math grades have improved dramatically from D to B+, and he's more confident than ever. The free trial let us see the value before committing.",
    result: "Math grade: D → B+",
    subjects: "Mathematics, Physics, Chemistry"
  },
  {
    name: "James M.",
    role: "Form 3 Student, Nakuru",
    avatar: "JM",
    rating: 5,
    content: "The smart PDF viewer is a game-changer. I upload my textbook pages and the AI breaks down complex topics into simple explanations. The screen sharing feature during voice calls means the tutor can see exactly what I'm working on and guide me step-by-step. I used to hate studying physics, but now it's my best subject. The multiplayer quizzes with my friends make revision competitive and engaging.",
    result: "Physics grade: C → A",
    subjects: "Physics, Chemistry, Geography"
  },
  {
    name: "Grace N.",
    role: "Grade 8 Student, Kisii",
    avatar: "GN",
    rating: 5,
    content: "I love how the AI tutor uses real educational diagrams, not just made-up pictures. When I was learning about the water cycle, it showed me the actual curriculum diagram with detailed explanations. The flashcards help me review quickly before exams, and the spaced repetition ensures I remember what I learn. My teachers are impressed with how much I know about the CBC topics.",
    result: "Overall performance: Top 5% of class",
    subjects: "CBC All Subjects, Kiswahili, Social Studies"
  }
]

const cardRefs = ref<(HTMLElement | null)[]>([])

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'TopScore AI',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Android, iOS, Web',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
    bestRating: '5',
  },
  author: {
    '@type': 'Person',
    name: 'Amani K.',
  },
  reviewBody: 'My KCSE mock grades improved from C+ to A in just 3 months. The AI tutor explains complex chemistry concepts better than my textbook.',
}

useJsonLd(reviewSchema)
</script>

<template>
  <section class="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <AnimatedSection animation="fadeUp">
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Star class="w-3 h-3 fill-current" />
            Student Success Stories
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-display font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
            Join thousands of students<br class="hidden md:block"> excelling with TopScore AI
          </h2>
          <p class="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Real results from real students across Kenya using CBC, 8-4-4, and Cambridge IGCSE curricula.
          </p>
        </div>
      </AnimatedSection>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatedSection v-for="(testimonial, i) in testimonials" :key="i" animation="fadeUp" :delay="`${i * 0.1}s`">
          <div 
            :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
            class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 hover:shadow-brand-primary/10 hover:-translate-y-1 transition-all duration-500 group hover-lift cursor-pointer">
            <div class="flex items-start gap-6 mb-6">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center font-black text-xl shrink-0">
                {{ testimonial.avatar }}
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-1 mb-2">
                  <Star v-for="n in testimonial.rating" :key="n" class="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <h3 class="font-bold text-lg text-slate-900">{{ testimonial.name }}</h3>
                <p class="text-sm text-slate-500">{{ testimonial.role }}</p>
              </div>
            </div>
            
            <Quote class="w-8 h-8 text-brand-primary/20 mb-4" />
            <p class="text-slate-700 font-medium leading-relaxed mb-6 text-sm">{{ testimonial.content }}</p>
            
            <div class="space-y-3">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold">
                <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                {{ testimonial.result }}
              </div>
              <div class="text-xs text-slate-500 font-medium">
                <span class="text-slate-400">Subjects:</span> {{ testimonial.subjects }}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fadeUp" :delay="'0.4s'">
        <div class="mt-16 text-center">
          <div class="inline-flex items-center gap-8 bg-slate-900 text-white px-10 py-6 rounded-full shadow-2xl">
            <div class="text-center">
              <div class="text-3xl font-display font-black">10,000+</div>
              <div class="text-[10px] font-black uppercase tracking-widest text-slate-400">Active Students</div>
            </div>
            <div class="w-px h-10 bg-slate-700" />
            <div class="text-center">
              <div class="text-3xl font-display font-black">4.8★</div>
              <div class="text-[10px] font-black uppercase tracking-widest text-slate-400">App Rating</div>
            </div>
            <div class="w-px h-10 bg-slate-700" />
            <div class="text-center">
              <div class="text-3xl font-display font-black">89%</div>
              <div class="text-[10px] font-black uppercase tracking-widest text-slate-400">Grade Improvement</div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
</template>
