var ShowBooksUI = function(){
  Library.call(this);
  this.$container = $('#randAuthor');
};

ShowBooksUI.prototype = Object.create(Library.prototype);


ShowBooksUI.prototype.init = function() {
  this._bindEvents();
  //this._bindCustomListeners();
};

ShowBooksUI.prototype._bindEvents = function () {
  //add native events here
  $('#showBooks-btn').on('click', $.proxy(this._handleShowAuthors, this));
  //$('#rand-btn').on('click', $.proxy(this._handleModalOpen, this));
  //console.log("hello");
};

ShowBooksUI.prototype._handleShowAuthors = function () {

    // var ranAuthors = this.getRandomAuthorByName();//arr of random authors
    // //console.log(ranAuthors);
      this.$container.modal('show');
      this.$container.find('.modal-body').html(ranAuthors);

    return;

};


$(function(){
  window.gShowBooksUI = new ShowBooksUI();
  window.gShowBooksUI.init();
  window._bookshelf;
});
