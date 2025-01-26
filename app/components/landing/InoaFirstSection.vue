<script setup lang="ts">
defineProps({
  pageData: Object,
});

const certifAccordion = [
  {
    label: "Nos certifications",
    icon: "mingcute:certificate-fill",
    defaultOpen: false,
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

const itemsCarroussel = ["/inoa_place.jpeg", "/inoa-solutions-equipe.jpg"];
</script>

<template>
  <ULandingHero
    headline="test"
    :title="pageData.hero.title"
    :description="pageData.hero.description"
    :links="pageData.hero.links"
    :ui="{
      strategy: 'override',
      wrapper: 'mt-0 mb-20',
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

      <UCarousel
        v-slot="{ item }"
        :items="itemsCarroussel"
        :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden"
        arrows
      >
        <img :src="item" class="w-full" draggable="false" />
      </UCarousel>
    </ULandingSection>
    <!--<UAccordion
      :items="certifAccordion"
      :ui="{
        strategy: 'override',
        wrapper:
          'bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 rounded-md p-2',
      }"
    >
      <template #item="{ item }">
        <button
          type="button"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-primary-500 dark:text-primary-400 bg-primary-50 hover:bg-primary-100 disabled:bg-primary-50 aria-disabled:bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 dark:hover:bg-primary-300 dark:disabled:bg-primary-400 dark:aria-disabled:bg-primary-400 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-300 inline-flex items-center w-full"
        >
          <span
            class="iconify i-heroicons:information-circle flex-shrink-0 h-5 w-5"
            aria-hidden="true"
          ></span>
          <span class="text-left break-all line-clamp-1">
            {{ item.label }}
          </span>
          <span
            class="iconify i-heroicons:chevron-down-20-solid -rotate-180 h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0"
            aria-hidden="true"
          ></span>
        </button>
      </template>

      <template #certification>
        <div class="text-gray-900 dark:text-white text-center px-4 py-3">
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Dans le cadre de notre engagement qualité, INOA Solutions est à ce
            jour entreprise certifiée APSAD et NF Service :
            <br />
            <br />
            • Service d’installation et de maintenance de systèmes de détection
            d’intrusion (NF367 – I81 / Certificat n°191/13/367-81)
            <br />
            <br />
            • Catégories AB et de systèmes de vidéosurveillance (NF367-I82 /
            Certificat n° 121/13/367-82)
          </p>
        </div>
        <img src="/APSAD.png" alt="APSAD" class="w-auto h-12 mx-auto mt-5" />
      </template>
    </UAccordion>
    -->
  </ULandingHero>

  <ULandingSection class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">
    <ULandingLogos
      title="Ils nous font confiance"
      :ui="{
        strategy: 'override',
        wrapper: 'mt-2 text-center',
        title: 'text-lg font-semibold leading-8 text-gray-900 dark:text-white',
        images: 'flex flex-wrap justify-center gap-8 p-4',
      }"
    >
      <div
        v-for="(logo, index) in trustedEtpLogo"
        :key="index"
        class="w-14 h-14 lg:w-16 lg:h-16 flex-shrink-0"
      >
        <img
          :src="logo"
          :alt="'Logo ' + (index + 1)"
          class="w-full h-full object-contain"
        />
      </div>
    </ULandingLogos>
  </ULandingSection>
</template>
