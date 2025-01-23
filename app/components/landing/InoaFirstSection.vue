<script setup lang="ts">
import TempTest from "./TempTest.vue";
defineProps({
  pageData: Object,
});

const certifAccordion = [
  {
    label: "Nos certifications",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    slot: "certification",
  },
];

const trustedEtpLogo = [
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
</script>

<template>
  <ULandingHero
    headline="test"
    :title="pageData.hero.title"
    :description="pageData.hero.description"
    :links="pageData.hero.links"
    :ui="{
      strategy: 'override',
      wrapper: 'mt-0',
    }"
  >
    <template #headline>
      <div class="relative w-full h-full">
        <img
          src="/topline.svg"
          alt="Topline"
          class="w-full h-full object-contain"
        />
      </div>
    </template>

    <ImagePlaceholder />

    <!-- Première Section -->
    <ULandingSection
      headline="INOA Solutions"
      title="Architecte de votre protection"
      align="left"
      :ui="{
        strategy: 'override',
        wrapper: 'p-0',
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
        temps, nous avons réussi à fidéliser notre clientèle diversifiée grâce à
        notre exigence, notre savoir-faire et notre disponibilité.
      </template>
      <img
        src="/inoa_place.jpeg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </ULandingSection>

    <TempTest />

    <ULandingLogos :title="pageData.logos.title" align="center">
      <div class="flex flex-wrap justify-center gap-12 p-[50px]">
        <div
          v-for="(logo, index) in trustedEtpLogo"
          :key="index"
          class="w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0"
        >
          <img
            :src="logo"
            :alt="'Logo ' + (index + 1)"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </ULandingLogos>

    <template>
      <div class="relative w-full h-full">
        <img
          src="/bottomline.svg"
          alt="Bottomline"
          class="w-full h-full object-contain"
        />
      </div>
    </template>
  </ULandingHero>
</template>
