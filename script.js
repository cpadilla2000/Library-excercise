var Library = function(){
  this._bookshelf = new Array();
};

Library.prototype.addBook = function (book) {
  if(this._bookshelf.length) {
    for(var i = 0; i < this._bookshelf.length; i++) {
      if(this._bookshelf[i].title.indexOf(book.title) > -1){
        return false;
      }
    }
  }
  this._bookshelf.push(book);
        return true;
};
//Purpose: Add a book object to your books array.
//Return:boolean true if it is not already added, false if it is already added.

Library.prototype.removeBookByTitle = function (title) {

//Purpose: Remove book from from the books array by its title.
//Return:boolean true if the book(s) were removed, false if no books match
  for(var i = 0; i < this._bookshelf.length; i++) {
    if(this._bookshelf[i].title.indexOf(title) > -1) {// remove book from this array point
      this._bookshelf.splice(i, 1);
      return true;// match this to the title coming in. if it matches return true.
    }
  }

  return false;
};

Library.prototype.removeBookByAuthor = function (author) {

//Purpose: Remove a specific book from your books array by the author name.
//Return: boolean true if the book(s) were removed, false if no books match
  for(var i = 0; i < this._bookshelf.length; i++) {
    if(this._bookshelf[i].author.indexOf(author) > -1) {
      this._bookshelf.splice(i, 1)
      return true;
    }
  }
      return false;
};

Library.prototype.getRandomBook = function () {

    var rand = this._bookshelf[Math.floor(Math.random() * this._bookshelf.length)];
    return rand;

  };


//Purpose: Return a random book object from your books array
//Return: book object if you find a book, null if there are no books

Library.prototype.getBookByTitle = function (title) {
  //iterate through bookshelf and if titles match return that book otherwise return false
  for (var i = 0; i < this._bookshelf.length; i++) {
    if(this._bookshelf[i].title === title) {
    return this._bookshelf[i];
    }
  }

  return false;
};

// //Purpose: Return all books that completely or partially matches the string title passed into the function
// //Return: array of book objects if you find books with matching titles, empty array if no books are found
//
Library.prototype.getBooksByAuthor = function (authorName) {
  var tempLib = new Array();
    for (var i = 0; i < this._bookshelf.length; i++) {
      if (this._bookshelf[i].author === authorName) {
       tempLib.push(this._bookshelf[i].author);
      }
    }
  //loop through bookshelf and if author in param matches current book author in for iteration then add book
  //book to tempLib and return templib
//
  return tempLib;
};

//Purpose: Finds all books where the author’s name partially or completely match-es the authorName argument passed to the function.
//Return:array of books if you find books with match authors, empty array if no books match

Library.prototype.addBooks = function (books) {
  //books is an Array
  //iterate through books array
  //use this.addBook to add each book in books Array
  var booksAdded = 0;
  for (var i = 0; i < books.length; i++) {
    if(this.addbook(books[i])){
      return booksAdded++;
    }
  }
  return booksAdded;
};




//Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
//Return: number number of books successfully added, 0 if no books were added



Library.prototype.getAuthors = function () {
  var tempAuths = new Array();

  for (var i = 0; i < this._bookshelf.length; i++) {//bookshelf itteration
    var doesAuthExistInTemp = false;

    for (var j = 0; j < tempAuths.length; j++) { //tempArray itteration
      //tempAuths[j]
      if (this._bookshelf[i].author === tempAuths[j]){
        doesAuthExistInTemp = true;
      }
    }

    if(!doesAuthExistInTemp){
     tempAuths.push(this._bookshelf[i].author);
    }
  }

  return tempAuths;
};
//Purpose: Find the distinct authors’ names from all books in your library
//Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist


Library.prototype.getRandomAuthorByName = function () {

  if (this._bookshelf.length === 0) {
    return null;
  };
  return this.getRandomBook().author;

};

//Purpose: Retrieves a random author name from your books collection
//Return: string author name, null if no books exist


function booksInLibrary () {
   gLibrary.addBook(gbookOne)
   gLibrary.addBook(gbookTwo)
   gLibrary.addBook(gbookThree)
   gLibrary.addBook(gbookFour)
   gLibrary.addBook(gbookFive)
   gLibrary.addBook(gbookSix)
   gLibrary.addBook(gbookSeven)
   return gLibrary;
 }

// var newBooks = [
//   new Book ("1984", "George Orwell", 456, "6-08-1949");
//   new Book ("To Kill A Mockingbird", "Harper Lee", 333, "6-11-1960");
//   new Book ("Brave New World", "Aldous Huxley", 743, "2-20-1932");
//   new Book ("On The Road", "Jack Kerouac", 542, "1-17-1957");
//   new Book ("Lord Of The Flies", "William Golding", 622, "9-17-1954");
// ]


//create book object
var Book = function (Title, Author, numberOfPages, publishDate) {
  this.title = Title;
  this.author = Author;
  this.numberOfPages = numberOfPages;
  this.publishDate = new Date(publishDate);
};



document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
  window.gbookOne = new Book ("IT","Stephen King", 800, "12-14-1986");
  window.gbookTwo = new Book ("Catcher in the Rye","JD Salinger", 350, "7-16-1961");
  window.gbookThree = new Book ("James and the giant Peach","Roald Dahl", 160, "6-23-1961");
  window.gbookFour = new Book ("Kon Tiki","Thor Heyerdahl", 459, "8-22-1948");
  window.gbookFive = new Book ("Franny and Zooey","JD Salinger", 258, "2-08-1961");
  window.gbookSix = new Book ("The Shining","Stephen King", 743, "1-25-1986");
  window.gbookSeven = new Book ("The Book Of Joe","Jonathon Tropper", 743, "3-30-2004");


});
