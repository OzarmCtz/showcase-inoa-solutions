<script setup lang="ts">
const links = [
  {
    name: "Des solutions personnalisées",
    description:
      "Nos clients institutionnels, professionnels & particuliers nous font confiance pour la mise en oeuvre et la maintenance de leurs systèmes de vidéoprotection.",
    icon: "icon-park-twotone:success",
  },
  {
    name: "Une expertise reconnue",
    description:
      "Grâce à notre engagement en matière de qualité et de réactivité, nous avons su nous imposer comme un acteur de confiance dans le domaine de la sécurité électronique.",
    icon: "mdi:medal",
  },
  {
    name: "Une réputation bien établie",
    description:
      "Cela nous permet aujourd’hui de bénéficier d’une belle réputation : vous avez sûrement déjà vu ou êtes passé devant l’un de nos panneaux « Vidéoprotégé par INOA Solutions » !",
    icon: "icon-park-twotone:people-bottom",
  },
];

import CertificationsModal from "~/components/CertificationsSlide.vue";

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};
// todo remove to extern file
const darkTopLine = "/dark/topline.svg";
const lightTopLine = "/light/topline.png";

const darkBottomLine = "/dark/bottomline.svg";
const lightBottomLine = "/light/bottomline.png";
</script>

<template>
  <ULandingHero
    title="Pourquoi nous chosir ?"
    :ui="{
      strategy: 'override',
      wrapper: 'mt-0',
    }"
  >
    <template #headline>
      <div class="relative w-full h-full">
        <UColorModeImage
          :light="lightTopLine"
          :dark="darkTopLine"
          alt="Décoration"
          class="w-full h-full object-contain"
        />
      </div> </template
  ></ULandingHero>
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
    <NuxtImg
      src="/inoa_place.jpeg"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      draggable="false"
    />
  </ULandingSection>
  <ULandingSection
    title="2. Nos certifications"
    align="right"
    :links="[
      {
        label: 'En savoir plus sur nos certifications',
        variant: 'outline',
        color: 'primary',
        trailingIcon: 'akar-icons:eye-open',
        size: 'sm',
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
    title="3. La confiance de nos clients"
    description="Nous mettons notre expertise au service de la sécurité des entreprises, institutions et particuliers, en proposant des solutions adaptées aux besoins spécifiques de chacun."
    :features="links"
    align="left"
    :ui="{
      strategy: 'override',
      description: 'text-lg',
      title: 'text-4xl font-bold tracking-tight text-primary mb-10',
      features: {
        wrapper: {
          list: 'space-y-12',
        },
      },
    }"
  >
    <NuxtImg
      src="/clients-inoa-solutions.jpg"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      draggable="false"
    />
  </ULandingSection>
  <ULandingSection
    title="4. À la pointe de la technologie"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    align="left"
    :ui="{
      strategy: 'override',
      description: 'text-lg mt-10',
      title: 'text-4xl font-bold tracking-tight text-primary',
    }"
  >
    <template #description>
      Chez INOA Solutions, nous sommes avant tout des passionnés de technologie
      et d’innovation. C’est la raison pour laquelle nous vous proposons ce qui
      se fait de mieux sur le marché :
      <br />
      <br />
      <div class="flex items-center gap-4 text-sm">
        <Icon name="icon-park-twotone:success" class="text-primary w-6 h-6" />
        <span>
          Reconnaissance automatique de plaque d’immatriculation avec Dahua
          Technology
        </span>
      </div>
      <br />
      <div class="flex items-center gap-4 text-sm">
        <Icon name="icon-park-twotone:success" class="text-primary w-6 h-6" />
        <span>
          Caméra nomade La Chouette pour sécuriser une commune intelligemment,
        </span>
      </div>
      <br />
      <div class="flex items-center gap-4 text-sm">
        <Icon name="icon-park-twotone:success" class="text-primary w-6 h-6" />
        <span> Détection intrusion par caméra thermique… </span>
      </div>
      <br />
      Nous avons forcément la solution adaptée à vos besoins.
    </template>
    <NuxtImg
      src="/technologies.jpeg"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      draggable="false"
    />
  </ULandingSection>
  <ULandingSection
    :ui="{
      strategy: 'override',
      description: 'text-lg mt-10',
      title: 'text-4xl font-bold tracking-tight text-primary',
    }"
    title="5. Une entreprise locale proche de vous
"
    align="right"
  >
    <template #description>
      INOA Solutions est fortement ancré au sein du tissu économique de
      Perpignan et des Pyrénées-Orientales.
      <br />
      <br />
      Nous sommes partenaires des Dragons Catalans et oeuvrons au développement
      économique et sportif local.
      <br />
      <br />
      Car c’est aussi ça, le rôle d’une entreprise à taille humaine.
    </template>
    <NuxtImg
      src="/inoa-solutions-dragons-catalans.jpeg"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      draggable="false"
    />
  </ULandingSection>

  <ULandingSection
    :ui="{
      strategy: 'override',
      wrapper: 'mb-0',
    }"
  >
    <template>
      <div class="relative w-full h-full">
        <UColorModeImage
          :light="lightBottomLine"
          :dark="darkBottomLine"
          alt="Décoration"
          class="w-full h-full object-contain"
        />
      </div>
    </template>
  </ULandingSection>
</template>
