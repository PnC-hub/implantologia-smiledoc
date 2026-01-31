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

// LocalBusiness always present
scripts.push({
  type: 'application/ld+json',
  innerHTML: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Centro Odontoiatrico Smiledoc',
    description: 'Implantologia dentale a Monterotondo. Impianti fissi anche in 24 ore con il Dott. Piernatale Civero.',
    url: 'https://implantologia.smiledoc.it',
    telephone: '+39-0774-362520',
    email: 'info@smiledoc.it',
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
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
    ],
    sameAs: ['https://smiledoc.it'],
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
