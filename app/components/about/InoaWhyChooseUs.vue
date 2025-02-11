<script setup lang="ts">
const links = [
  {
    name: "Fully customizable",
    description:
      "Like Nuxt UI, change the style of any component from your App Config or customize them specifically through the ui prop.",
    icon: "i-heroicons-wrench-screwdriver",
  },
  {
    name: "Slots for everything",
    description:
      "Each component leverages the power of Vue's slots to give you the flexibility to build anything.",
    icon: "i-heroicons-square-3-stack-3d",
  },
];
</script>

<template>
  <ULandingHero
    title="Pourquoi nous chosir ?"
    description="Watch your dreams materialize before your eyes with us."
  />
  <ULandingSection
    headline="Pro"
    title="The freedom to build anything"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    align="left"
  >
    <img
      src="https://picsum.photos/640/360"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
  <ULandingSection
    title="The freedom to build anything"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    align="right"
    :links="[
      {
        label: 'Explore components',
        color: 'gray',
        trailingIcon: 'i-heroicons-arrow-right',
        size: 'lg',
      },
    ]"
  >
    <img
      src="https://picsum.photos/640/360"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
  <ULandingSection
    title="The freedom to build anything"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    :features="links"
    align="left"
  >
    <img
      src="https://picsum.photos/360/640"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
  <ULandingSection
    headline="Pro"
    title="The freedom to build anything"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    align="left"
  >
    <img
      src="https://picsum.photos/640/360"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
  <ULandingSection
    title="The freedom to build anything"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    align="right"
    :links="[
      {
        label: 'Explore components',
        color: 'gray',
        trailingIcon: 'i-heroicons-arrow-right',
        size: 'lg',
      },
    ]"
  >
    <img
      src="https://picsum.photos/640/360"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
</template>
