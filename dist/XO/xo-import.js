"use strict";

var XOboard = document.getElementsByClassName('board')[0];

for (var i = 0; i < 9; i++) {
  var cell = document.createElement('div');
  cell.className = 'cell';
  XOboard.appendChild(cell);
}