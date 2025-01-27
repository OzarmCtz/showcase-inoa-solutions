<script setup lang="ts">
import { LandingInoaFirstSection } from "#components";
import { LandingInoaServicesSection } from "#components";
import { LandingInoaContactSection } from "#components";
import { LandingInoaTestimonialsSection } from "#components";
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<template>
  <div>
    <LandingInoaFirstSection :pageData="page" />

    <div class="bg-grid-pattern bg-grid-sm">
      <LandingInoaServicesSection :pageData="page" />
      <LandingInoaTestimonialsSection :pageData="page" />
    </div>

    <LandingInoaContactSection :pageData="page" />
    <ULandingSection
      id="faq"
      :title="page.faq.title"
      class="scroll-mt-[var(--header-height)]"
    >
      <template #description>
        <div class="mb-5 flex justify-center">
          <ULink to="#contact" class="text-primary text-sm">
            Vous pouvez aussi nous contacter
          </ULink>
          <UIcon name="pepicons-pencil:arrow-up-right" class="text-primary" />
        </div>
      </template>
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
    <ULandingSection
      :ui="{
        strategy: 'override',
        wrapper: 'mb-0',
      }"
    >
      <template>
        <div class="relative w-full h-full">
          <img
            src="/bottomline.svg"
            alt="Bottomline"
            class="w-full h-full object-contain"
          />
        </div>
      </template>
    </ULandingSection>
  </div>
</template>
