function calculateActorPoints(input) {
  let actorName = input.shift();
  let initialPoints = parseFloat(input.shift());
  let evaluatorCount = parseInt(input.shift());

  let totalPoints = initialPoints;

  for (let i = 0; i < evaluatorCount; i++) {
    let evaluatorName = input.shift();
    let evaluatorPoints = parseFloat(input.shift());

    let pointsToAdd = (evaluatorName.length * evaluatorPoints) / 2;
    totalPoints += pointsToAdd;

    if (totalPoints >= 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(
          1
        )}!`
      );
      return;
    }
  }

  let neededPoints = (1250.5 - totalPoints).toFixed(1);
  console.log(`Sorry, ${actorName} you need ${neededPoints} more!`);
}

calculateActorPoints([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
