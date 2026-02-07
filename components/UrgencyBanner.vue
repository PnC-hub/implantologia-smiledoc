<template>
  <div class="bg-gradient-to-r from-brand-accent to-red-700 text-white py-2 px-4 text-center text-sm">
    <div class="max-w-4xl mx-auto flex items-center justify-center gap-4 flex-wrap">
      <span class="flex items-center gap-2">
        <i class="fas fa-calendar-alt"></i>
        <span>Prossima disponibilità: <strong>{{ nextAvailable }}</strong></span>
      </span>
      <span class="hidden sm:inline">|</span>
      <span class="flex items-center gap-2">
        <i class="fas fa-users"></i>
        <span><strong>{{ spotsLeft }}</strong> posti disponibili questo mese</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const today = new Date()
const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)

const dayNames = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']
const monthNames = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']

// Find next Tuesday or Thursday
let nextDate = new Date(today)
while (nextDate.getDay() !== 2 && nextDate.getDay() !== 4) {
  nextDate.setDate(nextDate.getDate() + 1)
}

const nextAvailable = `${dayNames[nextDate.getDay()]} ${nextDate.getDate()} ${monthNames[nextDate.getMonth()]}`

// Dynamic spots (decreases during the month)
const dayOfMonth = today.getDate()
const baseSpots = 8
const spotsLeft = Math.max(2, baseSpots - Math.floor(dayOfMonth / 4))
</script>
