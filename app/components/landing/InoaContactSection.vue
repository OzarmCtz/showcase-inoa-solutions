<script setup lang="ts">
defineProps({
  pageData: Object,
});

import { object, string, type InferType } from "yup";
import { reactive } from "vue";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  name: string().required("Le nom est requis"),
  email: string().email("Email invalide").required("L'email est requis"),
  subject: string().required("Le sujet est requis"),
  message: string().required("Le message est requis"),
});

type Schema = InferType<typeof schema>;

const state = reactive<Schema>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Logique de soumission
  console.log("Données soumises :", event.data);
}
</script>

<template>
  <ULandingSection
    headline="Vous avez une question ?"
    id="faq"
    title="Contactez-nous !"
    class="scroll-mt-[var(--header-height)]"
  >
    <div
      class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
    >
      <!-- Formulaire de contact -->
      <div class="w-full">
        <div class="mb-5">
          <a href="/faq" class="no-underline">
            <UBadge
              icon="streamline:interface-help-question-circle-circle-faq-frame-help-info-mark-more-query-question"
              label="Vous pouvez aussi consulter notre rebrique FAQ !"
              variant="outline"
            >
            </UBadge>
          </a>
        </div>
        <UForm :schema="schema" :state="state" @submit="onSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <UFormGroup label="Nom & Prénom" name="name">
              <UInput
                size="xl"
                icon="icon-park-outline:edit-name"
                v-model="state.name"
                placeholder="Nom & Prénom"
                required
              />
            </UFormGroup>

            <UFormGroup label="Email" name="email">
              <UInput
                size="xl"
                v-model="state.email"
                icon="i-heroicons-envelope"
                placeholder="Email"
                type="email"
                required
              />
            </UFormGroup>
          </div>

          <UFormGroup label="Sujet" name="subject" class="mb-6">
            <UInput
              size="xl"
              icon="material-symbols:subject"
              v-model="state.subject"
              placeholder="Sujet"
              required
            />
          </UFormGroup>

          <UFormGroup label="Message" name="message" class="mb-6">
            <UTextarea
              size="xl"
              icon="material-symbols:android-messages-outline"
              v-model="state.message"
              placeholder="Entrez votre message"
              required
            />
          </UFormGroup>

          <div class="mb-6 flex items-center">
            <UCheckbox :model-value="true" required>
              <template #label>
                <span>
                  J'accepte que mes données soient utilisées dans le cadre des
                  communications qui découleront de cet envoi.
                </span>
              </template>
            </UCheckbox>
          </div>

          <UButton
            block
            color="primary"
            label="Envoyer"
            icon="mingcute:mail-send-fill"
            class="mb-6"
          ></UButton>
          <div>
            <p class="text-xs text-gray-500">
              INOA Solutions recueille et utilise vos données personnelles pour
              assurer la gestion de vos demandes. Pour en savoir plus ou exercer
              vos droits, vous pouvez accéder à la politique de confidentialité
              via ce lien.
            </p>
          </div>
        </UForm>
      </div>

      <!-- Informations de contact -->
      <div class="w-full">
        <h3 class="text-3xl font-bold mb-12 text-gray-100">
          Informations de contact
        </h3>

        <div class="mb-10 flex items-center">
          <UIcon
            name="material-symbols:location-on"
            class="text-primary-500 w-6 h-6 mr-4 flex-shrink-0"
          ></UIcon>
          <div>
            <h4 class="text-sm font-semibold text-gray-100">Nous trouver</h4>
            <p class="text-xl text-gray-300">
              Rue Gaïa Tecnosud 2 66100 PERPIGNAN
            </p>
          </div>
        </div>

        <div class="mb-10 flex items-center">
          <UIcon
            name="mingcute:mail-fill"
            class="text-primary-500 w-6 h-6 mr-4 flex-shrink-0"
          ></UIcon>
          <div>
            <h4 class="text-sm font-semibold text-gray-100">Nous écrire</h4>
            <p class="text-xl">
              <a
                href="mailto:contact@inoa-solutions.com"
                class="text-primary-500 hover:underline"
                >contact@inoa-solutions.com</a
              >
            </p>
          </div>
        </div>

        <div class="flex items-center">
          <UIcon
            name="carbon:phone"
            class="text-primary-500 w-6 h-6 mr-4 flex-shrink-0"
          ></UIcon>
          <div>
            <h4 class="text-sm font-semibold text-gray-100">Nous joindre</h4>
            <p class="text-xl">
              <a
                href="tel:+33468877291"
                class="text-primary-500 hover:underline"
                >04 68 87 72 91</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </ULandingSection>
</template>
