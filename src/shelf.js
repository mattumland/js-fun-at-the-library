function shelfBook (book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
    return shelf;
  }
  else {
    return shelf;
  }

}

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++){
    if (shelf[i].title === bookTitle) {
      shelf.splice(i,1);
    }
  }
  return shelf;
}

function listTitles(shelf) {
  var titleList = '';
  for (i = 0; i < shelf.length; i++) {
    titleList = titleList + shelf[i].title;
    if ((i+1) != shelf.length) {
      titleList = titleList + `, `;
    }
  }
  return titleList;
}

function searchShelf(shelf, book) {
  var isOnShelf = false;
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book){
      isOnShelf = true;
    }
  }
  return isOnShelf;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
