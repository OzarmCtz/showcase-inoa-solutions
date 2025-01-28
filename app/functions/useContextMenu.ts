import { ref, unref, watch } from "vue";
import { useMouse, useWindowScroll } from "@vueuse/core";

export function useContextMenu() {
  // Coordonnées de la souris
  const { x, y } = useMouse();
  const { y: windowY } = useWindowScroll();

  // État du menu contextuel
  const isOpen = ref(false);
  const virtualElement = ref({ getBoundingClientRect: () => ({}) });

  // États pour copier/coller
  const isSelectionActive = ref(false);
  const isInInput = ref(false);
  const selectedText = ref("");
  const currentInput = ref<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // Actions pour le menu contextuel
  const actions = ref([]);

  // Vérifie le contexte au clic droit
  function detectContext(event: MouseEvent) {
    // Vérifie si on est dans un input ou textarea
    const target = event.target as HTMLElement;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      isInInput.value = true;
      currentInput.value = target as HTMLInputElement | HTMLTextAreaElement;
      isSelectionActive.value = false; // Priorité à "Coller" dans les inputs
    } else {
      isInInput.value = false;
      currentInput.value = null;

      // Vérifie si du texte est sélectionné
      const selection = window.getSelection()?.toString();
      if (selection && selection.length > 0) {
        selectedText.value = selection;
        isSelectionActive.value = true;
      } else {
        isSelectionActive.value = false;
      }
    }

    // Met à jour les actions dynamiques
    updateActions();
  }

  // Gestion de l'ouverture du menu contextuel
  function onContextMenu(event: MouseEvent) {
    event.preventDefault(); // Bloque le menu contextuel natif
    detectContext(event); // Vérifie le contexte actuel

    // Positionne le menu
    const top = unref(y) - unref(windowY);
    const left = unref(x);

    virtualElement.value.getBoundingClientRect = () => ({
      width: 0,
      height: 0,
      top,
      left,
    });

    isOpen.value = true; // Ouvre le menu
  }

  // Action pour copier le texte sélectionné
  async function copyToClipboard() {
    if (selectedText.value) {
      await navigator.clipboard.writeText(selectedText.value);
      alert("Texte copié !");
    }
  }

  // Action pour coller du texte dans l'input actif
  async function pasteFromClipboard() {
    if (isInInput.value && currentInput.value) {
      const clipboardText = await navigator.clipboard.readText();
      currentInput.value.value += clipboardText;
    }
  }

  // Met à jour les actions dynamiques
  function updateActions() {
    const dynamicActions = [];

    // Ajoute le bouton "Copier" si un texte est sélectionné (hors input)
    if (isSelectionActive.value) {
      dynamicActions.push({
        label: "Copier",
        icon: "carbon:copy",
        onClick: copyToClipboard,
      });
    }

    // Ajoute le bouton "Coller" si on est dans un input/textarea
    if (isInInput.value) {
      dynamicActions.push({
        label: "Coller",
        icon: "material-symbols:content-paste",
        onClick: pasteFromClipboard,
      });
    }

    // Ajoute les actions fixes
    actions.value = [
      ...dynamicActions,
      {
        label: "Appeler",
        icon: "carbon:phone",
        onClick: () => {
          window.location.href = "tel:+33468877291";
        },
      },
      {
        label: "Nous contacter",
        icon: "material-symbols:mail-outline",
        onClick: () => {
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        },
      },
    ];
  }

  return { isOpen, virtualElement, onContextMenu, actions };
}
