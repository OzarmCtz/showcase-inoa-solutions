import { ref, unref } from "vue";
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

  // Vérifie si le clic droit est dans #contact
  function isInContactSection(event: MouseEvent) {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      return contactSection.contains(event.target as Node);
    }
    return false;
  }

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
    updateActions(isInContactSection(event));
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
      isOpen.value = false; // Ferme le menu après l'action
    }
  }

  // Action pour coller du texte dans l'input actif
  async function pasteFromClipboard() {
    if (isInInput.value && currentInput.value) {
      const clipboardText = await navigator.clipboard.readText();
      currentInput.value.value += clipboardText;
      isOpen.value = false; // Ferme le menu après l'action
    }
  }

  // Met à jour les actions dynamiques
  function updateActions(isInContact: boolean) {
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
        label: "Nous appeler",
        icon: "carbon:phone",
        onClick: () => {
          window.location.href = "tel:+33468877291";
          isOpen.value = false; // Ferme le menu après l'action
        },
      },
      // N'ajoute "Nous contacter" que si le clic n'est pas dans la section #contact
      ...(isInContact
        ? []
        : [
            {
              label: "Nous contacter",
              icon: "material-symbols:mail-outline",
              onClick: () => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                isOpen.value = false; // Ferme le menu après l'action
              },
            },
          ]),
    ];
  }

  return { isOpen, virtualElement, onContextMenu, actions };
}
