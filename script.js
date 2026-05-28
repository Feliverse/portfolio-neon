const header = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelectorAll("#main-navigation a");
const menuIcon = menuToggle ? menuToggle.querySelector("i") : null;

if (header && menuToggle) {
    menuToggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("menu-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
        if (menuIcon) {
            menuIcon.classList.toggle("fa-bars", !isOpen);
            menuIcon.classList.toggle("fa-xmark", isOpen);
        }
    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 720) {
                header.classList.remove("menu-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");
                if (menuIcon) {
                    menuIcon.classList.add("fa-bars");
                    menuIcon.classList.remove("fa-xmark");
                }
            }
        });
    });
}