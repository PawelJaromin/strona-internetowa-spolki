const form = document.querySelector(".contact-form");
const status = document.querySelector(".form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Dziekujemy. Formularz jest gotowy do podpiecia pod backend.";
  form.reset();
});
