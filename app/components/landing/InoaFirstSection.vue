<script setup lang="ts">
defineProps({
  pageData: Object,
});
import CertificationsModal from "@/components/CertificationsModal.vue";
const isOpen = ref(false);

const LandingLogoPicture = [
  "/trusted-etp/66logo_Pompier.png",
  "/trusted-etp/ausi-scala.png",
  "/trusted-etp/cazes-png.png",
  "/trusted-etp/Conseil_Departemental.png",
  "/trusted-etp/guasch-logo.png",
  "/trusted-etp/Logo_Dragons_Catalans.png",
  "/trusted-etp/logo_saint_charles.png",
  "/trusted-etp/logo-USSAP.png",
  "/trusted-etp/logo-wolkswagen.png",
  "/trusted-etp/Ministere_des_Armees.png",
  "/trusted-etp/oph_de_perpignan-logo.png",
  "/trusted-etp/Perpignan_Mediterranee_Metropole_2016.png",
  "/trusted-etp/Peugeot-Logo.png",
  "/trusted-etp/Socafna-logo.png",
  "/trusted-etp/tressol-chabrier.png",
  "/trusted-etp/UPVD_Logo_CMJN_horizontal.png",
];

const realisationCarouselPicture = [
  "/realisation/realisation-5.jpg",
  "/realisation/realisation-6.jpeg",
  "/realisation/realisation-3.jpg",
  "/realisation/realisation-2.jpeg",
  "/realisation/realisation-4.jpg",
  "/realisation/realisation-1.jpeg",
  "/realisation/realisation-8.jpeg",
  "/realisation/realisation-7.jpg",
];

const darkTopLine = "/dark/topline.svg";
const lightTopLine = "/light/topline.png";

const darkLogoLanding = "/dark/etp-logo-custom.png";
const lightLogoLanding = "/light/etp-logo-custom.png";
</script>

<template>
  <ULandingHero
    :description="pageData.hero.description"
    :links="pageData.hero.links"
    :ui="{
      strategy: 'override',
      wrapper: 'mt-0 pb-20 bg-grid-pattern bg-grid-sm',
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
      </div>
    </template>

    <template #title>
      <div class="flex items-center justify-center">
        <UColorModeImage
          :light="lightLogoLanding"
          :dark="darkLogoLanding"
          alt="Inoa Solution Logo"
          class="h-[98px] w-auto"
        />
      </div>
    </template>

    <ImagePlaceholder />

    <!-- Première Section -->
    <ULandingSection
      headline="Architecte de votre protection
"
      align="left"
      :ui="{
        strategy: 'override',
        wrapper: 'mb-0',
        title:
          'text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl',

        description:
          'mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-300',
      }"
    >
      <template #description>
        Spécialisée dans le domaine de la protection des biens et des personnes,
        notre agence INOA Solutions, basée à Tecnosud 2, s’est donnée comme
        objectif de répondre à un besoin exprimé par la clientèle en termes de
        qualité de services, de promptitude d’intervention et de satisfaction
        continue.
        <br />
        <br />
        Notre objectif ?
        <br />
        <br />
        Répondre à vos besoins de sécurité sans cesse grandissants. Au fil du
        temps, nous avons réussi à fidéliser notre clietèle diversifiée grâce à
        notre exigence, notre savoir-faire et notre disponibilité.
      </template>
      <NuxtImg src="/inoa_place.jpeg" class="w-full" draggable="false" />
    </ULandingSection>

    <ULandingSection
      headline="Au services de votre sécurité"
      align="right"
      :ui="{
        strategy: 'override',
        wrapper: 'mb-0',
        title:
          'text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl',

        description:
          'mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-300',
      }"
    >
      <template #description>
        <p class="text-xl">Caméra de surveillance</p>
        <br />
        <p class="text-sm">
          Sentez-vous plus en sécurité avec notre large gamme de caméras de
          surveillance. Que ce soit pour des besoins de surveillance intérieure
          ou extérieure, nos conseillers seront en mesure de vous offrir la
          caméra répondant à chacune de vos attentes spécifiques.
        </p>
        <br />
        <p class="text-xl">Détection de mouvement</p>
        <br />
        <p class="text-sm">
          Découvrez notre système d’alarme sans fil à la pointe de la
          technologie. Activez les détecteurs de mouvement via votre téléphone
          ou internet. Les systèmes d’alarme sans-fil permettent d’envoyer des
          notifications par téléphone, mail ou SMS dans l’éventualité d’une
          intrusion ou de tout autre événement anormal.
        </p>
      </template>

      <NuxtImg src="/maison-secu.jpg" class="w-full" draggable="false" />
    </ULandingSection>
    <div class="flex justify-center sm:justify-end">
      <UButton
        label="Voir nos certifications"
        icon="iconamoon:certificate-badge-fill"
        color="primary"
        variant="outline"
        size="sm"
        @click="isOpen = true"
      />
      <CertificationsModal v-model="isOpen" />
    </div>

    <ULandingSection
      headline="Nos réalisations"
      :ui="{
        strategy: 'override',
        wrapper: 'mb-0',
        title:
          'text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl',
      }"
    >
      <div class="overflow-hidden">
        <UCarousel
          :items="realisationCarouselPicture"
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
            class: '-start-12',
          }"
          :next-button="{
            color: 'primary',
            icon: 'i-heroicons-arrow-right-20-solid',
            class: '-end-12',
          }"
          arrows
          indicators
          class="w-full max-w-4xl mx-auto"
        >
          <template #default="{ item }">
            <img
              :src="item"
              class="w-full h-auto max-h-[500px] object-cover"
              draggable="false"
            />
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
  </ULandingHero>

  <ULandingSection class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">
    <ULandingLogos
      title="Ils nous font confiance"
      :ui="{
        strategy: 'override',
        wrapper: 'text-center',
        title:
          'text-lg font-semibold leading-8 text-gray-900 dark:text-white mb-10',
        images: 'flex flex-wrap justify-center gap-8 p-4',
      }"
    >
      <div
        v-for="(logo, index) in LandingLogoPicture"
        :key="index"
        class="w-14 h-14 lg:w-16 lg:h-16 flex-shrink-0"
      >
        <img
          :src="logo"
          :alt="'Logo ' + (index + 1)"
          class="w-full h-full object-contain"
          draggable="false"
        />
      </div>
    </ULandingLogos>
  </ULandingSection>
</template>
