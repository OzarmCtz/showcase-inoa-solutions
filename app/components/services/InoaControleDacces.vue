<script setup lang="ts">
const isOpenBadges = ref(false);

const openModalBadges = () => {
  isOpenBadges.value = true;
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
      title="Nos systèmes de contrôle d'accès"
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
      title="Limitez l'accès de vos employés à des zones prédéfinies"
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
    >
      <template #description>
        Le contrôle d’accès devient de plus en plus populaire dans plusieurs
        entreprises de toute importance
        <br />
        <br />
        Vous désirez protéger votre département de Recherche et Développement et
        votre département de Comptabilité en limitant l’accès pour raisons de
        confidentialité ? Le contrôle d’accès est le bon outil !
        <br />
        <br />
        Plusieurs possibilités de contrôle vous sont proposées. De la carte
        magnétique en passant par la biométrie, vous pouvez choisir la solution
        la plus adaptée à vos besoins !
        <br />
        <br />

        La capacité de limiter l’accès à des personnes pré-autorisées à circuler
        dans les différents départements de votre entreprise est certainement
        très attrayant et peut être réalisé à un coût très abordable.
      </template>
      <NuxtImg
        src="/services/ACCES.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        draggable="false"
      />
    </ULandingSection>

    <ULandingSection
      title="Contôlez l'accès avec des badges "
      align="right"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
    >
      <NuxtImg
        src="/services/photos-controle-d-acces.jpg"
        class="w-full rounded-md"
        draggable="false"
      />

      <template #description>
        Le contrôle d’accès par lecteur de badge permet de gérer les
        autorisations des individus pour pénétrer dans les différents espaces de
        l’entreprise. Le dispositif optimise la circulation des salariés en
        fonction des autorisations de chacun.

        <br />
        <br />
        Le système dispose d’une console principale permettant de piloter les
        différents éléments du dispositif et permet également d’analyser mais
        aussi d’ajuster les paramètres et de gérer les différentes actions. Des
        applications informatiques permettent également de contrôler l’ouverture
        des portes mais aussi d’assurer la supervision des infrastructures
        déployées. Ainsi, la badgeuse permet d’identifier un individu et
        autoriser son accès ou non à un bâtiment, pièce ou entrepôt.
        <br />
        <br />
        Plusieurs équipements à contacts existent tel que les codes barres, qui
        constituent un système peu sécurisé; les badges magnétiques, qui sont
        plus présents dans des lieux où la sécurité est moindre; ou encore la
        carte à puce à contacts qui enregistre les informations dans la puce. Le
        procédé reste le même que pour les badges.
      </template>
    </ULandingSection>

    <ULandingSection
      title="Sécurisez vos espaces par code"
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
      :links="[
        {
          label: 'En savoir plus sur nos digicodes',
          color: 'primary',
          trailingIcon: 'material-symbols:nest-secure-alarm-outline',
          size: 'sm',
          click: openModalBadges,
          variant: 'outline',
        },
      ]"
    >
      <NuxtImg
        src="/services/Système_Accès_Digicode-1024x683.jpg"
        class="w-full rounded-md"
        draggable="false"
      />

      <template #description>
        Aussi appelé digicode, le clavier à code est un système qui permet de
        déverrouiller ou d’ouvrir les portes de vos locaux ou de vos bâtiments.
        Ce système de contrôle d’accès peut être branché à une gâche électrique,
        à une sonnette ou encore un interphone audio et/ou vidéo.

        <br />
        <br />
        Afin d’actionner la gâche électrique ou l’automatisme qui lui est relié,
        l’utilisateur doit composer un code secret sur son clavier. L’appareil
        est doté de plusieurs éléments, dont un clavier. Le boîtier bénéficie
        d’une protection solide afin qu’il puisse résister aux tentatives de
        démontage et aussi au vandalisme.
      </template>
    </ULandingSection>
    <div>
      <USlideover v-model="isOpenBadges">
        <UCard
          class="flex flex-col flex-1"
          :ui="{
            body: { base: 'flex-1' },
            ring: '',
            divide: 'divide-y divide-primary dark:divide-primary',
          }"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <NuxtImg
                  src="/services/control_access.png"
                  draggable="false"
                  class="w-12 h-12"
                />
                <h3
                  class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  Nos digicodes
                </h3>
              </div>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpenBadges = false"
              />
            </div>
          </template>

          <div>
            Il existe deux types de systèmes d’accès à code; les systèmes
            d’accès à code filaire et non filaire.
            <br />
            <br />
            Les claviers à code filaires nécessitent d’établir une liaison avec
            la gâche électrique ou le système de motorisation. De ce fait, les
            claviers à code filaires ne sont pas sensibles à un brouillage.
            <br />
            <br />
            Concernant les boîtiers non filaires, ceux-ci bénéficient d’un
            système radio. Tous les éléments constituant le système sont de ce
            fait sans fil, afin que le boîtier puisse communiquer avec les
            autres éléments par ondes radios.
          </div>
        </UCard>
      </USlideover>
    </div>
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
          Optez pour une solution 100% sécurisée
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
        wrapper: 'py-10',
      }"
    >
      <NuxtImg
        src="/services/Contrôle_Accès_Biométrique.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        draggable="false"
      />

      <template #description>
        Le contrôle d’accès biométrique est une alternative aux identifiants et
        mots de passe que l’on utilise habituellement pour sécuriser les accès
        des entreprises. Il s’agit de la technologie la plus performante et la
        plus fiable.
        <br /><br />
        Un système centralisé de contrôle d’accès biométrique est un système
        automatique se basant sur la reconnaissance de caractéristiques propres
        à un individu qu’elles soient physiques ou comportementales. Appliquée
        dans la sécurité des entreprises, cette technologie s’exprime par
        l’analyse et l’authentification d’empreintes digitales préalablement
        enregistrées et stockées dans une base de données.
        <br /><br />
        Le système d’accès biométrique est d’une haute précision puisque la
        duplication d’empreinte est impossible. De plus, il enregistre les
        données de manière sécurisée et ne peut être perdu ou transmis à des
        personnes non autorisées.
      </template>
    </ULandingSection>
  </UCard>

  <ULandingSection
    title="Nos systèmes de contrôle d'accès"
    :ui="{
      strategy: 'override',
      title:
        'text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl',
    }"
  >
    <template #headline>
      <div class="flex items-center justify-center text-center w-full mb-5">
        <UButton
          color="primary"
          to="/#contact"
          label="Nous contacter"
          trailing-icon="material-symbols:android-chat"
          size="xs"
          class="rounded-full"
          variant="outline"
        />
      </div>
    </template>

    <div class="overflow-hidden">
      <UCarousel
        :items="items"
        :ui="{
          item: 'basis-full',
          container: 'rounded-lg',
          indicators: {
            wrapper: 'relative bottom-0 mt-4',
          },
        }"
        :prev-button="{
          color: 'primary',
          icon: 'i-heroicons-arrow-left-20-solid',
          class: '-start-24',
        }"
        :next-button="{
          color: 'primary',
          icon: 'i-heroicons-arrow-right-20-solid',
          class: '-end-24',
        }"
        arrows
        indicators
        class="w-full max-w-md mx-auto"
      >
        <template #default="{ item }">
          <NuxtImg :src="item" class="w-full" draggable="false" />
        </template>
        <template #indicator="{ onClick, page, active }">
          <UButton
            :label="String(page)"
            :variant="active ? 'solid' : 'outline'"
            size="2xs"
            class="rounded-full min-w-6 justify-center mt-5"
            color="primary"
            @click="onClick(page)"
          />
        </template>
      </UCarousel>
    </div>
  </ULandingSection>

  <ULandingSection
    :ui="{
      strategy: 'override',
      wrapper: 'mb-0',
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
