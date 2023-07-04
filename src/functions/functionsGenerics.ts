// ----------------------------------------------------------------------------------
function longest<T extends { length: number }>(a: T, b: T) {
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
