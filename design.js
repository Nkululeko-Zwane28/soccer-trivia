/* Safe visual enhancements loaded after script.js. */
(() => {
  "use strict";

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("pointerdown", () => button.classList.add("pressed"));
    button.addEventListener("pointerup", () => button.classList.remove("pressed"));
    button.addEventListener("pointerleave", () => button.classList.remove("pressed"));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.activeElement?.blur();
    }
  });
})();
