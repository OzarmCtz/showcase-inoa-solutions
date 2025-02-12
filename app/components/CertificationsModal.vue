<script setup lang="ts">
const isOpen = defineModel<boolean>();
</script>

<template>
  <UModal v-model="isOpen">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="flex items-center text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            <UIcon
              name="iconamoon:certificate-badge-fill"
              class="w-5 h-5 mr-2 text-primary"
            />
            Nos certifications
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
        </div>
      </template>

      <div class="p-4">
        <div class="text-sm text-gray-700 dark:text-gray-300 space-y-3">
          <p>
            Dans le cadre de notre engagement envers la qualité,
            <span class="text-primary">INOA Solutions</span> est fière d'être
            certifiée <span class="text-primary">APSAD et NF Service</span> pour
            :
          </p>

          <ul class="list-none space-y-2">
            <li>
              - L'installation et la maintenance de systèmes de détection
              d'intrusion (NF 367-I81) Catégories AB
            </li>
            <li>
              - L'installation et la maintenance de systèmes de
              vidéosurveillance (NF 367-I82)
            </li>
          </ul>

          <p>
            Ces certifications, délivrées par
            <span class="text-primary">AFNOR Certification</span> et
            <span class="text-primary">CNPP Cert.</span>, attestent de notre
            conformité aux normes suivantes :
          </p>

          <ul class="list-none space-y-2">
            <li>- <span class="text-primary">NF X 50-785</span></li>
            <li>
              - <span class="text-primary">Référentiels APSAD R81 et D32</span>
            </li>
            <li>- <span class="text-primary">Référentiel NF 367-I81</span></li>
          </ul>

          <p>
            Elles garantissent que nos services respectent des critères stricts
            en matière de :
          </p>

          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <Icon
                name="icon-park-twotone:success"
                class="text-primary w-5 h-5"
              />
              <span class="text-primary">Relations commerciales</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon
                name="icon-park-twotone:success"
                class="text-primary w-5 h-5"
              />
              <span class="text-primary"
                >Conception, réalisation et réception des installations</span
              >
            </div>
            <div class="flex items-center gap-2">
              <Icon
                name="icon-park-twotone:success"
                class="text-primary w-5 h-5"
              />
              <span class="text-primary"
                >Vérification de conformité initiale</span
              >
            </div>
            <div class="flex items-center gap-2">
              <Icon
                name="icon-park-twotone:success"
                class="text-primary w-5 h-5"
              />
              <span class="text-primary"
                >Maintenance et vérifications périodiques</span
              >
            </div>
          </div>

          <p>
            De plus, ces certifications assurent que nos
            <span class="text-primary">dispositions organisationnelles</span>,
            notre <span class="text-primary">satisfaction client</span>, ainsi
            que nos
            <span class="text-primary">moyens humains et matériels</span>
            sont régulièrement contrôlés, garantissant ainsi une qualité de
            service optimale.
          </p>
          <div class="flex justify-center items-center py-4">
            <NuxtImg src="/APSAD.png" alt="APSAD Logo" class="w-40 h-auto" />
          </div>
        </div>
      </div>
    </UCard>
  </UModal>
</template>
