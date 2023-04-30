type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;
stringToNumber = (input) => input.length; // Ok



function sum(a: number, b: number, c?: number) : number {
  if (c) {
    return a+b+c
  }
  return a+ b
}




function add(a: number): any;
function add(a: number, b: number): any;
function add(a: string, b: string): any;
function add(a: number, b: number, c: number): number;
function add(a: any, b: any, c?: any): any {
  if (c) {
    return a + c;
  }
  if (typeof a === 'string') {
    return `a is ${a}, b is ${b}`;
  } else {
    return a + b;
  }
}

