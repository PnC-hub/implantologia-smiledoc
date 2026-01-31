<template>
  <Teleport to="body">
    <div v-if="visible" class="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" @click.self="close">
      <div class="bg-white rounded-2xl max-w-lg w-full p-8 relative animate-fadeIn">
        <button @click="close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl">
          <i class="fas fa-times"></i>
        </button>
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-tooth text-brand-accent text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-brand-dark">Stai per andare via?</h3>
          <p class="text-gray-600 mt-2">Lascia i tuoi dati e scopri come possiamo aiutarti a tornare a sorridere senza pensieri.</p>
        </div>
        <LeadForm compact title="" button-text="Richiedi informazioni" page-source="Exit Intent Popup" />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const visible = ref(false)
const triggered = ref(false)

onMounted(() => {
  if (window.innerWidth < 768) return // no exit intent on mobile

  document.addEventListener('mouseout', (e: MouseEvent) => {
    if (triggered.value) return
    if (e.clientY < 10) {
      const dismissed = sessionStorage.getItem('exitPopupDismissed')
      if (dismissed) return
      triggered.value = true
      visible.value = true
    }
  })
})

const close = () => {
  visible.value = false
  sessionStorage.setItem('exitPopupDismissed', '1')
}
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
