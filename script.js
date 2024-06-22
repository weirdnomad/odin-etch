const container = document.querySelector(".container");
const sizeButton = document.querySelector("button")


addBox(16);

function addBox(number) {
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
        pixel.style.backgroundColor = "black";
      });
    }
  }
}
