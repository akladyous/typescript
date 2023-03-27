// -------------------------------------
document.querySelector('body')?.addEventListener('click', (e) => {});
// -------------------------------------
let yearEl: HTMLSpanElement | null;
yearEl = document.querySelector('#year');
let thisYear: string = new Date().getFullYear().toLocaleString();
if (yearEl) {
  yearEl.setAttribute('datetime', thisYear);
  yearEl.setAttribute('data-copyright-year', thisYear);
}
console.log(yearEl?.dataset.copyrightYear);
delete yearEl?.dataset.copyrightYear;
console.log(yearEl?.dataset);
// -------------------------------------
let str: String;
let num: Number;
let boolean: boolean;
const strConstant = 'sdasd';
let varStrNum: string | Number;
var int: Number;

// Arrays -------------------------------------
let arr = [];
let arr1 = ['name', 123, true];
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
let users: string[] = [];
users.push('users1');
let ids: Array<number>;
ids = [23, 34, 100, 124, 44];
let arrStrings: Array<string> = [];
arrStrings.push('str1');
let arrStrNumOne: Array<number | string> = [];
let arrStrNumTwo: (string | number)[] = [];

// Tuples -------------------------------------
let tuple1: [string, number] = ['string one', 12345];
tuple1.pop();
tuple1.push('string two', 'string three');
tuple1.push(6789);
tuple1.push(6789);
tuple1.push(6789);
console.log('tuple1 : ', tuple1);
const obj = { name: 'paolo', age: 20 };
// var -------------------------------------
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100 * i);
}
// function -------------------------------------
const sum2NumsOne = (num1: number, num2: number) => {
  console.log(num1 + num2);
};
const sum2NumsTwo = (num1: number, num2: number): number => {
  return num1 + num2;
};
function print(...data: any[]) {
  console.log(...data);
}
print('ciao', 'paolo');

function multiply(num1: number, num2: number): number {
  return num1 * num2;
}
// type -------------------------------------
let names: 'one' | 'two' | 'three';
names = 'three';
type mathFunction = (num1: number, num2: number) => number;
const sum: mathFunction = (a, b) => {
  return a + b;
};
type Users = {
  name: string;
  age: number;
  status: boolean;
};
// Generics  -------------------------------------
// The keyof type operator
interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let john: Person = { name: 'alex', age: 19 };
printPersonProperty(john, 'name');
// keyof with index signatures
type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
let namePair: StringMap = createStringPair('name', 'paolo');
console.log(namePair);
// Mapped Types -------------------------------------

// Mapped Types -------------------------------------
type OnlyString = {
  [key: string]: string;
};
let x: OnlyString = { name: 'asdasads' };
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

// -------------------------------------
interface StringArray {
  [index: number]: string;
}
