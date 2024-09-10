const toggleBtn = document.querySelector(".toggle-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
toggleBtn.addEventListener("click", function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars-staggered ";
});
let scrollcontainer = document.querySelector(".lst-section");
let backbtn = document.getElementById("back-btn");
let nextbtn = document.getElementById("next-btn");

backbtn.addEventListener("click", function () {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft -= 300;
});
nextbtn.addEventListener("click", function () {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft += 300;
});
