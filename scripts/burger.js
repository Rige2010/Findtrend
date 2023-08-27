const burgerButton = document.querySelector(".header__burger-container");
const burgerMenu = document.querySelector(".header__burger-menu");
const closeBurger = document.querySelector(".header__burger-button-default");

burgerButton.addEventListener("click", () => {
    burgerMenu.classList.toggle("header__burger-menu_active");
    closeBurger.classList.toggle("header__burger-image");
    closeBurger.classList.toggle("header__burger-image2");
    document.body.classList.toggle("lock");
});
