/**
 * Gestionnaire global pour intercepter les clics sur les liens avec des hash spécifiques
 */
export function useHandleNavClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Recherche un lien dont l'attribut href commence par "#"
    const hashLink = target.closest('a[href^="#"]');
    if (hashLink) {
      const hash = hashLink.getAttribute("href");
      // Vous pouvez ajouter ici d'autres cas si nécessaire
      if (hash === "#contact" || hash === "#services" || hash === "#faq") {
        event.preventDefault();
        const targetElement = document.querySelector(hash);
        targetElement?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }