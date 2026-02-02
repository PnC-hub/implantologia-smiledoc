# PRD - Implantologia Smiledoc Lead Generation Site

## Obiettivo
Landing page + blog SEO per generare lead qualificati di pazienti che necessitano impianti dentali nella zona di Monterotondo e dintorni (Mentana, Fonte Nuova, Guidonia, Palombara Sabina, Fiano Romano, Capena, Castelnuovo di Porto, Riano, Morlupo, Tivoli, Roma Nord-Est).

## Vincoli
- NO parole: "gratis", "gratuito", "promozione", "offerta", "sconto" (norme pubblicità sanitaria)
- Form lead → email a rec.monterotondo@smiledoc.it con indicazione sorgente sito
- Target: pazienti che devono fare impianti dentali
- Tone: professionale, rassicurante, autorevole
- UVP allineata a smiledoc.it: "Sorridi senza pensieri" + tecnologia digitale + esperienza paziente

## Architettura Pagine

### 1. Homepage / Landing (pages/index.vue) - REWORK
- Hero: headline pain-driven con geo-targeting (Monterotondo e dintorni)
- Social proof: numeri studio (25+ anni, 5000+ impianti, 98% soddisfatti)
- Video placeholder
- Pain points (3 card)
- Soluzione: protocollo implantologico Smiledoc
- Bio dottore
- Garanzia 10 anni
- Testimonial
- FAQ schema markup
- Form contatto (bottom + sticky mobile CTA)
- Exit intent popup con form

### 2. Blog (pages/blog/index.vue)
Lista articoli con card, categorie, SEO

### 3. Articoli Blog (pages/blog/[slug].vue)
Template articolo con sidebar form, CTA inline, schema Article markup

### 4. Pagina Grazie (pages/grazie.vue)
Thank you page post-form con tracking conversion

## Articoli Blog SEO (10 articoli geo-targeted)
1. "Impianti dentali a Monterotondo: cosa sapere prima dell'intervento"
2. "Implantologia a carico immediato: denti fissi in 24 ore"
3. "Paura del dentista? Come la sedazione cosciente rende l'intervento sereno"
4. "Poco osso per gli impianti? Le soluzioni esistono"
5. "Dentiera mobile vs impianti fissi: confronto completo"
6. "Quanto durano gli impianti dentali? Tutto sulla durata e manutenzione"
7. "Impianti dentali e diabete: si possono fare?"
8. "All-on-4 e All-on-6: riabilitazione completa dell'arcata"
9. "Impianti dentali a Guidonia, Mentana e Fonte Nuova: perché scegliere Smiledoc"
10. "Cosa mangiare dopo un intervento di implantologia"

## Implementazioni Lead Generation
1. **Form contatto** in ogni pagina (hero, sidebar blog, footer)
2. **Exit intent popup** con form su desktop
3. **Sticky CTA mobile** (bottone fisso in basso)
4. **Click-to-call** prominente
5. **WhatsApp button** floating
6. **Schema markup** (LocalBusiness, Article, FAQ, BreadcrumbList)
7. **Meta SEO** per ogni pagina con geo-targeting
8. **Form submit** → API endpoint che invia email a rec.monterotondo@smiledoc.it

## Tech Stack
- Nuxt 3 + Tailwind CSS
- SSR: false (SPA) → cambiare a SSR: true per SEO
- Nuxt server route per invio email form (POST /api/lead)
- Nodemailer per invio email

## Form Fields
- Nome e Cognome (required)
- Telefono (required)
- Email
- Comune di residenza (dropdown: Monterotondo, Mentana, Fonte Nuova, Guidonia, Palombara Sabina, Fiano Romano, Altro)
- Situazione (textarea)
- Privacy checkbox (required)
- Hidden: page_source (quale pagina ha generato il lead)
