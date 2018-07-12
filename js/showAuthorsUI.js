var ShowAuthorsUI = function(container){
  this.$container = container;
  Library.call(this);
};

ShowAuthorsUI.prototype = Object.create(Library.prototype);

ShowAuthorsUI.prototype.init = function () {
  //window._bookshelf = this.retrieveBooks();
  //console.log(window._bookshelf);
  this._bindEvents();
  return; //stops function
};

ShowAuthorsUI.prototype._bindEvents = function () {
  $('#showAuthors').on('click', $.proxy(this._handleShowAuthors, this));

  console.log('_bindEvents');
  return false;
  //bind event to add books to queue
  //bind event to add queued books to through library bookshelf
};

ShowAuthorsUI.prototype._handleShowAuthors = function () {
  console.log('hello');
  var authors = this.getAuthors();
  //console.log(authors);
  // console.log(authors.length)
  //$('#showAuthor').modal('show');
  if(authors.length > 0){
    //console.log('brett is cool')
    this.$container.modal('show');
    //console.log('c is the best');
    this.$container.find('.modal-body').html(this._createUlOfAuthors(authors));
  } else {
    alert('Nothing in library!');
  }

  return false;
};

ShowAuthorsUI.prototype._createUlOfAuthors = function (authors) {
   console.log('s is the best');
  var ul = document.createElement("ul");
  for (var i = 0; i < authors.length; i++) {
    var li = document.createElement("li");
    $(li).text(authors[i]);
    ul.append(li)
    //console.log('whaaddafuck');
  }
  console.log(ul);
  return ul;
  
};

$(function(){
  window.gShowAuthUI = new ShowAuthorsUI($('#showAuthor'));
  window.gShowAuthUI.init();
  //console.log('dog');
  window._bookshelf;

});
