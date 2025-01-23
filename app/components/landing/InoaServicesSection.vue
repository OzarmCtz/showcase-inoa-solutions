<script setup lang="ts">
defineProps({
  pageData: Object,
});
</script>

<template>
  <ULandingSection
    :title="pageData.features.title"
    :headline="pageData.features.headline"
  >
    <UPageGrid
      id="features"
      class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
    >
      <ULandingCard
        v-for="(item, index) in pageData.features.items"
        :key="index"
        v-bind="item"
        orientation="vertical"
        icon="material-symbols:multimodal-hand-eye-outline"
        :ui="{
          strategy: 'override',
          icon: {
            wrapper: 'ml-auto flex items-center justify-end mb-5', // Positionnement à droite
            base: 'w-8 h-8 flex-shrink-0 text-primary dark:text-primary', // Couleur primaire
          },
        }"
      >
        <img
          :src="`/services/${item.image}.png`"
          alt="Feature Icon"
          class="w-26 h-26"
        />
      </ULandingCard>
    </UPageGrid>
  </ULandingSection>
</template>
