function examPreparation(input) {
  let badGradesLimit = Number(input.shift());
  let index = 0;
  let taskName = input[index];
  let totalScore = 0;
  let numberOfProblems = 0;
  let lastProblem = "";

  while (taskName !== "Enough") {
    let grade = Number(input[index + 1]);
    if (grade <= 4) {
      badGradesLimit--;
      if (badGradesLimit === 0) {
        console.log(`You need a break, ${badGradesLimit} poor grades.`);
        return;
      }
    } else {
      totalScore += grade;
      numberOfProblems++;
      lastProblem = taskName;
    }

    index += 2;
    taskName = input[index];
  }

  let averageScore = (totalScore / (numberOfProblems + 1)).toFixed(2);
  console.log(`Average score: ${averageScore}`);
  console.log(`Number of problems: ${numberOfProblems + 1}`);
  console.log(`Last problem: ${lastProblem}`);
}

// Example usage:
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
