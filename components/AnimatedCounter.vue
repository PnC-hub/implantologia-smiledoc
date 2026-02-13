<template>
  <div class="text-center animate-fade-in-up" :style="{ animationDelay: delay }">
    <div class="text-3xl font-extrabold text-brand-dark">
      {{ displayValue }}{{ suffix }}
    </div>
    <div class="text-sm text-gray-500">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  target: number
  suffix?: string
  label: string
  delay?: string
  duration?: number
}>()

const displayValue = ref(0)
const hasAnimated = ref(false)

const animateCounter = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  const duration = props.duration || 2000
  const startTime = Date.now()
  const startValue = 0
  const endValue = props.target

  const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 4)
  }

  const updateCounter = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutQuart(progress)

    displayValue.value = Math.floor(startValue + (endValue - startValue) * easedProgress)

    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    } else {
      displayValue.value = endValue
    }
  }

  requestAnimationFrame(updateCounter)
}

onMounted(() => {
  if (typeof window === 'undefined') return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.5 }
  )

  const el = document.querySelector(`[data-counter="${props.label}"]`)
  if (el) {
    observer.observe(el)
  } else {
    // Fallback: animate after a short delay
    setTimeout(animateCounter, 500)
  }
})
</script>
