<script setup lang="ts">
const isOpenCamFilaire = ref(false);

const openModalCamFilaire = () => {
  isOpenCamFilaire.value = true;
};

const isOpenCam = ref(false);

const openModalCam = () => {
  isOpenCam.value = true;
};

const items = [
  "/services/Vidéoprotection.jpg",
  "/services/Vidéoprotection_1.jpg",
  "/services/Vidéoprotection_2.jpg",
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
      title="Nos services de Vidéo Protection"
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
      title="Augmentez la sécurité de votre entreprise"
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
    >
      <template #description>
        Notre bureau d’étude est en mesure de répondre à l’ensemble de vos
        besoins avec sa gamme très large de caméras de surveillance.
        <br />
        <br />

        Que ce soit pour des besoins de surveillance à l’intérieur comme à
        l’extérieur, dans des conditions d’éclairage plus difficiles, que ce
        soit pour des caméras dissimulées, ou à balayage programmé, ou pour
        couvrir tout autre besoin, nos conseillers seront en mesure de vous
        offrir la caméra qui saura répondre à chacune de vos attentes
        spécifiques.
        <br />
        <br />
        La conception et l’installation d’un système de vidéoprotection par
        notre entité peuvent vous faire réaliser des économies substantielles
        sur vos coûts annuels d’assurance.
      </template>
      <NuxtImg
        src="/services/video-2.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        draggable="false"
      />
    </ULandingSection>

    <ULandingSection
      title="Sécurisez votre local par la caméra filaire"
      align="right"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
      :links="[
        {
          label: 'En savoir plus sur nos caméra filaire',
          color: 'primary',
          trailingIcon: 'material-symbols:speed-camera',
          size: 'sm',
          click: openModalCamFilaire,
          variant: 'outline',
        },
      ]"
    >
      <NuxtImg
        src="/services/video.jpg"
        class="w-full rounded-md"
        draggable="false"
      />

      <template #description>
        La caméra filaire, à l’instar de l’alarme intrusion filaire, est un
        système où les composants sont connectés entre eux par des câbles. Les
        informations circulent de manière sécurisée.
        <br />
        <br />
        Le débit d’émission des données est supérieur à celui d’une liaison
        Wi-Fi. Les caméras filaires permettent de bénéficier d’enregistrements
        vidéo d’une qualité optimale.
        <br />
        <br />
        L’ensemble des communications du système transitent par ces câbles. La
        caméra filaire est connectée via le PoE. Le câble ethernet transfère les
        informations connectées à internet et alimente la caméra.
        <br />
        <br />
        Certaines caméras filaires fonctionnent par le double câblage; un câble
        d’alimentation et un câble ethernet.
      </template>
    </ULandingSection>
    <div>
      <USlideover v-model="isOpenCamFilaire">
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
                  src="/services/camera.png"
                  draggable="false"
                  class="w-12 h-12"
                />
                <h3
                  class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  Nos Alarme Filaire
                </h3>
              </div>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpenCamFilaire = false"
              />
            </div>
          </template>

          <div>
            Les caméras câblées sont moins propices aux interférences provenant
            d’autres signaux radio ou électriques.
            <br />
            <br />
            Elles peuvent couvrir de larges zones de protection. Ne dépendant
            pas du Wi-Fi, les caméras peuvent être placées sur plusieurs
            dizaines de mètres les unes des autres.
            <br />
            <br />
            Les caméras filaires sont fiables car leur signal ne peut pas être
            bloqué facilement.
            <br />
            <br />
            Concernant les systèmes DVR, en cas de coupure d’internet,
            l’enregistreur peut continuer à de fonctionner.
          </div>
        </UCard>
      </USlideover>
    </div>

    <ULandingSection
      title="Découvrezla caméra sans fil"
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
      :links="[
        {
          label: 'En savoir plus sur nos caméra sans fil',
          color: 'primary',
          trailingIcon: 'material-symbols:speed-camera-outline',
          size: 'sm',
          click: openModalCam,
          variant: 'outline',
        },
      ]"
    >
      <NuxtImg
        src="/services/Fotolia.jpg"
        class="w-full rounded-md"
        draggable="false"
      />

      <template #description>
        La caméra sans fil est un système alimenté par des batteries ou des
        piles. Les données sont transférées par des signaux radio aux unités de
        commande pour déclencher une alarme si il y a une intrusion.

        <br />
        <br />
        La communication entre la caméra et le système d’alarme se fait par
        Wi-Fi. Si la caméra repère une intrusion, le propriétaire reçoit une
        alerte sur son smartphone et peut ainsi consulter les images sur tout
        appareil connecté à internet.
        <br />
        <br />
        Il peut ainsi prévenir les autorités compétentes.

        <br />
        <br />
      </template>
    </ULandingSection>
    <div>
      <USlideover v-model="isOpenCam">
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
                  src="/services/camera.png"
                  draggable="false"
                  class="w-12 h-12"
                />
                <h3
                  class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  Nos alarmes sans fil
                </h3>
              </div>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpenCam = false"
              />
            </div>
          </template>

          <div>
            Le système de caméra sans fil peut être installé dans des zones où
            il n’y a pas d’électricité. Grâce à des applications de surveillance
            à distance, le propriétaire peut à tout moment regarder les images
            afin de percevoir une potentielle intrusion.
            <br />
            <br />
            Le propriétaire peut étendre le système de caméras à l’aide de
            caméras sans fil supplémentaires. Elles peuvent assurer une parfaite
            synchronisation entre elles.
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
          Passez des nuits plus en sécurité avec la caméra infrarouge
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
        src="/services/Caméra_Thermique.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        draggable="false"
      />

      <template #description>
        La caméra infrarouge, ou caméra thermique, détecte et mesure l’énergie
        infrarouge puis convertit les données en images indiquant la température
        de surface. Elle contient un système optique qui concentre l’énergie
        infrarouge sur une puce de détection particulière.
        <br /><br />
        Les alarmes infrarouges disposent des avantages des caméras sans fil
        puisqu’elles nécessitent uniquement d’une connexion Wi-Fi.
        <br /><br />
        Notre solution de détection d’intrusion est adaptable et s’adresse aussi
        bien aux PME/PMI qu’aux collectivités et sites à risques. Elle repose
        sur 3 principes qui agissent simultanément : une détection d’intrusion
        pour agir plus vite et anticiper tout acte de malveillance; une action
        dissuasive pour déconseiller à l’individu de continuer son acte; une
        remontée immédiate de l’alerte pour déclencher une intervention.
      </template>
    </ULandingSection>

    <template #footer>
      <div class="px-4">
        Notre solution de détection d’intrusion est adaptable et s’adresse aussi
        bien aux PME/PMI qu’aux collectivités et sites à risques. Elle repose
        sur 3 principes qui agissent simultanément : une détection d’intrusion
        pour agir plus vite et anticiper tout acte de malveillance; une action
        dissuasive pour déconseiller à l’individu de continuer son acte; une
        remontée immédiate de l’alerte pour déclencher une intervention.
      </div>
    </template>
  </UCard>

  <ULandingSection
    title="Nos caméras de vidéoprotection"
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
