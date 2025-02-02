/**
 * Global handler to intercept clicks on links with specific hashes
 */
export function useHandleNavClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  // Finds a link whose href attribute starts with "#"
  const hashLink = target.closest('a[href^="#"]');
  if (hashLink) {
    const hash = hashLink.getAttribute("href");
    // You can add additional cases here if needed
    if (hash === "#contact" || hash === "#services" || hash === "#faq") {
      event.preventDefault();
      const targetElement = document.querySelector(hash);
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
  }
}
