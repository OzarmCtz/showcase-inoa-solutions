<script setup lang="ts">
const links = [
  {
    name: "Fully customizable",
    description:
      "Like Nuxt UI, change the style of any component from your App Config or customize them specifically through the ui prop.",
    icon: "i-heroicons-wrench-screwdriver",
  },
  {
    name: "Slots for everything",
    description:
      "Each component leverages the power of Vue's slots to give you the flexibility to build anything.",
    icon: "i-heroicons-square-3-stack-3d",
  },
];

import CertificationsModal from "@/components/CertificationsModal.vue";

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};
</script>

<template>
  <ULandingHero
    title="Pourquoi nous chosir ?"
    description="Watch your dreams materialize before your eyes with us."
  />
  <ULandingSection
    title="1. Plus de 10 ans d'expériences"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    align="left"
    :ui="{
      strategy: 'override',
      description: 'text-lg mt-10',
      title: 'text-4xl font-bold tracking-tight text-primary',
    }"
  >
    <template #description>
      Vidéoprotection, alarme intrusion, contrôle d’accès, caméra nomade…
      <br />
      <br />
      Notre slogan, « Architecte de votre protection », reflète parfaitement
      notre volonté d’innovation et d’accompagnement au service de votre
      protection.
      <br />
      <br />
      Nous vous conseillons de A à Z sur l’ensemble de votre besoin de sécurité
      électronique, du conseil jusqu’à la mise en oeuvre et l’exécution du
      chantier.
    </template>
    <img
      src="/inoa_place.jpeg"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
  <ULandingSection
    title="2. Nos certifications"
    align="right"
    :links="[
      {
        label: 'En savoir plus sur nos certifications',
        color: 'primary',
        trailingIcon: 'akar-icons:eye-open',
        size: 'lg',
        click: openModal,
      },
    ]"
    :ui="{
      strategy: 'override',
      description: 'text-lg mt-10',
      title: 'text-4xl font-bold tracking-tight text-primary',
    }"
  >
    <CertificationsModal v-model="isOpen" />
    <NuxtImg src="/APSAD.png" class="w-full rounded-md" draggable="false" />

    <template #description>
      Nous détenons depuis plus de 10 ans les certifications suivantes :
      <br />
      <br />
      <div class="flex items-center gap-4 text-sm">
        <Icon name="icon-park-twotone:success" class="text-primary w-10 h-10" />
        <span>
          Service d’Installation et de Maintenance de Systèmes de Détection
          d’Intrusion (NF 367-I81) Catégories AB : Certificat n°191/13/367-81
        </span>
      </div>
      <br />
      <div class="flex items-center gap-4 text-sm">
        <Icon name="icon-park-twotone:success" class="text-primary w-6 h-6" />
        <span>
          Vidéosurveillance (NF 367-I82) : Certificat n° 121/13/367-82
        </span>
      </div>
    </template>
  </ULandingSection>
  <ULandingSection
    title="The freedom to build anything"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    :features="links"
    align="left"
  >
    <img
      src="https://picsum.photos/360/640"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
  <ULandingSection
    headline="Pro"
    title="The freedom to build anything"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    align="left"
  >
    <img
      src="https://picsum.photos/640/360"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
  <ULandingSection
    title="The freedom to build anything"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    align="right"
    :links="[
      {
        label: 'Explore components',
        color: 'gray',
        trailingIcon: 'i-heroicons-arrow-right',
        size: 'lg',
      },
    ]"
  >
    <img
      src="https://picsum.photos/640/360"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
</template>
