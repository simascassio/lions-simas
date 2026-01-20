document.addEventListener("DOMContentLoaded", () => {
  const visitForm = document.getElementById("visitForm");
  const modal = document.getElementById("visitModal");
  const closeBtn = document.getElementById("closeVisitModal");
  const closeX = document.getElementById("closeVisitModalX");

  if (!visitForm || !modal) return;

  let lastFocusedEl = null;

  function openModal() {
    lastFocusedEl = document.activeElement;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    setTimeout(() => closeBtn?.focus(), 0);
  }

  function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    setTimeout(() => lastFocusedEl?.focus?.(), 0);
  }

  function isOpen() {
    return modal.classList.contains("show");
  }

  visitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const required = visitForm.querySelectorAll("[required]");
    for (const field of required) {
      if (!field.value.trim()) {
        field.focus();
        return;
      }
    }

    openModal();
    visitForm.reset();
  });

  closeBtn?.addEventListener("click", closeModal);
  closeX?.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || !isOpen()) return;

    const focusables = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
});
