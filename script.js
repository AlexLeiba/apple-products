// menu mobile drop
function menuDrop() {
  const burger = document.querySelector(".burger");
  const burgerDiv = document.querySelectorAll(".burger div");
  const nav = document.querySelector(".ul-links-menu");
  const links = document.querySelectorAll(".ul-links-menu li");

  const navUL = document.querySelector(".ul-links-menu");
  burger.addEventListener("click", function () {
    nav.classList.toggle("navActive");

    links.forEach((link, index) => {
      // daca animatia deja este afisata, are ceva in ea, deci ii true.
      // la click cand este ceva in ea , se va goli.
      if (link.style.animation) {
        link.style.animation = ``;

        burgerDiv.forEach((div) => {
          div.style.backgroundColor = "gray";
        });
        navUL.style.transition = "transform 0.5s ease-in";
      } else {
        //   alegem numele animatiei (keyframes care este: navLinkli)
        link.style.animation = ` navLinkli 0.5s ease forwards ${index / 7.2}s`;
        burgerDiv.forEach((div) => {
          div.style.backgroundColor = "red";
        });

        navUL.style.transition = "transform 0.5s ease-in";
      }
    });

    //   adaugam clasa pe li din burger
    burger.classList.toggle("toggle");
  });
}
menuDrop();

// Messenger setTimeout button and menu messenger/
const buttonMessage = document.querySelector(".button-message");
const menuMessage = document.querySelector(".menu-message");

function messenger() {
  setTimeout(() => {
    buttonMessage.style.transform = "translateY(0px)";
  }, 3000);
  setTimeout(() => {
    menuMessage.style.transform = "scale(1)";
  }, 3500);
}
messenger();

// DropDown messenger
buttonMessage.addEventListener("click", function () {
  let computedValue = getComputedStyle(menuMessage);
  let proValue = computedValue.getPropertyValue("opacity");

  if (proValue == 0) {
    menuMessage.style.transform = "scale(1)";
    menuMessage.style.opacity = 1;
  } else if (proValue == 1) {
    menuMessage.style.transform = "scale(0)";
    menuMessage.style.opacity = 0;
  }
});

// DropDown messenger on icon delete
const deleteButton = document.querySelector(".clearButton");
deleteButton.addEventListener("click", function () {
  let computedValue = getComputedStyle(menuMessage);
  let proValue = computedValue.getPropertyValue("opacity");

  if (proValue == 0) {
    menuMessage.style.transform = "scale(1)";
    menuMessage.style.opacity = 1;
  } else if (proValue == 1) {
    menuMessage.style.transform = "scale(0)";
    menuMessage.style.opacity = 0;
  }
});
