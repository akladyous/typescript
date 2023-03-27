"use strict";
var _a;
// -------------------------------------
(_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) { });
// -------------------------------------
var yearEl;
yearEl = document.querySelector('#year');
var thisYear = new Date().getFullYear().toLocaleString();
if (yearEl) {
    yearEl.setAttribute('datetime', thisYear);
    yearEl.setAttribute('data-copyright-year', thisYear);
}
console.log(yearEl === null || yearEl === void 0 ? void 0 : yearEl.dataset.copyrightYear);
yearEl === null || yearEl === void 0 ? true : delete yearEl.dataset.copyrightYear;
console.log(yearEl === null || yearEl === void 0 ? void 0 : yearEl.dataset);
// -------------------------------------
var str;
var num;
var boolean;
var strConstant = 'sdasd';
var varStrNum;
var int;
// Arrays -------------------------------------
var arr = [];
var arr1 = ['name', 123, true];
var fruits = ['Apple', 'Orange', 'Banana'];
var users = [];
users.push('users1');
var ids;
ids = [23, 34, 100, 124, 44];
var arrStrings = [];
arrStrings.push('str1');
var arrStrNumOne = [];
var arrStrNumTwo = [];
// Tuples -------------------------------------
var tuple1 = ['string one', 12345];
tuple1.pop();
tuple1.push('string two', 'string three');
tuple1.push(6789);
tuple1.push(6789);
tuple1.push(6789);
console.log('tuple1 : ', tuple1);
var obj = { name: 'paolo', age: 20 };
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
};
// var -------------------------------------
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
// function -------------------------------------
var sum2NumsOne = function (num1, num2) {
    console.log(num1 + num2);
};
var sum2NumsTwo = function (num1, num2) {
    return num1 + num2;
};
function print() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log.apply(console, data);
}
print('ciao', 'paolo');
function multiply(num1, num2) {
    return num1 * num2;
}
// type -------------------------------------
var names;
names = 'three';
var sum = function (a, b) {
    return a + b;
};
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var john = { name: 'alex', age: 19 };
printPersonProperty(john, 'name');
// `keyof StringMap` resolves to `string` here
function createStringPair(property, value) {
    var _a;
    return _a = {}, _a[property] = value, _a;
}
var namePair = createStringPair('name', 'paolo');
console.log(namePair);
var x = { name: 'asdasads' };
