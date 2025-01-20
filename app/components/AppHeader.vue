<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = [{
  label: 'Accueil',
  icon: 'i-heroicons-book-open',
  to: '/'
}, {
  label: 'Services',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/services',
  children: [{
    label: 'Alarm Intrusion',
    to: '/services/alarm-intrusion',
    icon: 'material-symbols:detector-alarm',
    description: 'Empêchez les intrusions à tout moment'
  }, {
    label: 'Vidéo protection',
    to: '/services/video-protection',
    icon: 'material-symbols:speed-camera',
    description: 'Augmentez la sécurité de votre entreprise'
  },
  {
    label: "Contrôle d'Accès",
    to: '/services/controle-acces',
    icon: 'material-symbols:nest-secure-alarm-outline',
    description: "Limitez l'accès de vos employés à des zones prédéfinies"
  },
  {
    label: "Télésurveillance",
    to: '/services/telesurveillance',
    icon: 'mdi:television-ambient-light',
    description: "Gardez un oeil sur vos locaux"
  },
  {
    label: "Caméra Nomade La Chouette",
    to: 'services/camera-nomade-la-chouette',
    icon: 'material-symbols:speed-camera-outline',
    description: "La caméra nomade nouvelle génération"
  },
  {
    label: "Reconnaissance Automatique des Plaques d'Immatriculation",
    to: '/controle-acces/reconnaissance-automatique-plaques-immatriculation',
    icon: 'ri:voice-recognition-line',
    description: "Gérez l'entrée et la sortie de vos locaux"
  }]
}, {
  label: 'Pourquoi nous choirsir ?',
  icon: 'i-heroicons-rocket-launch',
  to: '/pourquoi-nous-choisir'
},
{
  label: 'Contact',
  icon: 'i-heroicons-rocket-launch',
  to: '/contact'
}]

/*nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq')
  ])
})*/
</script>

<template>
  <UHeader :links="links" >
    <template #logo>
      <NuxtImg
        src="/etp-logo.svg"
        alt="Company Logo"
        class="h-9 w-auto"
      />
    </template>

    <template #right>
      <UButton 
      label="04 68 87 72 91"
      color="primary"
      variant="outline"
      class="hidden lg:flex"
      to="tel:0468877291"
      />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton
        label="04 68 87 72 91"
        color="primary"
        variant="outline"
        block
        class="mb-3"
        to="tel:0468877291"
      />
    </template>
  </UHeader>
</template>
