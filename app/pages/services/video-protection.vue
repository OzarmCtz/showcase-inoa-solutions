<script setup lang="ts">
import InoaControleDacces from "@/components/services/InoaControleDacces.vue";

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
useSeoMeta({
  title: "Contrôle d'Accès - INOA Solution",
  ogTitle: "Contrôle d'Accès - INOA Solution",
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<template>
  <InoaControleDacces />
</template>
