import * as utils from './xo-export.js';

const XOboard = document.getElementsByClassName('board')[0];

let selectedCell = 0;

const createBoard = () => {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        const sign = document.createElement('div');
        sign.className = 'empty';
        cell.appendChild(sign);
        cell.className = 'cell cellHover';
        cell.id = i;
        XOboard.appendChild(cell);
    }
}
const playerTurn = () => {
    for (let cell of document.querySelectorAll('.cell')) {
        cell.addEventListener('click', markPlayerTurn)
    }
}
const markPlayerTurn = () => {
    selectedCell = event.target;
    if (selectedCell.id !== "" && utils.isCellEmpty(selectedCell.id)) {
        selectedCell.firstChild.className = utils.isXTurn() ? 'X' : 'O';
        utils.newTurn();
        utils.updateBoard();
    }
    else
        alert('cell already clicked')

    checkIfGameEnd();
}
const checkIfGameEnd = () => {
    if (utils.isGameFinishedByDraw()) {
        removeEventListenersAndCursors();
        alert('draw');
    }
    if (utils.isGameFinishedByWinner()) {
        removeEventListenersAndCursors();
        alert(!utils.isXTurn() ? 'X WON!!' : 'O WON!!');
    }
}
const removeEventListenersAndCursors = () => {
    for (let cell of document.querySelectorAll('.cell')) {
        cell.removeEventListener('click', markPlayerTurn)
        cell.className = "cell";
    }
}

const play = () => {
    createBoard();
    playerTurn();
}
play();
