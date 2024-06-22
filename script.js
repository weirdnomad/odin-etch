const container = document.querySelector(".container");

function addBox(number) {
  for (j = 0; j < number; j++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (i = 0; i < number; i++) {
      const pixel = document.createElement("div");
      pixel.classList.add("box");
      row.appendChild(pixel);
    }
  }
}
addBox(10);
