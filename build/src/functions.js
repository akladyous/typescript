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
var sum2Nums1 = function (x, y) {
    return x + y;
};
var sum2Nums2 = function (_x, _y) { return 3; };
sum2Nums1(1, 1);
sum2Nums2(1, 1);
var sum2Nums3 = function (num1, num2) {
    if (num2 === void 0) { num2 = sum2Nums3.defaultNum2; }
    return num1 + num2;
};
sum2Nums3.defaultNum2 = 0; // set the default value for num2
var sum2Nums4 = function (x, y) {
    if (y === void 0) { y = sum2Nums4.defaultValue; }
    return x + y;
};
sum2Nums4.defaultValue = 0;
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
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
longest('a', 'a');
function serializeJson(value, options) {
    var _a;
    var indentation = (_a = options === null || options === void 0 ? void 0 : options.format) === null || _a === void 0 ? void 0 : _a.indend;
    return JSON.stringify(value, null, indentation);
}
var user = { name: 'paolo' };
serializeJson(user);
serializeJson(user, { format: { indend: 2 } });
