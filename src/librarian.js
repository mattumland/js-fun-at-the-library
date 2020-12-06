class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    }
    greetPatron(patronName, isMorning) {
      if (isMorning === true) {
        return `Good morning, ${patronName}!`;
      }
      else {
      return `Hello, ${patronName}!`;
      }
    }
    findBook(book) {
      var isOnShelf = false;
      var shelfList = Object.keys(this.library.shelves);
      // console.log(shelfList);
      // console.log(this.library.shelves);

      // console.log(this.library.shelves[shelfList[0]]);

      for (var i = 0; i < shelfList.length; i++) {
                      // console.log(isOnShelf);
        for (var y = 0; y < this.library.shelves[shelfList[i]]; y++) {
                          console.log(isOnShelf);
          if (this.library.shelves[shelflist[i]].title === book) {
            isOnShelf = true;

          }
        }
      }









   }
}

module.exports = Librarian;
