const element = document.querySelector("#ele1");
element.setAttribute("style", "background-color: green");

const pinta = function (setColor, color) {
  setColor.style.backgroundColor = color;
};
element.addEventListener("click", () => pinta(element, "yellow"));
