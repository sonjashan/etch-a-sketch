'use strict';

const mainEl = document.querySelector("main");
const btnEl = document.createElement("button");
btnEl.textContent = "New Board";
mainEl.appendChild(btnEl);

const containerEl = document.createElement("div");
containerEl.classList.add("container");
mainEl.appendChild(containerEl);

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

