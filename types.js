"use strict";
var num1;
var t1;
t1 = [1, 2];
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
var color = Colors.Blue;
color = Colors.Green;
console.log(Colors[3]);
