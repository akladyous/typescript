function add(x: number, y: number): number {
  return x + y;
}
let xPlusY = add(1, 1);

function voidFunction(): void {
  console.log('void');
}
//
type twoNumArgs = {
  (x: number, y: number): number;
};
const f1: twoNumArgs = (num1: number, num2: number) => {
  return num1 + num2;
};

type callSingnature = {
  description: string;
  (someArg: number): boolean;
};

function func1(func: callSingnature) {
  func.description = 'hello';
  console.log(func.description);
}
