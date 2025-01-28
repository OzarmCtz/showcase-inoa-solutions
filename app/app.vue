<script setup lang="ts">
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  ogImage: "https://landing-template.nuxt.dev/social-card.png",
  twitterImage: "https://landing-template.nuxt.dev/social-card.png",
  twitterCard: "summary_large_image",
});

import { useContextMenu } from "@/functions/useContextMenu";
const { isOpen, virtualElement, onContextMenu, actions } = useContextMenu();

function handleContextMenu(event: MouseEvent) {
  onContextMenu(event);
}
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <!-- Contenu principal -->
  <UMain @contextmenu="handleContextMenu" class="min-h-screen">
    <NuxtPage />
  </UMain>

  <!-- Footer -->
  <AppFooter />

  <!-- Notifications -->
  <UNotifications />

  <!-- Menu contextuel -->
  <UContextMenu v-model="isOpen" :virtual-element="virtualElement">
    <div
      class="p-2 bg-gray-50 text-gray-900 shadow-lg rounded-lg border border-gray-200 dark:bg-gray-950 dark:text-white dark:border-gray-800"
    >
      <div
        v-for="action in actions"
        :key="action.label"
        @click="action.onClick"
        class="flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <!-- Icône -->
        <UIcon :name="action.icon" class="text-gray-500 dark:text-gray-40" />
        <!-- Texte -->
        <span class="text-gray-900 dark:text-gray-200">
          {{ action.label }}
        </span>
      </div>
    </div>
  </UContextMenu>
</template>
