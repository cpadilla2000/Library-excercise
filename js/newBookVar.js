var Book = function (Title, Author, numberOfPages, publishDate) {
  this.title = Title;
  this.author = Author;
  this.numberOfPages = numberOfPages;
  this.publishDate = new Date(publishDate);
};
