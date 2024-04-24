function salary(input) {
  let tabs = Number(input[0]);
  let salary = Number(input[1]);

  let fine = 0;
  for (let i = 2; i < input.length; i++) {
    let website = input[i];
    switch (website) {
      case "Facebook":
        fine += 150;
        break;
      case "Instagram":
        fine += 100;
        break;
      case "Reddit":
        fine += 50;
        break;
    }
  }

  let remainingSalary = salary - fine;
  if (remainingSalary <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(remainingSalary);
  }
}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
