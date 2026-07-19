<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

interface Props {
  particleCount?: number
  connectionDistance?: number
  mouseInteraction?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  particleCount: 50,
  connectionDistance: 150,
  mouseInteraction: true,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const particles = ref<Particle[]>([])
const mouse = ref({ x: 0, y: 0 })
let animationFrameId: number | null = null

const initParticles = () => {
  particles.value = []
  for (let i = 0; i < props.particleCount; i++) {
    particles.value.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    })
  }
}

const drawParticles = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  particles.value.forEach((particle) => {
    // Update position
    particle.x += particle.vx
    particle.y += particle.vy

    // Bounce off edges
    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

    // Mouse interaction
    if (props.mouseInteraction) {
      const dx = mouse.value.x - particle.x
      const dy = mouse.value.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 100) {
        particle.x -= dx * 0.02
        particle.y -= dy * 0.02
      }
    }

    // Draw particle
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(43, 78, 154, ${particle.opacity})`
    ctx.fill()
  })

  // Draw connections
  particles.value.forEach((particle, i) => {
    for (let j = i + 1; j < particles.value.length; j++) {
      const other = particles.value[j]
      const dx = particle.x - other.x
      const dy = particle.y - other.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < props.connectionDistance) {
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(other.x, other.y)
        ctx.strokeStyle = `rgba(43, 78, 154, ${0.1 * (1 - distance / props.connectionDistance)})`
        ctx.stroke()
      }
    }
  })

  animationFrameId = requestAnimationFrame(drawParticles)
}

const handleResize = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const handleMouseMove = (e: MouseEvent) => {
  mouse.value.x = e.clientX
  mouse.value.y = e.clientY
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  initParticles()
  drawParticles()

  window.addEventListener('resize', handleResize)
  if (props.mouseInteraction) {
    window.addEventListener('mousemove', handleMouseMove)
  }
})

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('resize', handleResize)
  if (props.mouseInteraction) {
    window.removeEventListener('mousemove', handleMouseMove)
  }
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="fixed inset-0 pointer-events-none -z-10 opacity-30"
  />
</template>
