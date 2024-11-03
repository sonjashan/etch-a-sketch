'use strict';

const containerEl = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    // const rowDivEl = document.createElement("div");
    // rowDivEl.classList.add("row");
    // rowDivEl.textContent = i;
    // containerEl.appendChild(rowDivEl);
    for (let j = 0; j < 16; j++) {
        const cellDivEl = document.createElement("div");
        cellDivEl.classList.add("cell");
        cellDivEl.textContent = `${i}, ${j}`;
        containerEl.appendChild(cellDivEl);
    }
}

