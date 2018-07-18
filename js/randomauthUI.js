var RandomAuthUI = function(){
  Library.call(this);
  this.$container = $('#randAuthor');
};

RandomAuthUI.prototype = Object.create(Library.prototype);


RandomAuthUI.prototype.init = function() {
  this.retrieveBooks();
  this._bindEvents();
  //this._bindCustomListeners();
};

RandomAuthUI.prototype._bindEvents = function () {
  //add native events here
  $('#rand-btn').on('click', $.proxy(this._handleRanAuthors, this));
  //$('#rand-btn').on('click', $.proxy(this._handleModalOpen, this));
  //console.log("hello");
};

RandomAuthUI.prototype._handleRanAuthors = function () {

    var ranAuthors = this.getRandomAuthorByName();//arr of random authors
    //console.log(ranAuthors);
      this.$container.modal('show');
      this.$container.find('.modal-body').html(ranAuthors);

    return;

};


$(function(){
  window.gRandomAuthUI = new RandomAuthUI();
  window.gRandomAuthUI.init();
  window._bookshelf;
});
