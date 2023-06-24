/*=============== SHOW MENU ===============*/
let menuBtn = document.querySelector("header button");
let headMenu = document.querySelector("header ul");

menuBtn.addEventListener("click", () => {
  if (headMenu.style.top == "calc(100% - 1px)") {
    headMenu.style.top = "-100vh";
    header.classList.remove("blur-header");
  } else {
    headMenu.style.top = "calc(100% - 1px)";
    header.classList.add("blur-header");
  }
});

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      try {
        sectionsClass.classList.add("active-link");
      } catch (e) {}
    } else {
      try {
        sectionsClass.classList.remove("active-link");
      } catch (e) {}
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // rest: true // Animations repeat
});

sr.reveal(".home .container > p");
sr.reveal(".home .container > a");
sr.reveal(".home .container > h1");
sr.reveal(".explore .text, .explore__profile");
sr.reveal(".home .card", { delay: 600, distance: "100px", interval: 100 });

sr.reveal(".about .text, .join__image", { origin: "left" });
sr.reveal(".about .image, .join .text", { origin: "right" });

sr.reveal(".popular .card", { interval: 200 });
