<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue"

const GA_MEASUREMENT_ID = "G-5GRBHEJ2V3"

const consented = ref(false)

function grant() {
  consented.value = true
}

onMounted(() => {
  if (localStorage.getItem("topscore_cookie_consent") === "true") {
    consented.value = true
  }
  window.addEventListener("cookie-consent-granted", grant)
})

onBeforeUnmount(() => window.removeEventListener("cookie-consent-granted", grant))

// Inject GA scripts only once consent is granted.
watch(consented, (ok) => {
  if (!ok) return
  useHead({
    script: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`, async: true },
      {
        innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
      },
    ],
  })
})
</script>

<template>
  <span style="display: none" aria-hidden="true" />
</template>
