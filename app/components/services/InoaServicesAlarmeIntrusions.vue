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

import { ULandingSection } from "#components";
import CertificationsModal from "@/components/CertificationsModal.vue";

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
    title="Nos systèmes d'alarmes intrusion"
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
    title="Empêchez les intrusions à tout moment"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    align="left"
    :ui="{
      strategy: 'override',
      description: 'text-lg mt-10',
      title: 'text-4xl font-bold tracking-tight text-primary',
    }"
  >
    <template #description>
      Nos spécialistes sauront vous guider dans le choix d’un système d’alarme
      performant, capable de répondre à tous vos besoins, présents et futurs.
      <br />
      <br />
      INOA Solutions propose toute une série d’applications reliées à la
      protection contre les vols et intrusions pour les entreprises.
      <br />
      <br />
      Nos experts sauront répondre adéquatement à vos besoins définis de
      sécurité et vous recommander divers dispositifs pour concevoir un système
      d’alarme antivol sur mesure.
    </template>
    <NuxtImg
      src="/services/Homme_Empechant_Une_Intrusion.jpg"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      draggable="false"
    />
  </ULandingSection>
  <ULandingSection
    title="Optez pour l'alarme filaire"
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
    >1
    <CertificationsModal v-model="isOpen" />
    <NuxtImg
      src="/services/Electricien_Installant_une_Alarme_Filaire.jpg"
      class="w-full rounded-md"
      draggable="false"
    />

    <template #description>
      L’alarme filaire est un système où les composants sont reliés entre eux
      par des câbles. Ils permettent de faire circuler les informations
      nécessaires au fonctionnement du système, de manière totalement sécurisée.
      L’alarme filaire fonctionne tel un réseau en étoile.
      <br />
      <br />
      La centrale d’alarme se trouve au centre du réseau. Les équipements
      répandus dans les locaux à surveiller sont reliés à cette centrale à
      l’aide de câbles, constituants les branches de l’étoile. L’ensemble des
      communications du système transitent par ces câbles. L’alarme filaire ne
      nécessite ni Wi-Fi, ni GSM, ni aucune technologie radio pour gérer ses
      échanges.
    </template>
  </ULandingSection>
  <ULandingSection
    :ui="{
      strategy: 'override',
      wrapper: 'mt-0',
    }"
  >
    <template #description>
      L’alarme filaire est un système fiable car le système est capable de
      transmettre des signaux tant que l’intégrité des câbles n’est pas altérée.
      Ce système constitue un choix judicieux pour des locaux volumineux par
      exemple.
      <br />
      <br />
      L’alarme filaire permet de répondre aux problématiques de couverture dans
      la mesure où le câble peut porter un signal électrique. De plus, n’ayez
      aucune crainte quant à d’éventuelles tentatives de brouillages via
      interférences électromagnétiques : tant que le fil n’est pas coupé,
      l’alarme continue de fonctionner.</template
    >
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
