<template>
  <div class="flex items-center justify-center gap-2 text-sm text-gray-600 mt-4 py-2 px-4 bg-green-50 rounded-lg border border-green-100">
    <div class="flex -space-x-2">
      <div class="w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">M</div>
      <div class="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">A</div>
      <div class="w-6 h-6 rounded-full bg-brand-dark flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">R</div>
    </div>
    <span>
      <strong class="text-brand-dark">{{ count }}</strong> persone hanno richiesto informazioni {{ timeframe }}
    </span>
    <span class="inline-flex items-center gap-1 text-brand-green">
      <i class="fas fa-check-circle"></i>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  baseCount?: number
  timeframe?: string
}>(), {
  baseCount: 47,
  timeframe: 'questa settimana',
})

const count = ref(props.baseCount)

onMounted(() => {
  // Add slight randomization for realism (±5)
  const variation = Math.floor(Math.random() * 11) - 5
  count.value = props.baseCount + variation
})
</script>
