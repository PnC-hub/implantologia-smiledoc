<template>
  <div class="fixed bottom-24 left-4 z-40 hidden md:block">
    <transition name="slide">
      <div
        v-if="visible && currentProof"
        class="bg-white rounded-xl shadow-2xl p-4 max-w-xs border-l-4 border-brand-green animate-slide-in"
      >
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0">
            <i :class="currentProof.icon" class="text-brand-green"></i>
          </div>
          <div>
            <p class="text-sm text-gray-700">{{ currentProof.text }}</p>
            <p class="text-xs text-gray-400 mt-1">{{ currentProof.time }}</p>
          </div>
        </div>
        <button
          @click="visible = false"
          class="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xs"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const visible = ref(false)
const currentIndex = ref(0)

const proofs = [
  { icon: 'fas fa-user-check', text: 'Marco da Mentana ha prenotato una visita', time: '2 minuti fa' },
  { icon: 'fas fa-calendar-check', text: '3 appuntamenti confermati oggi', time: '5 minuti fa' },
  { icon: 'fas fa-star', text: 'Nuova recensione 5 stelle su Google', time: '15 minuti fa' },
  { icon: 'fas fa-tooth', text: 'Intervento completato con successo', time: '1 ora fa' },
  { icon: 'fas fa-user-plus', text: 'Laura da Guidonia sta visitando il sito', time: 'Ora' },
]

const currentProof = computed(() => proofs[currentIndex.value])

onMounted(() => {
  // Show first proof after 8 seconds
  setTimeout(() => {
    visible.value = true
  }, 8000)

  // Rotate proofs every 12 seconds
  setInterval(() => {
    visible.value = false
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % proofs.length
      visible.value = true
    }, 500)
  }, 12000)

  // Auto-hide after 6 seconds
  setInterval(() => {
    if (visible.value) {
      setTimeout(() => {
        visible.value = false
      }, 6000)
    }
  }, 12000)
})
</script>

<style scoped>
.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
