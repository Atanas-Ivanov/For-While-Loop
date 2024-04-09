function sumOfNumbers(input) {
  let numAsText = "" + input[0]; //prevrashtame v STRING s prazna '' ili String(input[0]i mahame skobite ot vhoda)
  let sum = 0;
  for (i = 0; i < numAsText.length; i++) {
    let num = Number(numAsText[i]);
    sum += num;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);
