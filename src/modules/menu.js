import createHeader from "./header";
import createFooter from "./footer";

function createMenuContainer(type, id) {
  const menuContainer = document.createElement(type);
  menuContainer.setAttribute("id", id);
  return menuContainer;
}

function createMenuMain(type, id) {
  const menuMain = document.createElement(type);
  menuMain.setAttribute("id", id);

  const menuTextContainer = document.createElement("div");
  menuTextContainer.setAttribute("id", "menuTextContainer");

  const menuTitle = document.createElement("h1");
  menuTitle.setAttribute("id", "menuTitle");
  menuTitle.textContent = "Menu";

  menuTextContainer.appendChild(menuTitle);

  menuMain.appendChild(menuTextContainer);

  return menuMain;
}

function createMenuItemsContainer(type, id) {
  const menuItemsContainer = document.createElement(type);
  menuItemsContainer.setAttribute("id", id);
  return menuItemsContainer;
}

function createMenuItem(src, alt, text) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menuItem");

  const itemImage = document.createElement("img");
  itemImage.classList.add("itemImage");
  itemImage.setAttribute("src", src);
  itemImage.setAttribute("alt", alt);

  const itemText = document.createElement("p");
  itemText.classList.add("itemText");
  itemText.textContent = text;

  menuItem.appendChild(itemImage);
  menuItem.appendChild(itemText);

  return menuItem;
}

function menu() {
  const contentContainer = document.getElementById("content");
  const menuContainer = createMenuContainer("div", "menuContainer");
  const header = createHeader("header", "header");
  const menuMain = createMenuMain("div", "menuMain");
  const menuItemsContainer = createMenuItemsContainer(
    "div",
    "menuItemsContainer"
  );
  const coffee = createMenuItem("/dist/images/coffee.jpeg", "coffee", "Coffee");
  const icedCoffee = createMenuItem(
    "/dist/images/icedCoffee.jpeg",
    "icedCoffee",
    "Iced Coffee"
  );
  const espresso = createMenuItem(
    "/dist/images/espresso.jpeg",
    "espresso",
    "Espresso"
  );
  const latte = createMenuItem("/dist/images/latte.jpeg", "latte", "Latte");
  const breakfastBagel = createMenuItem(
    "/dist/images/breakfastBagel.jpeg",
    "breakfastBagel",
    "Breakfast Bagel"
  );
  const donutHoles = createMenuItem(
    "/dist/images/donutHoles.jpeg",
    "donutHoles",
    "Donut Holes"
  );
  const footer = createFooter("footer", "footer");

  menuContainer.appendChild(header);
  menuContainer.appendChild(menuMain);
  menuMain.appendChild(menuItemsContainer);
  menuItemsContainer.appendChild(coffee);
  menuItemsContainer.appendChild(icedCoffee);
  menuItemsContainer.appendChild(espresso);
  menuItemsContainer.appendChild(latte);
  menuItemsContainer.appendChild(breakfastBagel);
  menuItemsContainer.appendChild(donutHoles);
  menuContainer.appendChild(footer);

  contentContainer.appendChild(menuContainer);
}

export default menu;
