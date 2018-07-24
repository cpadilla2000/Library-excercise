var Library = function(key) {
  this._key = key;
};

Library.prototype.addBook = function (book) {
  //Purpose: Add a book object to your books array.
  //Return:boolean true if it is not already added, false if it is already added.

  if(window._bookshelf.length) {
    for(var i = 0; i < window._bookshelf.length; i++) {//itteration through bookshelf
      if(window._bookshelf[i].title.indexOf(book.title) > -1){ //if statement for index of title greater than negative 1
        return false;
      }
    }
  }
  window._bookshelf.push(book);//then push books
  this.handleEventTrigger('objUpdate', {detail: Library})
        this.saveBooks();
        return true;
};

Library.prototype.checkForDup = function (book) {
  //console.log('checkfordup');
  for(var i = 0; i < window._bookshelf.length; i++) {//itteration through bookshelf
    if(window._bookshelf[i].title.indexOf(book.title) > -1){ //if statement for index of title greater than negative 1
      return false;
    }

  }
  return true;
};

Library.prototype.removeBookByTitle = function (title) {
//Purpose: Remove book from from the books array by its title.
//Return:boolean true if the book(s) were removed, false if no books match
var originalLength = window._bookshelf.length;
  for(var i = 0; i < window._bookshelf.length; i++) {//itteration through bookshelf
    if(window._bookshelf[i].title.indexOf(title) > -1) {// remove book from this array point
      window._bookshelf.splice(i, 1)
      this.saveBooks();
      //this.handleEventTrigger('objUpdate', { detail: titleI })
      return true;// match this to the title coming in. if it matches return true.
    }
  }
  if(originalLength != window._bookshelf.length){
  }
  return false;
};

Library.prototype.removeBookByAuthor = function (author) {
//Purpose: Remove a specific book from your books array by the author name.
//Return: boolean true if the book(s) were removed, false if no books match
var count = 0
  for(var i = 0; i < window._bookshelf.length; i++) {//itteration through bookshelf
    if(window._bookshelf[i].author.trim().indexOf(author) > -1 === window._bookshelf[i].author.toLowerCase()) {//if statement for finding book by author
      window._bookshelf.splice(i, 1);//splice book from array to remove book
      i--;
      count++;
    }
  }

  if (count > 0) {
    this.saveBooks();
    this.handleEventTrigger('objUpdate', { detail: authorI } )
    return true;
  }

      // this.saveBooks();
      // this.handleEventTrigger('objUpdate', authorI)

      return false;
};

Library.prototype.getRandomBook = function () {
//Purpose: Return a random book object from your books array
//Return: book object if you find a book, null if there are no books

    var rand = window._bookshelf[Math.floor(Math.random() * window._bookshelf.length)]; {// variable for math random to pick random book from books array

      return rand;// returns book object

    }
  return null;//return null if no books
};

Library.prototype.getBookByTitle = function (title) {
  //Purpose: Return all books that completely or partially matches the string title passed into the function
  //Return: array of book objects if you find books with matching titles, empty array if no books are found
  //iterate through bookshelf and if titles match return that book otherwise return false

  var searchT = [];
  for (var i = 0; i < window._bookshelf.length; i++) {//loop through bookshelf and if author in param matches current book author in for iteration then add
    //console.log(window._bookshelf[i].author.toLowerCase().search(authorName.toLowerCase().trim()));
    if (window._bookshelf[i].title.toLowerCase().search(title.toLowerCase().trim()) >=0) {
    //console.log(window._bookshelf[i]);
     tempLib.push(window._bookshelf[i]);//book to tempLib and return templib
    }
  }
  //console.log(searchT,'titles');
  return searchT;

};

Library.prototype.getBooksByAuthor = function (authorName) {
  //Purpose: Finds all books where the author’s name partially or completely match-es the authorName argument passed to the function.
  //Return:array of books if you find books with match authors, empty array if no books match
  //console.log(authorName);
  var tempLib = [];
    for (var i = 0; i < window._bookshelf.length; i++) {//loop through bookshelf and if author in param matches current book author in for iteration then add
      //console.log(window._bookshelf[i].author.toLowerCase().search(authorName.toLowerCase().trim()));
      if (window._bookshelf[i].author.toLowerCase().search(authorName.toLowerCase().trim()) >=0) {
      //console.log(window._bookshelf[i]);
       tempLib.push(window._bookshelf[i]);//book to tempLib and return templib
      }
    }
    //console.log(tempLib,"authors");
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
  this.saveBooks();
  return booksAdded;
};

Library.prototype.getAuthors = function () {
  //Purpose: Find the distinct authors’ names from all books in your library
  //Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist

  var tempAuths = new Array();//New array called TempAuths

  for (var i = 0; i < window._bookshelf.length; i++) {//bookshelf itteration
    var doesAuthExistInTemp = false;

    for (var j = 0; j < tempAuths.length; j++) { //tempArray itteration

      if (window._bookshelf[i].author === tempAuths[j]) {//comparison if statement between both book arrays
        doesAuthExistInTemp = true;
      }
    }

    if(!doesAuthExistInTemp) {//logical not operator for variable doesAuthExistInTemp
     tempAuths.push(window._bookshelf[i].author);// push author to bookshelf
    }
  }

  return tempAuths;
};

Library.prototype.getTitles = function () {

  var tempTitles = new Array();//New array called TempAuths

  for (var i = 0; i < window._bookshelf.length; i++) {//bookshelf itteration
    var doesTitleExistInTemp = false;

    for (var j = 0; j < tempTitles.length; j++) { //tempArray itteration

      if (window._bookshelf[i].title === tempTitles[j]) {//comparison if statement between both book arrays
        doesTitleExistInTemp = true;
      }
    }

    if(!doesTitleExistInTemp) {//logical not operator for variable doesAuthExistInTemp
     tempTitles.push(window._bookshelf[i].title);// push author to bookshelf
    }
  }

  return tempTitles;


};

Library.prototype.getRandomAuthorByName = function () {
  //Purpose: Retrieves a random author name from your books collection
  //Return: string author name, null if no books exist

  if (window._bookshelf.length === 0) {//if statement for bookshelff
    return null;
  };
  return this.getRandomBook().author;//use get random book function for authors

};

Library.prototype.searchLibrary = function (tanda)  {
  //tanda = title and author
  //console.log(tanda);
  var searchN = [];
  if(tanda){
  var search = this.getBookByTitle(tanda)
  var searchTwo = this.getBooksByAuthor(tanda)
   searchN = search.concat(searchTwo)

   //console.log(searchN,'finalSearch');

  if(search.length){
  searchN = search.filter(function(value, index, self){
    return self.indexOf(value) === index

  })
}
  //this.handleEventTrigger('objUpdate', {searchR: searchResult})
  return searchN;
}
return false;

};

Library.prototype.handleEventTrigger = function (sEvent, oData) {

  var oData = oData || {}
  if(sEvent) {
  var event = new CustomEvent(sEvent, {'detail': oData} );
  document.dispatchEvent(event);

  }

};



//*******************Local Storage**********************
//Stores data as strings - need to parse to convert back to objects when retrieve
//Purpose: Use localstorage and JSON.stringify to save the state of your library
// Library.prototype.saveBooks = function () {
//   //console.log(window._bookshelf);
//   var conLib = JSON.stringify(window._bookshelf);
//   localStorage.setItem(this._key, conLib);
// }
//
// Library.prototype.retrieveBooks = function () {
// //loop through JSON array and get keys and values
// //************** Not Working in Firefox*******************************
// //not instantiating books as book objects in foreach loop or in for loop - works in Chrome
//   var libraryBooks = [];
//   var books = JSON.parse(localStorage.getItem(this._key));
//   for (var i = 0; i < books.length; i++) {
//     window._bookshelf[i] = (new Book(books[i]));
//     // console.log(libraryBooks);
//   }
//   return;
// };

Library.prototype.getBooksFromDB = function () {

  $.ajax({
    url:window.libraryURL,
    dataType: 'json',
    method: 'GET',
    success: (data) => {
      window._bookshelf = data;
    }
  })
};


var Book = function (oArgs) {

  this.title = oArgs.title;
  this.author = oArgs.author;
  this.numberOfPages = oArgs.numberOfPages;
  this.publishDate = new Date(oArgs.publishDate);
  this.coverImage = oArgs.coverImage || "image-goes-here";
  // this.Edit = oArgs.edit
  // this.RemoveBook =oArgs.removeBook

};



//create book object
// var Book = function (Title, Author, numberOfPages, publishDate, coverImage) {
//   this.title = Title;
//   this.author = Author;
//   this.numberOfPages = numberOfPages;
//   this.publishDate = new Date(publishDate);
//   this.coverImage = coverImage || "image-goes-here";
// };


// var newBook = [
//   new Book ("The Alchemist","Paulo Coelho", 247, "3-30-1981")
// ];


var newBooks = [
  new Book ("1984", "George Orwell", 456, "6-08-1949","image-goes-here",),
  new Book ("To Kill A Mockingbird", "Harper Lee", 333, "6-11-1960", "image-goes-here"),
  new Book ("Brave New World", "Aldous Huxley", 743, "2-20-1932", "image-goes-here"),
  new Book ("On The Road", "Jack Kerouac", 542, "1-17-1957", "image-goes-here"),
  new Book ("Lord Of The Flies", "William Golding", 622, "9-17-1954", "image-goes-here"),
  new Book ("IT","Stephen King", 800, "12-14-1986", "image-goes-here"),
  new Book ("Catcher in the Rye","JD Salinger", 350, "7-16-1961", "image-goes-here"),
  new Book ("James and the giant Peach","Roald Dahl", 160, "6-23-1961", "image-goes-here"),
  new Book ("Kon Tiki","Thor Heyerdahl", 459, "8-22-1948", "image-goes-here"),
  new Book ("Franny and Zooey","JD Salinger", 258, "2-08-1961", "image-goes-here"),
  new Book ("The Shining","Stephen King", 743, "1-25-1986", "image-goes-here"),
  new Book ("The Book Of Joe","Jonathon Tropper", 743, "3-30-2004", "image-goes-here"),
  new Book ("The Sun And Her Flowers","Rupi Kaur", 297, "3-27-2016", "image-goes-here"),
  new Book ("The Alchemist","Paulo Coelho", 247, "3-30-1981", "image-goes-here")
];

//DOM function for new library scope to window
// document.addEventListener("DOMContentLoaded", function() {
//   window.gLibrary = new Library();
//   //window.gLibrary._bookshelf = gLibrary.retrieveBooks();
//   gLibrary.addBooks(newBooks);
// });
