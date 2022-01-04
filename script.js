const burger = document.querySelector(".burger");
const burgerDiv = document.querySelectorAll(".burger div");
const nav = document.querySelector(".ul-links");
const links = document.querySelectorAll(".ul-links li");

const navUL = document.querySelector("nav ul");

burger.addEventListener("click", function () {
  nav.classList.toggle("navActive");

  links.forEach((link, index) => {
    // daca animatia deja este afisata, are ceva in ea, deci ii true
    // la click cand ii true , se va goli
    if (link.style.animation) {
      link.style.animation = ``;
      burgerDiv.forEach((div) => {
        div.style.backgroundColor = "black";
      });
      navUL.style.transition = "transform 0.5s ease-in";
      
    } else {
      //   aleg numele animatiei (keyframes care este: navLinkli)
      link.style.animation = ` navLinkli 0.5s ease forwards ${index / 7.2}s`;
      burgerDiv.forEach((div) => {
        div.style.backgroundColor = "white";
      });

      navUL.style.transition = "transform 0.5s ease-in";
      
    }
  });

  //   adaugam clasa pe li din burger
  burger.classList.toggle("toggle");
});
