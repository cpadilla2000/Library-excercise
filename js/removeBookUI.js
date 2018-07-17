var RemoveBookUI = function(){
  Library.call(this);
  this.$container = $('#removeModal');
};

RemoveBookUI.prototype = Object.create(Library.prototype);


RemoveBookUI.prototype.init = function() {
  this._bindEvents();
  //this._bindCustomListeners();
};

RemoveBookUI.prototype._bindEvents = function () {
  //add native events here
  $('#remove-modal-btn').on('click', $.proxy(this._handleRemoveBook, this));
  //$('#rand-btn').on('click', $.proxy(this._handleModalOpen, this));
  //console.log("hello");
};

RemoveBookUI.prototype._handleRemoveBook = function () {






  this.$container.modal('show');
  this.$container.find('.modal-body').html();

    return;

};


$(function(){
  window.gRemoveBookUI = new RemoveBookUI();
  window.gRemoveBookUI.init();
  window._bookshelf;
});
