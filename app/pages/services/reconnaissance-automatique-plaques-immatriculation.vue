<script setup lang="ts">
import InoaPlaques from "@/components/services/InoaServicesPlaques.vue";

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
useSeoMeta({
  title:
    "Reconnaissance Plaques Immatriculation Vidéoprotection - INOA Solution",
  ogTitle:
    "Reconnaissance Plaques Immatriculation Vidéoprotection - INOA Solution",
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<template>
  <InoaPlaques />
</template>
