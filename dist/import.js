"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var utils = _interopRequireWildcard(require("./export.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import _ from 'lodash';
console.log(utils.adding(5, 3));
console.log(utils.multiply(5, 4));
var defaultFunc = utils["default"];
console.log(defaultFunc);
var array = [{
  name: 'moshe',
  id: 'lml;ml;lm'
}, {
  name: 'yair',
  id: 'l;'
}, {
  name: 'michal',
  id: '68769889'
}];
var special = utils.specialNumber(); // let array2 = _.cloneDeep(array);

var array2 = [].concat(array);
array2[1]['name'] = 'itamar';
console.log(array2[1]['name']);
console.log(array[1]['name']);
console.log(special);