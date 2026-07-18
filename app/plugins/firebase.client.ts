import { getApps, getApp, initializeApp } from "firebase/app"
import { getAnalytics, isSupported } from "firebase/analytics"
import { firebaseConfig } from "~/lib/firebase"

// Client-only plugin: initialise Firebase Analytics (guarded like the original lib/firebase.ts).
export default defineNuxtPlugin(() => {
  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)

  isSupported()
    .then((supported) => {
      if (supported) getAnalytics(app)
    })
    .catch(() => {
      /* analytics unsupported — ignore */
    })
})
