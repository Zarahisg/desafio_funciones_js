const green = document.querySelector("#green");
green.setAttribute("style", "background-color: green");
const yellow = document.querySelector("#yellow");
yellow.setAttribute("style", "background-color: yellow");
const red = document.querySelector("#red");
red.setAttribute("style", "background-color: red");
const blue = document.querySelector("#blue");
blue.setAttribute("style", "background-color: blue");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    colorselect = "Aqua";
    return;
  } else if (event.key === "s") {
    colorselect = "purple";
    return;
  } else if (event.key === "d") {
    colorselect = "yellowgreen";
    return;
  }
});
function changeColor(event) {
  const change = event.target;
  change.style.background = colorselect;
}
green.addEventListener("click", changeColor);
yellow.addEventListener("click", changeColor);
red.addEventListener("click", changeColor);
blue.addEventListener("click", changeColor);