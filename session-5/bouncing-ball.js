export function bouncingBall(floorHeight) {
  const windowHeight = 1.5;
  if (floorHeight <= 0 || floorHeight < windowHeight) {
    return 0;
  }

  let i = floorHeight;
  let counter = 0;

  while (i > windowHeight) {
    counter++
    i = i * 0.667;
    if (i > windowHeight) {
        counter++;
    }
  }
  return counter;
}
