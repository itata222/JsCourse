"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = minus;
exports.specialNumber = exports.multiply = exports.adding = void 0;

var add = function add(num1, num2) {
  return num1 + num2;
};

exports.adding = add;

var mul = function mul(num1, num2) {
  return num1 * num2;
};

exports.multiply = mul;

function minus(num1, num2) {
  return num1 - num2;
}

var specialNum = 5;

var specialNumber = function specialNumber() {
  return specialNum;
};

exports.specialNumber = specialNumber;
console.log('hello world');