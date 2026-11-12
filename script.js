// Navigation mobile et retour de démonstration du formulaire.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const registrationForm = document.querySelector("#registration-form");
if (registrationForm) {
  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.querySelector("#form-feedback");
    feedback.textContent = "Merci ! Le formulaire de démonstration a été vérifié dans votre navigateur. Aucune donnée n'a été envoyée ni enregistrée.";
    registrationForm.reset();
  });
}
