function vacation(input) {
  let neededMoney = Number(input.shift());
  let availableMoney = Number(input.shift());
  let consecutiveSpendDays = 0;
  let totalDays = 0;

  while (availableMoney < neededMoney) {
    let action = input.shift();
    let amount = Number(input.shift());

    if (action === "save") {
      availableMoney += amount;
      consecutiveSpendDays = 0;
    } else if (action === "spend") {
      availableMoney -= amount;
      consecutiveSpendDays++;
    }

    if (availableMoney < 0) {
      availableMoney = 0;
    }

    totalDays++;

    if (consecutiveSpendDays === 5) {
      console.log(`You can't save the money.`);
      console.log(`${totalDays}`);
      return;
    }
  }

  console.log(`You saved the money for ${totalDays} days.`);
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
