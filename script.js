'use strict';

const mainEl = document.querySelector("main");
const btnEl = document.createElement("button");
btnEl.textContent = "New Board";
mainEl.appendChild(btnEl);

function drawBoard(rowNum, colNum) {
    const containerEl = document.createElement("div");
    containerEl.classList.add("container");
    mainEl.appendChild(containerEl);

    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            const cellDivEl = document.createElement("div");
            cellDivEl.classList.add("cell");
            cellDivEl.style.width = `${100 / colNum}%`;
            containerEl.appendChild(cellDivEl);
        }
    }
}

function getSize(ifRow) {
    let size;
    do {
        size = Number(prompt(`How many ${ifRow ? 'ROWs' : 'COLUMNs'} for the new board?
Please input a number between 1 and 100.`));
    } while (Number.isNaN(size) || size < 1 || size > 100);
    return size;
}

btnEl.addEventListener("click", function () {
    let rowSize = getSize(true);
    let colSize = getSize(false);
    document.querySelector(".container").remove();
    drawBoard(rowSize, colSize);
});

drawBoard(16, 16);