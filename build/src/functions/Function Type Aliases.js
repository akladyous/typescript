"use strict";
var stringToNumber;
stringToNumber = function (input) { return input.length; }; // Ok
function addNumbers(a, b, c) {
    if (b === undefined && c === undefined) { // if only one parameter is passed
        return a;
    }
    else { // if two or three parameters are passed
        return (a + (b !== null && b !== void 0 ? b : 0) + (c !== null && c !== void 0 ? c : 0));
    }
}
// var a0 = undefined, b0=undefined, c0=undefined
// var a1 = 1, b1=1, c1 = 1
// How to verify if three numbers are equal using logical operators
