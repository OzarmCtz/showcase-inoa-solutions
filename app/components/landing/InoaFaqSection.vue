<script setup lang="ts">
defineProps({
  pageData: Object,
});

const darkBottomLine = "/dark/bottomline.svg";
const lightBottomLine = "/light/bottomline.png";
</script>
<template>
  <ULandingSection
    id="faq"
    :title="pageData.faq.title"
    class="scroll-mt-[var(--header-height)]"
  >
    <template #description>
      <div class="mb-5 flex justify-center">
        <ULink to="#contact" class="text-primary text-sm">
          <UBadge variant="outline" size="sm">
            Vous pouvez aussi nous contacter<UIcon
              name="material-symbols:android-chat"
              class="text-primary"
            />
          </UBadge>
        </ULink>
      </div>
    </template>
    <ULandingFAQ
      multiple
      :items="pageData.faq.items"
      :ui="{
        button: {
          label: 'font-semibold',
          trailingIcon: {
            base: 'w-6 h-6',
          },
        },
      }"
      class="max-w-4xl mx-auto"
    />
  </ULandingSection>
  <ULandingSection
    :ui="{
      strategy: 'override',
      wrapper: 'mb-0',
    }"
  >
    <div class="relative w-full h-full">
      <UColorModeImage
        :light="lightBottomLine"
        :dark="darkBottomLine"
        alt="Décoration"
        class="w-full h-full object-contain"
      />
    </div>
  </ULandingSection>
</template>
