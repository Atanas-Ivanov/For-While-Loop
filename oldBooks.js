function oldBooks(input) {
  let favoriteBook = input[0];
  let index = 1;
  bookIsFound = false;
  let nextBookName = input[index];
  while (nextBookName !== "No More Books") {
    if (nextBookName === favoriteBook) {
      bookIsFound = true;
      break;
    }
    index++;
    nextBookName = input[index];
  }
  if (bookIsFound === false) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${index - 1} books.`);
  } else {
    console.log(`You checked ${index - 1} books and found it.`);
  }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
