/***
 * shrink nav on scroll.
 * When the user scrolls down 50px from the top of the document, resize the nav's font size
*/
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const nav = document.querySelector("nav")
    if (window.innerWidth > 768) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            nav.style.fontSize = "1rem";
            nav.style.max_height = "51px";

        } else {
            nav.style.fontSize = "2em";
            nav.style.max_height = "86px";
        }
    }
}
// 5. Add the Toggle Functionality with JavaScript

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector("span").innerHTML = "&#xe5d2;";
    } else {
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("span").innerHTML = "&#xe5cd;";
    }
}
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);
