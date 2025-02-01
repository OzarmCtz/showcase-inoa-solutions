import { reactive, computed, watch } from "vue";
import { boolean, object, string, type InferType } from "yup";

export function useContactForm() {
  // Définition du schéma Yup pour la validation
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

  // État réactif pour les données du formulaire
  const state = reactive<Schema>({
    name: "",
    email: "",
    subject: "",
    message: "",
    data_accept: false,
  });

  // Validation des champs individuels
  const errors = reactive<Record<string, string | null>>({
    name: null,
    email: null,
    subject: null,
    message: null,
    data_accept: null,
  });

  // Validation complète du formulaire
  const isValid = computed(() => {
    try {
      schema.validateSync(state, { abortEarly: true });
      return true;
    } catch {
      return false;
    }
  });

  // Watch pour mettre à jour les erreurs lors des modifications
  watch(
    state,
    () => {
      try {
        schema.validateSync(state, { abortEarly: false });
        // Si la validation réussit, efface toutes les erreurs
        Object.keys(errors).forEach((key) => {
          errors[key] = null;
        });
      } catch (validationError: any) {
        // Si la validation échoue, met à jour les erreurs
        const validationErrors = validationError.inner;
        Object.keys(errors).forEach((key) => {
          const error = validationErrors.find((e: any) => e.path === key);
          errors[key] = error ? error.message : null;
        });
      }
    },
    { deep: true } // Observe les changements dans les champs imbriqués
  );

  const isLoading = ref(false);
  const toast = useToast();

  const modalSendingError = ref(false);


  // Gestionnaire d'envoi du formulaire
  async function onSubmit(event: any) {
    event.preventDefault();

    isLoading.value = true;

    var fakeResponseApi = true;

    if(fakeResponseApi){
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
           icon: "i-heroicons-check-circle"
        });
      }, 2000);
    }else {
      setTimeout(() => {
        isLoading.value = false;
        modalSendingError.value = true;
      }, 2000);
    }



  }

  return { schema, state, isValid, isLoading , modalSendingError , onSubmit };
}
