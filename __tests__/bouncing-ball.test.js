import { bouncingBall } from '../session-5/bouncing-ball';

describe("bouncingBall", () => {
    test("function does not mutate given parameter", () => {
        const parameter = 20;
        const actual = bouncingBall(parameter);
      expect(parameter).toBe(20);
    });
    test("returns 0 if given height is equal to 0", () => {
        const actual = bouncingBall(0);
        const expected = 0;
      expect(actual).toBe(expected);
    });
    test("returns 0 if given height is less than 0", () => {
        const actual = bouncingBall(-4.5);
        const expected = 0;
      expect(actual).toBe(expected);
    });
    test("returns 0 if given height is less than window height", () => {
        const actual = bouncingBall(1);
        const expected = 0;
      expect(actual).toBe(expected);
    });
    test("returns correct number of bounces on given height", () => {
        const actual = bouncingBall(6);
        const expected = 7;
      expect(actual).toBe(expected);
    });
    test("returns correct number of bounces on given height", () => {
        const actual = bouncingBall(1.6);
        const expected = 1;
      expect(actual).toBe(expected);
    });
});