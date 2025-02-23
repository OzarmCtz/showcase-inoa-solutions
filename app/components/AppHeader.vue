<script setup lang="ts">
// Access the Nuxt application instance
const nuxtApp = useNuxtApp();
const { activeHeadings, updateHeadings } = useScrollspy();

// Define the navigation links and structure
const links = [
  {
    label: "Accueil",
    icon: "material-symbols:home-outline",
    to: "/",
  },
  {
    label: "Services",
    icon: "i-heroicons-square-3-stack-3d",
    to: "#services",
    children: [
      {
        label: "Alarm Intrusion",
        to: "/services/alarm-intrusion",
        icon: "material-symbols:detector",
        description: "Prevent intrusions at all times",
      },
      {
        label: "Vidéo protection",
        to: "/services/video-protection",
        icon: "material-symbols:camera-indoor",
        description: "Enhance your company's security",
      },
      {
        label: "Contrôle d'Accès",
        to: "/services/controle-dacces",
        icon: "material-symbols:nest-secure-alarm-outline",
        description: "Restrict employee access to predefined areas",
      },
      {
        label: "Télésurveillance",
        to: "/services/telesurveillance",
        icon: "mdi:television-ambient-light",
        description: "Keep an eye on your premises",
      },
      {
        label: "Caméra Nomade La Chouette",
        to: "/services/camera-nomade-la-chouette",
        icon: "material-symbols:speed-camera-outline",
        description: "Next-generation portable camera",
      },
      {
        label: "Reconnaissance Automatique des Plaques d'Immatriculation",
        to: "/services/reconnaissance-automatique-plaques-immatriculation",
        icon: "ri:voice-recognition-line",
        description: "Manage the entry and exit of your premises",
      },
    ],
  },
  {
    label: "Pourquoi nous choisir ?",
    icon: "material-symbols:contact-support-outline",
    to: "/pourquoi-nous-choisir",
  },
  {
    label: "Contact",
    icon: "material-symbols:android-chat",
    to: "#contact",
  },
];

// Define the logos for light and dark modes
const darkLogo = "/dark/etp-logo.svg";
const lightLogo = "/light/etp-logo.png";
</script>

<template>
  <div>
    <UHeader :links="links">
      <!-- Logo section -->
      <template #logo>
        <UColorModeImage
          :light="lightLogo"
          :dark="darkLogo"
          alt="Inoa Solutions Logo"
          class="h-9 w-auto"
          draggable="false"
        />
      </template>

      <!-- Right section of the header -->
      <template #right>
        <UButton
          label="04 68 87 72 91"
          variant="outline"
          class="hidden lg:flex"
          to="tel:0468877291"
          color="primary"
          icon="carbon:phone"
        />
      </template>

      <!-- Navigation panel -->
      <template #panel>
        <UNavigationTree :links="links" :multiple="false" default-open />

        <UDivider class="my-6" />
        <UButton
          label="04 68 87 72 91"
          variant="outline"
          block
          class="mb-3"
          to="tel:0468877291"
          color="primary"
          icon="carbon:phone"
        />
      </template>
    </UHeader>
  </div>
</template>
