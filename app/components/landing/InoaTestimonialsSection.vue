<script setup lang="ts">
defineProps({
  pageData: Object,
});
</script>

<template>
  <ULandingSection
    :headline="pageData.testimonials.headline"
    :title="pageData.testimonials.title"
  >
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
