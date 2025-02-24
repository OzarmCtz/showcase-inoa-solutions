import { reactive, computed, watch } from "vue";
import { boolean, object, string, type InferType } from "yup";

export function useContactForm() {
  // Validation schema for the form
  const schema = object({
    name: string()
      .min(3, "Le champ Nom & Prénom doit contenir au moins 3 caractères")
      .required("Le champ Nom & Prénom est requis"),
    email: string()
      .email("L'email est invalide")
      .required("L'email est requis"),
    subject: string()
      .min(3, "Le champ sujet doit contenir au moins 3 caractères")
      .required("Le champ sujet est requis"),
    message: string()
      .min(3, "Le champ message doit contenir au moins 3 caractères")
      .required("Le champ message est requis"),
    data_accept: boolean().oneOf([true], "Vous devez accepter les conditions."),
  });

  type Schema = InferType<typeof schema>;

  // State for the form fields
  const state = reactive<Schema>({
    name: "",
    email: "",
    subject: "",
    message: "",
    data_accept: false,
  });

  // State for form errors
  const errors = reactive<Record<string, string | null>>({
    name: null,
    email: null,
    subject: null,
    message: null,
    data_accept: null,
  });

  // Computed property to check if the form is valid
  const isValid = computed(() => {
    try {
      schema.validateSync(state, { abortEarly: true });
      return true;
    } catch {
      return false;
    }
  });

  // Watch for changes in the state and validate the form
  watch(
    state,
    () => {
      try {
        schema.validateSync(state, { abortEarly: false });
        // If validation passes, clear all errors
        Object.keys(errors).forEach((key) => {
          errors[key] = null;
        });
      } catch (validationError: any) {
        // If validation fails, update errors
        const validationErrors = validationError.inner;
        Object.keys(errors).forEach((key) => {
          const error = validationErrors.find((e: any) => e.path === key);
          errors[key] = error ? error.message : null;
        });
      }
    },
    { deep: true }
  );

  const isLoading = ref(false);
  const toast = useToast();

  const modalSendingError = ref(false);

  // Function to handle form submission
  async function onSubmit(event: any) {
    event.preventDefault();

    isLoading.value = true;

    var fakeResponseApi = true;

    if (fakeResponseApi) {
      setTimeout(() => {
        isLoading.value = false;
        state.name = "";
        state.email = "";
        state.subject = "";
        state.message = "";
        state.data_accept = false;
        toast.add({
          title: "Message envoyé !",
          description: "Nous vous répondron dans un délai de 48h.",
          icon: "i-heroicons-check-circle",
        });
      }, 2000);
    } else {
      setTimeout(() => {
        isLoading.value = false;
        modalSendingError.value = true;
      }, 2000);
    }
  }

  return { schema, state, isValid, isLoading, modalSendingError, onSubmit };
}
