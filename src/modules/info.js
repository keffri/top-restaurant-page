import createHeader from "./header";
import createFooter from "./footer";

function createInfoContainer(type, id) {
  const infoContainer = document.createElement(type);
  infoContainer.setAttribute("id", id);
  return infoContainer;
}

function createInfoMain(type, id) {
  const infoMain = document.createElement(type);
  infoMain.setAttribute("id", id);

  const infoTitle = document.createElement("h1");
  infoTitle.setAttribute("id", "infoTitle");
  infoTitle.textContent = "Info";

  const informationContainer = document.createElement("div");
  informationContainer.setAttribute("id", "informationContainer");

  informationContainer.appendChild(
    createInfoText("p", "infoText", "Lorem ipsum dolor sit amet consectetur!")
  );
  informationContainer.appendChild(
    createInfoText("p", "infoText", "604-002-454")
  );
  informationContainer.appendChild(
    createInfoText("p", "infoText", "lorem@loremlounge.com")
  );

  infoMain.appendChild(infoTitle);
  infoMain.appendChild(informationContainer);

  return infoMain;
}

function createInfoText(type, c, text) {
  const info = document.createElement(type);
  info.classList.add(c);
  info.textContent = text;
  return info;
}

function info() {
  const contentContainer = document.getElementById("content");
  const infoContainer = createInfoContainer("div", "infoContainer");
  const header = createHeader("header", "header");
  const infoMain = createInfoMain("main", "main");
  const footer = createFooter("footer", "footer");

  infoContainer.appendChild(header);
  infoContainer.appendChild(infoMain);
  infoContainer.appendChild(footer);

  contentContainer.appendChild(infoContainer);
}

export default info;
