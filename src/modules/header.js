function createNav(type, id) {
  const nav = document.createElement(type);
  nav.setAttribute("id", id);
  return nav;
}

function createButton(type, id, className, text) {
  const button = document.createElement(type);
  button.setAttribute("id", id);
  button.setAttribute("class", className);
  button.textContent = text;
  return button;
}

function createHeader(type, id) {
  const header = document.createElement(type);
  header.setAttribute("id", id);

  const nav = createNav("nav", "nav");

  const homeButton = createButton("button", "home", "btn", "Home");
  const menuButton = createButton("button", "menu", "btn", "Menu");
  const infoButton = createButton("button", "info", "btn", "Info");

  header.appendChild(nav);
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(infoButton);

  return header;
}

export default createHeader;
