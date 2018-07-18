var RecommendedBookUI = function(){
  Library.call(this);
  this.$container = $('#recomBook');
};

RecommendedBookUI.prototype = Object.create(Library.prototype);


RecommendedBookUI.prototype.init = function() {
  this.retrieveBooks();
  this._bindEvents();
  //this._bindCustomListeners();
};

RecommendedBookUI.prototype._bindEvents = function () {
  //add native events here
  $('#recommend-btn').on('click', $.proxy(this._handleModalOpen, this));

  //console.log("hello1");
};

RecommendedBookUI.prototype._handleModalOpen = function () {
  //console.log('hello2');

  var recBooks = this.getRandomBook();

  var title = this.title;



  this.$container.find('.modal-body').text(recBooks.title);
  //console.log(recBooks);

   this.$container.modal('show');

   return;
};


// RecommendedBookUI.prototype._showRecBooks = function () {
//   console.log('hello');
//
//   var recBooks = this.getRandomBook();
//
//   var title = recBooks.title;
//
//   console.log(recBooks,title);
//
//
//   this.$container.find('.modal-body').html(recBooks);
//   console.log(recBooks);
//   return;
//
//
// };


$(function(){
  window.gRecommendedBookUI = new RecommendedBookUI();
  window.gRecommendedBookUI.init();
  window._bookshelf;
});
