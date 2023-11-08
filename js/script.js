const header = document.querySelector("header");
const social_lateral = document.querySelector(".social-lateral");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);

});
