function sequence(input) {
  let n = Number(input[0]);
  index = 1;
  while (index <= n) {
    console.log(index);
    index = index * 2 + 1;
  }
}
sequence(["3"]);
