var ShowBooksUI = function(){
  Library.call(this);
  this.$container = $('#showBooks');
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






  this.$container.modal('show');
  this.$container.find('.modal-body').html();

    return;

};


$(function(){
  window.gShowBooksUI = new ShowBooksUI();
  window.gShowBooksUI.init();
  window._bookshelf;
});
