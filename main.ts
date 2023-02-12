let str: String;
let num: Number;
let boolean: boolean;
const constant = 'sdasd';
let varStrNum: string | Number;

// Arrays ------------------------------------------------------------
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

// Tuples -----------------------------------------------------------
let tuple1: [string, number] = ['string one', 12345];
tuple1.pop();
tuple1.push('string two', 'string three');
tuple1.push(6789);
console.log('tuple1 : ', tuple1);
const obj = { name: 'paolo', age: 20 };
// function -----------------------------------------------------------
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
// type -----------------------------------------------------------
type mathFunction = (num1: number, num2: number) => number;
const sum: mathFunction = (a, b) => {
  return a + b;
};
type Users = {
  name: string;
  age: number;
  status: boolean;
};
