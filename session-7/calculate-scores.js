export function calculateScores(leagueScores, side) {
  let homeScore = 0;
  let awayScore = 0;

  for (let game of leagueScores) {
    const separatedScore = game.split(":");
    const homePoints = Number(separatedScore[0]);
    const awayPoints = Number(separatedScore[1]);

    if (homePoints === awayPoints) {
      homeScore++;
      awayScore++;
    }
    if (homePoints > awayPoints) {
      homeScore += 3;
    }
    if (homePoints < awayPoints) {
      awayScore += 3;
    }
  }

  if (side === "home") return homeScore;
  if (side === "away") return awayScore;
}
