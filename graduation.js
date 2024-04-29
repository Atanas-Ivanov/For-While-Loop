function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;
  let negativeGradeCount = 0;
  let sumGrade = 0;
  let year = 1;
  let hasExcluded = false;
  while (year <= 12) {
    let currentGrade = Number(input[index]);
    index++;
    if (currentGrade < 4.0) {
      negativeGradeCount++;
      if (negativeGradeCount == 2) {
        hasExcluded = true;
        break;
      }
      continue;
    }
    sumGrade += currentGrade;
    year++;
  }
  let avgGrade = sumGrade / 12;
  if (hasExcluded) {
    console.log(`${name} has been excluded at ${year} grade`);
  } else {
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
  }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
