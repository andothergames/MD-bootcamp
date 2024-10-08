const familyString = (names) => {
  const family = [];

  for (let object in names) {
    if (Number(object) === names.length - 1) {
      family.push("& " + names[object].name);
    } else {
      family.push(names[object].name);
    }
  }
  return family.join(" ");
};

const family = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];

console.log(familyString(family));
