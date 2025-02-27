let nav = document.getElementsByTagName("nav")[0];
let links = [
  nav.getElementsByTagName("a")[0],
  nav.getElementsByTagName("a")[1],
];
let icon = document.createElement("img");
icon.src = "/img/icons8-menü-50.png";
icon.height = "35";
icon.width = "40";
icon.style.cursor = "pointer";

const mediaQuery = window.matchMedia("(max-width: 480px)");

function updateNavigation(e) {
  if (e.matches) {
    links.forEach((element) => {
      element.style.display = "none";
    });
    if (!nav.contains(icon)) {
      nav.prepend(icon);
    }
  } else {
    links.forEach((element) => {
      element.style.display = "";
    });
    if (nav.contains(icon)) {
      nav.removeChild(icon);
    }
  }
}
updateNavigation(mediaQuery);
mediaQuery.addEventListener("change", updateNavigation);

let linksVisible = false;
icon.addEventListener("click", () => {
  linksVisible = !linksVisible; // Zustand umschalten
  links.forEach((element) => {
    element.style.display = linksVisible ? "block" : "none"; // Links ein-/ausblenden
  });
});