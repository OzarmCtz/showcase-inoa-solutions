<script setup lang="ts">
const isOpenFilaire = ref(false);

const openModalFilaire = () => {
  isOpenFilaire.value = true;
};

import { ULandingSection } from "#components";

// todo remove to extern file
const darkTopLine = "/dark/topline.svg";
const lightTopLine = "/light/topline.png";

const darkBottomLine = "/dark/bottomline.svg";
const lightBottomLine = "/light/bottomline.png";
</script>

<template>
  <ULandingHero
    title="Nos systèmes d'alarmes intrusion"
    :ui="{
      strategy: 'override',
      wrapper: 'mt-0',
    }"
  >
    <template #headline>
      <div class="relative w-full h-full">
        <UColorModeImage
          :light="lightTopLine"
          :dark="darkTopLine"
          alt="Décoration"
          class="w-full h-full object-contain"
        />
      </div> </template
  ></ULandingHero>
  <ULandingSection
    title="Empêchez les intrusions à tout moment"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    align="left"
    :ui="{
      strategy: 'override',
      description: 'text-base mt-10',
      title: 'text-4xl font-bold tracking-tight text-primary',
    }"
  >
    <template #description>
      Nos spécialistes sauront vous guider dans le choix d’un système d’alarme
      performant, capable de répondre à tous vos besoins, présents et futurs.
      <br />
      <br />
      INOA Solutions propose toute une série d’applications reliées à la
      protection contre les vols et intrusions pour les entreprises.
      <br />
      <br />
      Nos experts sauront répondre adéquatement à vos besoins définis de
      sécurité et vous recommander divers dispositifs pour concevoir un système
      d’alarme antivol sur mesure.
    </template>
    <NuxtImg
      src="/services/Homme_Empechant_Une_Intrusion.jpg"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      draggable="false"
    />
  </ULandingSection>

  <ULandingSection
    title="Optez pour l'alarme filaire"
    align="right"
    :ui="{
      strategy: 'override',
      wrapper: 'mb-10',
      description: 'text-base mt-10',
      title: 'text-4xl font-bold tracking-tight text-primary',
    }"
    :links="[
      {
        label: 'En savoir plus sur nos alarmes filaires',
        color: 'primary',
        trailingIcon: 'mdi:lightbulb-on',
        size: 'sm',
        click: openModalFilaire,
        variant: 'outline',
      },
    ]"
  >
    <NuxtImg
      src="/services/Electricien_Installant_une_Alarme_Filaire.jpg"
      class="w-full rounded-md"
      draggable="false"
    />

    <template #description>
      L’alarme filaire est un système où les composants sont reliés entre eux
      par des câbles. Ils permettent de faire circuler les informations
      nécessaires au fonctionnement du système, de manière totalement sécurisée.
      L’alarme filaire fonctionne tel un réseau en étoile.
      <br />
      <br />
      La centrale d’alarme se trouve au centre du réseau. Les équipements
      répandus dans les locaux à surveiller sont reliés à cette centrale à
      l’aide de câbles, constituants les branches de l’étoile. L’ensemble des
      communications du système transitent par ces câbles. L’alarme filaire ne
      nécessite ni Wi-Fi, ni GSM, ni aucune technologie radio pour gérer ses
      échanges.
    </template>
  </ULandingSection>
  <template>
    <div>
      <USlideover v-model="isOpenFilaire">
        <UCard
          class="flex flex-col flex-1"
          :ui="{
            body: { base: 'flex-1' },
            ring: '',
            divide: 'divide-y divide-primary dark:divide-primary',
          }"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3
                class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Alarme Filaire
              </h3>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpenFilaire = false"
              />
            </div>
          </template>

          <div>
            L’alarme filaire est un système fiable car le système est capable de
            transmettre des signaux tant que l’intégrité des câbles n’est pas
            altérée.
            <br />
            <br />
            Ce système constitue un choix judicieux pour des locaux volumineux
            par exemple.
            <br /><br />
            L’alarme filaire permet de répondre aux problématiques de couverture
            dans la mesure où le câble peut porter un signal électrique.

            <br />
            <br />
            De plus, n’ayez aucune crainte quant à d’éventuelles tentatives de
            brouillages via interférences électromagnétiques : tant que le fil
            n’est pas coupé, l’alarme continue de fonctionner.
          </div>
        </UCard>
      </USlideover>
    </div>
  </template>
</template>
