/**
 * Composable for parallax scrolling effects
 * Creates smooth parallax movement based on scroll position
 */
export function useParallax(speed = 0.5) {
  const elementRef = ref<HTMLElement | null>(null)
  const translateY = ref(0)

  const handleScroll = () => {
    if (!elementRef.value) return

    const rect = elementRef.value.getBoundingClientRect()
    const scrolled = window.scrollY
    const rate = scrolled * speed

    translateY.value = rate
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    elementRef,
    translateY,
  }
}

/**
 * Composable for mouse parallax effect
 * Creates parallax movement based on mouse position
 */
export function useMouseParallax(strength = 20) {
  const elementRef = ref<HTMLElement | null>(null)
  const mouseX = ref(0)
  const mouseY = ref(0)

  const handleMouseMove = (e: MouseEvent) => {
    if (!elementRef.value) return

    const rect = elementRef.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    mouseX.value = (e.clientX - centerX) / strength
    mouseY.value = (e.clientY - centerY) / strength
  }

  const handleMouseLeave = () => {
    mouseX.value = 0
    mouseY.value = 0
  }

  onMounted(() => {
    elementRef.value?.addEventListener('mousemove', handleMouseMove)
    elementRef.value?.addEventListener('mouseleave', handleMouseLeave)
  })

  onBeforeUnmount(() => {
    elementRef.value?.removeEventListener('mousemove', handleMouseMove)
    elementRef.value?.removeEventListener('mouseleave', handleMouseLeave)
  })

  return {
    elementRef,
    mouseX,
    mouseY,
  }
}
