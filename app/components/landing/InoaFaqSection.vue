<script setup lang="ts">
defineProps({
  pageData: Object,
});
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
          Vous pouvez aussi nous contacter
        </ULink>
        <UIcon name="pepicons-pencil:arrow-up-right" class="text-primary" />
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
    <template>
      <div class="relative w-full h-full">
        <NuxtImg
          src="/white/bottomline.svg"
          alt="Bottomline"
          class="w-full h-full object-contain hidden dark:block"
        />
        <NuxtImg
          src="/dark/bottomline.png"
          alt="Bottomline"
          class="w-full h-full object-contain dark:hidden"
        />
      </div>
    </template>
  </ULandingSection>
</template>
