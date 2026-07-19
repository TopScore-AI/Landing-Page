/**
 * Composable for scroll-triggered animations with Intersection Observer
 * Provides reusable animation logic for scroll-based reveal effects
 */
export function useScrollAnimation(threshold = 0.1, rootMargin = '0px') {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement | null>(null)

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(elementRef.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return {
    isVisible,
    elementRef,
  }
}

/**
 * Composable for staggered children animations
 * Animates children elements with sequential delays
 */
export function useStaggerAnimation(delay = 100) {
  const childrenRefs = ref<HTMLElement[]>([])

  const animateChildren = () => {
    childrenRefs.value.forEach((child, index) => {
      setTimeout(() => {
        child.style.opacity = '1'
        child.style.transform = 'translateY(0)'
      }, index * delay)
    })
  }

  return {
    childrenRefs,
    animateChildren,
  }
}

/**
 * Composable for 3D tilt effect on cards
 * Creates interactive 3D rotation based on mouse position
 */
export function useTiltEffect(maxRotation = 10) {
  const elementRef = ref<HTMLElement | null>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!elementRef.value) return

    const rect = elementRef.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const rotateX = (mouseY / (rect.height / 2)) * -maxRotation
    const rotateY = (mouseX / (rect.width / 2)) * maxRotation

    elementRef.value.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = () => {
    if (!elementRef.value) return
    elementRef.value.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
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
  }
}

/**
 * Composable for magnetic button effect
 * Button follows cursor slightly when hovering
 */
export function useMagneticEffect(strength = 0.3) {
  const elementRef = ref<HTMLElement | null>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!elementRef.value) return

    const rect = elementRef.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength

    elementRef.value.style.transform = `translate(${deltaX}px, ${deltaY}px)`
  }

  const handleMouseLeave = () => {
    if (!elementRef.value) return
    elementRef.value.style.transform = 'translate(0, 0)'
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
  }
}
