import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app"
import { getFirestore, type Firestore } from "firebase/firestore"
import { getAnalytics, type Analytics } from "firebase/analytics"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuILMxmjqkVlFUZ2jj6LNb9T9-kPClyU4",
  authDomain: "topscore-ai-app.firebaseapp.com",
  projectId: "topscore-ai-app",
  storageBucket: "topscore-ai-app.firebasestorage.app",
  messagingSenderId: "853548943375",
  appId: "1:853548943375:web:91e0bdb35ff850fc09bb7a",
  measurementId: "G-NEHGCZ967L",
}

let app: FirebaseApp | null = null
let db: Firestore | null = null
let analytics: Analytics | null = null

// Lazy initialiser — only runs in the browser (called from the client plugin).
export function getDb(): Firestore {
  if (!app) {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
  }
  if (!db) {
    db = getFirestore(app)
  }
  return db
}

export function getAnalyticsInstance(): Analytics | null {
  if (!app) {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
  }
  if (!analytics && typeof window !== 'undefined') {
    analytics = getAnalytics(app)
  }
  return analytics
}

export { firebaseConfig }
