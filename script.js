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
            const oneCellEl = document.createElement("div");
            oneCellEl.classList.add("cell");
            oneCellEl.style.width = `${100 / colNum}%`;
            containerEl.appendChild(oneCellEl);
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

function colorRandom() {
    return Math.floor(Math.random() * 256);
}

const colorCell = function (cell) {
    cell.addEventListener("click",
        () => cell.style.backgroundColor = `rgb(${colorRandom()} ${colorRandom()} ${colorRandom()})`);
};

let cellsEl = document.querySelectorAll(".cell");
cellsEl.forEach(colorCell);