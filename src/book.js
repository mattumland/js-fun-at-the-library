function createTitle(bookIdea) {
    return `The ${bookIdea}`;
}

function buildMainCharacter(charName, charAge, charPronouns) {
  var character = {
    name: charName,
    age: charAge,
    pronouns: charPronouns,
  };
  return character;
}

function saveReview(text, reviewArray) {
  if (reviewArray.length === 0) {
      reviewArray.push(text);
  }
  var isRepeat;
      for (var i = 0; i < reviewArray.length; i++) {
        if (reviewArray[i] === text) {
          isRepeat = true;
        }
      }
        if (isRepeat != true) {
          reviewArray.push(text);
        }
return reviewArray;
}

function calculatePageCount(bookTitle) {
  var bookPageCount = (bookTitle.length * 20);
  return bookPageCount;
}

function writeBook (bookTitle, bookCharacter, bookGenre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre,
  }
  return book;
}

function editBook (book) {
  book.pageCount = (book.pageCount*.75);
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
