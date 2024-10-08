import { objectsAreEqual } from "../session-10/objects-equal";

describe("objectsAreEqual", () => {
  test("function does not mutate given parameter", () => {
    const parameter1 = {a: 1, b: 2, c: 3};
    const parameter2 = {1: 1, 2: 2, 3: 3};
    objectsAreEqual(parameter1, parameter2);
    expect(parameter1).toEqual({a: 1, b: 2, c: 3});
    expect(parameter2).toEqual({1: 1, 2: 2, 3: 3});
  });
  test("function returns false when object keys do not match", () => {
    const actual = objectsAreEqual({a: 1, b: 2, c: 3}, {1: 1, 2: 2, 3: 3});
    expect(actual).toBe(false);
  });
  test("function returns true when object keys match", () => {
    const actual = objectsAreEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});
    expect(actual).toBe(true);
  });
  test("function returns false when some but not all object keys match", () => {
    const actual = objectsAreEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3, d: 4});
    expect(actual).toBe(false);
  });
});
