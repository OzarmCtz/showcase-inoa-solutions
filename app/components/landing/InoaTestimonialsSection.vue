<script setup lang="ts">
defineProps({
  pageData: Object,
});
</script>

<template>
  <ULandingSection headline="Témoignages" title="Ce que disent nos clients.">
    <UPageColumns
      id="testimonials"
      class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
    >
      <div
        v-for="(testimonial, index) in pageData.testimonials.items"
        :key="index"
        class="break-inside-avoid"
      >
        <ULandingTestimonial v-bind="testimonial" />
      </div>
    </UPageColumns>
  </ULandingSection>
</template>
