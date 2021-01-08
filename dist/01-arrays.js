"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var arr = [1, "string", true, null, undefined, {
  name: 'ariye'
}];
console.log(arr[2]);
arr = [[1, 2], [3, 4]];
console.log(arr[1][1]);
arr = [1, 2, 3, 4];
delete arr[2];
console.log(arr);
arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
var last = arr.pop();
console.log(arr, last);
arr.unshift(0);
console.log(arr);
var first = arr.shift();
console.log(arr, first);
var arrString = "";

for (var i = 0; i < arr.length; i++) {
  arrString += arr[i] + " ";
}

console.log(arrString);
arrString = "";

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var el = _arr[_i];
  arrString += el + " ";
}

console.log(arrString);
arrString = "";
arr.forEach(function (el, i) {
  arrString += "".concat(i, ": ").concat(el, " ");
});
console.log(arrString);

var myForEach = function myForEach(arr, callback) {
  console.log(callback);

  for (var _i2 = 0; _i2 < arr.length; _i2++) {
    if (arr[_i2] !== undefined) {
      callback(arr[_i2], _i2);
    }
  }
};

arrString = "";

var arrayToString = function arrayToString() {
  // arrString += `${i}: ${el} `
  console.log('Hello');
};

console.log(arrayToString);

var sayMiau = function sayMiau() {
  console.log('miau');
};

myForEach(arr, sayMiau); // console.log('myForEach:', arrString)

arr = [1, 2, 3, 4];
console.log(arr.indexOf(2));
console.log(arr.indexOf(5));
console.log(arr.includes(2));
console.log(arr.includes(5)); // copy

var arr2 = [].concat(_toConsumableArray(arr), [8, 9]);
arr2[2] = 7;
console.log(arr[2]);
console.log(arr2); // arr2 = []
// for (let el of arr) {
//     arr2.push(el)
// }
// תרגיל: כתבו פונקציה שקוראים לה
// mySlice
// הפונקציה מקבלת נקודת התחלה וסוף והיא מחזיר חלק מהמערך לפי אותן נקודות
// אם נקודת הסוף לא כלולה היא מחזירה מנקודת ההצחלה עד סוף המערך
// אם נקודת הסוף לא כלולה אז היא מחזירה מתחילת המערך עד פרמטר נקודת הסוף
// ואם אין פרמטרים בכלל היא מחזירה העתק של המערך.

var mySlice = function mySlice(arr) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var endIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length;
  var result = [];
  endIndex = endIndex > arr.length ? arr.length : endIndex;

  for (var _i3 = startIndex; _i3 < endIndex; _i3++) {
    result.push(arr[_i3]);
  }

  return result;
};

console.log(arr2.slice(2, 5));
arr2 = arr.slice();
arr2 = arr2.concat(arr, [676, 888], [55, 23]);
console.log("concat:", arr2);

var factorial = function factorial(num) {
  if (num === 0) return 1;
  var result = 1;

  for (var corrent = 1; corrent <= num; corrent++) {
    result *= corrent;
  }

  return result;
};

console.log(factorial(4));

var factorialRecutsive = function factorialRecutsive(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialRecutsive(num - 1);
};

console.log("factorialRecutsive:", factorialRecutsive(4)); // 4 * 3 * 2 * 1
// תרגיל : תכתבו פונקציה שמקבלת מערך ומחזירה מערך הפוך 

var myReverseArray = function myReverseArray(arr) {
  var result = [];

  for (var _i4 = arr.length - 1; _i4 >= 0; _i4--) {
    result.push(arr[_i4]);
  }

  return result;
};

console.log(myReverseArray([1, 2, 3, 4])); // 1 2 3 4 -> 4 3 2 1
// 4   1 2 3 - > 4 3 2 1
// [...arr] => [arr[0], arr[1], arr[2],...arr[arr.length-1]]
// [[arr[0], arr[1]]]
// [{name: 'yakir'}, {name: 'danny'}]
// []
// lodash

var myReverseArratRecursive = function myReverseArratRecursive(arr) {
  var result = _toConsumableArray(arr);

  if (result.length === 0 || result.length === 1) {
    return result;
  }

  var lastEl = result.pop();
  return [lastEl].concat(myReverseArratRecursive(result));
};

console.log("myReverseArratRecursive:", myReverseArratRecursive([1, 2, 3, 4]));
arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // תרגיל כתבו פונקציה שמקבלת מערך אינדקס התחלה, מספר מקומות למחוק, ועוד פרמטרים להכניס במקום האלמנטים שנמחקו
// הפונקציה מוחקת החל מאינדקס ההתחלה עד מספר המקומות שנקבע ומכניסה במקום את האלמנטים
// אם אינדקס ההתחלה גדול מאורך המערך אז רק מוסיפים את האלמנטים החלופיים בסוף המערך
// אם אין מספר מקומות הפונקציה מוחקת עד סוף המערך
// אם מספר המקומות למחיקה שווה לאפס שום אבר לא נמחק רק מתווסף המערך החלופים באינדקס שנבחר
// אם אין אלמנטיים חלופיים אז לא מוסיפה כלום, רק מוחקת

var stamFunc = function stamFunc(par1) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  console.log(par1, rest);
};

stamFunc(3, 6, 7, 8, 12);

var mySplice = function mySplice(arr, startIndex, deleteCount) {
  for (var _len2 = arguments.length, altArray = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    altArray[_key2 - 3] = arguments[_key2];
  }

  altArray = altArray || [];

  if (deleteCount == null) {
    deleteCount = arr.length - startIndex;
  } else {
    if (deleteCount > 0) {
      deleteCount = startIndex + deleteCount > arr.length ? arr.length - startIndex : deleteCount;
    } else {
      deleteCount = 0;
    }
  }

  return arr.slice(0, startIndex).concat(altArray, arr.slice(startIndex + deleteCount));
};

console.log("mySplice:", mySplice([1, 2, 3, 4, 5, 6], 1, 2));
arr = [1, 2, 3, 4, 5, 6, 7];
var deletedEl = arr.splice(2, 3, 11, 33);
console.log(arr, deletedEl); // join

console.log('join:', ["h", 'e', 'l', 'l', 'o'].join("-")); // צרו פונקציה שמקבלת מערך וקולבק ומחזירה מערך של כל האלמנטים שהקולבק החזיר חיובי עבורם

var myFilter = function myFilter(arr, callback) {
  var result = [];

  for (var _i5 = 0; _i5 < arr.length; _i5++) {
    if (callback(arr[_i5], _i5, arr)) {
      result.push(arr[_i5]);
    }
  }

  return result;
};

console.log(myFilter([1, 2, 3, 4, 5, 6], function (el) {
  return el > 4;
}));
arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.filter(function (el, i) {
  return el < 3 && i === 0;
}));
arr = [{
  name: 'ariye'
}, {
  name: 'moshe'
}, {
  name: 'michal'
}];
console.log(arr.filter(function (el) {
  return el.name[0] === 'm';
})); // תרגיל צרו מערך שמכיל את המספרים מ1 עד 100
// החזירו באמצעות פילטר מערך שכולל רק את המספרים הראשוניים
// יש לפתור פעמיים פעם אחת הצורה רגילה ופעם אחרת בצורה רקורסיבית

var isPrimeNumber = function isPrimeNumber(num) {
  if (num === 0 || num === 1) return false;
  if (num === 2) return true;

  for (var _i6 = 2; _i6 < num; _i6++) {
    if (num % _i6 === 0) return false;
  }

  return true;
};

arr = [];

for (var _i7 = 0; _i7 <= 100; _i7++) {
  arr.push(_i7);
}

var timeBefore = Date.now();
console.log("prime numbers:", arr.filter(isPrimeNumber));
console.log('time past', Date.now() - timeBefore);

var isPrimeNumberRecursive = function isPrimeNumberRecursive(num, i, arr) {
  if (num === 0 || num === 1) return false;
  if (num === 2) return true;
  var denominator = (arguments.length <= 3 ? 0 : arguments.length - 3) === 0 ? num - 1 : arguments.length <= 3 ? undefined : arguments[3];
  if (denominator < 2) return true;
  return num % denominator === 0 ? false : isPrimeNumberRecursive(num, i, arr, denominator - 1);
}; // arr = []
// for (let i = 0; i <= 1000; i++) {
//     arr.push(i)
// }


timeBefore = Date.now();
console.log('prime number recursive:', arr.filter(isPrimeNumberRecursive));
console.log('time past recursive', Date.now() - timeBefore); // find

arr = [1, 2, 3, 4];
console.log(arr.find(function (el) {
  return el > 2;
})); // findIndex

console.log(arr.findIndex(function (el) {
  return el > 2;
})); // every

console.log(arr.every(function (el) {
  return el < 5;
}));
console.log(arr.every(function (el) {
  return el < 3;
})); //some

console.log(arr.some(function (el) {
  return el < 3;
}));
console.log(arr.some(function (el) {
  return el < 0;
})); // map

console.log(arr.map(function (el) {
  return el * 2;
}));

var myMap = function myMap(arr, callback) {
  var result = [];

  for (var _i8 = 0; _i8 < arr.length; _i8++) {
    result.push(callback(arr[_i8], _i8, arr));
  }

  return result;
};

console.log(myMap(arr, function (el) {
  return Math.pow(el, 2);
}));
arr = [{
  name: 'moshe',
  id: 'ghchjvhj'
}, {
  name: 'moshe2',
  id: 'ghchjvhj'
}, {
  name: 'moshe3',
  id: 'ghchjvhj'
}];
console.log(arr.map(function (person) {
  return {
    name: person.name
  };
}));
arr = [1, 2, 3, 4, 5, 6];

var isEvenNumber = function isEvenNumber(num) {
  return num % 2 === 0;
};

console.log(arr.filter(isEvenNumber));
console.log(arr.map(function (el) {
  return Math.pow(el, 2);
}));
arr = ["a", "b", "c"];
console.log(arr.map(function (el, i) {
  return "".concat(i, ": ").concat(el);
})); // sort

arr = ["a", "b", "c", 'h', 'r', 'v', 'g'];
arr.sort();
console.log("sort:", arr);
arr = [100, 3, 500, 50, 200];
arr.sort();
console.log("sort:", arr);
arr.sort(function (el2, el1) {
  return el2 - el1;
});
console.log("sort:", arr);
arr = ["a", "b", "c", 'h', 'r', 'v', 'g'];

var compare2Strings = function compare2Strings(string2, string1) {
  if (string2 > string1) return -1;
  if (string2 < string1) return 1;
  return 0;
};

arr.sort(compare2Strings);
console.log("sort:", arr); // reduce

arr = ['1', '2', '3', '4'];

var sumReducer = function sumReducer(acc, cor) {
  return acc + cor;
};

console.log("reduce:", arr.reduce(sumReducer));

var myReduce = function myReduce(arr, callback, initialValue) {
  var i, acc;

  if (initialValue == null) {
    i = 1;
    acc = arr[0];
  } else {
    i = 0;
    acc = initialValue;
  }

  for (; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }

  return acc;
};

arr = [1, 2, 3, 4];
console.log("myReduce:", myReduce(arr, sumReducer, 4));
arr = [['a', 1], ['b', 2], ['c', 3]];
var obj = {
  a: 1,
  b: 2,
  c: 3
}; // console.log("reduce:", arr.reduce((acc, cor) => {
//     acc[cor[0]] = cor[1]
//     return acc
// }, {}))

console.log("reduce:", arr.reduce(function (acc, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];

  acc[key] = value;
  return acc;
}, {}));
arr = [1, 2, 3, 4]; // let el0 = arr[0]
// let el1 = arr[1]

var _arr2 = arr,
    _arr3 = _slicedToArray(_arr2, 2),
    el0 = _arr3[0],
    el1 = _arr3[1];

console.log(el0, el1);

var obj2 = _objectSpread({}, obj);

obj2.a = 8;
console.log(obj); // Map
////////////

obj = {};
obj['a'] = 2;
obj['a'] = 3;
var map = new Map();
map.set('a', 'A');
map.set('b', "B");
map.set('c', 'C');
console.log(map.get('a'));
map.set('a', 'The letter A');
console.log(map.get('a')); // for (let el of map) {
//     console.log(`key: ${el[0]}; value: ${el[1]}`)
// }

var _iterator = _createForOfIteratorHelper(map),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var _step$value = _slicedToArray(_step.value, 2),
        _key4 = _step$value[0],
        _value = _step$value[1];

    console.log("key: ".concat(_key4, "; value: ").concat(_value));
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

console.log(map.has('a'));
console.log(map.has('g'));
console.log(map.size);
map["delete"]('a');
console.log(map.size);
console.log(_toConsumableArray(map));
console.log(map);
map.clear();
console.log(map); // Set

var set = new Set();
set.add('a');
set.add('a');
set.add('b');
console.log(set);

var setArray = _toConsumableArray(set);

console.log(_toConsumableArray(set));
set["delete"]('a');
console.log(set);
set.add('c');

var _iterator2 = _createForOfIteratorHelper(set),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _el = _step2.value;
    console.log(_el);
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

console.log(set.has('a'));
set.clear();
console.log(set);
set.add({
  name: 'michal'
});
set.add({
  name: 'michal'
});
console.log(set); // object

obj = {
  name: 'shir',
  id: 'gcfyugiygui',
  phone: '6578587687'
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
arr = [];

for (var key in obj) {
  console.log(key);
  arr.push(obj[key]);
}

console.log(arr);

for (var _i9 = 0, _Object$entries = Object.entries(obj); _i9 < _Object$entries.length; _i9++) {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i9], 2),
      _key3 = _Object$entries$_i[0],
      value = _Object$entries$_i[1];

  console.log(_key3, value);
}

var _obj = obj,
    name = _obj.name,
    id = _obj.id;
console.log(name, id);
name = 'ron';
id = "fyufguui";
obj = {
  name: name,
  id: id
};
console.log(obj);