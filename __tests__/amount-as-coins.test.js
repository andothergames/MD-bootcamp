import { amountAsCoins } from "../session-5/amount-as-coins";

describe("amountAsCoins", () => {
  test("function does not mutate given parameter", () => {
    const parameter = 20;
    const actual = amountAsCoins(parameter);
    expect(parameter).toBe(20);
  });
  test("function returns an array", () => {
    const actual = amountAsCoins(1);
    expect(actual).toBeInstanceOf(Array);
  });
  test("function returns an array of correct coin if amount is exactly divisible by that coin", () => {
    expect(amountAsCoins(1)).toEqual([1]);
    expect(amountAsCoins(2)).toEqual([2]);
    expect(amountAsCoins(5)).toEqual([5]);
    expect(amountAsCoins(10)).toEqual([10]);
    expect(amountAsCoins(25)).toEqual([25]);
  });
  test("function returns an array of correct coin for larger amount", () => {
    expect(amountAsCoins(100)).toEqual([25, 25, 25, 25]);
    expect(amountAsCoins(47)).toEqual([25, 10, 10, 2]);
    expect(amountAsCoins(43)).toEqual([25, 10, 5, 2, 1]);
  });
});
