const onPar = (par) => {
  const playerShots = generatePlayerScores(par);
  const coursePar = sumOfShots(par);
  const playerScore = sumOfShots(playerShots);
  const scoreArray = scoresPerHole(par, playerShots);
  const score = playerScore - coursePar;
  return `Course total: ${coursePar}\nPlayers total: ${playerScore}\nPlayers overall score: ${score}\nScores per shot: ${scoreArray}`;
};

const generatePlayerScores = (course) => {
  const shots = [];
  for (let shot of course) {
    const randomShot = Math.ceil(Math.random() * 6);
    shots.push(randomShot);
  }
  return shots;
};

const sumOfShots = (shots) => {
  const sum = shots.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sum;
};

const scoresPerHole = (par, playerScores) => {
  const scoresPerHoleArray = [];
  for (let shot in par) {
    const score = playerScores[shot] - par[shot];
    if ((score === 0)) {
      scoresPerHoleArray.push("par");
    } else {
      scoresPerHoleArray.push(score);
    }
  }
  return scoresPerHoleArray;
};

const carnoustie = [4, 4, 4, 4, 4, 5, 4, 3, 4, 4, 4, 5, 3, 4, 4, 3, 4, 4];

console.log(onPar(carnoustie));
