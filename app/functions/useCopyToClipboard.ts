import { reactive } from "vue";

export function useCopyToClipboard() {
  // State to track copied status for address, email, and phone
  const copiedState = reactive({
    address: false,
    email: false,
    phone: false,
  });

  // Function to copy text to clipboard
  function copyToClipboard(type: keyof typeof copiedState, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      copiedState[type] = true;
      setTimeout(() => {
        copiedState[type] = false; // Resets the state after 2 seconds
      }, 2000);
    });
  }

  return { copiedState, copyToClipboard };
}
