<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});

const logos = [
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
  <div>
    <ULandingHero
      headline="test"
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
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

      <ULandingLogos :title="page.logos.title" align="center">
        <div class="flex flex-wrap justify-center gap-12 p-[50px]">
          <div
            v-for="(logo, index) in logos"
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

    <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
      :headline="page.features.headline"
    >
      <UPageGrid
        id="features"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          orientation="vertical"
          icon="material-symbols:multimodal-hand-eye-outline"
          :ui="{
            strategy: 'override',
            icon: {
              wrapper: 'ml-auto flex items-center justify-end mb-5', // Positionnement à droite
              base: 'w-8 h-8 flex-shrink-0 text-primary dark:text-primary', // Couleur primaire
            },
          }"
        >
          <img
            :src="`/services/${item.image}.png`"
            alt="Feature Icon"
            class="w-26 h-26"
          />
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns
        id="testimonials"
        class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <div
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          class="break-inside-avoid"
        >
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection
      class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10"
    >
      <ULandingCTA v-bind="page.cta" :card="false" />
    </ULandingSection>

    <ULandingSection
      id="faq"
      :title="page.faq.title"
      :description="page.faq.description"
      class="scroll-mt-[var(--header-height)]"
    >
      <ULandingFAQ
        multiple
        :items="page.faq.items"
        :ui="{
          button: {
            label: 'font-semibold',
            trailingIcon: {
              base: 'w-6 h-6',
            },
          },
        }"
        class="max-w-4xl mx-auto"
      />
    </ULandingSection>
  </div>
</template>
