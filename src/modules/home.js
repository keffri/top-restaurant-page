import createHeader from "./header";
import createFooter from "./footer";

function createHomeContainer(type, id) {
  const homeContainer = document.createElement(type);
  homeContainer.setAttribute("id", id);
  return homeContainer;
}

function createHomeMain(type, id) {
  const homeMain = document.createElement(type);
  homeMain.setAttribute("id", id);

  const homeTitle = document.createElement("h1");
  homeTitle.setAttribute("id", "homeTitle");
  homeTitle.textContent = "Lorem Lounge";

  const homeText = document.createElement("p");
  homeText.setAttribute("id", "homeText");
  homeText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo sequi, porro nemo, quam fugiat magnam nisi quae itaque consequuntur aliquid provident aperiam temporibus velit officia assumenda, est accusamus illo!";

  homeMain.appendChild(homeTitle);
  homeMain.appendChild(homeText);

  return homeMain;
}

function home() {
  const contentContainer = document.getElementById("content");
  const homeContainer = createHomeContainer("div", "homeContainer");
  const header = createHeader("header", "header");
  const homeMain = createHomeMain("main", "homeMain");
  const footer = createFooter("footer", "footer");

  homeContainer.appendChild(header);
  homeContainer.appendChild(homeMain);
  homeContainer.appendChild(footer);

  contentContainer.appendChild(homeContainer);
}

export default home;
