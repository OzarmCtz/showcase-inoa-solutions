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
    id="faq"
    title="Vous avez une question ?"
    description="Contactez-nous !"
    class="scroll-mt-[var(--header-height)]"
  >
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Formulaire de contact -->
      <div class="rounded-lg shadow-lg w-full">
        <UForm :schema="schema" :state="state" @submit="onSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <UFormGroup label="Nom & Prénom" name="name">
              <UInput
                size="xl"
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
              v-model="state.subject"
              placeholder="Sujet"
              required
            />
          </UFormGroup>

          <UFormGroup label="Message" name="message" class="mb-6">
            <UTextarea
              size="xl"
              v-model="state.message"
              placeholder="Entrez votre message"
              required
            />
          </UFormGroup>

          <div class="mb-6 flex items-center">
            <input type="checkbox" id="consent" class="mr-2" required />
            <label
              for="consent"
              class="text-sm text-gray-700 dark:text-gray-300"
            >
              J'accepte que mes données soient utilisées dans le cadre des
              communications qui découleront de cet envoi.
            </label>
          </div>

          <UButton
            block
            color="primary"
            label="Envoyer"
            icon="i-heroicons-pencil-square"
          ></UButton>
        </UForm>
      </div>

      <!-- Informations de contact -->
      <div class="text-gray-700 dark:text-gray-300 text-lg">
        <h3 class="text-2xl font-bold mb-6">Informations de contact</h3>
        <div class="mb-6">
          <h4 class="text-xl font-semibold mb-2">Nous trouver</h4>
          <p>Rue Gaïa Tecnosud 2<br />66100 PERPIGNAN</p>
        </div>

        <div class="mb-6">
          <h4 class="text-xl font-semibold mb-2">Nous écrire</h4>
          <p>
            <a
              href="mailto:contact@inoa-solutions.com"
              class="text-primary-500 hover:underline"
              >contact@inoa-solutions.com</a
            >
          </p>
        </div>

        <div>
          <h4 class="text-xl font-semibold mb-2">Nous joindre</h4>
          <p>
            <a href="tel:+33468877291" class="text-primary-500 hover:underline"
              >04 68 87 72 91</a
            >
          </p>
        </div>
      </div>
    </div>
  </ULandingSection>
</template>
