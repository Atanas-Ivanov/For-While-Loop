function cleverLily(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let singleToyPrice = Number(input[2]);
  let toyCount = 0;
  let startingSum = 0;
  let brothersMoney = 0;

  for (let index = 1; index <= age; index++) {
    if (index % 2 === 0) {
      startingSum += 10 + (index / 2 - 1) * 10;
      brothersMoney += 1;
    } else {
      toyCount += 1;
    }
  }

  let totalMoney = startingSum + toyCount * singleToyPrice - brothersMoney;

  if (totalMoney >= washingMachinePrice) {
    let remainingMoney = (totalMoney - washingMachinePrice).toFixed(2);
    console.log(`Yes! ${remainingMoney}`);
  } else {
    let neededMoney = (washingMachinePrice - totalMoney).toFixed(2);
    console.log(`No! ${neededMoney}`);
  }
}

cleverLily(["10", "170.00", "6"]);
