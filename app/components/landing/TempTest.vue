<script setup lang="ts">
const items = [
  {
    label: "Nos certifications",
    icon: "mingcute:certificate-fill",
    defaultOpen: false,
    slot: "certification",
  },
];
</script>

<template>
  <UAccordion
    :items="items"
    :ui="{
      strategy: 'override',
      wrapper:
        'bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 rounded-md',
    }"
  >
    <template #item="{ item }">
      <button
        type="button"
        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-primary-500 dark:text-primary-400 bg-primary-50 hover:bg-primary-100 disabled:bg-primary-50 aria-disabled:bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 dark:hover:bg-primary-300 dark:disabled:bg-primary-400 dark:aria-disabled:bg-primary-400 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-300 inline-flex items-center w-full"
      >
        <span
          class="iconify i-heroicons:information-circle flex-shrink-0 h-5 w-5"
          aria-hidden="true"
        ></span>
        <span class="text-left break-all line-clamp-1">
          {{ item.label }}
        </span>
        <span
          class="iconify i-heroicons:chevron-down-20-solid -rotate-180 h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0"
          aria-hidden="true"
        ></span>
      </button>
    </template>

    <template #certification>
      <div class="text-gray-900 dark:text-white text-center px-4 py-3">
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Dans le cadre de notre engagement qualité, INOA Solutions est à ce
          jour entreprise certifiée APSAD et NF Service :
          <br />
          <br />
          • Service d’installation et de maintenance de systèmes de détection
          d’intrusion (NF367 – I81 / Certificat n°191/13/367-81)
          <br />
          <br />
          • Catégories AB et de systèmes de vidéosurveillance (NF367-I82 /
          Certificat n° 121/13/367-82)
        </p>
      </div>
      <img src="/APSAD.png" alt="APSAD" class="w-auto h-12 mx-auto mt-5" />
    </template>
  </UAccordion>
</template>
