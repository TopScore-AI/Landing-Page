<script setup lang="ts">
import { ref, onMounted } from "vue"
import styles from "./CookieConsent.module.css"
import Button from "./ui/Button.vue"

const CONSENT_KEY = "topscore_cookie_consent"

const { t } = useLocale()
const visible = ref(false)

onMounted(() => {
  const stored = localStorage.getItem(CONSENT_KEY)
  if (stored === null) visible.value = true
})

function respond(accepted: boolean) {
  localStorage.setItem(CONSENT_KEY, String(accepted))
  visible.value = false
  if (accepted) window.dispatchEvent(new Event("cookie-consent-granted"))
}
</script>

<template>
  <div v-if="visible" :class="styles.banner">
    <p :class="styles.text">{{ t('cookie.text') }}</p>

    <div :class="styles.actions">
      <Button variant="default" size="default" :class="styles.accept" @click="respond(true)">
        {{ t('cookie.accept') }}
      </Button>
      <Button variant="ghost" size="default" :class="styles.decline" @click="respond(false)">
        {{ t('cookie.decline') }}
      </Button>
    </div>
  </div>
</template>
