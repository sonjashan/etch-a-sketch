'use strict';

let colorMode = false;

const mainEl = document.querySelector("main");

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

// newBtnEl.addEventListener("click", function () {
//     let rowSize = getSize(true);
//     let colSize = getSize(false);
//     document.querySelector(".container").remove();
//     drawBoard(rowSize, colSize);
// });

document.querySelector(".colormode").addEventListener("click", () => colorMode = true);


drawBoard(16, 16);

function colorRandom() {
    return Math.floor(Math.random() * 256);
}

let isMouseDown = false;

const colorCell = function (cell) {
    cell.addEventListener("mousedown", () => isMouseDown = true);
    cell.addEventListener("mouseup", () => isMouseDown = false);
    cell.addEventListener("mouseout", function () {
        if (colorMode && isMouseDown) {
            cell.classList.remove("hoverout");
            cell.style.backgroundColor = `rgb(${colorRandom()} ${colorRandom()} ${colorRandom()})`;
        } else if (!colorMode) {
            cell.classList.remove("hoverin");
            cell.classList.add("hoverout");
        }
    });
    cell.addEventListener("mouseenter", function () {
        if (!colorMode) {
            cell.classList.remove("hoverout");
            cell.classList.add("hoverin");
        }
    });
};

let cellsEl = document.querySelectorAll(".cell");
cellsEl.forEach(colorCell);

function clearCell(cell) {
    cell.style.backgroundColor = `#fff`;
}

document.querySelector(".clearboard").addEventListener("click", () => cellsEl.forEach(clearCell));
