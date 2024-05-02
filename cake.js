function cake(input) {
  let width = Number(input.shift());
  let length = Number(input.shift());

  let cakeSize = width * length;
  let piecesTaken = 0;

  let command = input.shift();

  while (command !== "STOP") {
    let pieces = Number(command);
    piecesTaken += pieces;

    if (piecesTaken >= cakeSize) {
      let neededPieces = piecesTaken - cakeSize;
      console.log(`No more cake left! You need ${neededPieces} pieces more.`);
      return;
    }

    command = input.shift();
  }

  let piecesLeft = cakeSize - piecesTaken;
  console.log(`${piecesLeft} pieces are left.`);
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
