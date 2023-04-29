function add(x: number, y: number): number {
    return x + y;
}
let xPlusY = add(1, 1);

function voidFunction(): void {
    console.log('void');
}
// function type expression //
type Signature1 = (num1: number, num2: number) => number;
const addNumbers1: Signature1 = function (num1: number, num2: number): number {
    return num1 + num2;
};
// ----------------------------------------------------------------------------------
type Signature2 = {
    (x: number, y: number): number;
};
const sum2Nums1: Signature2 = function (x: number, y: number): number {
    return x + y;
};
const sum2Nums2: Signature2 = (_x: number, _y: number) => 3;
sum2Nums1(1,1)
sum2Nums2(1,1)
// ----------------------------------------------------------------------------------
type Signature3 = {
    (num1: number, num2: number): number;
    defaultNum2: number;
};
const sum2Nums3: Signature3 = (num1, num2 = sum2Nums3.defaultNum2) => {
    return num1 + num2;
};
sum2Nums3.defaultNum2 = 0; // set the default value for num2
// ----------------------------------------------------------------------------------
type Signature4 = {
  (x: number, y: number) : number;
  defaultValue: number
}
const sum2Nums4: Signature4 = function( x, y = sum2Nums4.defaultValue ) {
  return x+y
}
sum2Nums4.defaultValue = 0
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

type SerializationOption = {
    format?: { indend: number };
};

function serializeJson(value: any, options?: SerializationOption) {
    const indentation = options?.format?.indend;
    return JSON.stringify(value, null, indentation);
}
const user = { name: 'paolo' };
serializeJson(user);
serializeJson(user, { format: { indend: 2 } });
