const body = document.querySelector("body");
const sizeButton = document.querySelector("button");
addBox(16);
function addBox(number) {
  const container = document.querySelector(".container");
  if (number > 100) number = 100;
  for (j = 0; j < number; j++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (i = 0; i < number; i++) {
      const pixel = document.createElement("div");
      pixel.classList.add("box");
      pixel.classList.add("draw");
      row.appendChild(pixel);
      pixel.addEventListener("mouseover", () => {
        // pixel.style.backgroundColor = "black";
        incOpacity();
        function incOpacity() {
          const currentOpacity = parseFloat(
            window.getComputedStyle(pixel).getPropertyValue("--pixelOpacity")
          );
          const opacity = Math.min(currentOpacity + 0.1, 1);
        
          pixel.style.setProperty("--pixelOpacity", opacity);
        }
      });
    }
  }
}

sizeButton.addEventListener("click", function () {
  clear();
  const userSize = prompt("Change the size of the grid (1 to 100):");
  addBox(userSize);
});

function clear() {
  const container = document.querySelector(".container");
  container.remove();
  const newDiv = document.createElement("div");
  newDiv.classList.add("container");
  body.appendChild(newDiv);
}

