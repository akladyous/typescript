function add(x: number, y: number): number {
    return x + y;
}
let xPlusY = add(1, 1);

function voidFunction(): void {
    console.log('void');
}
// function signature //
type Signature1 = (num1: number, num2: number) => number;
const addNumbers1: Signature1 = function (num1: number, num2: number): number {
    return num1 + num2;
};
// ----------------------------------------------------------------------------------
type Signature2 = {
    (x: number, y: number): number;
};
const addTwoNumbers1: Signature2 = function (x: number, y: number): number {
    return x + y;
};
// ----------------------------------------------------------------------------------
type Signature3 = {
    (num1: number, num2: number): number;
    defaultNum2: number;
};
const addNumbers2: Signature3 = (num1, num2 = addNumbers2.defaultNum2) => {
    return num1 + num2;
};
addNumbers2.defaultNum2 = 0; // set the default value for num2
// ----------------------------------------------------------------------------------
//Generic Functions
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}
firstElement(['a', 'b', 'c']);
firstElement([true, false, true]);
// ----------------------------------------------------------------------------------
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
// ----------------------------------------------------------------------------------
function argsFunc1(numbers: number[]) {
    for (const num of numbers) {
        console.log(num);
    }
}
argsFunc1([1, 2, 3, 4]);
// ----------------------------------------------------------------------------------
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}
longest('a', 'a');
