// JavaScript for sticky navigation bar while scrolling
window.onscroll = function() {stickyNav()};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}
