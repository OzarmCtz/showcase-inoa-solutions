<script setup lang="ts">
import InoaTelesurveillance from "@/components/services/InoaServicesTelesurveillance.vue";

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
useSeoMeta({
  title: "Télésurveillance Vidéoprotection - INOA Solution",
  ogTitle: "Télésurveillance Vidéoprotection - INOA Solution",
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<template>
  <InoaTelesurveillance />
</template>
