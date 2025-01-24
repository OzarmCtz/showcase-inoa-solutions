<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
</script>

<template>
  <ULandingSection
    class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 py-10"
  >
    <UFormGroup
      size="xl"
      label="Email"
      hint="Optional"
      description="We'll only use this for spam."
      help="We will never share your email with anyone else."
    >
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
  </ULandingSection>
</template>
