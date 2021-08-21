console.log("working");

// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.querySelector(".mobile-menu");

// btn.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });

document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    open: false,

    toggle() {
      this.open = !this.open;
    },
  }));
});
