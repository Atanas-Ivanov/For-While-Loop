function tennisRank(input) {
  let tournamentCount = Number(input[0]);
  let startingPoints = Number(input[1]);
  let pointsWon = 0;
  let tournamentsWon = 0;

  for (let i = 2; i < tournamentCount + 2; i++) {
    currentResult = input[i];

    if (currentResult === "W") {
      pointsWon += 2000;
      tournamentsWon += 1;
    } else if (currentResult === "F") {
      pointsWon += 1200;
    } else {
      pointsWon += 720;
    }
  }
  let finalPoints = startingPoints + pointsWon;
  console.log(`Final points: ${finalPoints}`);

  let averagePoints = pointsWon / tournamentCount;
  console.log(`Average points: ${Math.floor(averagePoints)}`);

  let percentsWon = (tournamentsWon / tournamentCount) * 100;
  console.log(`${percentsWon.toFixed(2)}%`);
}

tennisRank(["5", "1400", "F", "SF", "W", "W", "SF"]);
