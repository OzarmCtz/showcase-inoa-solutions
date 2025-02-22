<script setup lang="ts">
import InoaChouette from "@/components/services/InoaServicesChouette.vue";

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
useSeoMeta({
  title: "Caméra Nomade La Chouette Vidéoprotection - INOA Solution",
  ogTitle: "Caméra Nomade La Chouette Vidéoprotection - INOA Solution",
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<template>
  <InoaChouette />
</template>
