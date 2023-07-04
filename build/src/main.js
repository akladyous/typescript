"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
var typescript_svg_1 = __importDefault(require("./typescript.svg"));
var vite_svg_1 = __importDefault(require("/vite.svg"));
var counter_1 = require("./counter");
document.querySelector('#app').innerHTML = "\n  <div>\n    <a href=\"https://vitejs.dev\" target=\"_blank\">\n      <img src=\"".concat(vite_svg_1.default, "\" class=\"logo\" alt=\"Vite logo\" />\n    </a>\n    <a href=\"https://www.typescriptlang.org/\" target=\"_blank\">\n      <img src=\"").concat(typescript_svg_1.default, "\" class=\"logo vanilla\" alt=\"TypeScript logo\" />\n    </a>\n    <h1>Vite + TypeScript</h1>\n    <div class=\"card\">\n      <button id=\"counter\" type=\"button\"></button>\n    </div>\n    <p class=\"read-the-docs\">\n      Click on the Vite and TypeScript logos to learn more\n    </p>\n  </div>\n");
(0, counter_1.setupCounter)(document.querySelector('#counter'));
var prova = 'prova';
console.log('prova : ', prova);
console.log('prova : ', prova);
