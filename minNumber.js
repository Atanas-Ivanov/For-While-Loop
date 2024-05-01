function minNumber(input) {
  let min = Number.MAX_SAFE_INTEGER;
  let i = 0;

  while (i < input.length && input[i] !== "Stop") {
    if (Number(input[i]) < min) {
      min = Number(input[i]);
    }
    i++;
  }

  console.log(min);
}

minNumber(["-10", "20", "-30", "Stop"]);
