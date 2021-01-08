"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isGameFinished = exports.isXTurn = exports.isCellEmpty = exports.beginNewTurn = void 0;
var board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var turnNumber = 0;

var beginNewTurn = function beginNewTurn() {
  turnNumber++;
};

exports.beginNewTurn = beginNewTurn;

var isCellEmpty = function isCellEmpty(x, y) {// if (board[x][y] === undefined) {
  // }
};

exports.isCellEmpty = isCellEmpty;

var isXTurn = function isXTurn() {};

exports.isXTurn = isXTurn;

var isGameFinished = function isGameFinished() {// if (board)
};

exports.isGameFinished = isGameFinished;