"use strict";
var _loop_1 = function (i) {
    var log = function () {
        console.log(i);
    };
    setTimeout(log, 100);
};
for (var i = 0; i < 3; i++) {
    _loop_1(i);
}
