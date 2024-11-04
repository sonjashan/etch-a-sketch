'use strict';

let colorMode = false;
let isMouseDown = false;
let cellsEl;
let newBtnEL = document.querySelector(".newboard");
let clearBtnEl = document.querySelector(".clearboard");
let colorBtnEl = document.querySelector(".colormode");


function drawBoard(rowNum, colNum) {
    const containerEl = document.createElement("div");
    containerEl.classList.add("container");
    const mainEl = document.querySelector("main");
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

function randRGB() {
    return Math.floor(Math.random() * 256);
}

function colorCell(cell) {
    cell.addEventListener("mousedown", () => isMouseDown = true);
    cell.addEventListener("mouseup", () => isMouseDown = false);
    cell.addEventListener("mouseout", function () {
        if (colorMode && isMouseDown) {
            cell.classList.remove("hoverout");
            cell.style.backgroundColor = `rgb(${randRGB()} ${randRGB()} ${randRGB()})`;
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

function init(size) {
    drawBoard(size, size);
    cellsEl = document.querySelectorAll(".cell");
    cellsEl.forEach(colorCell);
}

function getSize() {
    let size;
    do {
        size = Number(prompt(`How many squares per line for the new board?
Please input a number between 1 and 100.`));
    } while (Number.isNaN(size) || size < 1 || size > 100);
    return size;
}

init(16);

newBtnEL.addEventListener("click", function () {
    document.querySelector(".container").remove();
    let size = getSize();
    init(size);
});

colorBtnEl.addEventListener("click", () => colorMode = !colorMode);

function clearCell(cell) {
    cell.style.backgroundColor = `#fff`;
}
clearBtnEl.addEventListener("click", () => cellsEl.forEach(clearCell));
