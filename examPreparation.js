function examPreparation(input) {
  let badGradesLimit = Number(input[0]);
  let index = 1;
  let taskName = input[index];
  let grade = Number(input[index + 1]);
  let totalScore = 0;
  let numberOfProblems = 0;
  let lastProblemName = "";

  while (taskName !== "Enough") {
    if (grade <= 4) {
      badGradesLimit--;
      if (badGradesLimit === 0) {
        console.log(`You need a break, ${input[0]} poor grades.`);
        return;
      }
    }
    totalScore += grade;
    numberOfProblems++;
    lastProblemName = taskName;

    index += 2;
    taskName = input[index];
    grade = Number(input[index + 1]);
  }

  let averageScore = totalScore / numberOfProblems;
  console.log(`Average score: ${averageScore.toFixed(2)}`);
  console.log(`Number of problems: ${numberOfProblems}`);
  console.log(`Last problem: ${lastProblemName}`);
}

// Example usage:
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
