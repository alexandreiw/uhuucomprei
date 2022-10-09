/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50
        ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== BENEFITS ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".benefits__accordion-item");

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".benefits__accordion-header");

    accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector(".benefits__accordion-content");

    if (item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
    }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL WHATSAPP ===============*/
function scrollTop() {
    const scrollTop = document.getElementById("whatsapp");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 2000) scrollTop.classList.add("show-whatsapp");
    else scrollTop.classList.remove("show-whatsapp");
}
window.addEventListener("scroll", scrollTop);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 2500,
    delay: 400,
    //reset: true,
});

sr.reveal(`.home__img`, { distance: "120px" });
sr.reveal(`.home__title`, { delay: 1000 });
sr.reveal(`.home__description`, { delay: 1200 });
sr.reveal(`.home__button`, { delay: 1400 });
sr.reveal(`.home__social div`, { origin: "right", interval: 200, delay: 1600 });
sr.reveal(`.home__footer`, { delay: 1800 });

sr.reveal(`.about__img, .benefits__img`, { origin: "left" });

sr.reveal(
    `.about__title, 
     .about__description, 
     .about__details-description,
     .benefits__data,
     .benefits__accordion-item`,
    { origin: "right", interval: 200 }
);

sr.reveal(
    `.steps__title, 
     .steps__card, 
     .footer__aboutUs, 
     .footer__quickLinks, 
     .footer__contact`,
    { interval: 200 }
);
