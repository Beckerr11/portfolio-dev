const yearSlot = document.querySelector("#current-year");

if (yearSlot) {
  yearSlot.textContent = new Date().getFullYear();
}

window.requestAnimationFrame(() => {
  document.body.classList.add("is-ready");
});
