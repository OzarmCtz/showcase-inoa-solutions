<script setup lang="ts">
import { LandingInoaFirstSection } from "#components";
import { LandingInoaServicesSection } from "#components";
import { LandingInoaContactSection } from "#components";
import { LandingInoaTestimonialsSection } from "#components";
import { LandingInoaFaqSection } from "#components";
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
    <LandingInoaFaqSection :page-data="page" />
  </div>
</template>
