import { sumOfSequence } from "../session-5/sum-of-sequence";

describe("sumOfSequence", () => {
  test("function does not mutate given parameters", () => {
    const begin = 1;
    const end = 4;
    const step = 1;
    sumOfSequence(begin, end, step);
    expect(begin).toBe(1);
    expect(end).toBe(4);
    expect(step).toBe(1);
  });
  test("returns error message if any given parameter is a negative integer", () => {
    const expected = "Please only give positive integers as parameters";
    expect(sumOfSequence(1, 4, -5)).toBe(expected);
    expect(sumOfSequence(-1, 4, 5)).toBe(expected);
    expect(sumOfSequence(1, -4, 5)).toBe(expected);
  });
  test("returns sum of correctly stepped sequence", () => {
    const actual = sumOfSequence(1, 4, 1);
    const expected = 10;
    expect(actual).toBe(expected);
  });
  test("returns sum of correctly stepped sequence", () => {
    const actual = sumOfSequence(2, 6, 2);
    const expected = 12;
    expect(actual).toBe(expected);
  });
});
