function createLibrary(libraryName) {
  var libraryShelves = {
    fantasy: [],
    fiction: [],
    nonFiction: [],
  };
  var library = {
    name: libraryName,
    shelves: libraryShelves,
  };
  return library;
}

function addBook(library, newBook) {
  genreShelf = newBook.genre;
  library.shelves[genreShelf].push(newBook);
  return library;
}

function checkoutBook(library, bookTitle, bookShelf) {
  isOnShelf = false;
  for (var i = 0; i < library.shelves[bookShelf].length; i++) {
    if (library.shelves[bookShelf][i].title === bookTitle) {
      isOnShelf = true;
    }
  }
  if (isOnShelf === false) {
      return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  }
  for (var i = 0; i < library.shelves[bookShelf].length; i++) {
    if (library.shelves[bookShelf][i].title === bookTitle) {
      var pulledBook = library.shelves[bookShelf].splice(i,1);
    }
  }
  return `You have now checked out ${pulledBook[0].title} from the ${library.name}`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
