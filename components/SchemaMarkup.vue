<template>
  <div></div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  faqItems?: { question: string; answer: string }[]
  articleTitle?: string
  articleDescription?: string
  articleDate?: string
  breadcrumbs?: { name: string; url: string }[]
}>(), {
  faqItems: () => [],
  breadcrumbs: () => [],
})

const scripts: any[] = []

// LocalBusiness/Dentist with full details
scripts.push({
  type: 'application/ld+json',
  innerHTML: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'LocalBusiness', 'MedicalBusiness'],
    '@id': 'https://implantologiasmiledoc.it/#dentist',
    name: 'Centro Odontoiatrico Smiledoc - Implantologia',
    alternateName: 'Smiledoc Implantologia Monterotondo',
    description: 'Implantologia dentale a Monterotondo. Impianti fissi anche in 24 ore con il Dott. Piernatale Civero. 25+ anni di esperienza, 5000+ impianti inseriti. Garanzia 10 anni.',
    url: 'https://implantologiasmiledoc.it',
    telephone: '+39-06-90623936',
    email: 'rec.monterotondo@smiledoc.it',
    image: 'https://implantologiasmiledoc.it/img/og-image.png',
    logo: 'https://implantologiasmiledoc.it/favicon.ico',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Monte Circeo 12',
      addressLocality: 'Monterotondo',
      addressRegion: 'RM',
      postalCode: '00015',
      addressCountry: 'IT',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 42.0531, longitude: 12.6209 },
    areaServed: [
      { '@type': 'City', name: 'Monterotondo' },
      { '@type': 'City', name: 'Mentana' },
      { '@type': 'City', name: 'Fonte Nuova' },
      { '@type': 'City', name: 'Guidonia Montecelio' },
      { '@type': 'City', name: 'Palombara Sabina' },
      { '@type': 'City', name: 'Fiano Romano' },
      { '@type': 'City', name: 'Capena' },
      { '@type': 'City', name: 'Morlupo' },
      { '@type': 'City', name: 'Riano' },
      { '@type': 'City', name: 'Tivoli' },
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi di Implantologia',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Impianto Dentale Singolo', description: 'Inserimento impianto singolo con corona' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carico Immediato', description: 'Denti fissi in 24 ore' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'All-on-4', description: 'Riabilitazione arcata completa con 4 impianti' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'All-on-6', description: 'Riabilitazione arcata completa con 6 impianti' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sedazione Cosciente', description: 'Trattamento senza ansia e dolore' } },
      ],
    },
    sameAs: ['https://smiledoc.it', 'https://www.facebook.com/smiledocmonterotondo'],
    founder: {
      '@type': 'Person',
      name: 'Dott. Piernatale Civero',
      jobTitle: 'Direttore Sanitario',
      description: 'Esperto in implantologia e riabilitazioni orali complesse con oltre 25 anni di esperienza.',
    },
    legalName: 'SMILEDOC S.R.L.',
    taxID: 'IT15131801001',
  }),
})

if (props.faqItems.length) {
  scripts.push({
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: props.faqItems.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    }),
  })
}

if (props.articleTitle) {
  scripts.push({
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: props.articleTitle,
      description: props.articleDescription || '',
      datePublished: props.articleDate || new Date().toISOString(),
      author: { '@type': 'Person', name: 'Dott. Piernatale Civero' },
      publisher: { '@type': 'Organization', name: 'Centro Odontoiatrico Smiledoc', url: 'https://smiledoc.it' },
    }),
  })
}

if (props.breadcrumbs.length) {
  scripts.push({
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: props.breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    }),
  })
}

useHead({ script: scripts })
</script>
