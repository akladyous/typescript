"use strict";
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.age = age;
    }
    return Animal;
}());
