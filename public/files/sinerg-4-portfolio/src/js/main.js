
// .........................ВАЖНО......................
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menubtn");
    const navbar = document.querySelector("#navbarNav");
    const menuLinks = document.querySelectorAll(".navbar-nav a");

    // видимость меню
    function toggleMenu() {
        navbar.classList.toggle("menu-visible");
        menuButton.classList.toggle("menu-expanded");
    }

    // клик (открыть/закрыть) по кнопке
    menuButton.addEventListener("click", toggleMenu);

    // закрытие меню при клике на ссылку
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("menu-visible");
            menuButton.classList.remove("menu-expanded");
        });
    });
});
