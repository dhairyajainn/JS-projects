const container = document.getElementById("container");
const colors = [
  "#e74c3c",
  "#8344ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
  "#32a8a2",
];
const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}
function setColor(element) {
  //   console.log(element);
  const color = getRandomcolor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}
function removeColor(element) {
  //   console.log(element);
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}
function getRandomcolor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// setTimeout(() => {
//   removeColor();
// }, 9000);
