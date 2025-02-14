<script setup lang="ts">
import InoaWhyChooseUs from "@/components/about/InoaWhyChooseUs.vue";

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
useSeoMeta({
  title: "Pourquoi nous choisir ? - INOA Solutions",
  ogTitle: "Pourquoi nous choisir ? - INOA Solutions",
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<template>
  <div class="bg-grid-pattern bg-grid-sm">
    <InoaWhyChooseUs />
  </div>
</template>
