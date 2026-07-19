<script setup lang="ts">
import { ref } from "vue"
import { Plus, Minus, HelpCircle } from "lucide-vue-next"

const faqs = [
  { 
    q: "How is TopScore AI different from ChatGPT or other AI tutors?", 
    a: "Unlike generic AI chatbots, TopScore AI is specifically designed for Kenyan curriculum learning. We use the Socratic method—guiding you to discover answers through questions rather than just giving solutions. All our content is backed by real educational diagrams from official textbooks, not AI-generated images. Our AI has long-term memory and remembers your learning history to provide truly personalized tutoring." 
  },
  { 
    q: "Does it cover the new CBC (Competency Based Curriculum)?", 
    a: "Yes! TopScore AI is fully updated with the Kenyan CBC curriculum from Early Years to Grade 12, including specific strands and sub-strands for Junior Secondary. We have thousands of CBC assessments, learning activities, and competency-based resources." 
  },
  { 
    q: "Is the AI specific to the Kenyan syllabus (KCSE)?", 
    a: "Absolutely. We use RAG (Retrieval Augmented Generation) to ground our AI in Kenyan textbooks, past papers, and KICD-approved materials to ensure accuracy. Our AI tutor is trained specifically on KCSE content, not generic educational material." 
  },
  { 
    q: "Can I use it for IGCSE or IB?", 
    a: "Yes, our multi-curriculum engine allows you to switch between 8-4-4, CBC, and International systems (IGCSE, A-Levels) seamlessly. We have Cambridge IGCSE past papers, marking schemes, and international standard resources." 
  },
  { 
    q: "How does the voice and screen sharing feature work?", 
    a: "You can start a real-time video call with your AI tutor. The AI can see your screen to guide you through problems step-by-step, and can also use your camera to read handwritten work. This is especially helpful for complex math problems, chemistry equations, or when you need visual guidance." 
  },
  { 
    q: "What are real educational diagrams and why do they matter?", 
    a: "Unlike other AI tools that generate images that may be incorrect, TopScore AI uses actual curriculum diagrams from approved Kenyan textbooks. When you ask about the water cycle, photosynthesis, or chemical bonding, you get the exact diagrams your teachers use, ensuring accuracy and alignment with your exams." 
  },
  { 
    q: "How does the Socratic method help me learn better?", 
    a: "Instead of just giving you answers, our AI tutor asks you questions that guide you to discover the solution yourself. This builds critical thinking skills and deeper understanding. Research shows that students who learn through the Socratic method retain information longer and can apply it to new problems more effectively." 
  },
  { 
    q: "What is the long-term memory feature?", 
    a: "TopScore AI remembers your learning history, the topics you struggle with, and your progress over time. This means the tutor adapts to your specific needs—focusing on your weak areas and building on your strengths. The more you use it, the more personalized your learning experience becomes." 
  },
  { 
    q: "How does the smart PDF viewer work?", 
    a: "You can upload your textbooks, notes, or any PDF documents. Our AI analyzes the content and can answer questions about specific pages, create summaries, generate flashcards from the material, and break down complex topics into simple explanations. It's like having a study assistant for every textbook." 
  },
  { 
    q: "Can I study offline?", 
    a: "Yes! With the Monthly Scholar plan, you can download resources for offline study. This is perfect for students with limited data or those who want to study during commutes without internet access. Your progress syncs when you reconnect." 
  },
  { 
    q: "What are multiplayer quizzes and competitive learning?", 
    a: "You can challenge your friends to real-time quiz battles on any subject. Leaderboards show top performers, and you can compete in subject-specific challenges. For solo practice, our AI generates quizzes based on your weak areas with spaced repetition to ensure long-term retention." 
  },
  { 
    q: "How does the 7-day free trial work?", 
    a: "New users get full access to all premium features for 7 days, no credit card required. You can experience voice tutoring, screen sharing, unlimited AI questions, and all study resources. After the trial, you can choose to subscribe or continue with our free basic plan." 
  },
  { 
    q: "What are the subscription costs?", 
    a: "You can start for free with basic features (3 AI questions per day, basic resources). Premium plans for advanced AI tools and unlimited study sessions start at just KES 300 per week for exam preparation, or KES 1000 per month for the best value with all features including offline access and long-term memory." 
  },
  { 
    q: "Is my data safe and private?", 
    a: "Absolutely. We prioritize student privacy with content moderation, secure data storage, and parental controls for younger students. Your learning data is used only to personalize your experience and is never shared with third parties. Parents can access dashboards to monitor progress." 
  },
  { 
    q: "Can parents monitor their child's progress?", 
    a: "Yes, with the Monthly Scholar plan, parents get access to a dashboard showing their child's study time, progress in different subjects, weak areas, and improvement over time. This helps parents provide targeted support and celebrate achievements." 
  },
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
