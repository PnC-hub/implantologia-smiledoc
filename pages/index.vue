<template>
  <div class="font-poppins text-gray-800 bg-white">

    <!-- HEADER -->
    <header class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-all duration-300" :class="scrolled ? 'py-2' : 'py-3'">
      <div class="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center">
            <i class="fas fa-tooth text-white text-lg"></i>
          </div>
          <div>
            <span class="text-xl font-bold text-brand-dark">Smiledoc</span>
            <span class="text-xs block text-gray-500 -mt-1">Implantologia</span>
          </div>
        </div>
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#chi-siamo" class="text-gray-600 hover:text-brand-accent transition">Chi Siamo</a>
          <a href="#contatti" class="text-gray-600 hover:text-brand-accent transition">Contatti</a>
          <a href="https://smiledoc.it" target="_blank" class="text-gray-600 hover:text-brand-accent transition">Smiledoc.it</a>
        </nav>
      </div>
    </header>

    <!-- HERO -->
    <section class="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50 to-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <p class="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-4">Centro Odontoiatrico Smiledoc - Monterotondo (RM)</p>
        <h1 class="text-3xl md:text-5xl font-extrabold leading-tight text-brand-dark mb-6">
          Senti dolore quando mangi e provi imbarazzo quando parli perch&eacute; hai una <span class="text-brand-accent">dentiera mobile</span> o ti mancano uno o pi&ugrave; denti?
        </h1>
        <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Scopri come centinaia di persone a <strong>Monterotondo e nel Lazio</strong> hanno detto addio al dolore e sono tornate a sorridere liberamente grazie al protocollo di implantologia del <strong>Dott. Piernatale Civero</strong>
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contatti" class="inline-block bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
            <i class="fas fa-envelope mr-2"></i>Vorrei essere ricontattato senza impegno
          </a>
          <a href="tel:+390774362520" class="inline-flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-accent transition">
            <i class="fas fa-phone"></i>Chiama ora: 0774 362 520
          </a>
        </div>
        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-extrabold text-brand-dark">25+</div>
            <div class="text-sm text-gray-500">Anni di esperienza</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-extrabold text-brand-dark">5000+</div>
            <div class="text-sm text-gray-500">Impianti inseriti</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-extrabold text-brand-dark">24h</div>
            <div class="text-sm text-gray-500">Denti fissi in giornata</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-extrabold text-brand-dark">98%</div>
            <div class="text-sm text-gray-500">Pazienti soddisfatti</div>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO SECTION -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
          Scopri come gli impianti dentali del Dott. Civero ti aiuteranno a dire addio al dolore e tornare a sorridere liberamente
        </h2>
        <p class="text-gray-500 mb-8">Guarda il video per capire come funziona il nostro protocollo</p>
        <!-- Video Placeholder -->
        <div class="relative bg-slate-900 rounded-2xl overflow-hidden aspect-video shadow-2xl group cursor-pointer" @click="showVideoNote = true">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80" alt="Studio dentistico moderno" class="w-full h-full object-cover opacity-70" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <i class="fas fa-play text-white text-3xl ml-1"></i>
            </div>
          </div>
          <div class="absolute bottom-4 left-4 text-white text-sm font-medium">
            <i class="fas fa-clock mr-1"></i>3 min - Il protocollo Smiledoc
          </div>
        </div>
        <!-- Video Note Modal -->
        <div v-if="showVideoNote" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="showVideoNote = false">
          <div class="bg-white rounded-2xl p-8 max-w-md text-left">
            <h3 class="text-xl font-bold text-brand-dark mb-3">Video in arrivo</h3>
            <p class="text-gray-600 mb-4">Il video di presentazione dello studio e del protocollo implantologico Smiledoc &egrave; in fase di produzione.</p>
            <p class="text-gray-600 mb-4">Nel frattempo, <a href="#contatti" class="text-brand-accent font-semibold hover:underline" @click="showVideoNote = false">contattaci</a> per ricevere tutte le informazioni.</p>
            <button @click="showVideoNote = false" class="bg-brand-dark text-white px-6 py-2 rounded-full font-medium hover:bg-brand-dark/90 transition">Chiudi</button>
          </div>
        </div>
      </div>
    </section>

    <!-- PAIN POINTS -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Ti riconosci in una di queste situazioni?</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-accent">
            <div class="text-3xl mb-3"><i class="fas fa-utensils text-brand-accent"></i></div>
            <h3 class="font-bold text-lg mb-2">Dolore quando mangi</h3>
            <p class="text-gray-600 text-sm">Ogni pasto diventa un problema. Eviti cibi che ami perch&eacute; masticare ti causa dolore e fastidio continuo.</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-accent">
            <div class="text-3xl mb-3"><i class="fas fa-comment-slash text-brand-accent"></i></div>
            <h3 class="font-bold text-lg mb-2">Imbarazzo quando parli</h3>
            <p class="text-gray-600 text-sm">Nascondi la bocca quando discuti con qualcuno. La paura di mostrare i denti ha preso il sopravvento sulla tua vita sociale.</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-accent">
            <div class="text-3xl mb-3"><i class="fas fa-frown text-brand-accent"></i></div>
            <h3 class="font-bold text-lg mb-2">Dentiera instabile</h3>
            <p class="text-gray-600 text-sm">La protesi mobile si muove, crea fastidio alle gengive e ti impedisce di vivere con serenit&agrave; ogni momento della giornata.</p>
          </div>
        </div>
        <div class="mt-10 bg-white rounded-xl p-8 shadow-md">
          <p class="text-lg text-gray-700 leading-relaxed">
            Un sorriso &ldquo;ammaccato&rdquo; e denti poco curati non sono solo un problema estetico. &Egrave; un <strong>limite alla tua libert&agrave;</strong> e un vero ostacolo alla tua felicit&agrave;. Vivere anche solo senza un dente pu&ograve; avere conseguenze negative sui denti sani: lo spazio vuoto fa spostare i denti naturali, compromettendo il morso e creando complicazioni che peggiorano col tempo.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mt-4">
            <strong class="text-brand-accent">La buona notizia?</strong> Oggi puoi rimediare. La tecnologia ha fatto passi da gigante e la poltrona del dentista non &egrave; pi&ugrave; quella che ti terrorizzava da bambino.
          </p>
        </div>
      </div>
    </section>

    <!-- SOLUZIONE / NATI PER SORRIDERE -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <span class="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-1 rounded-full mb-4">Iniziativa Speciale</span>
          <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Approfitta dell&rsquo;iniziativa <span class="text-brand-accent">&ldquo;Torna a Sorridere&rdquo;</span> per avere il tuo piano di cura personalizzato
          </h2>
          <p class="text-gray-600 text-lg">Scopri il Centro Odontoiatrico Smiledoc e il protocollo implantologico del Dott. Civero</p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 mb-10">
          <div class="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5 text-center">
            <i class="fas fa-hand-holding-heart text-brand-green text-2xl mb-2"></i>
            <p class="font-semibold text-brand-dark">Senza alcun impegno di acquisto</p>
          </div>
          <div class="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5 text-center">
            <i class="fas fa-euro-sign text-brand-green text-2xl mb-2"></i>
            <p class="font-semibold text-brand-dark">Senza spendere un solo euro</p>
          </div>
          <div class="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5 text-center">
            <i class="fas fa-home text-brand-green text-2xl mb-2"></i>
            <p class="font-semibold text-brand-dark">Informazioni direttamente a casa tua</p>
          </div>
        </div>

        <div class="space-y-4">
          <div v-for="(benefit, i) in benefits" :key="i" class="flex gap-4 items-start bg-slate-50 rounded-xl p-5">
            <div class="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <i class="fas fa-check text-sm"></i>
            </div>
            <p class="text-gray-700">{{ benefit }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CHI SIAMO / BIO -->
    <section id="chi-siamo" class="py-16 bg-brand-dark text-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="md:flex gap-10 items-center">
          <div class="md:w-1/3 mb-8 md:mb-0 text-center">
            <div class="w-48 h-48 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-user-md text-6xl text-white/80"></i>
            </div>
            <h3 class="text-xl font-bold">Dott. Piernatale Civero</h3>
            <p class="text-white/60 text-sm">Odontoiatra - Gnatologo</p>
            <p class="text-white/60 text-sm">Esperto in Implantologia</p>
          </div>
          <div class="md:w-2/3">
            <h2 class="text-2xl md:text-3xl font-bold mb-6">Da oltre 25 anni al servizio del tuo sorriso</h2>
            <p class="text-white/80 leading-relaxed mb-4">
              Da oltre 25 anni lavoro con l&rsquo;obiettivo di perfezionare un sistema di intervento rapido, efficace e adatto a ogni tipo di paziente. Presso il Centro Odontoiatrico Smiledoc a Monterotondo, insieme al mio team siamo diventati il punto di riferimento per l&rsquo;implantologia dentale nel Lazio.
            </p>
            <p class="text-white/80 leading-relaxed mb-4">
              Oggi sono in grado di inserire <strong class="text-white">nuovi denti fissi, robusti e resistenti</strong>, anche quando c&rsquo;&egrave; poco osso a disposizione e potresti pensare di essere un caso senza speranza.
            </p>
            <p class="text-white/80 leading-relaxed">
              Dopo la prima visita e gli esami diagnostici nel nostro studio, puoi ottenere subito la soluzione su misura per te, e se le tue condizioni cliniche lo consentono, <strong class="text-white">tornare a sorridere e mangiare anche in sole 24 ore!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- GARANZIA -->
    <section class="py-16 bg-amber-50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i class="fas fa-shield-alt text-amber-600 text-3xl"></i>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Garanzia &ldquo;Sorriso Perfetto&rdquo; di 10 anni</h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Ogni nuova protesi &egrave; coperta dalla nostra speciale garanzia che per <strong>10 anni</strong> mette al riparo da ogni danno i tuoi nuovi denti.
        </p>
        <div class="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto text-left">
          <p class="text-gray-700 leading-relaxed">
            Hai 10 anni di tempo per mettere alla prova i tuoi denti e, se non salterai i controlli periodici stabiliti, nel raro caso in cui un dente si scheggi o presenti dei difetti interverremo <strong>GRATUITAMENTE</strong> per ripararlo o sostituirlo.
          </p>
          <div class="mt-6 flex items-center gap-3 text-brand-green font-semibold">
            <i class="fas fa-check-circle text-xl"></i>
            La tua soddisfazione &egrave; garantita.
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIAL -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-10">Ecco cosa pensano di noi i nostri pazienti</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(t, i) in testimonials" :key="i" class="bg-slate-50 rounded-xl p-6 shadow-sm">
            <div class="flex text-yellow-400 mb-3">
              <i v-for="s in 5" :key="s" class="fas fa-star text-sm"></i>
            </div>
            <p class="text-gray-600 text-sm mb-4 italic">&ldquo;{{ t.text }}&rdquo;</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-brand-dark/10 rounded-full flex items-center justify-center">
                <span class="font-bold text-brand-dark text-sm">{{ t.initials }}</span>
              </div>
              <div>
                <p class="font-semibold text-sm">{{ t.name }}</p>
                <p class="text-gray-400 text-xs">{{ t.type }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA INTERMEDIA -->
    <section class="py-16 bg-brand-accent text-white">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Abbandona l&rsquo;idea che le cure dal dentista siano solo una tortura!</h2>
        <p class="text-white/80 text-lg mb-8">
          L&rsquo;iniziativa &ldquo;Torna a Sorridere&rdquo; ti far&agrave; conoscere da vicino il Centro Odontoiatrico Smiledoc, e scoprirai come il nostro protocollo permette di stabilire con precisione il piano di cure ideale per te.
        </p>
        <a href="#contatti" class="inline-block bg-white text-brand-accent font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
          <i class="fas fa-arrow-down mr-2"></i>Richiedi informazioni gratuite
        </a>
      </div>
    </section>

    <!-- URGENZA -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-6">Cosa stai aspettando ancora?</h2>
        <div class="bg-white rounded-xl p-8 shadow-md">
          <p class="text-gray-700 leading-relaxed mb-4">
            Quando vivi le giornate mettendo dei limiti ogni volta che apri bocca, non puoi dire di essere libero e spensierato. Se sei diventato un maestro nel nascondere la bocca ogni volta che discuti con qualcuno, significa che non sei mai tranquillo e sicuro di te.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            La paura di mostrare una parte di te di cui ti vergogni ha preso il sopravvento, e per evitare di provare dolore e fastidio sei vincolato anche nelle scelte che fai a tavola.
          </p>
          <p class="text-gray-700 leading-relaxed font-semibold text-brand-dark">
            La vecchia dentiera poco stabile, o la mancanza di uno o pi&ugrave; denti, non sono soltanto un problema estetico e funzionale. &Egrave; un limite alla tua libert&agrave;, e soprattutto &egrave; un vero ostacolo alla tua felicit&agrave;.
          </p>
        </div>
      </div>
    </section>

    <!-- CONTACT FORM -->
    <section id="contatti" class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Non hai alcun motivo per aspettare a contattarci!
          </h2>
          <p class="text-gray-600 text-lg">
            Lascia i tuoi dati per essere ricontattato. Senza alcun impegno potrai ricevere tutte le informazioni sul nostro protocollo.
          </p>
        </div>

        <div class="md:flex gap-10">
          <!-- Benefits List -->
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h3 class="font-bold text-lg text-brand-dark mb-4">Cosa ottieni:</h3>
            <div class="space-y-3">
              <div v-for="(item, i) in formBenefits" :key="i" class="flex gap-3 items-start">
                <i class="fas fa-check-circle text-brand-green mt-1"></i>
                <p class="text-gray-700 text-sm">{{ item }}</p>
              </div>
            </div>
            <div class="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <p class="text-sm text-gray-700"><strong>P.S.</strong> Richiedere informazioni non pone alcun vincolo di acquisto e non contiene spese nascoste di alcun genere.</p>
              <p class="text-sm text-gray-700 mt-2"><strong>P.P.S.</strong> Se hai perso uno o pi&ugrave; denti, o usi una dentiera, lo stato di salute della tua bocca non pu&ograve; che peggiorare. Ogni giorno che passa le cure necessarie potrebbero diventare pi&ugrave; lunghe e costose. Non perdere altro tempo!</p>
            </div>
          </div>

          <!-- Form -->
          <div class="md:w-1/2">
            <form @submit.prevent="handleSubmit" class="bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200">
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Nome e Cognome *</label>
                <input v-model="form.name" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition" placeholder="Mario Rossi" />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Telefono *</label>
                <input v-model="form.phone" type="tel" required class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition" placeholder="333 1234567" />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input v-model="form.email" type="email" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition" placeholder="mario@email.com" />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Orario preferito per il contatto</label>
                <select v-model="form.time" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition bg-white">
                  <option value="">Seleziona...</option>
                  <option value="9-11">Mattina (9:00 - 11:00)</option>
                  <option value="12-14">Pranzo (12:00 - 14:00)</option>
                  <option value="15-18">Pomeriggio (15:00 - 18:00)</option>
                </select>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Descrivi brevemente la tua situazione</label>
                <textarea v-model="form.message" rows="3" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition" placeholder="Es: mi mancano 2 denti, uso una protesi mobile..."></textarea>
              </div>
              <div class="mb-6">
                <label class="flex items-start gap-2 text-xs text-gray-500">
                  <input v-model="form.privacy" type="checkbox" required class="mt-1" />
                  <span>Acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR). <a href="#" class="text-brand-primary underline">Privacy Policy</a></span>
                </label>
              </div>

              <!-- Success message -->
              <div v-if="formSubmitted" class="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                <i class="fas fa-check-circle mr-2"></i>Grazie! Ti ricontatteremo al pi&ugrave; presto.
              </div>

              <button type="submit" :disabled="formLoading" class="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50">
                <span v-if="formLoading"><i class="fas fa-spinner fa-spin mr-2"></i>Invio in corso...</span>
                <span v-else><i class="fas fa-paper-plane mr-2"></i>Invia la richiesta</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-slate-900 text-white/60 py-10">
      <div class="max-w-4xl mx-auto px-4 text-center text-sm">
        <p class="mb-2">&ndash; Responsabile Sanitario Dott. Piernatale Civero &ndash;</p>
        <p class="mb-4">Centro Odontoiatrico Smiledoc | Via Monte Circeo 12, 00015 Monterotondo (RM)</p>
        <p class="mb-4">
          <a href="tel:+390774362520" class="text-white/80 hover:text-white transition"><i class="fas fa-phone mr-1"></i>0774 362 520</a>
          <span class="mx-3">|</span>
          <a href="mailto:info@smiledoc.it" class="text-white/80 hover:text-white transition"><i class="fas fa-envelope mr-1"></i>info@smiledoc.it</a>
        </p>
        <p class="text-white/40">Copyright {{ new Date().getFullYear() }} &copy; Centro Odontoiatrico Smiledoc | P.IVA: 10718251002</p>
        <div class="mt-3 space-x-4">
          <a href="#" class="text-white/40 hover:text-white/60 transition">Privacy Policy</a>
          <a href="#" class="text-white/40 hover:text-white/60 transition">Cookie Policy</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const showVideoNote = ref(false)

// Form
const form = reactive({
  name: '',
  phone: '',
  email: '',
  time: '',
  message: '',
  privacy: false,
})
const formLoading = ref(false)
const formSubmitted = ref(false)

const benefits = [
  'Conoscerai tutti i vantaggi del sistema di intervento del Dott. Civero e il team di professionisti del Centro Odontoiatrico Smiledoc',
  'Avrai una corsia preferenziale per valutare la tua particolare condizione clinica',
  'Otterrai informazioni preziose per riavere nuovi denti forti in sole 24 ore (se le tue condizioni cliniche lo consentono) anche se pensi di essere un caso disperato',
  'Il sistema di implantologia del Dott. Civero riduce al minimo dolori e fastidi negli interventi',
  'Grazie alla sedazione cosciente e alla costante presenza di un anestesista professionista, supererai una volta per tutte la paura di sederti su quella poltrona',
]

const testimonials = [
  {
    text: 'Dopo anni con la dentiera, finalmente mangio quello che voglio. Il Dott. Civero mi ha ridato la libertà. Professionalità e umanità incredibili.',
    name: 'Maria G.',
    initials: 'MG',
    type: 'Implantologia completa',
  },
  {
    text: 'Avevo paura del dentista da sempre. Qui mi sono sentito a mio agio dal primo momento. In 24 ore avevo i miei nuovi denti. Incredibile.',
    name: 'Roberto L.',
    initials: 'RL',
    type: 'Carico immediato',
  },
  {
    text: 'Mi avevano detto che non c\'era abbastanza osso. Il Dott. Civero ha trovato la soluzione. Oggi sorrido senza vergogna. Grazie di cuore.',
    name: 'Anna P.',
    initials: 'AP',
    type: 'Impianti con poco osso',
  },
]

const formBenefits = [
  'Prenderai coscienza dei rischi che corri trascurando la tua salute dentale e rimandando le cure necessarie',
  'Capirai perché Smiledoc può offrirti in un solo incontro esami diagnostici approfonditi che altri studi eseguono in più appuntamenti',
  'Scoprirai perché le nostre soluzioni sono realmente su misura per ogni paziente',
  'Avrai l\'occasione di accedere a una corsia preferenziale per conoscere il tuo percorso di cure ideale',
  'Saprai qual è la strada più rapida e sicura per tornare a sorridere in libertà e mangiare ciò che desideri',
  'Tutto questo senza alcun obbligo o vincolo di acquisto, e senza spendere un solo euro!',
]

const handleSubmit = async () => {
  formLoading.value = true
  try {
    // TODO: integrate with API
    await new Promise(r => setTimeout(r, 1500))
    formSubmitted.value = true
    form.name = ''
    form.phone = ''
    form.email = ''
    form.time = ''
    form.message = ''
    form.privacy = false
  } finally {
    formLoading.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>
