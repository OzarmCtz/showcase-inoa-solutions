<script setup lang="ts">
const items = [
  {
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    slot: "getting-started",
  },
];
</script>

<template>
  <ULandingCard>
    <UAccordion :items="items">
      <template #item="{ item }">
        <p class="italic text-gray-900 dark:text-white text-center">
          {{ item.description }}
        </p>
      </template>

      <template #getting-started>
        <div class="text-gray-900 dark:text-white text-center">
          <Logo class="w-auto h-8 mx-auto" />

          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Fully styled and customizable components for Nuxt.
          </p>
        </div>
      </template>
    </UAccordion>
  </ULandingCard>
</template>
