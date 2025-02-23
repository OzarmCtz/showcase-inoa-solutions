<script setup lang="ts">
const isOpenFilaire = ref(false);

const openModalFilaire = () => {
  isOpenFilaire.value = true;
};

const isOpenRadio = ref(false);

const openModalRadio = () => {
  isOpenRadio.value = true;
};

const items = [
  "/services/alarme-3.jpg",
  "/services/alarme-4.jpg",
  "/services/alarme-5.jpg",
  "/services/alarme-6.jpg",
];

// todo remove to extern file
const darkTopLine = "/dark/topline.svg";
const lightTopLine = "/light/topline.png";

const darkBottomLine = "/dark/bottomline.svg";
const lightBottomLine = "/light/bottomline.png";
</script>

<template>
  <div class="bg-grid-pattern bg-grid-sm">
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
        sécurité et vous recommander divers dispositifs pour concevoir un
        système d’alarme antivol sur mesure.
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
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
      :links="[
        {
          label: 'En savoir plus sur nos alarmes filaires',
          color: 'primary',
          trailingIcon: 'material-symbols:detector-alarm-outline',
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
        nécessaires au fonctionnement du système, de manière totalement
        sécurisée. L’alarme filaire fonctionne tel un réseau en étoile.
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
              <div class="flex items-center gap-2">
                <NuxtImg
                  src="/services/alarm.png"
                  draggable="false"
                  class="w-12 h-12"
                />
                <h3
                  class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  Alarme Filaire
                </h3>
              </div>
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

    <ULandingSection
      title="Découvrez l'alarme radio"
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base mt-10',
        title: 'text-4xl font-bold tracking-tight text-primary',
      }"
      :links="[
        {
          label: 'En savoir plus sur nos alarmes radio',
          color: 'primary',
          trailingIcon: 'material-symbols:detector-alarm-outline',
          size: 'sm',
          click: openModalRadio,
          variant: 'outline',
        },
      ]"
    >
      <NuxtImg
        src="/services/Femme_Controlant_Son_Alarme_Radio.jpg"
        class="w-full rounded-md"
        draggable="false"
      />

      <template #description>
        L’alarme sans fil, ou alarme radio, est un système composé de différents
        éléments communiquants avec une centrale d’alarme sans fil, par ondes
        radio. Chaque élément (alarmes, détecteurs, caméras) peut être placé
        d’une manière à optimiser ses performances.
        <br />
        <br />
        La communication entre les parties du système est réalisée soit par
        Wi-Fi, soit via le réseau de téléphonie mobile. Si l’alarme se
        déclenche, le propriétaire reçoit une alerte et peut consulter les
        images des caméras sur tout appareil connecté à internet. Il peut ainsi
        prévenir ou non la police et/ou les secours.
      </template>
    </ULandingSection>
    <div>
      <USlideover v-model="isOpenRadio">
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
              <div class="flex items-center gap-2">
                <NuxtImg
                  src="/services/alarm.png"
                  draggable="false"
                  class="w-12 h-12"
                />
                <h3
                  class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  Alarme Radio
                </h3>
              </div>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpenRadio = false"
              />
            </div>
          </template>

          <div>
            Il existe un large choix de détecteurs que l’on peut coupler avec
            les alarmes sans fil.
            <br />En complément des détecteurs de mouvement ou intrusion,
            l’alarme radio permet d’ajouter des capteurs plus spécifiques tel
            que des détecteurs de bris de vitre par exemple.
            <br />
            <br />
            Certains modèles permettent de paramétrer différents types de
            sonneries afin de faciliter l’identification de la cause du
            déclenchement de l’alarme.
            <br />
            <br />
            Il existe plusieurs modèles d’alarmes sur le marché. Le modèle GSM
            nécessite une carte SIM à introduire dans le transmetteur GSM.
            <br />
            Ce système permet de recevoir les alertes directement sur le
            téléphone sous la forme de messages vocaux ou de SMS.

            <br />
            <br />

            L’alarme IP, quant à elle, repose sur Internet. Les alertes sont
            données par l’envoi d’un email.
          </div>
        </UCard>
      </USlideover>
    </div>
  </div>

  <UCard
    :ui="{
      strategy: 'override',
      background: '',
      divide: '',
      shadow: '',
      header: {
        base: '',
        background: '',
        padding: 'px-4 py-12 sm:px-6', // Réduction maximale du padding du header
      },
      body: {
        base: '',
        background: '',
        padding: 'px-4 py-0 sm:p-2', // Suppression presque totale du padding body
      },
    }"
    class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10"
  >
    <template #header>
      <div class="flex items-center justify-center text-center w-full">
        <p class="text-sm text-primary tracking-tight relative mb-2">
          Pourquoi choisir entre filaire ou sans-fil ?
        </p>
      </div>
      <div class="flex items-center justify-center text-center w-full">
        <p class="text-2xl sm:text-4xl font-bold tracking-tight relative mb-2">
          Optez pour la solution hybride !
          <span
            class="absolute left-1/2 bottom-[-12px] w-1/2 h-1 bg-primary -translate-x-1/2"
          ></span>
        </p>
      </div>
    </template>

    <ULandingSection
      align="left"
      :ui="{
        strategy: 'override',
        description: 'text-base',
        title: 'text-4xl font-bold tracking-tight text-primary',
        wrapper: 'py-10',
      }"
    >
      <NuxtImg
        src="/services/Garde_De_Sécurité_Surveillant_Un_Local.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        draggable="false"
      />

      <template #description>
        Surveillez votre local en toute sécurité grâce au système d’alarme
        hybride. Ce système permet d’assurer la surveillance sans interruption.
        Le système d’alarme hybride, ou mixte, combine les avantages du système
        d’alarme filaire et les ceux du système sans fil. Ils sont munis d’un
        système autonome provisoire qui prendra le relais si une coupure de
        courant survient.
        <br />
        <br />
        Les systèmes d’alarmes hybrides sont flexibles sur le choix des
        communications. De la communication qui se connecte au Réseau
        Téléphonique Commuté à la communication 3G, les alarmes mixtes laissent
        un large choix de communication. De plus, ils offrent une large gamme
        d’accessoires et de détecteurs en filaire mais aussi sans fil.
      </template>
    </ULandingSection>
  </UCard>
  <ULandingSection
    title="Nos systèmes d'alarme"
    :ui="{
      strategy: 'override',
      title:
        'text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl',
    }"
  >
    <div class="overflow-hidden">
      <UCarousel
        :items="items"
        :ui="{
          item: 'basis-full',
          container: 'rounded-lg',
          indicators: {
            wrapper: 'relative bottom-0 mt-4',
          },
        }"
        :prev-button="{
          color: 'primary',
          icon: 'i-heroicons-arrow-left-20-solid',
          class: '-start-24',
        }"
        :next-button="{
          color: 'primary',
          icon: 'i-heroicons-arrow-right-20-solid',
          class: '-end-24',
        }"
        arrows
        indicators
        class="w-full max-w-md mx-auto"
      >
        <template #default="{ item }">
          <NuxtImg :src="item" class="w-full" draggable="false" />
        </template>
        <template #indicator="{ onClick, page, active }">
          <UButton
            :label="String(page)"
            :variant="active ? 'solid' : 'outline'"
            size="2xs"
            class="rounded-full min-w-6 justify-center mt-5"
            color="primary"
            @click="onClick(page)"
          />
        </template>
      </UCarousel>
    </div>
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
