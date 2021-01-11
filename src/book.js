//----------------ARGUMENTS-----------------------CHAPTER 1
console.log('--------------arguments------------------')
const reflect1 = function (...rest) {
    let sum = 0;
    let i = 0;
    let length = rest.length;
    while (i < length) {
        sum += rest[i]
        i++
    }
    console.log(length)
    return sum;
};
console.log(reflect1(1, 2, 3, 5, 6, 8));
//----------------sameAs------------------
const reflect = function () {
    let sum = 0;
    let i = 0;
    let length = arguments.length;
    while (i < length) {
        sum += arguments[i]
        i++
    }
    console.log(length)
    return sum;
};
console.log(reflect(1, 2, 3, 5, 6, 8));

//----------------Changing the THIS in a scope-------------- CHAPTER 2

//----------------.call() method--------------------------
console.log('--------------.call() method------------------')
function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}
var person1 = {
    name: "Nicholas"
};
var person2 = {
    name: "Greg"
};
var name = "Michael";
sayNameForAll.call(this, "global"); // outputs "global:Michael"
sayNameForAll.call(person1, "person1"); // outputs "person1:Nicholas"
sayNameForAll.call(person2, "person2"); // outputs "person2:Greg

// The first parameter of call() is the value to which this should be equal
// when the function is executed. All subsequent parameters are the parameters that 
// should be passed into the function.

//-----------------.apply() method---------------------------
console.log('--------------.apply() method------------------')
// function sayNameForAll() {
//     console.log(arguments[0] + ":" + this.name); ----> using args technique
// } 
function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}
var person1 = {
    name: "Nicholas"
};
var person2 = {
    name: "Greg"
};
var name = "Michael";
sayNameForAll.apply(this, ["global"]); // outputs "global:Michael"
sayNameForAll.apply(person1, ["person1"]); // outputs "person1:Nicholas"
sayNameForAll.apply(person2, ["person2"]); // outputs "person2:Greg"

//The second function method you can use to manipulate this is apply(). The
// apply() method works exactly the same as call() except that it accepts only
// two parameters: the value for this and an array or array-like object of
// parameters to pass to the function (that means you can use an arguments
// object as the second parameter). So, instead of individually naming each
// parameter using call(), you can easily pass arrays to apply() as the second
// argument. Otherwise, call() and apply() behave identically.

//------------------.bind() method-------------------
console.log('--------------.bind() method------------------')
function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}
var person1 = {
    name: "Nicholas"
};
var person2 = {
    name: "Greg"
};
// create a function just for person1
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("person1"); // outputs "person1:Nicholas"
// create a function just for person2
var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");
sayNameForPerson2(); // outputs "person2:Greg"
// attaching a method to an object doesn't change 'this'
person2.sayName = sayNameForPerson1;
person2.sayName("person2"); // outputs "person2:Nicholas"

// The third function method for changing this is bind(). This method was
// added in ECMAScript 5, and it behaves quite differently than the other
// two. The first argument to bind() is the this value for the new function.
// All other arguments represent named parameters that should be permanently set in the new function.
// You can still pass in any parameters that aren’t permanently set later.
// No parameters are bound for sayNameForPerson1() u, so you still need
// to pass in the label for the output. The function sayNameForPerson2() not
// only binds this to person2 but also binds the first parameter as "person2" v.
// That means you can call sayNameForPerson2() without passing in any additional arguments. 
// The last part of this example adds sayNameForPerson1()
// onto person2 with the name sayName w. The function is bound, so the value
// of this doesn’t change even though sayNameForPerson1 is now a function on
// person2. The method still outputs the value of person1.name.

//----------------------------------------- CHAPTER 3

//------------------Detecting Properties---------------

//option 1
if (person1.age) {
    // do something with age
}
// The problem with this pattern is how JavaScript’s type coercion affects
// the outcome. The if condition evaluates to true if the value is truthy (an
// object, a nonempty string, a nonzero number, or true) and evaluates to
// false if the value is falsy (null, undefined, 0, false, NaN, or an empty string).
// Because an object property can contain one of these falsy values, the
// example code can yield false negatives. For instance, if person1.age is 0,
// then the if condition will not be met even though the property exists.
// A more reliable way to test for the existence of a property is with the in operator.

//option 2: in operator-----------------------------------
console.log('--------------in operator------------------')
console.log("name" in person1); // true
console.log("age" in person1); // true
console.log("title" in person1); // false
var person1 = {
    name: "Nicholas",
    sayName: function () {
        console.log(this.name);
    }
};
console.log("sayName" in person1); // true

// In most cases, the in operator is the best way to determine whether the property exists in an object.
// It has the added benefit of not evaluating the value of the property, which can be important if such an evaluation is likely
// to cause a performance issue or an error. In some cases, however, you might want to check for the existence of
// a property only if it is an own property. The in operator checks for both
// own properties and prototype properties, so you’ll need to take a different
// approach. Enter the hasOwnProperty() method, which is present on all objects
// and returns true only if the given property exists and is an own property.
// For example, the following code compares the results of using in versus
// hasOwnProperty() on different properties in person1:

//option 3: hasOwnProperty()---------------------------
console.log('--------------hasOwnProperty()------------------')
var person1 = {
    name: "Nicholas",
    sayName: function () {
        console.log(this.name);
    }
};
console.log("name" in person1); // true
console.log(person1.hasOwnProperty("name")); // true
console.log("toString" in person1); // true
console.log(person1.hasOwnProperty("toString")); // false

// In this example, name is an own property of person1, so both the in
// operator and hasOwnProperty() return true. The toString() method, however, is a prototype property that is present on all objects. 
// The in operator returns true for toString(), but hasOwnProperty() returns false.

//-------------------getter and setter------------------
console.log('--------------getter and setter------------------')
var person1 = {
    _name: "Nicholas",
    get name() {
        console.log("Reading name");
        return this._name;
    },
    set name(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    }
};
console.log(person1.name);
person1.name = "Greg";
console.log(person1.name);

//שמשתמשים בגטר וסטר להקפיד על הקו התחתון לפני ההגדרה של השדה!!!!!
//You don’t need to define both a getter and a setter; you can choose one or both.
// If you define only a getter, then the property becomes read-only, and attempts to
// write to it will fail silently in nonstrict mode and throw an error in strict mode.
// If you define only a setter, then the property becomes write-only, and attempts to
// read the value will fail silently in both strict and nonstrict modes.

//----------------Property Attributes-------------------
console.log('------------Property Attributes----------')
console.log('------------enumerable and configurable----------')

// There are two property attributes shared between data and accessor properties. One is [[Enumerable]], which determines whether you can
// iterate over the property. The other is [[Configurable]], which determines whether the property can be changed. You can remove a configurable
// property using delete and can change its attributes at any time. (This also means configurable properties can be changed from data to accessor
// properties and vice versa.) By default, all properties you declare on an object are both enumerable and configurable.
// If you want to change property attributes, you can use the Object.defineProperty() method. This method accepts three arguments: 
// the object that owns the property, the property name, and a property descriptor object containing the attributes to set. 
// The descriptor has properties  with the same name as the internal attributes but without the square brackets. 
// So you use enumerable to set [[Enumerable]], and configurable to set [[Configurable]]. For example, suppose you want to make an object
// property nonenumerable and nonconfigurable:

var person1 = {
    name: "Nicholas"
};
Object.defineProperty(person1, "name", {
    enumerable: false
});
console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // false
var properties = Object.keys(person1);
console.log(properties.length); // 0
Object.defineProperty(person1, "name", {
    configurable: false
});
// try to delete the Property
delete person1.name;
console.log("name" in person1); // true
console.log(person1.name); // "Nicholas"
// Object.defineProperty(person1, "name", { // error!!!
//     configurable: true
// });

//--------------------Retrieving Property Attributes-------------

console.log('---------------Retrieving Property Attributes---------------')

// If you need to fetch property attributes, you can do so in JavaScript by
// using Object.getOwnPropertyDescriptor(). As the name suggests, this method
// works only on own properties. This method accepts two arguments: the
// object to work on and the property name to retrieve. If the property exists,
// you should receive a descriptor object with four properties: configurable,
// enumerable, and the two others appropriate for the type of property. Even
// if you didn’t specifically set an attribute, you will still receive an object
// containing the appropriate value for that attribute. For example, this
// code creates a property and checks its attributes:

var person1 = {
    name: "Nicholas"
};
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.enumerable); // true
console.log(descriptor.configurable); // true
console.log(descriptor.writable); // true
console.log(descriptor.value); // "Nicholas"

//-------------------------------------------------------

console.log('-------------Preventing Extensions--------')
// One way to create a nonextensible object is with Object.preventExtensions().
// This method accepts a single argument, which is the object you want to
// make nonextensible. Once you use this method on an object, you’ll never
// be able to add any new properties to it again. You can check the value of
// [[Extensible]] by using Object.isExtensible(). The following code shows
// examples of both methods at work.

var person1 = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person1)); // true
Object.preventExtensions(person1);
console.log(Object.isExtensible(person1)); // false
person1.sayName = function () {
    console.log(this.name);
};
console.log("sayName" in person1); // false

//-------------------------------------------------------

console.log('-------------Sealing Objects--------')
// The second way to create a nonextensible object is to seal the object. A
// sealed object is nonextensible, and all of its properties are nonconfigurable. That means not only can you not add new properties to the object, 
// but you also can’t remove properties or change their type (from data to
// accessor or vice versa). If an object is sealed, you can only read from and write to its properties.
// You can use the Object.seal() method on an object to seal it. When that happens, the [[Extensible]] attribute is set to false, 
// and all properties have their [[Configurable]] attribute set to false. You can check to see
// whether an object is sealed using Object.isSealed() as follows:

var person1 = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person1)); // true
console.log(Object.isSealed(person1)); // false
Object.seal(person1);
console.log(Object.isExtensible(person1)); // false
console.log(Object.isSealed(person1)); // true
person1.sayName = function () {
    console.log(this.name);
};
console.log("sayName" in person1); // false
person1.name = "Greg";
console.log(person1.name); // "Greg"
delete person1.name;
console.log("name" in person1); // true
console.log(person1.name); // "Greg"
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.configurable); // false

//-------------------------------------------------------

console.log('-------------Freezing Objects--------')
// The last way to create a nonextensible object is to freeze it. If an object is
// frozen, you can’t add or remove properties, you can’t change properties’
// types, and you can’t write to any data properties. In essence, a frozen object
// is a sealed object where data properties are also read-only. Frozen objects
// can’t become unfrozen, so they remain in the state they were in when
// they became frozen. You can freeze an object by using Object.freeze() and
// determine if an object is frozen by using Object.isFrozen(). For example:

var person1 = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person1)); // true
console.log(Object.isSealed(person1)); // false
console.log(Object.isFrozen(person1)); // false
Object.freeze(person1);
console.log(Object.isExtensible(person1)); // false
console.log(Object.isSealed(person1)); // true
console.log(Object.isFrozen(person1)); // true
person1.sayName = function () {
    console.log(this.name);
};
console.log("sayName" in person1); // false
person1.name = "Greg";
console.log(person1.name); // "Nicholas"
delete person1.name;
console.log("name" in person1); // true
console.log(person1.name); // "Nicholas"
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.configurable); // false
console.log(descriptor.writable); // false



