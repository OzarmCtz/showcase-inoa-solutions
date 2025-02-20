<script setup lang="ts">
import InoaVideoProtection from "@/components/services/InoaServicesVideoProtection.vue";

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
useSeoMeta({
  title: "Surveillance Vidéoprotection - INOA Solution",
  ogTitle: "Surveillance Vidéoprotection - INOA Solution",
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<template>
  <InoaVideoProtection />
</template>
