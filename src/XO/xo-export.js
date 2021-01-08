let XOboard = document.getElementsByClassName('board')[0];
let board = [
    undefined, undefined, undefined,
    undefined, undefined, undefined,
    undefined, undefined, undefined
]
let turnNumber = 0;
let draw = false;
let updatingBoard = "";
let splittedBoard;
export const newTurn = () => {
    turnNumber++;
}
export const isCellEmpty = (number) => {
    if (board[number] === undefined)
        return true;
    return false;
}
export const isXTurn = () => {
    if (turnNumber % 2 === 0)
        return true;
}
export const isGameFinishedByWinner = () => {
    if (board[4] === board[8] && board[4] === board[0] && board[4] !== undefined)
        return true;
    else if (board[4] === board[6] && board[4] === board[2] && board[4] !== undefined)
        return true;
    else if (board[4] === board[1] && board[4] === board[7] && board[4] !== undefined)
        return true;
    else if (board[4] === board[3] && board[4] === board[5] && board[4] !== undefined)
        return true;
}
export const isGameFinishedByDraw = () => {
    if (turnNumber === 9) {
        draw = true;
        return true;
    }
}
export const updateBoard = () => {
    updatingBoard = "";
    for (let i = 0; i < 9; i++)
        updatingBoard += XOboard.children[i].firstChild.className + "|";
    splittedBoard = updatingBoard.split('|');
    splittedBoard = splittedBoard.slice(0, splittedBoard.length - 1);
    for (let i = 0; i < board.length; i++) {
        splittedBoard[i] === 'X' ? board[i] = 'X' : undefined;
        splittedBoard[i] === 'O' ? board[i] = 'O' : undefined;
    }
}

















// let selectedCell = 0;
// export const selectedCell = (x, y) => {
//     switch (x) {
//         case 0:
//             if (y === 0)
//                 selectedCell = 0;
//             else if (y === 1)
//                 selectedCell = 1;
//             else if (y === 2)
//                 selectedCell = 2;
//             else
//                 selectedCell = 'invalid'
//         case 1:
//             if (y === 0)
//                 selectedCell = 3;
//             else if (y === 1)
//                 selectedCell = 4;
//             else if (y === 2)
//                 selectedCell = 5;
//             else
//                 selectedCell = 'invalid'
//         case 2:
//             if (y === 0)
//                 selectedCell = 6;
//             else if (y === 1)
//                 selectedCell = 7;
//             else if (y === 2)
//                 selectedCell = 8;
//             else
//                 selectedCell = 'invalid'
//     }
// }