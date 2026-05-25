const header = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelectorAll("#main-navigation a");

if (header && menuToggle) {
    menuToggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("menu-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 720) {
                header.classList.remove("menu-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");
            }
        });
    });
}