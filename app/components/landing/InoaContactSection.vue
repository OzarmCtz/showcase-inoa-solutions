<script setup lang="ts">
defineProps({
  pageData: Object,
});

import { useCopyToClipboard } from "@/functions/useCopyToClipboard";
const { copiedState, copyToClipboard } = useCopyToClipboard();

import { useContactForm } from "@/functions/useContactForm";
const { schema, state, isValid, isLoading, onSubmit, modalSendingError } =
  useContactForm();
</script>

<template>
  <ULandingSection
    :headline="pageData.contact.headline"
    :title="pageData.contact.title"
    id="contact"
    class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10"
  >
    <div
      class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
    >
      <!-- Formulaire de contact -->
      <div class="w-full">
        <div class="mb-5 flex">
          <ULink to="#faq" class="text-primary text-sm">
            <UBadge variant="outline">
              {{ pageData.contact.go_to_faq.text }}
              <UIcon
                :name="pageData.contact.go_to_faq.icon"
                class="text-primary"
              />
            </UBadge>
          </ULink>
        </div>

        <UForm :schema="schema" :state="state" @submit="onSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <UFormGroup label="Nom & Prénom" name="name" required>
              <UInput
                size="xl"
                icon="icon-park-outline:edit-name"
                v-model="state.name"
                placeholder="Nom & Prénom"
                class="bg-white dark:bg-gray-800"
              />
            </UFormGroup>

            <UFormGroup label="Email" name="email">
              <UInput
                size="xl"
                v-model="state.email"
                icon="i-heroicons-envelope"
                placeholder="Email"
                type="email"
                class="bg-white dark:bg-gray-800"
              />
            </UFormGroup>
          </div>

          <UFormGroup label="Sujet" name="subject" class="mb-6" required>
            <UInput
              size="xl"
              icon="material-symbols:subject"
              v-model="state.subject"
              placeholder="Sujet"
              class="bg-white dark:bg-gray-800"
            />
          </UFormGroup>

          <UFormGroup label="Message" name="message" class="mb-6" required>
            <UTextarea
              size="xl"
              icon="material-symbols:android-messages-outline"
              v-model="state.message"
              placeholder="Message"
              class="bg-white dark:bg-gray-800"
            />
          </UFormGroup>

          <UFormGroup name="data_accept" class="mb-6" required>
            <UCheckbox v-model="state.data_accept" required>
              <template #label>
                <span>
                  {{ pageData.contact.conditions }}
                </span>
              </template>
            </UCheckbox>
          </UFormGroup>

          <UButton
            block
            color="primary"
            label="Envoyer"
            icon="mingcute:mail-send-fill"
            class="mb-6"
            type="submit"
            :disabled="!isValid"
            :loading="isLoading"
          ></UButton>

          <div>
            <p class="text-xs text-gray-500">
              {{ pageData.contact.confidentials.text }}
              <ULink
                :to="pageData.contact.confidentials.to"
                class="text-primary hover:underline"
              >
                {{ pageData.contact.confidentials.underlined_text }}
              </ULink>
            </p>
          </div>
        </UForm>
        <UModal v-model="modalSendingError">
          <UCard
            :ui="{
              ring: '',
              divide: 'divide-y divide-gray-100 dark:divide-gray-800',
            }"
          >
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="flex items-center text-base font-semibold leading-6">
                  <UIcon
                    :name="pageData.contact.sending_failed.title"
                    class="w-5 h-5 mr-2 text-red-500"
                  />
                  {{ pageData.contact.sending_failed.title }}
                </h3>
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  class="-my-1"
                  @click="modalSendingError = false"
                />
              </div>
            </template>

            <div class="p-4">
              <p class="text-sm text-gray-700 dark:text-gray-300">
                Nous sommes désolés, une erreur est survenue lors de l'envoi de
                votre message.<br /><br />
                Pour toute demande urgente, merci de nous contacter directement
                par email à
                <span class="inline-flex items-center">
                  <a
                    href="mailto:contact@inoa-solutions.com"
                    class="text-primary-500 hover:underline"
                  >
                    {{ pageData.global.etp_infos.email }}
                  </a>
                  <span
                    class="ml-2 cursor-pointer hover:text-primary-500"
                    @click="
                      copyToClipboard('email', pageData.global.etp_infos.email)
                    "
                  >
                    <UIcon
                      :name="
                        copiedState.email
                          ? 'clarity:success-line'
                          : 'ic:baseline-copy-all'
                      "
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    />
                  </span>
                  <span
                    v-if="copiedState.email"
                    class="text-sm text-gray-500 dark:text-gray-400 ml-1"
                  >
                    Copié
                  </span> </span
                >.
                <br />
                ou par téléphone au
                <span class="inline-flex items-center">
                  <a
                    :href="'tel:' + pageData.global.etp_infos.phone"
                    class="text-primary-500 hover:underline"
                  >
                    {{ pageData.global.etp_infos.phone }}
                  </a>
                  <span
                    class="ml-2 cursor-pointer hover:text-primary-500"
                    @click="
                      copyToClipboard('phone', pageData.global.etp_infos.phone)
                    "
                  >
                    <UIcon
                      :name="
                        copiedState.phone
                          ? 'clarity:success-line'
                          : 'ic:baseline-copy-all'
                      "
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    />
                  </span>
                  <span
                    v-if="copiedState.phone"
                    class="text-sm text-gray-500 dark:text-gray-400 ml-1"
                  >
                    Copié
                  </span> </span
                >.
              </p>
            </div>
          </UCard>
        </UModal>
      </div>

      <!-- Informations de contact -->
      <div class="w-full">
        <h3 class="text-3xl font-bold text-gray-700 dark:text-gray-100 mb-6">
          Informations de contact
        </h3>

        <!-- Nous écrire -->
        <div class="mb-10">
          <h4
            class="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-2"
          >
            Nous écrire
          </h4>
          <div class="flex items-center">
            <UIcon
              name="material-symbols:mail-outline"
              class="text-primary-500 w-6 h-6 mr-4 flex-shrink-0"
            ></UIcon>
            <div class="flex items-center">
              <p class="text-sm text-gray-700 dark:text-gray-300">
                <a
                  :href="'mailto:' + pageData.global.etp_infos.email"
                  class="text-primary-500 hover:underline"
                  >{{ pageData.global.etp_infos.email }}</a
                >
              </p>
              <div
                class="flex items-center ml-1 cursor-pointer hover:text-primary-500"
                @click="
                  copyToClipboard('email', pageData.global.etp_infos.email)
                "
              >
                <UIcon
                  :name="
                    copiedState.email
                      ? 'clarity:success-line'
                      : 'ic:baseline-copy-all'
                  "
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                ></UIcon>
                <span
                  v-if="copiedState.email"
                  class="text-sm text-gray-500 dark:text-gray-400 ml-1"
                  >Copié</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Nous appeler -->
        <div class="mb-10">
          <h4
            class="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-2"
          >
            Nous appeler
          </h4>
          <div class="flex items-center">
            <UIcon
              name="carbon:phone"
              class="text-primary-500 w-6 h-6 mr-4 flex-shrink-0"
            ></UIcon>
            <div class="flex items-center">
              <p class="text-sm text-gray-700 dark:text-gray-300">
                <a
                  :href="'tel:' + pageData.global.etp_infos.phone"
                  class="text-primary-500 hover:underline"
                  >{{ pageData.global.etp_infos.phone }}</a
                >
              </p>
              <div
                class="flex items-center ml-1 cursor-pointer hover:text-primary-500"
                @click="
                  copyToClipboard('phone', pageData.global.etp_infos.phone)
                "
              >
                <UIcon
                  :name="
                    copiedState.phone
                      ? 'clarity:success-line'
                      : 'ic:baseline-copy-all'
                  "
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                ></UIcon>
                <span
                  v-if="copiedState.phone"
                  class="text-sm text-gray-500 dark:text-gray-400 ml-1"
                  >Copié</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Nous trouver -->
        <div class="mb-10">
          <h4
            class="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-2"
          >
            Nous trouver
          </h4>
          <div class="flex items-center">
            <UIcon
              name="material-symbols:location-on-outline"
              class="text-primary-500 w-6 h-6 mr-4 flex-shrink-0"
            ></UIcon>
            <div class="flex items-center">
              <p class="text-sm text-gray-700 dark:text-gray-300">
                {{ pageData.global.etp_infos.adress }}
              </p>
              <div
                class="flex items-center ml-1 cursor-pointer hover:text-primary-500"
                @click="
                  copyToClipboard('address', pageData.global.etp_infos.adress)
                "
              >
                <UIcon
                  :name="
                    copiedState.address
                      ? 'clarity:success-line'
                      : 'ic:baseline-copy-all'
                  "
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                ></UIcon>
                <span
                  v-if="copiedState.address"
                  class="text-sm text-gray-500 dark:text-gray-400 ml-1"
                  >Copié</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12">
          <div class="rounded-lg overflow-hidden shadow-lg">
            <iframe
              :src="pageData.global.etp_infos.google_maps"
              width="100%"
              height="150"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <ULandingLogos
      :ui="{
        strategy: 'override',
        wrapper: 'mt-2 text-center',
        images: 'flex flex-wrap justify-center gap-24 p-4',
      }"
      align="center"
    >
      <ULink
        :to="pageData.global.etp_infos.instagram"
        target="_blank"
        inactive-class="text-gray dark:text-gray hover:text-primary dark:hover:text-primary"
      >
        <UIcon
          name="i-simple-icons-instagram"
          class="w-10 h-10 flex-shrink-0"
        />
      </ULink>
      <ULink
        :to="pageData.global.etp_infos.linkedin"
        target="_blank"
        inactive-class="text-gray dark:text-gray hover:text-primary dark:hover:text-primary"
      >
        <UIcon name="i-simple-icons-linkedin" class="w-10 h-10 flex-shrink-0" />
      </ULink>
      <ULink
        :to="pageData.global.etp_infos.facebook"
        target="_blank"
        inactive-class="text-gray dark:text-gray hover:text-primary dark:hover:text-primary"
      >
        <UIcon name="i-simple-icons-facebook" class="w-10 h-10 flex-shrink-0" />
      </ULink>
    </ULandingLogos>
  </ULandingSection>
</template>
