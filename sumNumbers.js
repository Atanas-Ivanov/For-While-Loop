function sumNumbers(input) {
  let sum = 0;
  let i = 1;
  while (i < input.length) {
    sum += Number(input[i]);
    i++;
  }
  console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"]);
