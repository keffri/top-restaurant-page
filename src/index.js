import home from "./modules/home";
import menu from "./modules/menu";

const content = document.getElementById("content");

function createButtons() {
  const homeButton = document.getElementById("home");
  homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    home();
    createButtons();
  });

  const menuButton = document.getElementById("menu");
  menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    menu();
    createButtons();
  });

  const infoButton = document.getElementById("info");
  infoButton.addEventListener("click", () => {
    content.innerHTML = "";
    info();
    createButtons();
  });
}

function init() {
  home();
  createButtons();
}

init();
