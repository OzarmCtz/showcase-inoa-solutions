<script setup lang="ts">
import { LandingInoaFirstSection } from "#components";
import { LandingInoaServicesSection } from "#components";
import { LandingInoaContactSection } from "#components";
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
    <LandingInoaServicesSection :pageData="page" />

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

    <LandingInoaContactSection :pageData="page" />
    <ULandingSection
      id="faq"
      :title="page.faq.title"
      class="scroll-mt-[var(--header-height)]"
      :ui="{
        strategy: 'override',
        wrapper: 'mb-0',
      }"
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
