// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav_list a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav_list a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ACTIVE LINK NAVBAR MENU
// const navLink = document.querySelectorAll(".nav_link");

// function activeLink() {
//   navLink.forEach((item) => item.classList.remove("active-link"));
//   this.classList.add("active-link");
// }

// navLink.forEach((item) => item.addEventListener("click", activeLink));
