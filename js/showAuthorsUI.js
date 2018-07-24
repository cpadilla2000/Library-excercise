var ShowAuthorsUI = function(container){
  this.$container = container;
  Library.call(this);
};

ShowAuthorsUI.prototype = Object.create(Library.prototype);

ShowAuthorsUI.prototype.init = function () {
  //window._bookshelf = this.retrieveBooks();
  //console.log(window._bookshelf);
  //this.retrieveBooks();
  this._bindEvents();
  return; //stops function
};

ShowAuthorsUI.prototype._bindEvents = function () {
  $('#showAuthors').on('click', $.proxy(this._handleShowAuthors, this));

  //console.log('_bindEvents');
  return false;
  //bind event to add books to queue
  //bind event to add queued books to through library bookshelf
};

ShowAuthorsUI.prototype._handleShowAuthors = function () {
  var authors = this.getAuthors();//arr of authors
  var myUl = document.createElement("ul");// create unordered list

  for (var i = 0; i < authors.length; i++) {
    var li = document.createElement("li");
    $(li).text(authors[i]);
    myUl.append(li)
    //console.log(myUl);
  }

  if(authors.length > 0){
    this.$container.modal('show');
    this.$container.find('.modal-body').html(myUl);
  } else {
    alert('Nothing in library!');
  }

  return false;
};

// ShowAuthorsUI.prototype._createUlOfAuthors = function (authors) {
//    console.log('s is the best');
//   var ul = document.createElement("ul");
//   for (var i = 0; i < authors.length; i++) {
//     var li = document.createElement("li");
//     $(li).text(authors[i]);
//     ul.append(li)
//     //console.log('whaaddafuck');
//   }
//   console.log(ul);
//   return ul;
//
// };

$(function(){
  window.gShowAuthUI = new ShowAuthorsUI($('#showAuthor'));
  window.gShowAuthUI.init();
  //console.log('dog');
});
