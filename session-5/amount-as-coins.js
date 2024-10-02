export function amountAsCoins(amount) {
  let change = amount;
  let coins = [];
  while (change > 0) {
    if (change >= 25) {
      change -= 25;
      coins.push(25);
      continue;
    }
    if (change >= 10) {
      change -= 10;
      coins.push(10);
      continue;
    }
    if (change >= 5) {
      change -= 5;
      coins.push(5);
      continue;
    }
    if (change >= 2) {
      change -= 2;
      coins.push(2);
      continue;
    }
    if (change >= 1) {
      change -= 1;
      coins.push(1);
      continue;
    }
  }
  return coins;
}
