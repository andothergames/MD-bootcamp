import { validatePassword } from "../session-6/validate-password";

describe("validatePassword", () => {
  test("returns error message when password is less than 8 chars long", () => {
    const actual = validatePassword("fruit1");
    const expected = "Fail";
    expect(actual).toBe(expected);
  });
  test("returns error message when password does not contain at least one number", () => {
    const actual = validatePassword("fruit");
    const expected = "Fail";
    expect(actual).toBe(expected);
  });
  test("returns error message when password does not contain at least one number", () => {
    const actual = validatePassword("12345678");
    const expected = "Fail";
    expect(actual).toBe(expected);
  });
  test("returns error message when password does not contain at least one number", () => {
    const actual = validatePassword("OKPassword123");
    const expected = "Pass";
    expect(actual).toBe(expected);
  });
});
