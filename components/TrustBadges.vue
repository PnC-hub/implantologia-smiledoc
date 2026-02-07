<template>
  <div class="flex flex-wrap justify-center gap-4 mt-6">
    <div
      v-for="badge in badges"
      :key="badge.label"
      class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm"
    >
      <i :class="badge.icon" class="text-brand-green"></i>
      <span class="font-semibold">{{ badge.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const badges = [
  { icon: 'fas fa-shield-alt', label: 'Garanzia 10 Anni' },
  { icon: 'fas fa-user-md', label: '25+ Anni Esperienza' },
  { icon: 'fas fa-tooth', label: '5000+ Impianti' },
  { icon: 'fas fa-star', label: '4.9/5 Google Reviews' },
]
</script>
