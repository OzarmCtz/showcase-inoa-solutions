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
      title="Nos systèmes de télésurveillance"
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
      title="Gardez un oeil sur vos locaux"
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
    >
      <template #description>
        La télésurveillance est un service indispensable pour une sécurité
        accrue de vos locaux. Elle vous garantit la disponibilité, la réactivité
        et l’accompagnement d’agents de télésurveillance spécialisés dans ce
        domaine.

        <br />
        <br />
        La télésurveillance consiste à installer un système d’alarmes relié à un
        centre de télésurveillance APSAD P3. Lorsque le système est en marche,
        le matériel de détection signale toute intrusion ou présence
        indésirable. Les alertes sont envoyées au centre opérationnel de
        sécurité par la centrale de transmission.
        <br />
        <br />
        Les opérateurs reçoivent, analysent et gèrent les informations envoyées.
        Ils mettent simultanément en place la procédure appropriée et font
        intervenir les personnes adaptées pour gérer l’incident (destinataires
        d’alerte, agent de sécurité, forces de l’ordre, pompiers…).
      </template>
      <NuxtImg
        src="/services/Agent_De_Télésurveillance.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        draggable="false"
      />
    </ULandingSection>

    <ULandingSection
      title="La levée de doute"
      align="right"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
      :links="[
        {
          label: 'En savoir plus sur la levée de doute',
          color: 'primary',
          trailingIcon: 'material-symbols:eye-tracking-outline',
          size: 'sm',
          click: openModalDoute,
          variant: 'outline',
        },
      ]"
    >
      <NuxtImg
        src="/services/Levée_De_Doute-23.jpg"
        class="w-full rounded-md"
        draggable="false"
      />

      <template #description>
        Quand le centre de télésurveillance reçoit le signal d’une intrusion,
        les opérateurs analysent la situation en se servant des informations
        récoltées par les différents éléments du système de sécurité.
        <br />
        <br />
        Grâce à l’interphonie intégrée à la centrale d’alarme, si une intrusion
        a lieu, les agents de télésurveillance peuvent écouter silencieusement
        les lieux et demander aux intrus le mot de passe sous peine d’alerter
        les forces de l’ordre.
        <br />
        <br />
        Grâce au capteur-photo intégré au détecteur de mouvements, une série de
        photos est prise lorsqu’une détection est perçue. Ces images sont
        envoyées au centre de télésurveillance pour les analyser et
        détermineront s’il s’agit d’une fausse alerte ou d’une intrusion
        effective.
        <br />
        <br />
        Le cas échéant, l’intrus est interpellé afin de le mettre en fuite et la
        police prévenue.
      </template>
    </ULandingSection>
    <div>
      <USlideover v-model="isOpenDoute">
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
                  src="/services/telesurveillance.png"
                  draggable="false"
                  class="w-12 h-12"
                />
                <h3
                  class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  La levée de doute
                </h3>
              </div>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpenDoute = false"
              />
            </div>
          </template>

          <div>
            La levée de doute est une étape obligatoire pour prévenir les Forces
            de l’Ordre.
            <br />
            <br />
            Elle consiste en l’ensemble des vérifications qui permettent de
            présumer d’une intrusion dans le lieu protégé.
            <br />
            <br />
            Avec INOA Solutions, elle peut se faire grâce à la
            téléinterpellation, à la détection par l’image, aux contacts de
            proximité ou aux agents de sécurité.
          </div>
        </UCard>
      </USlideover>
    </div>

    <ULandingSection
      title="Téléinterpellation"
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
      :links="[
        {
          label: 'En savoir plus sur nos Téléinterpellation',
          color: 'primary',
          trailingIcon: 'material-symbols:camera-outdoor-outline',
          size: 'sm',
          click: openModalInterpellation,
          variant: 'outline',
        },
      ]"
    >
      <NuxtImg
        src="/services/Téléinterpellation-3.jpg"
        class="w-full rounded-md"
        draggable="false"
      />

      <template #description>
        Grâce à la télésurveillance, le centre d’écoute rentre en communication
        directe avec le lieu protégé en cas d’alarme. L’opérateur met
        immédiatement la maison sous écoute afin de détecter tous les bruits
        suspects.
        <br />
        <br />
        C’est une étape primordiale dans l’analyse de la situation. Le centre
        d’écoute peut ensuite dialoguer avec le lieu protégé. Cela permet selon
        le cas : d’intimider l’intrus en lui demandant de s’identifier et en
        l’alertant des procédures en cours; d’arrêter rapidement les procédures
        s’il s’agit d’une mauvaise manipulation.
      </template>
    </ULandingSection>
    <div>
      <USlideover v-model="isOpenInterpellation">
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
                  src="/services/telesurveillance.png"
                  draggable="false"
                  class="w-12 h-12"
                />
                <h3
                  class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  Nos Téléinterpellation
                </h3>
              </div>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpenInterpellation = false"
              />
            </div>
          </template>

          <div>
            La téléinterpellation complète la levée de doute en s’adressant aux
            intrus à distance. Elle peut être utilisée de manières différentes
            et dans des situations très diverses.
            <br />
            <br />
            De manière générale, la téléinterpellation transmet des messages
            pré‑enregistrés. Si aucun des messages pré-enregistrés ne correspond
            à la situation, l’opérateur de peut procéder à une interpellation
            libre.
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
      <div class="flex items-center justify-center text-center w-full">
        <p class="text-2xl sm:text-4xl font-bold tracking-tight relative mb-2">
          La détection par l’image
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
        src="/services/Détection_Par_L_Image.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        draggable="false"
      />

      <template #description>
        Grâce à la technologie numérique du détecteur image, une séquence vidéo
        est immédiatement transmise au centre de télésurveillance APSAD P3,
        l’opérateur analyse la séquence et peut, en cas d’’intrusion confirmée,
        demander l’intervention des forces de l’ordre.
        <br />
        <br />
        La prestation de télésurveillance inclut la totalité des services
        suivants : La gestion des alarmes intrusion et autoprotection; la
        gestion des alarmes techniques (batterie basse, défaut secteur, etc.);
        la gestion des tests à la fréquence désirée; la gestion des Marches /
        Arrêts (ouvertures / fermetures); la gestion de l’interphonie et de la
        vidéo (levée de doute); la gestion des alarmes agression, code sous
        contrainte.
      </template>
    </ULandingSection>
  </UCard>

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
