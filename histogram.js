function histogram(input) {
  let n = Number(input[0]);

  let countGroup1 = 0;
  let countGroup2 = 0;
  let countGroup3 = 0;
  let countGroup4 = 0;
  let countGroup5 = 0;

  for (let i = 1; i <= n; i++) {
    let currentNum = Number(input[i]);

    if (currentNum < 200) {
      countGroup1 += 1;
    } else if (currentNum < 400) {
      countGroup2 += 1;
    } else if (currentNum < 600) {
      countGroup3 += 1;
    } else if (currentNum < 800) {
      countGroup4 += 1;
    } else {
      countGroup5 += 1;
    }
  }
  let percentGroup1 = (countGroup1 / n) * 100;
  let percentGroup2 = (countGroup2 / n) * 100;
  let percentGroup3 = (countGroup3 / n) * 100;
  let percentGroup4 = (countGroup4 / n) * 100;
  let percentGroup5 = (countGroup5 / n) * 100;
  console.log(`${percentGroup1.toFixed(2)}%`);
  console.log(`${percentGroup2.toFixed(2)}%`);
  console.log(`${percentGroup3.toFixed(2)}%`);
  console.log(`${percentGroup4.toFixed(2)}%`);
  console.log(`${percentGroup5.toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);
