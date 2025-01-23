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
        :ui="{
          strategy: 'override',
          icon: {
            base: 'w-8 h-8 flex-shrink-0 text-primary dark:text-primary', // Couleur primaire
          },
        }"
      >
      </ULandingCard>
    </UPageGrid>
  </ULandingSection>
</template>
