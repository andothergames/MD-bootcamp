import { isAscending } from "../session-3/is-ascending";

describe("isAscending", () => {
  test("function does not mutate given parameter", () => {
    const parameter = [1, 2, 3];
    const actual = isAscending(parameter);
    expect(parameter).toEqual([1, 2, 3]);
  });
  test("function returns false if numbers are out of order", () => {
    const actual = isAscending([1, 20, 4, 4, 2]);
    expect(actual).toBe(false);
  });
  test("function returns true if numbers are in order", () => {
    const actual = isAscending([1, 4, 50, 100]);
    expect(actual).toBe(true);
  });
  test("function returns false if numbers are in order or same as previous number", () => {
    const actual = isAscending([1, 4, 4, 6, 10, 12, 12]);
    expect(actual).toBe(true);
  });
});
