const navbarToggler = document.querySelector(".navbar-toggler");
const menuNav = document.querySelector(".nav ul");
const navbarLinks = document.querySelectorAll(".nav ul li a");
const features = document.querySelector("#features");
const company = document.querySelector("#company");
const featuresDropDown = document.querySelector(".features-div");
const companyDropDown = document.querySelector(".company-div");

navbarToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  menuNav.classList.toggle("open");
}
navbarLinks.forEach((elem) => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if (menuNav.classList.contains("open")) {
    navbarToggler.click();
  }
}
features.addEventListener("click", displayFeatures);
function displayFeatures() {
  featuresDropDown.classList.toggle("display");
  toggleNav();
}
company.addEventListener("click", displayCompany);
function displayCompany() {
  companyDropDown.classList.toggle("display");
  toggleNav();
}
