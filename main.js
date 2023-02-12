"use strict";
var str;
var num;
var boolean;
var constant = 'sdasd';
var varStrNum;
// Arrays ------------------------------------------------------------
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
// Tuples -----------------------------------------------------------
var tuple1 = ['string one', 12345];
tuple1.pop();
tuple1.push('string two', 'string three');
tuple1.push(6789);
console.log('tuple1 : ', tuple1);
var obj = { name: 'paolo', age: 20 };
// function -----------------------------------------------------------
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
var sum = function (a, b) {
    return a + b;
};
