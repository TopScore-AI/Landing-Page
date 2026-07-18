<script setup lang="ts">
import { Mail, Phone, MessageCircle, Facebook, Linkedin, ExternalLink, Twitter, Instagram } from "lucide-vue-next"
import type { TranslationKey } from "~/composables/useLocale"
import styles from "../Contact.module.css"

const { t } = useLocale()

useHead({
  title: "Contact Us — Support & Inquiries",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with the TopScore AI team for support, partnerships, or feedback. We are here to help you succeed in your Kenyan learning journey.",
    },
    { property: "og:title", content: "Contact Us — TopScore AI" },
    {
      property: "og:description",
      content: "Have questions or need support? Reach out to us via WhatsApp, email, or our contact form.",
    },
    { property: "og:url", content: "https://topscoreapp.ai/contact" },
    { property: "og:image", content: "/og-image.png" },
  ],
  link: [{ rel: "canonical", href: "https://topscoreapp.ai/contact" }],
})

const contactMethods = [
  { icon: MessageCircle, key: "contact.whatsapp" as const, href: "https://wa.me/254717273230", color: "#25D366" },
  { icon: Phone, key: "contact.telephone" as const, href: "tel:0717273230", color: "#3b82f6" },
  { icon: Mail, key: "contact.email" as const, href: "mailto:admin@topscoreapp.ai", color: "#ef4444" },
  { icon: Facebook, key: "contact.facebook" as const, href: "https://facebook.com/TopScoreAI", color: "#1877F2" },
  { icon: Linkedin, key: "contact.linkedin" as const, href: "https://linkedin.com/company/topscore-ai", color: "#0A66C2" },
  { icon: Twitter, key: "contact.twitter" as const, href: "https://twitter.com/TopScoreAI", color: "#1DA1F2" },
  { icon: Instagram, key: "contact.instagram" as const, href: "https://instagram.com/TopScoreAI", color: "#E4405F" },
]
</script>

<template>
  <main class="min-h-screen bg-white">
    <Nav />
    <section :class="styles.section">
      <div class="container mx-auto px-4 pt-32 pb-20">
        <AnimatedSection animation="fadeUp">
          <div class="text-center mb-16">
            <div :class="styles.label">{{ t("contact.label") }}</div>
            <h1 :class="styles.title">{{ t("contact.title") }}</h1>
            <p :class="styles.sub">{{ t("contact.sub") }}</p>
          </div>
        </AnimatedSection>

        <div :class="styles.grid">
          <div :class="styles.methods">
            <AnimatedSection
              v-for="(m, i) in contactMethods"
              :key="m.key"
              animation="fadeUp"
              :delay="`${i * 0.1}s`"
            >
              <a :href="m.href" target="_blank" rel="noopener noreferrer" :class="styles.card">
                <div :class="styles.iconWrapper" :style="{ '--color': m.color }">
                  <component :is="m.icon" />
                </div>
                <div :class="styles.cardContent">
                  <div :class="styles.cardInfo">{{ t(m.key) }}</div>
                  <div :class="styles.external"><ExternalLink :size="14" /></div>
                </div>
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" delay="0.3s">
            <div :class="styles.formCard">
              <h2 :class="styles.formTitle">Send us a Message</h2>
              <form @submit.prevent>
                <div :class="styles.formGroup">
                  <label :class="styles.formLabel">Full Name</label>
                  <input type="text" :class="styles.input" placeholder="John Doe" >
                </div>
                <div :class="styles.formGroup">
                  <label :class="styles.formLabel">Email Address</label>
                  <input type="email" :class="styles.input" placeholder="john@example.com" >
                </div>
                <div :class="styles.formGroup">
                  <label :class="styles.formLabel">Subject</label>
                  <select :class="styles.input">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div :class="styles.formGroup">
                  <label :class="styles.formLabel">Message</label>
                  <textarea :class="styles.textarea" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" :class="styles.submitBtn">
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeUp" delay="0.6s">
          <div class="text-center mt-20">
            <NuxtLink to="/features" :class="styles.faqLink">Explore our Features →</NuxtLink>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <Footer />
  </main>
</template>
