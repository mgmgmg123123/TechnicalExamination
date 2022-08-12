import '../stylesheets/main.scss'
const eventType = window.ontouchstart ? 'touchstart' : 'click';

const hamburgerButton = document.querySelector(".header__hamburger-menu");
const header = document.querySelector(".header");
const navigation = document.querySelector(".navigation");
const hamburgerMenuText = document.querySelector(".hamburger-menu__text");

if (hamburgerButton && header && navigation && hamburgerMenuText) {
    hamburgerButton.addEventListener(eventType, () => {
        if (header.classList.contains("navigation_expanded")) {
            hamburgerMenuText.innerHTML = "menu"

        } else {
            hamburgerMenuText.innerHTML = "close"

        }
        header.classList.toggle("navigation_expanded");
        navigation.classList.toggle("navigation_expanded");

    });
}

