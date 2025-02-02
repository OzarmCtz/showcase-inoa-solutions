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
    <!-- First Section | Title | Video | Enterprise presentation | Certification | Realisation  -->
    <LandingInoaFirstSection :pageData="page" />

    <div class="bg-grid-pattern bg-grid-sm">
      <!--Services Section-->
      <LandingInoaServicesSection :pageData="page" />
      <!--Testimonial Section-->
      <LandingInoaTestimonialsSection :pageData="page" />
    </div>

    <!--Contact Section-->
    <LandingInoaContactSection :pageData="page" />
    <!--F.A.Q Section-->
    <LandingInoaFaqSection :page-data="page" />
  </div>
</template>
