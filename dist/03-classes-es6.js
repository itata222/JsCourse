"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Person = /*#__PURE__*/function () {
  // name = 'ploni'
  // id
  function Person(name, id) {
    _classCallCheck(this, Person);

    this._name = name;
    this.id = id;
    Person.personsCount++;
  }

  _createClass(Person, [{
    key: "toString",
    value: function toString() {
      return "Name: ".concat(this.name, "; id: ").concat(this.id);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(name) {
      this._name = name;
    }
  }, {
    key: "stam",
    get: function get() {
      return this.id + "stam";
    }
  }], [{
    key: "getPersonsCount",
    value: function getPersonsCount() {
      return this.personsCount;
    }
  }]);

  return Person;
}();

_defineProperty(Person, "personsCount", 0);

var moshe = new Person('moshe', 'hkjklnkllk');
console.log(moshe.toString());
moshe.name = 'moshik';
console.log(moshe.name);
moshe._name = "yehoshua";
console.log(moshe.name);
console.log(moshe.stam);
var dan = new Person('dan', "hgkjk");
console.log(Person.getPersonsCount());

var Student = /*#__PURE__*/function (_Person) {
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(name, id, subject) {
    var _this;

    _classCallCheck(this, Student);

    _this = _super.call(this, name, id);
    _this.subject = subject;
    return _this;
  }

  _createClass(Student, [{
    key: "toString",
    value: function toString() {
      return _get(_getPrototypeOf(Student.prototype), "toString", this).call(this) + "; subject: ".concat(this.subject);
    }
  }]);

  return Student;
}(Person);

var yaron = new Student('yaron', "hjvhjbk", "math");
console.log(yaron.toString()); // תרגיל צרו מחלקות של מצולע, מלבן וריבוע
//  מחלקת מצולע מכילה שם ומספר צלעות ואורכי כל הצלעות
// מחלקת מלבן מכילה את הגובה והרוחב של המלבן
// ומחלקת ריבוע מכילה את אורך הצלע
// מחלקת ריבוע יורשת ממלבן ומחלקת מלבן יורשת ממצולע
// המחלקות יכילו פונקציות של היקף, שטח ותוסטרינג בהתאמה לסוגן
// אם יש אפשרות להשתמש בפונקציות של מחלקה מורישה יש להשתמש בהן
// במחלקת מצולע יש להגדיר את כל השדות כ-נאלל ואת שם המצולע כ
// Imposible shape
// אם הנתונים שהוכנסו לתוכו לא מסוגלים ליצור מצולע
// יש להתייחס לאפשרות זו בפונקציית תוסטרינג של כל המחלקות

var Polygon = /*#__PURE__*/function () {
  function Polygon(name, sidesCount) {
    _classCallCheck(this, Polygon);

    this.name = name;
    this.sidesCount = sidesCount;

    for (var _len = arguments.length, sidedsLength = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      sidedsLength[_key - 2] = arguments[_key];
    }

    this.sidedsLength = sidedsLength;
    var totalLength = this.perimeter;

    for (var _i = 0, _sidedsLength = sidedsLength; _i < _sidedsLength.length; _i++) {
      var side = _sidedsLength[_i];

      if (side > totalLength - side || side <= 0) {
        this.name = "Imposible shape";
        this.sidesCount = null;
        this.sidedsLength = null;
        break;
      }
    }
  }

  _createClass(Polygon, [{
    key: "toString",
    value: function toString() {
      if (!!this.sidedsLength) {
        return "".concat(this.name, " - sides count: ").concat(this.sidesCount, "; perimeter: ").concat(this.perimeter);
      }

      return this.name;
    }
  }, {
    key: "perimeter",
    get: function get() {
      return this.sidedsLength.reduce(function (acc, cor) {
        return acc + cor;
      });
    }
  }]);

  return Polygon;
}();

var Rectangle = /*#__PURE__*/function (_Polygon) {
  _inherits(Rectangle, _Polygon);

  var _super2 = _createSuper(Rectangle);

  function Rectangle(width, height) {
    var _this2;

    _classCallCheck(this, Rectangle);

    _this2 = _super2.call(this, 'Rectangle', 4, width, width, height, height);
    _this2.width = width;
    _this2.height = height;
    return _this2;
  }

  _createClass(Rectangle, [{
    key: "toString",
    value: function toString() {
      if (!!this.sidedsLength) {
        return _get(_getPrototypeOf(Rectangle.prototype), "toString", this).call(this) + ";area: ".concat(this.area, "; width: ").concat(this.width, "; height: ").concat(this.height);
      }

      return 'Not a rectangle';
    }
  }, {
    key: "area",
    get: function get() {
      return this.width * this.height;
    }
  }]);

  return Rectangle;
}(Polygon);

var Square = /*#__PURE__*/function (_Rectangle) {
  _inherits(Square, _Rectangle);

  var _super3 = _createSuper(Square);

  function Square(sideLength) {
    var _this3;

    _classCallCheck(this, Square);

    _this3 = _super3.call(this, sideLength, sideLength);
    _this3.name = 'Square';
    _this3.sideLength = sideLength;
    return _this3;
  }

  _createClass(Square, [{
    key: "toString",
    value: function toString() {
      if (!!this.sidedsLength) {
        var parts = _get(_getPrototypeOf(Square.prototype), "toString", this).call(this).split(";");

        return parts[0] + ";" + parts[1] + ";" + parts[2] + "; side length: ".concat(this.sideLength);
      }

      return 'Not a square';
    }
  }]);

  return Square;
}(Rectangle);

var polygon = new Polygon('triangle', 3, 2, 67, 3);
var rectangle = new Rectangle(-5, 4);
var square = new Square(-5);
console.log(polygon.toString());
console.log(rectangle.toString());
console.log(square.toString());