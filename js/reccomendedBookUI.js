var recommendedBookUI = function(){
  Library.call(this);
  this.$container = $('#recomBook');
};

ReccomendedBookUI.prototype = Object.create(Library.prototype);


ReccomendedBookUI.prototype.init = function() {
  this._bindEvents();
  //this._bindCustomListeners();
};

ReccomendedBookUI.prototype._bindEvents = function () {
  //add native events here
  $('#recommend-btn').on('click', $.proxy(this._handleRanAuthors, this));
  //$('#rand-btn').on('click', $.proxy(this._handleModalOpen, this));
  console.log("hello");
};

ReccomendedBookUI.prototype._handleRanAuthors = function () {

    var ranAuthors = this.getRandomAuthorByName();//arr of random authors
    //console.log(ranAuthors);
      this.$container.modal('show');
      this.$container.find('.modal-body').html(ranAuthors);

    return;

};


$(function(){
  window.gReccomendedBookUI = new ReccomendedBookUI();
  window.gReccomendedBookUI.init();
  window._bookshelf;
});
