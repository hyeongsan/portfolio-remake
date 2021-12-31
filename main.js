"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

const navbarmenu = document.querySelector(".navbar__menu");
navbarmenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  scrollIntoView(link);

  console.log(link);
  console.log(scrollTo);
});

// const home = document.querySelector("#home");
// const homeheight = home.getBoundingClientRect().height;
// document.addEventListener("scroll", () => {
//   home.style.opacity = 1 - window.scrollY / homeheight;
// });

// const arrowUp = document.querySelector(".arrow-up");
// document.addEventListener("scroll", () => {
//   if (window.scrollY > homeheight / 2) {
//     arrowUp.classList.add("visible");
//   } else {
//     arrowUp.classList.remove("visible");
//   }
// });

// arrowUp.addEventListener("click", () => {
//   scrollIntoView("#home");
// });

// const homeContactBtn = document.querySelector(".home__contact");
// homeContactBtn.addEventListener("click", () => {
//   scrollIntoView("#contact");
// });

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
}

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  projectContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});
