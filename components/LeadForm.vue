<template>
  <form @submit.prevent="handleSubmit" :class="['rounded-2xl', compact ? 'p-5' : 'p-8', variant === 'dark' ? 'bg-brand-dark text-white' : 'bg-slate-50 border border-slate-200 shadow-lg']">
    <h3 v-if="title" :class="['font-bold mb-4', compact ? 'text-lg' : 'text-xl', variant === 'dark' ? 'text-white' : 'text-brand-dark']">
      {{ title }}
    </h3>

    <div :class="compact ? 'space-y-3' : 'space-y-4'">
      <div>
        <label :class="['block text-sm font-medium mb-1', variant === 'dark' ? 'text-white/80' : 'text-gray-700']">Nome e Cognome *</label>
        <input v-model="form.name" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition text-gray-800" placeholder="Mario Rossi" />
      </div>
      <div>
        <label :class="['block text-sm font-medium mb-1', variant === 'dark' ? 'text-white/80' : 'text-gray-700']">Telefono *</label>
        <input v-model="form.phone" type="tel" required class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition text-gray-800" placeholder="333 1234567" />
      </div>
      <div v-if="!compact">
        <label :class="['block text-sm font-medium mb-1', variant === 'dark' ? 'text-white/80' : 'text-gray-700']">Email</label>
        <input v-model="form.email" type="email" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition text-gray-800" placeholder="mario@email.com" />
      </div>
      <div>
        <label :class="['block text-sm font-medium mb-1', variant === 'dark' ? 'text-white/80' : 'text-gray-700']">Comune di residenza</label>
        <select v-model="form.comune" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition bg-white text-gray-800">
          <option value="">Seleziona il tuo comune...</option>
          <option value="Monterotondo">Monterotondo</option>
          <option value="Mentana">Mentana</option>
          <option value="Fonte Nuova">Fonte Nuova</option>
          <option value="Guidonia">Guidonia Montecelio</option>
          <option value="Palombara Sabina">Palombara Sabina</option>
          <option value="Fiano Romano">Fiano Romano</option>
          <option value="Capena">Capena</option>
          <option value="Castelnuovo di Porto">Castelnuovo di Porto</option>
          <option value="Riano">Riano</option>
          <option value="Morlupo">Morlupo</option>
          <option value="Tivoli">Tivoli</option>
          <option value="Roma">Roma</option>
          <option value="Altro">Altro</option>
        </select>
      </div>
      <div v-if="!compact">
        <label :class="['block text-sm font-medium mb-1', variant === 'dark' ? 'text-white/80' : 'text-gray-700']">Descrivi brevemente la tua situazione</label>
        <textarea v-model="form.message" rows="3" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition text-gray-800" placeholder="Es: mi mancano 2 denti, uso una protesi mobile..."></textarea>
      </div>
      <div>
        <label class="flex items-start gap-2 text-xs" :class="variant === 'dark' ? 'text-white/60' : 'text-gray-500'">
          <input v-model="form.privacy" type="checkbox" required class="mt-1" />
          <span>Acconsento al trattamento dei dati personali ai sensi del Reg. UE 2016/679 (GDPR). <a href="/privacy" :class="variant === 'dark' ? 'text-white/80 underline' : 'text-brand-accent underline'">Privacy Policy</a></span>
        </label>
      </div>
    </div>

    <div v-if="submitted" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
      <i class="fas fa-check-circle mr-2"></i>Richiesta inviata. Ti ricontatteremo al più presto.
    </div>

    <button type="submit" :disabled="loading" class="w-full mt-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50">
      <span v-if="loading"><i class="fas fa-spinner fa-spin mr-2"></i>Invio in corso...</span>
      <span v-else><i class="fas fa-paper-plane mr-2"></i>{{ buttonText }}</span>
    </button>

    <p v-if="!compact" class="text-xs mt-3 text-center" :class="variant === 'dark' ? 'text-white/40' : 'text-gray-400'">
      Nessun impegno. Ti contatteremo per fornirti le informazioni richieste.
    </p>
  </form>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  compact?: boolean
  variant?: 'light' | 'dark'
  buttonText?: string
  pageSource?: string
}>(), {
  title: 'Richiedi informazioni',
  compact: false,
  variant: 'light',
  buttonText: 'Invia la richiesta',
  pageSource: 'Homepage Implantologia',
})

const form = reactive({
  name: '',
  phone: '',
  email: '',
  comune: '',
  message: '',
  privacy: false,
})

const loading = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  loading.value = true
  try {
    await $fetch('/api/lead', {
      method: 'POST',
      body: { ...form, pageSource: props.pageSource },
    })
    submitted.value = true
    navigateTo('/grazie')
  } catch (e) {
    alert('Si è verificato un errore. Riprova o chiamaci direttamente.')
  } finally {
    loading.value = false
  }
}
</script>
