var RemoveBookUI = function(){
  Library.call(this);
  this.$container = $('#removeModal');
};

RemoveBookUI.prototype = Object.create(Library.prototype);


RemoveBookUI.prototype.init = function() {
  this.retrieveBooks();
  this._bindEvents();
  //this._bindCustomListeners();
};

RemoveBookUI.prototype._bindEvents = function () {
  //add native events here
  $('#remove-modal-btn').on('click', $.proxy(this._handleModalOpen, this));
  $('#remove-books-btn').on('click', $.proxy(this._handleRemoveBookByAuthor, this));
  $('#remove-books-btn').on('click', $.proxy(this._handleRemoveBookTitle, this));

  return false;
  //console.log("hello");
};

RemoveBookUI.prototype._handleModalOpen = function () {
    this.$container.modal('show');

    return;
};

RemoveBookUI.prototype._handleRemoveBookTitle = function () {


  var titleI = this.$container.find("#title-Input").val();

  var removeBT = this.removeBookByTitle(titleI);

  this.handleEventTrigger('objUpdate', titleI,)

  return;

};

RemoveBookUI.prototype._handleRemoveBookByAuthor = function () {


  var removeBA = this.removeBookByAuthor(authorI);

  var authorI = this.$container.find("#author-Input").val();

  this.handleEventTrigger('objUpdate', authorI)

    return;

};

// RemoveBookUI.prototype._handleModalOpen = function () {
//     this.$container.modal('show');
//     this.$container.find('.modal-body').html(_handleRemoveBook());
//
//     return;
// };


$(function(){
  window.gRemoveBookUI = new RemoveBookUI();
  window.gRemoveBookUI.init();
});
