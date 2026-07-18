<script setup lang="ts">
import { ref } from 'vue'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { getDb } from '~/lib/firebase'
import { useLocale } from '~/composables/useLocale'
import Dialog from '~/components/ui/Dialog.vue'
import DialogContent from '~/components/ui/DialogContent.vue'
import DialogHeader from '~/components/ui/DialogHeader.vue'
import DialogTitle from '~/components/ui/DialogTitle.vue'
import DialogDescription from '~/components/ui/DialogDescription.vue'
import DialogFooter from '~/components/ui/DialogFooter.vue'
import Button from '~/components/ui/Button.vue'
import Input from '~/components/ui/Input.vue'
import Textarea from '~/components/ui/Textarea.vue'
import { Star, Send, Loader2, CheckCircle2 } from 'lucide-vue-next'

interface FeedbackModalProps {
  isOpen: boolean
}

const props = defineProps<FeedbackModalProps>()
const emit = defineEmits<{
  close: []
}>()

const { t } = useLocale()
const rating = ref(0)
const name = ref('')
const text = ref('')
const submitting = ref(false)
const error = ref('')
const success = ref(false)

const handleClose = () => {
  // Reset state when closing
  rating.value = 0
  name.value = ''
  text.value = ''
  error.value = ''
  success.value = false
  emit('close')
}

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  error.value = ''

  if (rating.value === 0) {
    error.value = 'Please select a star rating.'
    return
  }
  if (!name.value.trim()) {
    error.value = 'Please enter your name.'
    return
  }
  if (!text.value.trim()) {
    error.value = 'Please write your feedback.'
    return
  }

  submitting.value = true
  try {
    const db = getDb()
    await addDoc(collection(db, "testimonials"), {
      name: name.value.trim(),
      rating: rating.value,
      text: text.value.trim(),
      approved: false,
      createdAt: serverTimestamp(),
      source: 'web'
    })
    success.value = true
  } catch (err) {
    console.error("Error submitting feedback:", err)
    error.value = "Failed to submit. Please try again."
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="props.isOpen">
    <DialogContent class="sm:max-w-[425px]">
      <div v-if="success" class="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle2 class="h-16 w-16 text-green-500" />
        <DialogTitle class="text-2xl font-black">Thank you!</DialogTitle>
        <DialogDescription>
          Your feedback has been submitted for review. It may appear on our site soon.
        </DialogDescription>
        <Button @click="handleClose" class="mt-2">Close</Button>
      </div>
      <form v-else @submit="handleSubmit">
        <DialogHeader>
          <DialogTitle class="text-2xl font-black">Share Your Experience</DialogTitle>
          <DialogDescription>
            How is TopScore AI helping you? Your testimonial might be featured on our landing page.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-6 py-6">
          <div class="flex flex-col items-center gap-3">
            <span class="text-sm font-medium text-slate-500">Rating</span>
            <div class="flex gap-1">
              <button
                v-for="s in 5"
                :key="s"
                type="button"
                @click="rating = s"
                class="transition-all hover:scale-110"
              >
                <Star
                  class="h-8 w-8"
                  :class="s <= rating ? 'fill-yellow-500 text-yellow-500' : 'text-slate-300/30'"
                />
              </button>
            </div>
          </div>
          <div class="grid gap-2">
            <label for="name" class="text-sm font-bold">Your Name</label>
            <Input
              id="name"
              v-model="name"
              placeholder="e.g. Amina K."
            />
          </div>
          <div class="grid gap-2">
            <label for="text" class="text-sm font-bold">Your Feedback</label>
            <Textarea
              id="text"
              v-model="text"
              placeholder="Tell us how we helped you..."
              class="min-h-[100px]"
            />
          </div>
          <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            :disabled="submitting"
            class="w-full font-black py-6 text-lg"
          >
            <Loader2 v-if="submitting" class="mr-2 h-5 w-5 animate-spin" />
            <Send v-else class="mr-2 h-5 w-5" />
            Submit Testimonial
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
