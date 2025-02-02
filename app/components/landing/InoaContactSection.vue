<script setup lang="ts">
import { useCopyToClipboard } from "@/functions/useCopyToClipboard";
const { copiedState, copyToClipboard } = useCopyToClipboard();

import { useContactForm } from "@/functions/useContactForm";
const { schema, state, isValid, isLoading, onSubmit, modalSendingError } =
  useContactForm();
</script>

<template>
  <ULandingSection
    headline="Vous avez une question ?"
    title="Contactez-nous !"
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
              Vous pouvez aussi consulter notre rubrique F.A.Q
              <UIcon
                name="streamline:interface-help-question-circle-circle-faq-frame-help-info-mark-more-query-question"
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
                  J'accepte que mes données soient utilisées dans le cadre des
                  communications qui découleront de cet envoi.
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
              INOA Solutions recueille et utilise vos données personnelles pour
              assurer la gestion de vos demandes. Pour en savoir plus ou exercer
              vos droits, vous pouvez accéder à la
              <ULink
                to="/politique-de-confidentialite"
                class="text-primary hover:underline"
              >
                politique de confidentialité via ce lien.
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
                    name="material-symbols:cancel-outline"
                    class="w-5 h-5 mr-2 text-red-500"
                  />
                  Erreur d'envoi
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
                    contact@inoa-solutions.com
                  </a>
                  <span
                    class="ml-2 cursor-pointer hover:text-primary-500"
                    @click="
                      copyToClipboard('email', 'contact@inoa-solutions.com')
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
                    href="tel:+33468877291"
                    class="text-primary-500 hover:underline"
                  >
                    04 68 87 72 91
                  </a>
                  <span
                    class="ml-2 cursor-pointer hover:text-primary-500"
                    @click="copyToClipboard('phone', '04 68 87 72 91')"
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
                  href="mailto:contact@inoa-solutions.com"
                  class="text-primary-500 hover:underline"
                  >contact@inoa-solutions.com</a
                >
              </p>
              <div
                class="flex items-center ml-1 cursor-pointer hover:text-primary-500"
                @click="copyToClipboard('email', 'contact@inoa-solutions.com')"
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
                  href="tel:+33468877291"
                  class="text-primary-500 hover:underline"
                  >04 68 87 72 91</a
                >
              </p>
              <div
                class="flex items-center ml-1 cursor-pointer hover:text-primary-500"
                @click="copyToClipboard('phone', '04 68 87 72 91')"
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
                Rue Gaïa Tecnosud 2 66100 PERPIGNAN
              </p>
              <div
                class="flex items-center ml-1 cursor-pointer hover:text-primary-500"
                @click="
                  copyToClipboard(
                    'address',
                    'Rue Gaïa Tecnosud 2 66100 PERPIGNAN'
                  )
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.297164681281!2d2.9093875159041745!3d42.6712850791685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b051994751231d%3A0x41dbe6f55db6d29a!2s338%20Rue%20Ga%C3%AFa%2C%2066000%20Perpignan!5e0!3m2!1sfr!2sfr!4v1616179622333!5m2!1sfr!2sfr"
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
        to="https://www.instagram.com/inoa_solutions/"
        target="_blank"
        inactive-class="text-gray dark:text-gray hover:text-primary dark:hover:text-primary"
      >
        <UIcon
          name="i-simple-icons-instagram"
          class="w-10 h-10 flex-shrink-0"
        />
      </ULink>
      <ULink
        to="https://fr.linkedin.com/company/inoa-solutions-alarme-videoprotection"
        target="_blank"
        inactive-class="text-gray dark:text-gray hover:text-primary dark:hover:text-primary"
      >
        <UIcon name="i-simple-icons-linkedin" class="w-10 h-10 flex-shrink-0" />
      </ULink>
      <ULink
        to="https://www.facebook.com/inoasolution"
        target="_blank"
        inactive-class="text-gray dark:text-gray hover:text-primary dark:hover:text-primary"
      >
        <UIcon name="i-simple-icons-facebook" class="w-10 h-10 flex-shrink-0" />
      </ULink>
    </ULandingLogos>
  </ULandingSection>
</template>
