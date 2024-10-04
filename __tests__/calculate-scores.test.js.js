import { calculateScores } from "../session-7/calculate-scores";

const scores = [
  "2:1",
  "1:1",
  "3:2",
  "0:1",
  "2:2",
  "1:0",
  "4:3",
  "0:0",
  "3:3",
  "2:0",
  "1:2",
  "3:1",
  "1:1",
  "4:2",
  "2:1",
  "1:3",
  "3:3",
  "2:0",
  "0:1",
  "3:0",
  "1:2",
  "2:1",
  "0:0",
  "1:1",
  "2:3",
  "1:0",
  "4:1",
  "0:0",
  "3:2",
  "2:1",
  "1:1",
  "0:2",
  "3:3",
  "2:0",
  "1:0",
  "2:1",
  "3:3",
  "0:1",
];

describe("calculateScores", () => {
  test("function does not mutate given parameters", () => {
    const score = ["1:2", "2:1"];
    calculateScores(score, "home");
    expect(score).toEqual(["1:2", "2:1"]);
  });
  test("function returns correct score for home", () => {
    expect(calculateScores(scores, "home")).toEqual(66);
  });
  test("function returns correct score for home", () => {
    expect(calculateScores(scores, "away")).toEqual(36);
  });
});
