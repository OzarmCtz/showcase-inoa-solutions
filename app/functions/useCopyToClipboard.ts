import { reactive } from "vue";

export function useCopyToClipboard() {
  const copiedState = reactive({
    address: false,
    email: false,
    phone: false,
  });

  function copyToClipboard(type: keyof typeof copiedState, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      copiedState[type] = true;
      setTimeout(() => {
        copiedState[type] = false; // Réinitialise l'état après 2 secondes
      }, 2000);
    });
  }

  return { copiedState, copyToClipboard };
}
