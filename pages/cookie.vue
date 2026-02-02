<template>
  <div class="min-h-screen bg-white font-poppins">
    <header class="py-4 border-b border-slate-200">
      <div class="max-w-3xl mx-auto px-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-brand-dark font-bold text-lg">Smiledoc Implantologia</NuxtLink>
        <NuxtLink to="/" class="text-sm text-gray-500 hover:text-brand-accent transition">&larr; Torna alla Home</NuxtLink>
      </div>
    </header>

    <main class="max-w-3xl mx-auto px-4 py-12">
      <h1 class="text-3xl md:text-4xl font-bold text-brand-dark mb-2">Cookie Policy</h1>
      <p class="text-gray-500 text-sm italic mb-10">Ultimo aggiornamento: {{ currentDate }}</p>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">1. Cosa sono i Cookie</h2>
        <p class="text-gray-700 leading-relaxed">
          I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente
          durante la navigazione su un sito web. Possono essere utilizzati per il corretto funzionamento del sito,
          l'analisi del traffico o la personalizzazione dell'esperienza di navigazione.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">2. Tipologie di Cookie Utilizzati</h2>
        <p class="text-gray-700 leading-relaxed mb-3">
          Il sito <strong>implantologiasmiledoc.it</strong> utilizza esclusivamente <strong>cookie tecnici</strong>,
          necessari per il funzionamento del sito e per permettere la navigazione.
        </p>
        <p class="text-gray-700 leading-relaxed mb-3">In particolare, vengono utilizzati per:</p>
        <ul class="list-disc ml-6 text-gray-700 space-y-1 mb-3">
          <li>Mantenere la sessione di navigazione attiva</li>
          <li>Gestire il funzionamento del modulo di contatto</li>
          <li>Garantire la sicurezza della navigazione</li>
        </ul>
        <p class="text-gray-700 leading-relaxed">
          Questi cookie <strong>non richiedono il consenso esplicito dell'utente</strong>
          in quanto strettamente necessari per il funzionamento del sito
          (art. 122, comma 1 del Codice Privacy).
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">3. Cookie di Terze Parti</h2>
        <p class="text-gray-700 leading-relaxed mb-3">
          Al momento, il sito <strong>non utilizza cookie di terze parti</strong> per finalità
          di profilazione, marketing o analisi comportamentale.
        </p>
        <ul class="list-disc ml-6 text-gray-700 space-y-1">
          <li><strong>Non vengono utilizzati cookie di Google Analytics</strong> o altri strumenti di analisi comportamentale</li>
          <li><strong>Non vengono utilizzati cookie pubblicitari</strong> o di remarketing (es. Facebook Pixel, Google Ads)</li>
          <li><strong>Non vengono utilizzati cookie di profilazione</strong> per la personalizzazione dei contenuti</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">4. Cookie di Google Fonts</h2>
        <p class="text-gray-700 leading-relaxed">
          Il sito utilizza il servizio <strong>Google Fonts</strong> per caricare i caratteri tipografici (Poppins).
          Questo servizio può comportare l'invio di alcune informazioni tecniche (come l'indirizzo IP) ai server di Google.
          Google Fonts non utilizza cookie e non traccia il comportamento degli utenti.
          Per maggiori informazioni, consultare la
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="text-brand-accent underline">Privacy Policy di Google</a>.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">5. Durata dei Cookie</h2>
        <p class="text-gray-700 leading-relaxed">
          I cookie tecnici utilizzati dal sito hanno una durata limitata alla singola sessione di navigazione
          (<strong>cookie di sessione</strong>) e vengono automaticamente eliminati alla chiusura del browser.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">6. Gestione e Disattivazione dei Cookie</h2>
        <p class="text-gray-700 leading-relaxed mb-3">
          È possibile gestire o disabilitare i cookie attraverso le impostazioni del proprio browser.
          La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento di alcune funzionalità del sito.
        </p>
        <h3 class="font-semibold text-brand-dark mt-4 mb-2">Come disabilitare i cookie nei principali browser:</h3>
        <ul class="list-disc ml-6 text-gray-700 space-y-1">
          <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" class="text-brand-accent underline">Guida ufficiale</a></li>
          <li><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener" class="text-brand-accent underline">Guida ufficiale</a></li>
          <li><strong>Safari:</strong> <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener" class="text-brand-accent underline">Guida ufficiale</a></li>
          <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener" class="text-brand-accent underline">Guida ufficiale</a></li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">7. Riferimenti Normativi</h2>
        <ul class="list-disc ml-6 text-gray-700 space-y-1">
          <li>Regolamento UE 2016/679 (GDPR)</li>
          <li>D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018</li>
          <li>Provvedimento del Garante n. 229 del 8 maggio 2014</li>
          <li>Linee guida cookie e altri strumenti di tracciamento del Garante Privacy (10 giugno 2021)</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">8. Contatti</h2>
        <p class="text-gray-700 leading-relaxed mb-3">
          Per qualsiasi informazione relativa alla presente Cookie Policy:
        </p>
        <p class="text-gray-700 leading-relaxed">
          <strong>Centro Odontoiatrico Smiledoc S.r.l.</strong><br>
          Via Monte Circeo 12, 00015 Monterotondo (RM)<br>
          Email: <a href="mailto:direzione@smiledoc.it" class="text-brand-accent underline">direzione@smiledoc.it</a>
        </p>
        <p class="text-gray-700 leading-relaxed mt-3">
          Per maggiori informazioni sul trattamento dei dati personali, consultare la
          <NuxtLink to="/privacy" class="text-brand-accent underline">Privacy Policy</NuxtLink>.
        </p>
      </section>

      <div class="mt-10 pt-6 border-t border-slate-200 text-center">
        <NuxtLink to="/" class="inline-block bg-brand-dark text-white font-semibold py-3 px-8 rounded-xl hover:bg-brand-dark/90 transition">&larr; Torna alla Home</NuxtLink>
      </div>
    </main>

    <footer class="bg-brand-dark text-white/60 py-6">
      <div class="max-w-3xl mx-auto px-4 text-center text-sm">
        <p>&ndash; Direttore Sanitario Dott. Piernatale Civero &ndash;</p>
        <p class="mt-1 text-white/40">&copy; {{ new Date().getFullYear() }} Centro Odontoiatrico Smiledoc | P.IVA: 10718251002</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const currentDate = new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })

useHead({
  title: 'Cookie Policy - Implantologia Smiledoc Monterotondo',
  meta: [
    { name: 'description', content: 'Informativa sui cookie del sito Implantologia Smiledoc. Il sito utilizza esclusivamente cookie tecnici.' },
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>
