// https://solverfox.dev/writing/ts-typed-join
// Sample input

type Items0 = [];
type Items1 = ['a'];
type Items2 = ['a', 'b'];
type Items3 = ['a', 'b', 'c'];
type Items4 = ['a', 'b', 'c', 'd'];
type ItemsN = string[];

// // Usage
// type ClassKey0 = Join<Items0, ' '>; // ""
// type ClassKey1 = Join<Items1, ' '>; // "a"
// type ClassKey2 = Join<Items2, ' '>; // "a b"
// type ClassKey3 = Join<Items3, ' '>; // "a b c"
// type ClassKey4 = Join<Items4, ' '>; // "a b c d"
// type ClassKey5 = Join<ItemsN, ' '>; // string

// type Hyphened2 = Join<Items3, '-'>; // "a-b-c"
// type Joined3 = Join<Items4>; // "abcd"

// // Actual type
// export type Join<Items, Delimiter extends string = ''> = Items extends [
// 	any,
// 	...any[]
// ]
// 	? `${Items[0]}${HasTail<Items> extends true
// 			? `${Delimiter}${Join<Tail<Items>, Delimiter>}`
// 			: ``}`
// 	: string[] extends Items
// 	? string
// 	: ``;

// // Helper type
// type Tail<Items extends string[]> = Items extends [string, ...infer Tail]
// 	? Tail
// 	: never;
// type Tail0 = Tail<Items0>; // never
// type Tail1 = Tail<Items1>; // []
// type Tail2 = Tail<Items2>; // ["b"]
// type Tail3 = Tail<Items3>; // ["c"]
// type Tail4 = Tail<Items4>; // ["d"]

// // Helper type
// type HasTail<Items extends string[]> = Items extends [any, any, ...any[]]
// 	? true
// 	: false;

// type HasTail0 = HasTail<Items0>; // false
// type HasTail1 = HasTail<Items1>; // false
// type HasTail2 = HasTail<Items2>; // true
// type HasTail3 = HasTail<Items3>; // true
// type HasTail4 = HasTail<Items4>; // true

