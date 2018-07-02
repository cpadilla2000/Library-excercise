var Library = function() {
  this._bookshelf = new Array();
};

Library.prototype.addBook = function (book) {
  //Purpose: Add a book object to your books array.
  //Return:boolean true if it is not already added, false if it is already added.

  if(this._bookshelf.length) {
    for(var i = 0; i < this._bookshelf.length; i++) {//itteration through bookshelf
      if(this._bookshelf[i].title.indexOf(book.title) > -1){ //if statement for index of title greater than negative 1
        return false;
      }
    }
  }
  this._bookshelf.push(book);//then push books to book array
        return true;
};

Library.prototype.removeBookByTitle = function (title) {
//Purpose: Remove book from from the books array by its title.
//Return:boolean true if the book(s) were removed, false if no books match

  for(var i = 0; i < this._bookshelf.length; i++) {//itteration through bookshelf
    if(this._bookshelf[i].title.indexOf(title) > -1) {// remove book from this array point
      this._bookshelf.splice(i, 1)
      return true + " " + "-" + " " + "this title was removed from bookshelf";// match this to the title coming in. if it matches return true.
    }
  }

  return false;
};

Library.prototype.removeBookByAuthor = function (author) {
//Purpose: Remove a specific book from your books array by the author name.
//Return: boolean true if the book(s) were removed, false if no books match

  for(var i = 0; i < this._bookshelf.length; i++) {//itteration through bookshelf
    if(this._bookshelf[i].author.indexOf(author) > -1) {//if statement for finding book by author
      this._bookshelf.splice(i, 1)//splice book from array to remove book
      return true + " " + "-" + " " + "book was removed by author from bookshelf";
    }
  }
      return false;
};

Library.prototype.getRandomBook = function () {
//Purpose: Return a random book object from your books array
//Return: book object if you find a book, null if there are no books

    var rand = this._bookshelf[Math.floor(Math.random() * this._bookshelf.length)]; {// variable for math random to pick random book from books array
      return rand;// returns book object
  }
  return null;//return null if no books
};

Library.prototype.getBookByTitle = function (title) {
  //Purpose: Return all books that completely or partially matches the string title passed into the function
  //Return: array of book objects if you find books with matching titles, empty array if no books are found
  //iterate through bookshelf and if titles match return that book otherwise return false

  for (var i = 0; i < this._bookshelf.length; i++) {//bookshelf itteration
    if(this._bookshelf[i].title === title) {//if statement title is equal to title return index of book from bookshelf
    return this._bookshelf[i];
    }
  }

  return false;//otherwise return false
};

Library.prototype.getBooksByAuthor = function (authorName) {
  //Purpose: Finds all books where the author’s name partially or completely match-es the authorName argument passed to the function.
  //Return:array of books if you find books with match authors, empty array if no books match

  var tempLib = new Array();
    for (var i = 0; i < this._bookshelf.length; i++) {//loop through bookshelf and if author in param matches current book author in for iteration then add book
      if (this._bookshelf[i].author === authorName) {
       tempLib.push(this._bookshelf[i].title);//book to tempLib and return templib
      }
    }
  return tempLib;
};

Library.prototype.addBooks = function (books) {
  //Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
  //Return: number number of books successfully added, 0 if no books were added

  var booksAdded = 0;
  for (var i = 0; i < books.length; i++) {//iterate through books array
    if(this.addBook(books[i])){//use this.addBook function to add each book in books Array
      booksAdded++;
    }
  }
  return booksAdded;
};

Library.prototype.getAuthors = function () {
  //Purpose: Find the distinct authors’ names from all books in your library
  //Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist

  var tempAuths = new Array();//New array called TempAuths

  for (var i = 0; i < this._bookshelf.length; i++) {//bookshelf itteration
    var doesAuthExistInTemp = false;

    for (var j = 0; j < tempAuths.length; j++) { //tempArray itteration

      if (this._bookshelf[i].author === tempAuths[j]){//comparison if statement between both book arrays
        doesAuthExistInTemp = true;
      }
    }

    if(!doesAuthExistInTemp){//logical not operator for variable doesAuthExistInTemp
     tempAuths.push(this._bookshelf[i].author);// push author to bookshelf
    }
  }

  return tempAuths;
};

Library.prototype.getRandomAuthorByName = function () {
  //Purpose: Retrieves a random author name from your books collection
  //Return: string author name, null if no books exist

  if (this._bookshelf.length === 0) {//if statement for bookshlef
    return null;
  };
  return this.getRandomBook().author;//use get random book function for authors

};

//books in library function
function booksInLibrary () {
   gLibrary.addBook(gbookOne)
   gLibrary.addBook(gbookTwo)
   gLibrary.addBook(gbookThree)
   gLibrary.addBook(gbookFour)
   gLibrary.addBook(gbookFive)
   gLibrary.addBook(gbookSix)
   gLibrary.addBook(gbookSeven)
   gLibrary.addBook(gbookEight)
   gLibrary.addBook(gbookNine)
   return gLibrary;
 };




//create book object
var Book = function (Title, Author, numberOfPages, publishDate) {
  this.title = Title;
  this.author = Author;
  this.numberOfPages = numberOfPages;
  this.publishDate = new Date(publishDate);
};

//new books array
var newBooks = [
  new Book ("1984", "George Orwell", 456, "6-08-1949"),
  new Book ("To Kill A Mockingbird", "Harper Lee", 333, "6-11-1960"),
  new Book ("Brave New World", "Aldous Huxley", 743, "2-20-1932"),
  new Book ("On The Road", "Jack Kerouac", 542, "1-17-1957"),
  new Book ("Lord Of The Flies", "William Golding", 622, "9-17-1954")
];

//DOM function for new library scope to window
document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
  window.gbookOne = new Book ("IT","Stephen King", 800, "12-14-1986");
  window.gbookTwo = new Book ("Catcher in the Rye","JD Salinger", 350, "7-16-1961");
  window.gbookThree = new Book ("James and the giant Peach","Roald Dahl", 160, "6-23-1961");
  window.gbookFour = new Book ("Kon Tiki","Thor Heyerdahl", 459, "8-22-1948");
  window.gbookFive = new Book ("Franny and Zooey","JD Salinger", 258, "2-08-1961");
  window.gbookSix = new Book ("The Shining","Stephen King", 743, "1-25-1986");
  window.gbookSeven = new Book ("The Book Of Joe","Jonathon Tropper", 743, "3-30-2004");
  window.gbookEight = new Book ("The Sun And Her Flowers","Rupi Kaur", 297, "3-27-2016");
  window.gbookNine = new Book ("The Alchemist","Paulo Coelho", 247, "3-30-1981");


});
