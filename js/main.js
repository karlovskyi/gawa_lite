/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // Remove menu mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

function openPopup(value) {
  console.log("Popup opened", value);

  document.getElementById("myPopup").classList.add("show");
  document.getElementsByTagName("body")[0].style.overflow = "hidden"; // Prevent scrolling
}

function closePopup() {
  document.getElementById("myPopup").classList.remove("show");
  document.getElementsByTagName("body")[0].style.overflow = "auto"; // Restore scrolling
}
