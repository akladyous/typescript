type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;
stringToNumber = (input) => input.length; // Ok

function add(a: number): number;
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;
function add(a: number, b?: number, c?:number): number {
  if (b === undefined && c === undefined) { // if only one parameter is passed
    return a;
  } else { // if two or three parameters are passed
    return (a + (b ?? 0) + (c ?? 0));
  }
}



// var a0 = undefined, b0=undefined, c0=undefined
// var a1 = 1, b1=1, c1 = 1
// How to verify if three numbers are equal using logical operators
