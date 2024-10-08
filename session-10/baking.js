const bakeCakes = (recipe, ingredients) => {
  const amount = [];

  for (let key of Object.keys(recipe)) {
    if (!(key in ingredients)) {
      return 0;
    }
    amount.push(ingredients[key] / recipe[key]);
  }

  return Math.min(...amount);
};

const recipe1 = { flour: 50, sugar: 50, butter: 50, eggs: 1 };
const ingredients1 = { flour: 200, sugar: 200, butter: 200, eggs: 4 };
const recipe2 = { flour: 50, apples: 2, sugar: 50, butter: 50, eggs: 1 };
const ingredients2 = { flour: 200, sugar: 200, butter: 200, eggs: 4 };
const ingredients3 = { flour: 200, sugar: 100, butter: 50, eggs: 1 };

console.log(bakeCakes(recipe1, ingredients1));
console.log(bakeCakes(recipe2, ingredients2));
console.log(bakeCakes(recipe1, ingredients3));
