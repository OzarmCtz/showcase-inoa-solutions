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
      title="Nos reconnaissance de plaques d'immatriculation"
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
      title="Gérez l'entrée et la sortie de vos locaux"
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
    >
      <template #description>
        En tant qu‘Intégrateur France Dahua Technology, nous avons une solution
        de reconnaissance automatique de plaque d’immatriculation. Nous
        utilisons les dernières technologies de caméras numériques et
        d’éclairages.
        <br />
        <br />
        À chaque passage d’une voiture ou d’un camion, la caméra capture
        automatiquement la plaque d’immatriculation avant et/ou arrière ainsi
        que des images du véhicule.
      </template>
      <NuxtImg
        src="/services/Entrée_Sortie_Entreprise_À_Reconnaissance_De_Plaque-1.jpg"
        class="w-full rounded-md"
        draggable="false"
      />
    </ULandingSection>

    <ULandingSection
      title="Améliorez la sécurité de vos entrées"
      align="right"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
    >
      <NuxtImg
        src="/services/Reconnaissance_Automatique_De_Plaque_d_Immatriculation.jpg"
        class="w-full rounded-md"
        draggable="false"
      />

      <template #description>
        L’ANPR (Automatic Number Plate Recognition ou Reconnaissance Automatique
        des Plaques d’Immatriculation) est une technologie qui utilise la
        reconnaissance optique de caractères sur des images pour lire les
        plaques des véhicules.
        <br />
        <br />
        Cette technologie améliore l’efficacité et la sécurité de vos locaux. En
        effet, elles capturent les plaques d’immatriculation en temps réel.
      </template>
    </ULandingSection>

    <ULandingSection
      title="Un système sécurisé"
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
    >
      <NuxtImg
        src="/services/Reconnaissance_Plaques_Immatriculation_Hotel.jpg"
        class="w-full rounded-md"
        draggable="false"
      />

      <template #description>
        L’interrogation d’une base de données permet de savoir si le véhicule
        est autorisé à entrer ou non, d’afficher l’identité du conducteur
        habituel…
        <br />
        <br />
        Des actions peuvent être automatiquement déclenchées en fonction de
        l’immatriculation comme l’ouverture d’une barrière, la gestion d’un feu…
        <br />
        <br />
        Toutes les données du véhicule peuvent être exportées en temps réel vers
        une base de données, un fichier XML…
        <br />
        <br />
        Notre solution peut facilement être intégrée à une solution de gestion
        de parking, à un système de pesée ou tout autre outil de gestion
        externe.
        <br />
        <br />
        Cette solution est idéale pour assurer efficacement le contrôle d’accès
        et la traçabilité des véhicules à l’entrée des sites.
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
          Optez pour la solution de Reconnaissance Automatique de Plaque
          d'Immatriculation

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
      <NuxtImg
        src="/services/Reconnaissance_Plaque_Vehicule-1.jpg"
        class="w-full rounded-md"
        draggable="false"
      />

      <template #description>
        En s’appuyant sur les big data d’images et les modèles qualifiés, notre
        système inclut de nombreux avantages tels que la reconnaissance
        multilingues, la reconnaissance rapide ainsi que le rapport
        qualité/prix.
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
