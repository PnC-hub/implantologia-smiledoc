<template>
  <Teleport to="body">
    <div v-if="showBanner" class="fixed bottom-0 left-0 right-0 z-[9999] bg-brand-dark/95 backdrop-blur-sm text-white p-4 md:p-5 shadow-2xl">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <p class="text-sm text-white/80 flex-1">
          Questo sito utilizza esclusivamente <strong class="text-white">cookie tecnici</strong> necessari al funzionamento.
          Non vengono utilizzati cookie di profilazione o di terze parti.
          <NuxtLink to="/cookie" class="underline text-white/90 hover:text-white">Scopri di più</NuxtLink>
        </p>
        <button
          @click="acceptCookies"
          class="bg-brand-green hover:bg-brand-green-hover text-white font-semibold py-2 px-6 rounded-lg text-sm transition whitespace-nowrap"
        >
          Ho capito
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const showBanner = ref(false)

onMounted(() => {
  if (!localStorage.getItem('cookie_consent')) {
    showBanner.value = true
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookie_consent', 'accepted')
  showBanner.value = false
}
</script>
