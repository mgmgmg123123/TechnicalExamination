import '../stylesheets/main.scss'
const eventType = window.ontouchstart ? 'touchstart' : 'click';

const hamburgerButton = document.querySelector<HTMLElement>(".header__hamburger-menu")!;
const header = document.querySelector<HTMLElement>(".header")!;
const navigation = document.querySelector<HTMLElement>(".navigation")!;
const hamburgerMenuText = document.querySelector<HTMLElement>(".hamburger-menu__text")!;
const bodyElement = document.querySelector<HTMLElement>("body")!;
const htmlElement = document.querySelector<HTMLElement>("html")!;


hamburgerButton.addEventListener(eventType, () => {
    if (header.classList.contains("navigation_expanded")) {
        hamburgerMenuText.innerHTML = "menu"
        hamburgerButton.setAttribute('aria-expanded', 'false');
        navigation.setAttribute('aria-hidden', 'true');
        bodyElement.classList.remove("prohibit-scrolling");
        htmlElement.classList.remove("prohibit-scrolling");

    } else {
        hamburgerMenuText.innerHTML = "close"
        hamburgerButton.setAttribute('aria-expanded', 'true');
        navigation.setAttribute('aria-hidden', 'false');
        bodyElement.classList.add("prohibit-scrolling");
        htmlElement.classList.add("prohibit-scrolling");

    }
    header.classList.toggle("navigation_expanded");
    navigation.classList.toggle("navigation_expanded");

});
const navigationPcWrapper = document.querySelector<HTMLElement>(".navigation-pc")!;
window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        navigationPcWrapper.classList.add("navigation_scrolled");
        header.classList.add("navigation_scrolled");
    } else if (window.scrollY < 100) {
        navigationPcWrapper.classList.remove("navigation_scrolled");
        header.classList.remove("navigation_scrolled");
    }
});
