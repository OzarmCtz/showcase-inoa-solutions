import { ref, unref } from "vue";
import { useMouse, useWindowScroll } from "@vueuse/core";

export function useContextMenu() {
  // Mouse coordinates
  const { x, y } = useMouse();
  const { y: windowY } = useWindowScroll();

  // Context menu state
  const isOpen = ref(false);
  const virtualElement = ref({ getBoundingClientRect: () => ({}) });

  // States for copy/paste actions
  const isSelectionActive = ref(false);
  const isInInput = ref(false);
  const selectedText = ref("");
  const currentInput = ref<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // Context menu actions
  const actions = ref([]);

  // Checks if the right-click is within the #contact section
  function isInContactSection(event: MouseEvent) {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      return contactSection.contains(event.target as Node);
    }
    return false;
  }

  // Checks the context on right-click
  function detectContext(event: MouseEvent) {
    // Checks if the target is an input or textarea
    const target = event.target as HTMLElement;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      isInInput.value = true;
      currentInput.value = target as HTMLInputElement | HTMLTextAreaElement;
      isSelectionActive.value = false; // Priority to "Paste" in inputs
    } else {
      isInInput.value = false;
      currentInput.value = null;

      // Checks if text is selected
      const selection = window.getSelection()?.toString();
      if (selection && selection.length > 0) {
        selectedText.value = selection;
        isSelectionActive.value = true;
      } else {
        isSelectionActive.value = false;
      }
    }

    // Updates dynamic actions
    updateActions(isInContactSection(event));
  }

  // Handles opening the context menu
  function onContextMenu(event: MouseEvent) {
    event.preventDefault(); // Blocks the native context menu
    detectContext(event); // Checks the current context

    // Positions the menu
    const top = unref(y) - unref(windowY);
    const left = unref(x);

    virtualElement.value.getBoundingClientRect = () => ({
      width: 0,
      height: 0,
      top,
      left,
    });

    isOpen.value = true; // Opens the menu
  }

  // Action to copy selected text
  async function copyToClipboard() {
    if (selectedText.value) {
      await navigator.clipboard.writeText(selectedText.value);
      isOpen.value = false; // Closes the menu after the action
    }
  }

  // Action to paste text into the active input
  async function pasteFromClipboard() {
    if (isInInput.value && currentInput.value) {
      const clipboardText = await navigator.clipboard.readText();
      currentInput.value.value += clipboardText;
      isOpen.value = false; // Closes the menu after the action
    }
  }

  // Updates dynamic actions
  function updateActions(isInContact: boolean) {
    const dynamicActions = [];

    // Adds the "Copy" button if text is selected (outside input)
    if (isSelectionActive.value) {
      dynamicActions.push({
        label: "Copy",
        icon: "carbon:copy",
        onClick: copyToClipboard,
      });
    }

    // Adds the "Paste" button if in an input/textarea
    if (isInInput.value) {
      dynamicActions.push({
        label: "Paste",
        icon: "material-symbols:content-paste",
        onClick: pasteFromClipboard,
      });
    }

    // Adds fixed actions
    actions.value = [
      ...dynamicActions,
      {
        label: "Call us",
        icon: "carbon:phone",
        onClick: () => {
          window.location.href = "tel:+33468877291";
          isOpen.value = false; // Closes the menu after the action
        },
      },
      // Adds "Contact us" only if the click is not in the #contact section
      ...(isInContact
        ? []
        : [
            {
              label: "Contact us",
              icon: "material-symbols:mail-outline",
              onClick: () => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                isOpen.value = false; // Closes the menu after the action
              },
            },
          ]),
    ];
  }

  return { isOpen, virtualElement, onContextMenu, actions };
}
