<script setup lang="ts">
import InoaServicesAlarmeIntrusions from "@/components/services/InoaServicesAlarmeIntrusions.vue";

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
useSeoMeta({
  title: "Alarmes Intrusion - INOA Solutions",
  ogTitle: "Alarmes Intrusion - INOA Solutions",
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<template>
  <InoaServicesAlarmeIntrusions />
</template>
