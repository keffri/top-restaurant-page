function createAnchor(type, href) {
  let anchor = document.createElement(type);
  anchor.setAttribute("href", href);
  anchor.setAttribute("target", "_blank");
  return anchor;
}

function createIcon(type, ...classes) {
  const icon = document.createElement(type);
  icon.classList.add(classes[0]);
  icon.classList.add(classes[1]);
  icon.classList.add(classes[2]);
  icon.classList.add(classes[3]);
  return icon;
}

function createFooter(type, id) {
  const footer = document.createElement(type);
  footer.setAttribute("id", id);

  const anchor = createAnchor("a", "https://www.github.com/keffri");

  const icon = createIcon(
    "i",
    "footer-icon",
    "fab",
    "fa-github-square",
    "fa-2x"
  );

  footer.appendChild(anchor);
  anchor.appendChild(icon);

  return footer;
}

export default createFooter;
