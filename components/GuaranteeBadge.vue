<template>
  <div :class="[
    'inline-flex items-center gap-3 rounded-xl border-2 border-brand-green/30 bg-gradient-to-r from-brand-green/10 to-brand-green/5',
    compact ? 'px-3 py-2' : 'px-5 py-3'
  ]">
    <div :class="[
      'flex-shrink-0 rounded-full bg-brand-green flex items-center justify-center text-white font-bold',
      compact ? 'w-10 h-10 text-sm' : 'w-14 h-14 text-lg'
    ]">
      <div class="text-center leading-tight">
        <span class="block">10</span>
        <span :class="compact ? 'text-[8px]' : 'text-[10px]'">ANNI</span>
      </div>
    </div>
    <div :class="compact ? 'text-sm' : ''">
      <div class="font-bold text-brand-dark flex items-center gap-1">
        <i class="fas fa-shield-alt text-brand-green"></i>
        Garanzia Sorriso Perfetto
      </div>
      <div class="text-gray-600" :class="compact ? 'text-xs' : 'text-sm'">
        Protesi e impianti garantiti 10 anni
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  compact?: boolean
}>()
</script>
