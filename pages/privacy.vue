<template>
  <div class="min-h-screen bg-white font-poppins">
    <header class="py-4 border-b border-slate-200">
      <div class="max-w-3xl mx-auto px-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-brand-dark font-bold text-lg">Smiledoc Implantologia</NuxtLink>
        <NuxtLink to="/" class="text-sm text-gray-500 hover:text-brand-accent transition">&larr; Torna alla Home</NuxtLink>
      </div>
    </header>

    <main class="max-w-3xl mx-auto px-4 py-12">
      <h1 class="text-3xl md:text-4xl font-bold text-brand-dark mb-2">Informativa sulla Privacy</h1>
      <p class="text-gray-500 text-sm italic mb-10">Ultimo aggiornamento: {{ currentDate }}</p>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">1. Titolare del Trattamento</h2>
        <p class="text-gray-700 leading-relaxed mb-3">
          Il Titolare del trattamento dei dati personali è il <strong>Centro Odontoiatrico Smiledoc S.r.l.</strong>,
          con sede in Via Monte Circeo 12, 00015 Monterotondo (RM) — P.IVA: 10718251002.
        </p>
        <p class="text-gray-700 leading-relaxed">
          <strong>Direttore Sanitario:</strong> Dott. Piernatale Civero<br>
          <strong>Email:</strong> <a href="mailto:direzione@smiledoc.it" class="text-brand-accent underline">direzione@smiledoc.it</a><br>
          <strong>Telefono:</strong> <a href="tel:+390690623936" class="text-brand-accent underline">06 906 23 936</a>
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">2. Base Giuridica e Finalità del Trattamento</h2>
        <p class="text-gray-700 leading-relaxed mb-3">
          I dati personali raccolti attraverso il modulo di contatto presente sul sito vengono trattati
          in base al <strong>consenso dell'interessato</strong> (art. 6, par. 1, lett. a del GDPR)
          per le seguenti finalità:
        </p>
        <ul class="list-disc ml-6 text-gray-700 space-y-1 mb-3">
          <li>Rispondere alle richieste di informazioni inviate tramite il modulo di contatto</li>
          <li>Fornire informazioni sui trattamenti di implantologia dentale disponibili</li>
          <li>Gestire eventuali appuntamenti o consulenze richieste</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">3. Tipologia di Dati Raccolti</h2>
        <p class="text-gray-700 leading-relaxed mb-3">Attraverso il modulo di contatto vengono raccolti i seguenti dati personali:</p>
        <ul class="list-disc ml-6 text-gray-700 space-y-1 mb-3">
          <li><strong>Nome e cognome</strong></li>
          <li><strong>Numero di telefono</strong></li>
          <li><strong>Indirizzo email</strong> (facoltativo)</li>
          <li><strong>Comune di residenza</strong> (facoltativo)</li>
          <li><strong>Descrizione della situazione</strong> (facoltativo)</li>
        </ul>
        <p class="text-gray-700 leading-relaxed">
          Il conferimento dei dati contrassegnati come obbligatori è necessario per consentire al Titolare
          di rispondere alla richiesta. In caso di mancato conferimento, non sarà possibile evadere la richiesta.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">4. Modalità di Trattamento</h2>
        <p class="text-gray-700 leading-relaxed mb-3">
          I dati personali vengono trattati con strumenti elettronici e manuali, nel rispetto delle
          misure di sicurezza previste dal GDPR (Regolamento UE 2016/679) e dal D.Lgs. 196/2003
          (Codice Privacy) come modificato dal D.Lgs. 101/2018.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Il trattamento è effettuato dal Titolare e da eventuali soggetti autorizzati (personale di studio)
          appositamente istruiti e vincolati da obblighi di riservatezza.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">5. Comunicazione e Diffusione dei Dati</h2>
        <p class="text-gray-700 leading-relaxed mb-3">
          I dati personali raccolti <strong>non vengono diffusi</strong> e possono essere comunicati esclusivamente a:
        </p>
        <ul class="list-disc ml-6 text-gray-700 space-y-1 mb-3">
          <li><strong>Fornitore di servizi hosting e posta elettronica</strong> per l'invio delle comunicazioni
          via email, in qualità di Responsabile del Trattamento ai sensi dell'art. 28 del GDPR</li>
          <li><strong>Autorità pubbliche</strong>, in caso di obbligo di legge o su richiesta dell'autorità giudiziaria</li>
        </ul>
        <p class="text-gray-700 leading-relaxed">
          Non vengono effettuate comunicazioni a terzi per finalità commerciali o di marketing,
          né vengono ceduti a società esterne per attività promozionali.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">6. Periodo di Conservazione</h2>
        <p class="text-gray-700 leading-relaxed mb-3">
          I dati personali raccolti vengono conservati per un periodo di <strong>24 mesi</strong>
          dalla data di acquisizione, salvo diversa richiesta dell'interessato o necessità di conservazione per obblighi di legge.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">7. Diritti dell'Interessato</h2>
        <p class="text-gray-700 leading-relaxed mb-3">
          In qualità di interessato, Lei ha il diritto di ottenere dal Titolare, ai sensi degli artt. 15-22 del GDPR:
        </p>
        <ul class="list-disc ml-6 text-gray-700 space-y-1 mb-3">
          <li><strong>Accesso:</strong> conferma dell'esistenza di dati personali che La riguardano e ottenerne copia</li>
          <li><strong>Rettifica:</strong> correzione di dati inesatti o integrazione di dati incompleti</li>
          <li><strong>Cancellazione:</strong> eliminazione dei dati personali ("diritto all'oblio")</li>
          <li><strong>Limitazione:</strong> sospensione del trattamento in determinate condizioni</li>
          <li><strong>Portabilità:</strong> ricezione dei dati in formato strutturato e leggibile</li>
          <li><strong>Opposizione:</strong> opposizione al trattamento per motivi legittimi</li>
          <li><strong>Revoca del consenso:</strong> revoca in qualsiasi momento senza pregiudicare la liceità del trattamento precedente</li>
        </ul>
        <p class="text-gray-700 leading-relaxed">
          Per esercitare tali diritti, può inviare una richiesta a
          <a href="mailto:direzione@smiledoc.it" class="text-brand-accent underline">direzione@smiledoc.it</a>.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">8. Diritto di Reclamo</h2>
        <p class="text-gray-700 leading-relaxed mb-3">
          L'interessato ha il diritto di proporre reclamo all'Autorità Garante per la Protezione
          dei Dati Personali qualora ritenga che il trattamento dei propri dati avvenga in violazione della normativa vigente.
        </p>
        <p class="text-gray-700 leading-relaxed">
          <strong>Garante per la Protezione dei Dati Personali</strong><br>
          Piazza Venezia 11, 00187 Roma<br>
          Email: <a href="mailto:garante@gpdp.it" class="text-brand-accent underline">garante@gpdp.it</a><br>
          PEC: <a href="mailto:protocollo@pec.gpdp.it" class="text-brand-accent underline">protocollo@pec.gpdp.it</a><br>
          Tel: +39 06 696771
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">9. Cookie</h2>
        <p class="text-gray-700 leading-relaxed">
          Per informazioni sull'uso di cookie e altre tecnologie di tracciamento,
          si rimanda alla <NuxtLink to="/cookie" class="text-brand-accent underline">Cookie Policy</NuxtLink>.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold text-brand-dark mb-3 pb-2 border-b-2 border-slate-200">10. Modifiche all'Informativa</h2>
        <p class="text-gray-700 leading-relaxed">
          La presente Informativa può essere aggiornata periodicamente.
          Eventuali modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
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
  title: 'Privacy Policy - Implantologia Smiledoc Monterotondo',
  meta: [
    { name: 'description', content: 'Informativa sulla privacy del sito Implantologia Smiledoc, conforme al GDPR (Regolamento UE 2016/679).' },
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>
