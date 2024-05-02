function moving(input) {
  let width = Number(input.shift());
  let length = Number(input.shift());
  let height = Number(input.shift());

  let volume = width * length * height;
  let totalVolume = 0;

  let command = input.shift();

  while (command !== "Done") {
    let boxes = Number(command);
    totalVolume += boxes;

    if (totalVolume >= volume) {
      let neededVolume = totalVolume - volume;
      console.log(
        `No more free space! You need ${neededVolume} Cubic meters more.`
      );
      return;
    }

    command = input.shift();
  }

  let cubicMetersLeft = volume - totalVolume;
  console.log(`${cubicMetersLeft} Cubic meters left.`);
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
