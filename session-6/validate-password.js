export function validatePassword(password) {
  const letter = /[a-zA-Z]/;
  const number = /[0-9]/;

  if (password.length < 8 || !letter.test(password) || !number.test(password)) {
    return "Fail";
  }
  return "Pass";
}
