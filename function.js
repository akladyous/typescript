"use strict";
function add(x, y) {
    return x + y;
}
var xPlusY = add(1, 1);
function voidFunction() {
    console.log('void');
}
var addNumbers1 = function (num1, num2) {
    return num1 + num2;
};
var addTwoNumbers1 = function (x, y) {
    return x + y;
};
var addNumbers2 = function (num1, num2) {
    if (num2 === void 0) { num2 = addNumbers2.defaultNum2; }
    return num1 + num2;
};
addNumbers2.defaultNum2 = 0; // set the default value for num2
// ----------------------------------------------------------------------------------
//Generic Functions
function firstElement(arr) {
    return arr[0];
}
firstElement(['a', 'b', 'c']);
firstElement([true, false, true]);
// ----------------------------------------------------------------------------------
function map(arr, func) {
    return arr.map(func);
}
var parsed = map(['1', '2', '3'], function (n) { return parseInt(n); });
// ----------------------------------------------------------------------------------
function argsFunc1(numbers) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num_1 = numbers_1[_i];
        console.log(num_1);
    }
}
argsFunc1([1, 2, 3, 4]);
// ----------------------------------------------------------------------------------
function longest(a, b) {
    debugger;
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
longest('a', 'a');
