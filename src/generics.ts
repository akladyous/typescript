class Animal<S extends String, N extends number> {
  name: S;
  age: N;
  constructor(name: S, age: N) {
    this.name = name;
    this.age = age;
  }

}
type A<T> = [T | never] extends [T] ? true : false;

let unaSetta: A<number>;