/**********
 * September 2022
 * Javascript for hamburger menu
 * Following this tutorial:
 * https://www.youtube.com/watch?v=vRaAyhbbDLo
 * ********/

const hamburger = document.querySelector(".nav-hamburger");
const navMenu = document.querySelector(".nav-links");
const navBar = document.querySelector(".page-header");

// open and close collaped menu when clicked
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBar.classList.toggle("active");
})

// close menu before navigating to new page
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navBar.classList.remove("active");
}))