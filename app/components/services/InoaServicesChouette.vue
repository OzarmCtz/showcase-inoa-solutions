<script setup lang="ts">
const openModalDoute = () => {
  isOpenDoute.value = true;
};

const isOpenDoute = ref(false);

const isOpenInterpellation = ref(false);
const openModalInterpellation = () => {
  isOpenInterpellation.value = true;
};

const items = [
  "/services/Contrôle_Accès_Biometrique.jpg",
  "/services/Contrôle_Accès_Carte.jpg",
  "/services/Contrôle_Accès_Code.jpg",
  "/services/Contrôle_Accès_Digicode.jpg",
  "/services/ACCES.jpg",
  "/services/photos-controle-d-acces.jpg",
  "/services/Contrôle_Accès_Empreinte_Digitale.jpg",
];

import { ULandingSection } from "#components";

// todo remove to extern file
const darkTopLine = "/dark/topline.svg";
const lightTopLine = "/light/topline.png";

const darkBottomLine = "/dark/bottomline.svg";
const lightBottomLine = "/light/bottomline.png";
</script>

<template>
  <div class="bg-grid-pattern bg-grid-sm">
    <ULandingHero
      title="Nos caméra nomade La Chouette"
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
      title="La caméra nomade nouvelle génération"
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
    >
      <template #description>
        Découvrez la Chouette, une caméra nomade légère, robuste et autonome
        conçue pour la sécurisation facile des communes et des chantiers.
        <br />
        <br />
        Sa vocation ? Filmer les conteneurs à ordures, les bacs de tri, les
        aires de jeux, la place du village, l’abribus, le boulodrome ou le
        parking de la commune.

        <br />
        <br />
        La caméra nomade La Chouette facilite la sécurisation de votre commune
        ou de votre chantier.
      </template>
      <div class="bg-white rounded-lg shadow-md p-6">
        <NuxtImg
          src="/services/logo-lachouette.png"
          class="w-full rounded-t-lg"
          draggable="false"
        />
      </div>
    </ULandingSection>

    <ULandingSection
      title="Boîtier sécurisé, léger & étanche"
      align="right"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
    >
      <NuxtImg
        src="/services/camera-nomade-la-chouette.png"
        class="w-1/2 rounded-md block mx-auto"
        draggable="false"
      />

      <template #description>
        Conçu en aluminium et en polyoxyméthylène, ces matériaux lui confèrent
        une robustesse importante contre les agressions, les chocs, les
        intempéries ou les chutes.
      </template>
    </ULandingSection>

    <ULandingSection
      title="Grande autonomie"
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
    >
      <NuxtImg
        src="/services/camera3.png"
        class="w-1/2 rounded-md block mx-auto"
        draggable="false"
      />

      <template #description>
        LACHOUETTE® embarque une batterie LiFePo4 de 40 ampère-heure lui
        procurant une autonomie totale de 5 jours !
      </template>
    </ULandingSection>

    <ULandingSection
      title="Batterie amovible"
      align="right"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
    >
      <NuxtImg
        src="/services/camera1.png"
        class="w-1/2 rounded-md block mx-auto"
        draggable="false"
      />

      <template #description>
        La batterie se clipse simplement : elle est conçue pour être déclipsée
        en toute sécurité.
        <br />
        <br />
        LACHOUETTE® bénéficie d’une batterie avec une longue durée de vie et une
        plus faible toxicité pour l’environnement que les autres batteries du
        marché. La caméra dans l’ensemble pèse 12 kg et peut donc être manipulée
        par une seule personne.
        <br />
        <br />
        Elle est donc pratique, rapide à installer et ne nécessite aucun
        branchement
      </template>
    </ULandingSection>
  </div>

  <UCard
    :ui="{
      strategy: 'override',
      background: '',
      divide: '',
      shadow: '',
      header: {
        base: '',
        background: '',
        padding: 'px-4 py-12 sm:px-6', // Réduction maximale du padding du header
      },
      body: {
        base: '',
        background: '',
        padding: 'px-4 py-0 sm:p-2', // Suppression presque totale du padding body
      },
    }"
    class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10"
  >
    <template #header>
      <div class="flex items-center justify-center text-center w-full">
        <p class="text-2xl sm:text-4xl font-bold tracking-tight relative mb-2">
          Visionnage des vidéos à distance
          <span
            class="absolute left-1/2 bottom-[-12px] w-1/2 h-1 bg-primary -translate-x-1/2"
          ></span>
        </p>
      </div>
    </template>

    <ULandingSection
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base',
        title: 'text-4xl font-bold tracking-tight text-primary',
        wrapper: 'py-10 mb-10',
      }"
    >
      <video
        src="/services/lachouette-VJ.webm"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        controls
      ></video>

      <template #description>
        LACHOUETTE® vous permet de visionner et extraire les vidéos à distance
        grâce à la connexion 4G et notre logiciel installé sur un ordinateur ou
        un téléphone.
        <br />
        <br />
        La connexion est sécurisée par VPN (virtual private network) et les
        données sont cryptées pour garantir la protection de vos vidéos.
      </template>
    </ULandingSection>
  </UCard>
  <ULandingSection
    title="Besoin de plus d'informations ?"
    :ui="{
      strategy: 'override',
      title:
        'text-3xl font-bold tracking-tight text-primary dark:text-primary sm:text-4xl',
    }"
    :links="[
      {
        label: 'Contactez-nous pour en savoir plus',
        color: 'primary',
        size: 'md',
        variant: 'outline',
        icon: 'material-symbols:android-chat',
        to: '/#contact',
      },
    ]"
  />

  <ULandingSection
    :ui="{
      strategy: 'override',
      wrapper: 'mb-0 mt-10',
    }"
  >
    <div class="relative w-full h-full">
      <UColorModeImage
        :light="lightBottomLine"
        :dark="darkBottomLine"
        alt="Décoration"
        class="w-full h-full object-contain"
      />
    </div>
  </ULandingSection>
</template>
