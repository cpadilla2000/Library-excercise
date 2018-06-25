var Library = function(){
  this._bookshelf = new Array();
};

Library.prototype.addBook = function (book){};

//Purpose: Add a book object to your books array.
//Return:boolean true if it is not already added, false if it is already added.

Library.prototype.removeBookTitle = function (title) {};

//Purpose: Remove book from from the books array by its title.
//Return:boolean true if the book(s) were removed, false if no books match

Library.prototype.removeBookTitle = function (title) {};

//Purpose: Remove a specific book from your books array by the author name.
//Return: booleantrue if the book(s) were removed, false if no books match

Library.prototype.removeBookByAuthor = function (title) {};

//Purpose: Remove a specific book from your books array by the author name.
//Return: booleantrue if the book(s) were removed, false if no books match

Library.prototype.getRandomBook = function (title) {};

//Purpose: Return a random book object from your books array
//Return: book object if you find a book, null if there are no books

Library.prototype.getBookByTitle = function (title) {};

//Purpose: Return all books that completely or partially matches the string title passed into the function
//Return: array of book objects if you find books with matching titles, empty array if no books are found

Library.prototype.getBooksByAuthor = function (title) {};

//Purpose: Finds all books where the author’s name partially or completely match-es the authorName argument passed to the function.
//Return:array of books if you find books with match authors, empty array if no books match

Library.prototype.getAuthors = function (title) {};

//Purpose: Find the distinct authors’ names from all books in your library
//Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist

Library.prototype.getRandomAuthorByName = function (title) {};

//Purpose: Retrieves a random author name from your books collection
//Return: string author name, null if no books exist


var book = function (Title, Author, numberOfPages, publishDate) {
  this.title = Title;
  this.author = Title;
  this.numberOfPages = numberOfPages;
  this.publishDate = new date(publishDate);
}



//create book object

document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();//instance one
  var bookOne = new Book
  window.bookOne = new Book("IT","Stepehen King", 800, new date ("12","14","1986")
});
