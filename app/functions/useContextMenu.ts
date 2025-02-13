import { ref, unref, nextTick } from "vue";
import { useMouse, useWindowScroll } from "@vueuse/core";
import { useRouter } from "vue-router";

export function useContextMenu() {
  const router = useRouter();
  const { x, y } = useMouse();
  const { y: windowY } = useWindowScroll();

  const isOpen = ref(false);
  const virtualElement = ref({ getBoundingClientRect: () => ({}) });

  const isSelectionActive = ref(false);
  const isInInput = ref(false);
  const selectedText = ref("");
  const currentInput = ref<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const actions = ref([]);

  function isInContactSection(event: MouseEvent) {
    const contactSection = document.querySelector("#contact");
    return contactSection ? contactSection.contains(event.target as Node) : false;
  }

  function detectContext(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      isInInput.value = true;
      currentInput.value = target as HTMLInputElement | HTMLTextAreaElement;
      isSelectionActive.value = false;
    } else {
      isInInput.value = false;
      currentInput.value = null;

      const selection = window.getSelection()?.toString();
      if (selection && selection.length > 0) {
        selectedText.value = selection;
        isSelectionActive.value = true;
      } else {
        isSelectionActive.value = false;
      }
    }
    updateActions(isInContactSection(event));
  }

  function onContextMenu(event: MouseEvent) {
    event.preventDefault();
    detectContext(event);

    const top = unref(y) - unref(windowY);
    const left = unref(x);

    virtualElement.value.getBoundingClientRect = () => ({
      width: 0,
      height: 0,
      top,
      left,
    });

    isOpen.value = true;
  }

  async function copyToClipboard() {
    if (selectedText.value) {
      await navigator.clipboard.writeText(selectedText.value);
      isOpen.value = false;
    }
  }

  async function pasteFromClipboard() {
    if (isInInput.value && currentInput.value) {
      const clipboardText = await navigator.clipboard.readText();
      currentInput.value.value += clipboardText;
      isOpen.value = false;
    }
  }

  function updateActions(isInContact: boolean) {
    const dynamicActions = [];

    if (isSelectionActive.value) {
      dynamicActions.push({
        label: "Copy",
        icon: "carbon:copy",
        onClick: copyToClipboard,
      });
    }

    if (isInInput.value) {
      dynamicActions.push({
        label: "Paste",
        icon: "material-symbols:content-paste",
        onClick: pasteFromClipboard,
      });
    }

    actions.value = [
      ...dynamicActions,
      {
        label: "Call us",
        icon: "carbon:phone",
        onClick: () => {
          window.location.href = "tel:+33468877291";
          isOpen.value = false;
        },
      },
      ...(isInContact
        ? []
        : [
            {
              label: "Contact us",
              icon: "material-symbols:mail-outline",
              onClick: async () => {
                if (!document.querySelector("#contact")) {
                  await router.push("/"); // Naviguer d'abord vers l'accueil
                  await nextTick(); // Attendre la mise à jour du DOM
                  setTimeout(() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                } else {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }
                isOpen.value = false;
              },
            },
          ]),
    ];
  }

  return { isOpen, virtualElement, onContextMenu, actions };
}
